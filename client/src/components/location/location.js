import "./location.css";
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import marker from "./marker.png";
import Geocode from "react-geocode";

const Location = ({ apartmentShow }) => {
  // const [pointsmap, setPointsmap] = useState([]);
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);

  Geocode.setApiKey("AIzaSyDruzVgnPzX3hODNpHFohGBhvj-KO-nFQk");

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
    Geocode.fromAddress(` ${apartmentShow[0].city}`).then(
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
  }, [apartmentShow]);

  const AnyReactComponent = ({ icon, text }) => (
    <div>
      <div>{icon}</div>
    </div>
  );

  return (
    <div className="location">
      <h2>Location</h2>

      <div className="maps">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDruzVgnPzX3hODNpHFohGBhvj-KO-nFQk",
          }}
          center={{ lat: lat, lng: lng }}
          defaultZoom={14}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            icon={<img className="imgmarker" src={marker} alt="" />}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Location;
