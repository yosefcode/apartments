import "./myApartment.css";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddApartment from "../addApartment/addApartment";
import Calendar from "../calendar/calendar";
import RmoveApartment from "./removeApartment/removeApartment";
import HoldApartment from "./holdApartment/holdApartment";
import axios from "axios";

function MyApartments({ id }) {
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

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [status, setStatus] = useState(true);
  const [myApartments, setMyApartments] = useState([]);

  useEffect(() => {
    axios.post("/api/myApartments/" + id).then((res) => {
      setMyApartments(res.data);
    });
  }, [status]);

  return (
    <div className="myApartment">
      {myApartments.length > 0 ? (
        myApartments.map((list) => (
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
                  <div className="boxheader">
                    <div>
                      <h2>{list.nameApartment},</h2>
                      <h3>{list.city}.</h3>
                    </div>
                    <div>
                      <h3>
                        {list.show === true ? "מודעה פעילה" : "מודעה לא פעילה"}
                      </h3>
                    </div>
                  </div>
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
                  {/* <Calendar /> */}
                  <div className="btnsbottom">
                    <button className="btn">ערוך מודעה</button>
                    <RmoveApartment
                      id={list._id}
                      setStatus={setStatus}
                      status={status}
                    />
                    <HoldApartment
                      id={list._id}
                      show={list.show}
                      setStatus={setStatus}
                      status={status}
                    />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      ) : (
        <div>
          {" "}
          אין לך עדיין דירות זה הזמן להוסיף את דירתך <AddApartment />
        </div>
      )}
    </div>
  );
}

export default MyApartments;
