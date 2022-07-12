import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";
import RoomIcon from "@mui/icons-material/Room";

const Location = ({ apartmentShow }) => {
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);

  const address = `${apartmentShow.city}, ${apartmentShow.street}`;

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
    Geocode.fromAddress(`${address}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [address]);

  const AnyReactComponent = ({ icon, text }) => <div>{icon}</div>;

  return (
    <GoogleMapReact
      style={{ height: "400px" }}
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
              left: "0px",
              color: "red",
            }}
          />
        }
      />
    </GoogleMapReact>
  );
};

export default Location;
