import "./ListSearchApartment.css";
import Accordion from "../Accordion";
import React, { useState, useContext } from "react";
import { PostToServerLoading } from "../getData";
import RmoveApartment from "./removeApartment";
import HoldApartment from "./holdApartment";
import EditApartment from "./editApartment";
import SearchApartmentShowComponent from "../SearchApartmentShowComponent/SearchApartmentShowComponent";
import { Button } from "../Input_select_button/Input_select_button";
import Baner from "../baner";
import Modal from "../Modal";
import { AppContext } from "../../variable-Context";
import { margin } from "@mui/system";

const ItemApartment = ({ url }) => {
  let mql = window.matchMedia("(max-width: 600px)");

  const [apartments, setApartments] = useState([]);
  const [render, setRender] = useState(false);
  const [isOpenForEdit, setIsOpenForEdit] = useState(false);
  const [itemForEdit, setItemForEdit] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [contentModal, setContentModal] = useState();
  // console.log(apartments);

  const { isManager } = useContext(AppContext);

  return !isOpenForEdit ? (
    <div className="myApartment">
      {isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          content={contentModal}
        />
      )}

      <PostToServerLoading
        render={render}
        route={url}
        data={setApartments}
        content={
          apartments.length > 0 ? (
            apartments
              .sort((a, b) => (isManager && b.show > a.show ? -1 : 1))
              .map((item, index) => (
                <Accordion
                  key={index}
                  index={index}
                  boxheader={
                    <div className="header_myapartment">
                      <div className="nameApartment">
                        <h1>
                          {item.model === "1"
                            ? "השכרה"
                            : item.model === "2"
                            ? "החלפה"
                            : "השכרה / החלפה"}
                          ,
                        </h1>
                        <h2> {item.area}.</h2>
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
                      <SearchApartmentShowComponent
                        apartmentShow={item}
                        sendMessage={false}
                      />

                      <div className="btnsbottom">
                        <Button
                          title={"ערוך מודעה"}
                          padding={mql.matches ? "0.5rem" : "0.5rem 5.5rem"}
                          borderRadius={"10px"}
                          onClick={() => {
                            setItemForEdit(item);
                            setIsOpenForEdit(true);
                          }}
                        />

                        <RmoveApartment
                          idForApartment={item._id}
                          render={render}
                          setRender={setRender}
                          setIsOpenModal={setIsOpenModal}
                          setContentModal={setContentModal}
                        />

                        <HoldApartment
                          idForApartment={item._id}
                          show={item.show}
                          render={render}
                          setRender={setRender}
                          setIsOpenModal={setIsOpenModal}
                          setContentModal={setContentModal}
                        />
                      </div>
                    </div>
                  }
                />
              ))
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "1.6rem",
                margin: 20,
                fontWeight: "bold",
              }}
            >
              אין לך עדיין מודעות חיפוש
            </div>
          )
        }
      />
    </div>
  ) : (
    <EditApartment
      itemForEdit={itemForEdit}
      setIsOpenForEdit={setIsOpenForEdit}
    />
  );
};
export default ItemApartment;
