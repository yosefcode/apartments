import "./images.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";

function AddImages({ id, setApartment, apartment, onchange }) {
  const [urlImages, setUrlImages] = useState([]);

  useEffect(() => {
    setApartment({
      ...apartment,
      images: urlImages,
    });
  }, [urlImages]);
  // console.log(apartment);

  const uploadImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "imagesApartments");
    data.append("folder", "imagesApartments/" + id);
    fetch("https://api.cloudinary.com/v1_1/dnlwa7r5c/image/upload/", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrlImages([...urlImages, data.url]);
      })
      .catch((err) => console.log(err));
  };
  // console.log(urlImages);

  return (
    <div>
      <div className="div_btn_add_img">
        {" "}
        <label for="files">
          <div className="btn_add_img">הוסף תמונה +</div>
        </label>
        <input
          type="file"
          id="files"
          onChange={uploadImage}
          style={{ visibility: "hidden" }}
        ></input>
      </div>
      <div className="div_add_img">
        {urlImages.map((img, index) => (
          <div className="img_add" key={index}>
            <CancelIcon
              className="delete_img"
              style={{ fontSize: "3rem" }}
              onClick={() => {
                let filter = urlImages.filter((e) => e !== img);
                setUrlImages(filter);
              }}
            />

            <img src={img} alt="" className="img" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default AddImages;
