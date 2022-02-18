import "./myMessages.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Allmessage from "../../kesher/kesher";
import { SpinningCircles } from "react-loading-icons";

function MyMessages({ id }) {
  let [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState(false);
  const [sorta, setSorta] = useState([]);

  useEffect(() => {
    axios.post("/api/messages/" + id).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }, []);

  const sortDate = () => {
    setSort(!sort);
  };

  return (
    <div className="myMessages">
      {/* <button onClick={sortDate}>sortDate</button> */}

      {isLoading ? (
        <div className="loading">
          <SpinningCircles
            height="4em"
            width="4em"
            fill="rgb(28, 2, 99)"
            stroke="rgb(28, 2, 99)"
            strokeOpacity={1}
            fillOpacity={1}
            speed={1}
          />
        </div>
      ) : list.length > 0 ? (
        <div>
          <div className="divTable myMessage_largeScreen">
            <table>
              <tr>
                <th style={{ width: "10%" }}>{"זמן הפניה"}</th>
                <th style={{ width: "15%" }}>{"בעניין"}</th>
                <th style={{ width: "15%" }}>{"שם פונה"}</th>
                <th style={{ width: "15%" }}>{"פרטי חזרה לפונה"}</th>
                <th style={{ width: "45%" }}>{"תוכן ההודעה"}</th>
              </tr>
              {list
                .sort((a, b) =>
                  sort
                    ? new Date(b.date) > new Date(a.date)
                      ? -1
                      : 1
                    : new Date(a.date) < new Date(b.date)
                    ? 1
                    : -1
                )
                .map((list) => (
                  <tr key={list._id}>
                    <td>{new Date(list.date).toLocaleString()}</td>
                    <td
                      onClick={() => {
                        setSorta(list.message);
                      }}
                    >
                      {list.nameApartment}
                    </td>
                    <td>{list.nameUser}</td>
                    <td>{list.mailUser}</td>
                    <td>{list.message}</td>
                  </tr>
                ))}
            </table>
          </div>
          <div>ccccc{sorta}</div>

          <div className="divTable myMessage_smallScreen">
            <div className="sort" onClick={sortDate}>
              {!sort ? "הצג מהישן לחדש" : "הצג מהחדש לישן"}
            </div>

            {list.map((list, index) => (
              <div key={list._id} style={{ marginTop: "20px" }}>
                הודעה מס' {index + 1}
                <div className="message">
                  זמן הפניה: <span>{new Date(list.date).toLocaleString()}</span>
                  <br />
                  בעניין: <span>{list.nameApartment}</span>
                  <br />
                  שם פונה: <span>{list.nameUser}</span>
                  <br />
                  פרטי חזרה לפונה: <span>{list.mailUser}</span>
                  <br />
                  תוכן ההודעה: <br />
                  <p>{list.message}</p>
                  <br />
                </div>
              </div>
            ))}
          </div>
          {/* <div className="divTable myMessage_smallScreen">
            {list.map((list, index) => (
              <div key={list._id} style={{ marginTop: "20px" }}>
                הודעה מס' {index + 1}
                <table>
                  <tr>
                    <th style={{ width: "50%" }}>{"זמן הפניה"}</th>
                    <th style={{ width: "50%" }}>{"בעניין"}</th>
                  </tr>
                  <tr>
                    <td>{new Date(list.date).toLocaleString()}</td>
                    <td>{list.nameApartment}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th style={{ width: "50%" }}>{"שם פונה"}</th>
                    <th style={{ width: "50%" }}>{"פרטי חזרה לפונה"}</th>
                  </tr>
                  <tr>
                    <td>{list.nameUser}</td>
                    <td>{list.mailUser}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th style={{ width: "100%" }}>{"תוכן ההודעה"}</th>
                  </tr>
                  <tr>
                    <td>{list.message}</td>
                  </tr>
                </table>
              </div>
            ))}
          </div> */}
        </div>
      ) : (
        <div className="loading">אין לך הודעות</div>
      )}
      {/* <Allmessage /> */}
    </div>
  );
}

export default MyMessages;
