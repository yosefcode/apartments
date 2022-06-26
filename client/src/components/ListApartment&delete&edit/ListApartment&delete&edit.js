import "./ListApartment&delete&edit.css";
import Accordion from "../Accordion";
import React, { useState, useContext } from "react";
import PostToServerLoading from "../getData";
import RmoveApartment from "./removeApartment";
import HoldApartment from "./holdApartment";
import InfoApartment from "./infoApartment";
import EditApartment from "./editApartment";

const ItemApartment = ({ url }) => {
  const [apartments, setApartments] = useState([]);
  const [render, setRender] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [itemForEdit, setItemForEdit] = useState({});

  // console.log(apartments);

  return !isOpenModal ? (
    <div className="myApartment">
      <PostToServerLoading
        render={render}
        url={url}
        data={setApartments}
        content={apartments
          .sort((a, b) => (b.show > a.show ? -1 : 1))
          .map((item, index) => (
            <Accordion
              key={index}
              index={index}
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
                  <InfoApartment item={item} />

                  <div className="btnsbottom">
                    <div className="div_btn">
                      <button
                        className="btn"
                        onClick={() => {
                          setItemForEdit(item);
                          setIsOpenModal(true);
                        }}
                      >
                        ערוך מודעה
                      </button>
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
  ) : (
    <EditApartment itemForEdit={itemForEdit} setIsOpenModal={setIsOpenModal} />
  );
};
export default ItemApartment;
