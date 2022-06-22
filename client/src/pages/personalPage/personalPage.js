import "./personalPage.css";
import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import MyApartments from "./myApartment/myApartment";
import AddApartment from "./addApartment/addApartment";
import MyMessages from "./myMessages/myMessages";
import MyDetails from "./myDetails/myDetails";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function PersonalPage({ apiUserForFirebade }) {
  const { id } = useParams();

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
    <div className="personalPage">
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="הפרטים שלי" {...a11yProps(0)} />
            <Tab label="הדירות שלי" {...a11yProps(1)} />
            <Tab label="ההודעות שלי" {...a11yProps(2)} />
            <Tab label="הוסף דירה" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MyDetails id={id} apiUserForFirebade={apiUserForFirebade} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyApartments id={id} setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MyMessages id={id} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AddApartment id={id} apiUserForFirebade={apiUserForFirebade} />
        </TabPanel>
      </Box>
    </div>
  );
}

export default PersonalPage;