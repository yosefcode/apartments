import "./location.css";
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
// import marker from "./marker.png";
import Geocode from "react-geocode";
import RoomIcon from "@mui/icons-material/Room";

const Location = ({ apartmentShow }) => {
  // const [pointsmap, setPointsmap] = useState([]);
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);

  const city = apartmentShow.map((name) => name.city + "," + name.street);

  Geocode.setApiKey(process.env.REACT_APP_GEOCODE_APIKEY);

  Geocode.setLanguage("he");

  Geocode.setLocationType("ROOFTOP");

  // Geocode.enableDebug();

  // // Get address from latitude & longitude.
  // Geocode.fromLatLng("31.880377", "35.239097").then(
  //   (response) => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  useEffect(() => {
    Geocode.fromAddress(` ${city}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [city]);

  const AnyReactComponent = ({ icon, text }) => (
    <div>
      <div>{icon}</div>
    </div>
  );

  return (
    <div className="divMaps">
      <div className="header_div_apartmentShow header_div_apartmentShow1">
        מפת האיזור
      </div>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GEOCODE_APIKEY,
          }}
          center={{ lat: lat, lng: lng }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            icon={
              <RoomIcon
                style={{
                  fontSize: "4rem",
                  position: "relative",
                  bottom: "40px",
                  left: "15px",
                  color: "red",
                }}
              />
            }
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Location;
