import "./Accordion.css";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Accordion({ boxheader, box }) {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    margin: "10px",
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
      expandIcon={
        <ExpandMoreIcon sx={{ fontSize: "2rem", marginInlineStart: "-10px" }} />
      }
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

  return (
    <div className="myApartment">
      <div>
        <Accordion expanded={expanded === 1} onChange={handleChange(1)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <div className="boxheader">{boxheader} </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="box">{box}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Accordion;
