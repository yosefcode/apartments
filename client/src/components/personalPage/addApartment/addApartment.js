import "./addApartment.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import DetailsApartment from "./detailsApartment/detailsApartment";
import Contact from "./contact/contact";
import SpecialApartment from "./‏specialApartment/‏specialApartment";

function AddApartment({ id }) {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    margin: "1vw",
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.9vw" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [apartment, setApartment] = useState({});

  const addApartment = () => {
    axios.post("/api/addApartment/", apartment).then((res) => {});
  };

  const onchange = (e) => {
    setApartment({
      ...apartment,
      uidFirebase: id,
      show: true,
      [e.target.name]: e.target.value,
    });
  };

  localStorage.setItem(
    `addApartment`,
    JSON.stringify([
      // ...(JSON.parse(localStorage.getItem(`favorite`)) || []),
      apartment,
    ])
  );

  console.log(apartment);

  return (
    <div className="addApartment">
      <div class="tabs">
        <div class="tab">
          <input type="checkbox" id="chck1" className="inputtt" />
          <label class="tab-label" for="chck1">
            פרטי הדירה{" "}
          </label>
          <div class="tab-content">
            <DetailsApartment
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
            />{" "}
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck2" className="inputtt" />
          <label class="tab-label" for="chck2">
            תיאור{" "}
          </label>
          <div class="tab-content">
            <SpecialApartment
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
            />{" "}
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck3" className="inputtt" />
          <label class="tab-label" for="chck3">
            הוספת תמונות{" "}
          </label>
          <div class="tab-content">
            {/* <DetailsApartment
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
            />{" "} */}
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck4" className="inputtt" />
          <label class="tab-label" for="chck4">
            פרטי איש קשר{" "}
          </label>
          <div class="tab-content">
            <Contact
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
            />{" "}
          </div>
        </div>
      </div>
      <br />
      <button onClick={addApartment}>addApartment</button>
    </div>
  );
}

export default AddApartment;
