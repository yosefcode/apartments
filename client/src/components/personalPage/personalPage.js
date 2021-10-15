import "./personalPage.css";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Info from "./myApartment/myApartment";
import AddApartment from "./addApartment/addApartment";
import MyMessages from "./myMessages/myMessages";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ApartmentShow() {
  const { id } = useParams();

  const [apartmentShow, setApartmentShow] = useState([]);

  useEffect(() => {
    axios.post("/api/person/" + id).then((res) => {
      setApartmentShow(res.data);
      console.log(res.data);
    });
  }, [id]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="apartmentShow">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="uid" {...a11yProps(0)} />
            <Tab label="הדירות שלי" {...a11yProps(1)} />
            <Tab label="ההודעות שלי" {...a11yProps(2)} />
            <Tab label="הוסף דירה" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {id}{" "}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Info apartmentShow={apartmentShow} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MyMessages />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AddApartment />
        </TabPanel>
      </Box>
    </div>
  );
}

export default ApartmentShow;
