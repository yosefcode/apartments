import "./images.css";
import { Cancel, CameraAlt, Delete } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import { Button } from "../../Input_select_button/Input_select_button";

function AddImages({
  setApartment,
  apartment,
  base64,
  setBase64,
  formik,
  imgForEdit,
  setImgForEdit,
}) {
  const [modal, setModal] = useState(false);
  const [IMG_modal, setIMG_modal] = useState();
  const fileRef = useRef();

  const imgView = (images, state, setState) => {
    return images?.map((img, index) => (
      <div className="img_add" key={index}>
        <Delete
          className="delete_img"
          style={{
            fontSize: "2.5rem",
            color: "red",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "0.5rem",
            cursor: "pointer",
            border: "2px solid red",
          }}
          onClick={() => {
            let filter = state.filter((e) => e !== img);
            setState(filter);
          }}
        />

        <img
          src={img}
          alt=""
          className="img"
          onClick={() => {
            setModal(true);
            setIMG_modal(img);
          }}
        />
      </div>
    ));
  };

  useEffect(() => {
    setApartment({
      ...apartment,
      images: base64,
    });
  }, [base64]);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        600,
        600,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const image = await resizeFile(file);
    setBase64([...base64, image]);
  };

  return (
    <div>
      <div className="div_btn_add_img">
        <Button
          title={
            <CameraAlt
              style={{
                fontSize: "3rem",
              }}
            />
          }
          padding={"0.5rem 1.5rem"}
          borderRadius={"50%"}
          type="button"
          onClick={() => fileRef.current.click()}
        />
        <input type="file" ref={fileRef} onChange={uploadImage} hidden></input>
      </div>

      <div className="div_add_img">
        {imgView(imgForEdit, imgForEdit, setImgForEdit)}
        {imgView(base64, base64, setBase64)}
      </div>
      <div className="div_err_addApartment">{formik.errors.images}</div>

      {modal && (
        <div
          className="modalIMG"
          onClick={() => {
            setModal(false);
          }}
        >
          <div
            className="img_modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Cancel
              className="close_modal"
              style={{
                fontSize: "3rem",
                color: "white",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
              onClick={() => {
                setModal(false);
              }}
            />
            <img src={IMG_modal} alt="" className="img" />
          </div>
        </div>
      )}
    </div>
  );
}
export default AddImages;
