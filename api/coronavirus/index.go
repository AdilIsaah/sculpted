package handler

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

type CoronaVirus struct {
	Confirmed Confirmed `json:"confirmed"`
	Deaths    Deaths    `json:"deaths"`
	Recovered Recovered `json:"recovered"`
	Latest    Latest    `json:"latest"`
}
type Locations struct {
	Country     string `json:"country"`
	CountryCode string `json:"country_code"`
	Province    string `json:"province"`
	Latest      int    `json:"latest"`
}
type Confirmed struct {
	Locations []Locations `json:"locations"`
	Latest    int         `json:"latest"`
}
type Deaths struct {
	Locations []Locations `json:"locations"`
	Latest    int         `json:"latest"`
}
type Recovered struct {
	Locations []Locations `json:"locations"`
	Latest    int         `json:"latest"`
}
type Latest struct {
	Confirmed int `json:"confirmed"`
	Deaths    int `json:"deaths"`
	Recovered int `json:"recovered"`
}

type CoronaVirusDetails struct {
	Confirmed   int    `json:"confirmed"`
	Deaths      int    `json:"deaths"`
	Recovered   int    `json:"recovered"`
	Country     string `json:"country"`
	CountryCode string `json:"countryCode"`
	Province    string `json:"province"`
}

type CoronaVirusRecord struct {
	Records []CoronaVirusDetails `json:"records"`
	Total   Latest               `json:"total"`
}

func indexOf(value string, records []CoronaVirusDetails) int {
	for index, record := range records {
		if value == record.Country || value == record.Province {
			return index
		}
	}
	return -1
}

func formatData(coronaVirusCases CoronaVirus) CoronaVirusRecord {
	var coronaVirusRecord CoronaVirusRecord
	var coronaVirusDetails []CoronaVirusDetails
	for i := 0; i < len(coronaVirusCases.Confirmed.Locations); i++ {
		var record CoronaVirusDetails
		record.Country = coronaVirusCases.Confirmed.Locations[i].Country
		record.Province = coronaVirusCases.Confirmed.Locations[i].Province
		record.Confirmed = coronaVirusCases.Confirmed.Locations[i].Latest
		record.CountryCode = coronaVirusCases.Confirmed.Locations[i].CountryCode

		for j := 0; j < len(coronaVirusCases.Deaths.Locations); j++ {
			if coronaVirusCases.Deaths.Locations[j].Country == record.Country && coronaVirusCases.Deaths.Locations[j].Province == record.Province && coronaVirusCases.Deaths.Locations[j].CountryCode == record.CountryCode {
				record.Deaths = coronaVirusCases.Deaths.Locations[j].Latest
				break
			}
		}

		coronaVirusDetails = append(coronaVirusDetails, record)
	}

	var coronaVirusWithProvince []CoronaVirusDetails
	var coronaVirusWithoutProvince []CoronaVirusDetails
	for i := 0; i < len(coronaVirusDetails); i++ {
		if coronaVirusDetails[i].Province == "" {
			coronaVirusWithoutProvince = append(coronaVirusWithoutProvince, coronaVirusDetails[i])
		} else {
			coronaVirusWithProvince = append(coronaVirusWithProvince, coronaVirusDetails[i])
		}
	}

	var tempCoronaVirusArray []CoronaVirusDetails
	for i := 0; i < len(coronaVirusWithProvince); i++ {
		ifCountryExists := indexOf(coronaVirusWithProvince[i].Country, coronaVirusWithoutProvince)

		// More than 0 means the value does exists in coronaVirusWithoutProvince Data and we have to merge it to the withoutProvince array
		// Value we get from ifCountryExists is -1 is not present
		if ifCountryExists >= 0 {
			coronaVirusWithoutProvince = append(coronaVirusWithoutProvince, coronaVirusWithProvince[i])
		} else {
			ifCountryExists := indexOf(coronaVirusWithProvince[i].Country, tempCoronaVirusArray)

			if ifCountryExists >= 0 {
				tempCoronaVirusArray[ifCountryExists].Confirmed += coronaVirusWithProvince[i].Confirmed
				tempCoronaVirusArray[ifCountryExists].Deaths += coronaVirusWithProvince[i].Deaths
				tempCoronaVirusArray[ifCountryExists].Recovered += coronaVirusWithProvince[i].Recovered
			} else {
				var record CoronaVirusDetails
				record.Country = coronaVirusWithProvince[i].Country
				record.Province = ""
				record.Confirmed = coronaVirusWithProvince[i].Confirmed
				record.CountryCode = coronaVirusWithProvince[i].CountryCode
				record.Deaths = coronaVirusWithProvince[i].Deaths
				record.Recovered = coronaVirusWithProvince[i].Recovered

				tempCoronaVirusArray = append(tempCoronaVirusArray, record)
			}
		}
	}

	coronaVirusWithoutProvince = append(coronaVirusWithoutProvince, tempCoronaVirusArray...)

	for i := 0; i < len(coronaVirusCases.Recovered.Locations); i++ {
		value := coronaVirusCases.Recovered.Locations[i]
		countryValue := indexOf(value.Country, coronaVirusWithoutProvince)

		if value.Province != "" {
			countryProvince := indexOf(value.Province, coronaVirusWithoutProvince)
			if countryProvince >= 0 {
				coronaVirusWithoutProvince[countryProvince].Recovered += value.Latest
				continue
			}
		}

		if countryValue >= 0 {
			coronaVirusWithoutProvince[countryValue].Recovered += value.Latest
		}
	}

	coronaVirusRecord.Records = coronaVirusWithoutProvince
	coronaVirusRecord.Total = coronaVirusCases.Latest

	return coronaVirusRecord
}

func Handler(w http.ResponseWriter, r *http.Request) {
	var coronavirus CoronaVirus
	var theHTTPRequest string = "https://coronavirus-tracker-api.herokuapp.com/all"

	response, error := http.Get(theHTTPRequest)
	if error != nil {
		log.Fatal(error)
	}

	body, error := ioutil.ReadAll(response.Body)
	defer response.Body.Close()
	if error != nil {
		log.Fatal(error)
	}

	json.Unmarshal(body, &coronavirus)

	formated := formatData(coronavirus)

	unformatted, error := json.Marshal(formated)
	if error != nil {
		log.Fatal(error)
	}

	w.Write(unformatted)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "https://sculpted*.now.sh")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
}
