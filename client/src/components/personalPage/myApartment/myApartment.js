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
import { SpinningCircles } from "react-loading-icons";
import axios from "axios";

function MyApartments({ id, setValue }) {
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.post("/api/myApartments/" + id).then((res) => {
      setMyApartments(res.data);
      setIsLoading(false);
    });
  }, [status]);

  return (
    <div className="myApartment">
      {isLoading ? (
        <div className="loading">
          <SpinningCircles
            height="4em"
            width="4em"
            fill="rgb(28, 2, 99)"
            stroke="rgb(28, 2, 99)"
            strokeOpacity={1}
            fillOpacity={1}
            speed={1}
          />
        </div>
      ) : myApartments.length > 0 ? (
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
                    <div className="nameApartment">
                      <h1>{list.nameApartment}, </h1>
                      <h2> {list.city}.</h2>
                    </div>
                    <div
                      className="show"
                      style={{ color: list.show === true ? "green" : "red" }}
                    >
                      {list.show === true ? "מודעה פעילה" : "מודעה לא פעילה"}
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
                    <div className="div_btn">
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
                      </button>{" "}
                    </div>

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
                    <div className="div_btn">
                      <RmoveApartment
                        id={list._id}
                        setStatus={setStatus}
                        status={status}
                        setModalHold={setModalHold}
                        modalRemove={modalRemove}
                        setModalRemove={setModalRemove}
                      />{" "}
                    </div>
                    <div className="div_btn">
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
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      ) : (
        <div className="loading">
          אין לך עדיין מודעות זה הזמן להוסיף את דירתך{" "}
          <span
            className="underline"
            onClick={() => {
              setValue(3);
            }}
          >
            לחץ כאן להוספת דירה
          </span>
        </div>
      )}
    </div>
  );
}

export default MyApartments;
