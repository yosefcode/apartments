import "./ListApartment&delete&edit.css";
import Accordion from "../Accordion";
import React, { useState, useContext } from "react";
import { PostToServerLoading } from "../getData";
import RmoveApartment from "./removeApartment";
import HoldApartment from "./holdApartment";
import EditApartment from "./editApartment";
import ApartmentShowComponent from "../ApartmentShowComponent/ApartmentShowComponent";
import { Button } from "../Input_select_button/Input_select_button";

const ItemApartment = ({ url }) => {
  const [apartments, setApartments] = useState([]);
  const [render, setRender] = useState(false);
  const [isOpenForEdit, setIsOpenForEdit] = useState(false);
  const [itemForEdit, setItemForEdit] = useState({});

  return !isOpenForEdit ? (
    <div className="myApartment">
      <PostToServerLoading
        render={render}
        route={url}
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
                  <div className="move_website_apartment">
                    <a href={`/${item?._id}`} target="_blank" rel="noreferrer">
                      למעבר לעמוד המודעה באתר
                    </a>
                  </div>

                  <ApartmentShowComponent apartmentShow={item} />

                  <div className="btnsbottom">
                    <Button
                      title={"ערוך מודעה"}
                      padding={"0.5rem 5.5rem"}
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
                    />

                    <HoldApartment
                      idForApartment={item._id}
                      show={item.show}
                      render={render}
                      setRender={setRender}
                    />
                  </div>
                </div>
              }
            />
          ))}
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
