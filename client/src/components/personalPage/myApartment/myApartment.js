import "./myApartment.css";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Calendar from "../calendar/calendar";
import RmoveApartment from "./removeApartment/removeApartment";
import HoldApartment from "./holdApartment/holdApartment";
import InfoApartment from "./infoApartment/infoApartment";
import EditApartment from "./editApartment/editApartment";
import axios from "axios";

function MyApartments({ id, setValue }) {
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
  const [status, setStatus] = useState(true);
  const [myApartments, setMyApartments] = useState([]);
  const [modalHold, setModalHold] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setModalEdit(false);
    setModalHold(false);
    setModalRemove(false);
  };

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
                      <h3
                        style={{ color: list.show === true ? "green" : "red" }}
                      >
                        {list.show === true ? "מודעה פעילה" : "מודעה לא פעילה"}
                      </h3>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <InfoApartment
                    list={list}
                    modalEdit={modalEdit}
                    setModalEdit={setModalEdit}
                  />
                  <div className="btnsbottom">
                    <button
                      className="btn"
                      onClick={() => {
                        if (modalEdit) {
                          setModalHold(false);
                          setModalRemove(false);
                          setModalEdit(false);
                        } else {
                          setModalHold(false);
                          setModalRemove(false);
                          setModalEdit(true);
                        }
                      }}
                    >
                      {modalEdit ? "בטל עריכה" : "ערוך מודעה"}
                    </button>

                    {/* <EditApartment
                      list={list}
                      id={list._id}
                      setStatus={setStatus}
                      status={status}
                      setModalHold={setModalHold}
                      modalRemove={modalRemove}
                      setModalRemove={setModalRemove}
                      modalEdit={modalEdit}
                      setModalEdit={setModalEdit}
                    /> */}
                    <RmoveApartment
                      id={list._id}
                      setStatus={setStatus}
                      status={status}
                      setModalHold={setModalHold}
                      modalRemove={modalRemove}
                      setModalRemove={setModalRemove}
                    />
                    <HoldApartment
                      id={list._id}
                      show={list.show}
                      setStatus={setStatus}
                      status={status}
                      modalHold={modalHold}
                      setModalHold={setModalHold}
                      setModalRemove={setModalRemove}
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
          אין לך עדיין דירות זה הזמן להוסיף את דירתך{" "}
          <button onClick={() => setValue(3)}>הוסף דירתך</button>
        </div>
      )}
    </div>
  );
}

export default MyApartments;
