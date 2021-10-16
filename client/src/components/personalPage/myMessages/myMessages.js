import "./myMessages.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function MyMessages() {
  let [list, setList] = useState([]);

  useEffect(() => {
    axios.get("/api/messages/").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div className="myMessages">
      <div key={list._id} className="divTable">
        <table>
          <tr>
            <th style={{ width: "15%" }}>{"זמן הפניה"}</th>
            <th style={{ width: "15%" }}>{"שם פונה"}</th>
            <th style={{ width: "15%" }}>{"פרטי חזרה לפונה"}</th>
            <th style={{ width: "55%" }}>{"תוכן ההודעה"}</th>
          </tr>
          {list.map((list) => (
            <tr key={list._id}>
              <td>{new Date(list.date).toLocaleString()}</td>
              <td>{list.nameUser}</td>
              <td>{list.mailUser}</td>
              <td>{list.message}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyMessages;
