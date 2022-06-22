import "./tabs.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabsComponent(props) {
  const { label0, label1, label2, label3, Tab1, Tab2, Tab3, Tab4 } = props;

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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs_component">
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label={label0} {...a11yProps(0)} />
            <Tab label={label1} {...a11yProps(1)} />
            <Tab label={label2} {...a11yProps(2)} />
            {label3 && <Tab label={label3} {...a11yProps(3)} />}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {Tab1}{" "}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {Tab2}{" "}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {Tab3}{" "}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {Tab4}{" "}
        </TabPanel>
      </Box>
    </div>
  );
}

export default TabsComponent;
