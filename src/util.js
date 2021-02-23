import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => b.cases - a.cases);
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0,0")}` : "no case has founded";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#00ced1",
    multiplier: 700,
  },
  deaths: {
    hex: "#483D8B",
    multiplier: 2000,
  },
};

// DRAW  circle on the map with interactive tooltop
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => {
    console.log(casesTypeColors[casesType].hex);
    return (
      <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        pathOptions={{
          color: casesTypeColors[casesType].hex,
          fillColor: casesTypeColors[casesType].hex,
        }}
        radius={
          Math.sqrt(country[casesType]) *
          0.5 *
          casesTypeColors[casesType].multiplier
        }
      >
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            />
            <div className="info-name">{country.country}</div>
            <div className="info-confirmed">
              Cases: {numeral(country.cases).format("0,0")}
            </div>
            <div className="info-recovered">
              Recovered : {numeral(country.recovered).format("0,0")}
            </div>
            <div className="info-death">
              Death: {numeral(country.deaths).format("0.0")}
            </div>
          </div>
        </Popup>
      </Circle>
    );
  });
