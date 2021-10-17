import "./myMessages.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Allmessage from "../../kesher/kesher";

function MyMessages({ id }) {
  let [list, setList] = useState([]);

  useEffect(() => {
    axios.post("/api/messages/" + id).then((res) => {
      setList(res.data);
    });
  }, []);
  console.log(list);

  return (
    <div className="myMessages">
      <div key={list._id} className="divTable">
        <table>
          <tr>
            <th style={{ width: "10%" }}>{"זמן הפניה"}</th>
            <th style={{ width: "15%" }}>{"בעניין"}</th>
            <th style={{ width: "15%" }}>{"שם פונה"}</th>
            <th style={{ width: "15%" }}>{"פרטי חזרה לפונה"}</th>
            <th style={{ width: "45%" }}>{"תוכן ההודעה"}</th>
          </tr>
          {list.map((list) => (
            <tr key={list._id}>
              <td>{new Date(list.date).toLocaleString()}</td>
              <td>{list.nameApartment}</td>
              <td>{list.nameUser}</td>
              <td>{list.mailUser}</td>
              <td>{list.message}</td>
            </tr>
          ))}
        </table>
      </div>
      <Allmessage />
    </div>
  );
}

export default MyMessages;
