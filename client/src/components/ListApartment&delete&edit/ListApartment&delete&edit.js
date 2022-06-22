import "./ListApartment&delete&edit.css";
import Accordion from "../Accordion/Accordion";
import react, { useState } from "react";
import GetData from "../getData";
import RmoveApartment from "./removeApartment";
import HoldApartment from "./holdApartment";
import InfoApartment from "./infoApartment";

const itemApartment = ({ url }) => {
  const [apartments, setApartments] = react.useState([]);
  const [render, setRender] = react.useState(false);
  const [modalEdit, setModalEdit] = react.useState(false);

  // console.log(apartments);

  return (
    <div className="myApartment">
      <GetData
        render={render}
        url={url}
        data={setApartments}
        content={apartments.map((item) => (
          <Accordion
            boxheader={
              <div className="header_myapartment">
                <div className="nameApartment">
                  <h1>{item.nameApartment}, </h1>
                  <h2> {item.city}.</h2>
                </div>

                <div
                  className="show"
                  style={{
                    color:
                      item.show === "0"
                        ? "blue"
                        : item.show === "1"
                        ? "green"
                        : "red",
                  }}
                >
                  {item.show === "0"
                    ? "ממתין לאישור"
                    : item.show === "1"
                    ? "מודעה פעילה"
                    : "מודעה לא פעילה"}
                </div>
              </div>
            }
            box={
              <div>
                <InfoApartment
                  item={item}
                  modalEdit={modalEdit}
                  setModalEdit={setModalEdit}
                />

                <div className="btnsbottom">
                  <div className="div_btn">
                    <button
                      className="btn"
                      onClick={() => {
                        if (modalEdit) {
                          setModalEdit(false);
                        } else {
                          setModalEdit(true);
                        }
                      }}
                    >
                      {modalEdit ? "בטל עריכה" : "ערוך מודעה"}
                    </button>{" "}
                  </div>

                  {/* <EditApartment
                item={item}
                id={item._id}
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
                      id={item._id}
                      render={render}
                      setRender={setRender}
                    />{" "}
                  </div>

                  <div className="div_btn">
                    <HoldApartment
                      id={item._id}
                      show={item.show}
                      render={render}
                      setRender={setRender}
                    />
                  </div>
                </div>
              </div>
            }
          />
        ))}
      />
    </div>
  );
};
export default itemApartment;
