import React, { useEffect, useState } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldWide");

  // USEEFFECT = runs a piece of code based on a given condition
  useEffect(() => {
    //The code inside here will run once
    //when the component loads and not again
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [countries]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("....", countryCode);
    setCountry(countryCode);
  };
  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          {/*classNaming method: first part is the component, second thing is the element */}
          {/* learn the css grid */}
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldWide">Worldwide</MenuItem>
            {/* loop through all the contries and show a drop down list of the options */}
            {countries.map((country) => (
              <MenuItem key={country.name} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field*/}

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
