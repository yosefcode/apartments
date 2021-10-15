import "./myApartment.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Info({ apartmentShow }) {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
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
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="myApartment">
      <div className="headerInfo headerInfo1">הדירות שלי</div>
      <div className="allInfo">
        <div className="info">
          {apartmentShow.map((list) => (
            <div>
              <Accordion
                expanded={expanded === list._id}
                onChange={handleChange(list._id)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>
                    {" "}
                    <h2>{list.nameApartment}.</h2>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <h3>
                      {list.area}, {list.city}.
                    </h3>
                    <h4>
                      {list.rooms} חדרים, עד {list.beds} מיטות.
                    </h4>
                    <h4>
                      החל מ{list.price} ש"ח ל{list.priceMethod}.
                    </h4>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
