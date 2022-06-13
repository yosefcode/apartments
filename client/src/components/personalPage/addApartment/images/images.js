import "./images.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";

function AddImages({ id, setApartment, apartment, base64, setBase64, formik }) {
  const [modal, setModal] = useState(false);
  const [IMG_modal, setIMG_modal] = useState();

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
        {" "}
        <label for="files">
          <div className="btn_add_img">+</div>
        </label>
        <input
          type="file"
          id="files"
          onChange={uploadImage}
          style={{ visibility: "hidden" }}
        ></input>
      </div>

      <div className="div_add_img">
        {base64.map((img, index) => (
          <div className="img_add" key={index}>
            <CancelIcon
              className="delete_img"
              style={{ fontSize: "3rem" }}
              onClick={() => {
                let filter = base64.filter((e) => e !== img);
                setBase64(filter);
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
        ))}
      </div>
      <div className="div_err_addApartment">{formik.errors.images}</div>

      {modal && (
        <div
          className="modalIMG"
          onClick={() => {
            setModal(false);
          }}
        >
          <CancelIcon
            className="close_modal"
            style={{ fontSize: "3rem" }}
            onClick={() => {
              setModal(false);
            }}
          />

          <div
            className="img_modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img src={IMG_modal} alt="" className="img" />
          </div>
        </div>
      )}
    </div>
  );
}
export default AddImages;
