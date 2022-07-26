import React, { useState, useContext } from "react";
import { Button } from "../../components/Input_select_button/Input_select_button";
import { AppContext } from "../../variable-Context";
import AddApartment from "../../components/Add_&_Edit_Apartment/Add_&_Edit_Apartment";
import SearchApartment from "../../components/SearchApartment/SearchApartment";

const AddPost = ({ url }) => {
  let mql = window.matchMedia("(max-width: 600px)");
  const [post, setPost] = useState(1);

  const { isManager } = useContext(AppContext);

  return (
    <div className="AddPost">
      <div style={{ display: "flex" }}>
        <div style={{ opacity: post === 1 ? 1 : 0.5, marginInline: "20px" }}>
          <Button
            title={"פרסם דירה"}
            padding={mql.matches ? "0.5rem" : "0.5rem 1.5rem"}
            borderRadius={"10px"}
            onClick={() => {
              setPost(1);
            }}
          />
        </div>

        <div style={{ opacity: post === 2 ? 1 : 0.5, marginInline: "20px" }}>
          <Button
            title={"מחפש דירה"}
            padding={mql.matches ? "0.5rem" : "0.5rem 1.5rem"}
            borderRadius={"10px"}
            onClick={() => {
              setPost(2);
            }}
          />
        </div>

        {/* <div style={{ opacity: post === 3 ? 1 : 0.5, marginInline: "20px" }}>
          <Button
            title={"מתחמי אירוח"}
            padding={mql.matches ? "0.5rem" : "0.5rem 1.5rem"}
            borderRadius={"10px"}
            onClick={() => {
              setPost(3);
            }}
          />
        </div> */}
      </div>

      {post === 1 ? (
        <AddApartment />
      ) : post === 2 ? (
        <SearchApartment />
      ) : post === 3 ? (
        <AddApartment />
      ) : null}
    </div>
  );
};
export default AddPost;
