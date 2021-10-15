import "./myMessages.css";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

function Kesher() {
  let [list, setList] = useState([]);

  useEffect(() => {
    axios.get("/api/messages/").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div className="kesher">
      <div key={list._id} className="divTable">
        <table>
          <tr>
            <th style={{ width: "10%" }}>{"זמן הפניה"}</th>
            <th style={{ width: "15%" }}>{"שם פונה"}</th>
            <th style={{ width: "15%" }}>{"שם בעל הצימר"}</th>
            <th style={{ width: "15%" }}>{"מייל פונה"}</th>
            <th style={{ width: "15%" }}>{"מייל בעל הצימר"}</th>
            <th style={{ width: "30%" }}>{"תוכן ההודעה"}</th>
          </tr>
          {list.map((list) => (
            <tr key={list._id}>
              <td>{new Date(list.date).toLocaleString()}</td>
              <td>{list.nameUser}</td>
              <td>{list.nameApartment}</td>
              <td>{list.mailUser}</td>
              <td>{list.mailApartment}</td>
              <td>{list.message}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Kesher;
