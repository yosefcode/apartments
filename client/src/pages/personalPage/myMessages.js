import React, { useState, useEffect, useContext } from "react";
import Table from "../../components/table/table";
import { PostToServerLoading } from "../../components/getData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppContext } from "../../variable-Context";

function MyMessages() {
  const { uidFirebase } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [sortDate, setSortDate] = useState(false);
  console.log(messages);

  const sortDateFunc = () => {
    setSortDate(!sortDate);
    messages.sort((a, b) =>
      sortDate
        ? new Date(b.date) > new Date(a.date)
          ? -1
          : 1
        : new Date(a.date) < new Date(b.date)
        ? 1
        : -1
    );
  };

  const valueHeader = [
    { title: "בעניין", width: "15%" },
    { title: "שם פונה", width: "15%" },
    { title: "פרטי חזרה לפונה", width: "15%" },
    { title: "תוכן ההודעה", width: "45%" },
  ];

  return (
    <div>
      <PostToServerLoading
        route={`/api/messages/${uidFirebase}`}
        data={setMessages}
        content={
          messages.length > 0 ? (
            <Table
              valueHeader={
                <>
                  <th style={{ width: "10%" }} onClick={sortDateFunc}>
                    {"זמן הפנייה"}{" "}
                    <ExpandMoreIcon
                      sx={{
                        fontSize: "2rem",
                        marginInline: "10px",
                        color: "white",
                        transform: sortDate ? "rotate(180deg)" : "",
                      }}
                    />
                  </th>
                  {valueHeader.map((item, i) => (
                    <th key={i} style={{ width: item.width }}>
                      {item.title}
                    </th>
                  ))}
                </>
              }
              valueBody={messages.map((list) => (
                <tr key={list._id}>
                  <td>{new Date(list.date).toLocaleString()}</td>
                  <td>{list.nameApartment}</td>
                  <td>{list.nameUser}</td>
                  <td>{list.mailUser}</td>
                  <td>{list.message}</td>
                </tr>
              ))}
            />
          ) : (
            <div>אין הודעות</div>
          )
        }
      />
    </div>
  );
}

export default MyMessages;

// <div className="divTable myMessage_smallScreen">
//   <div className="sort" onClick={sortDate}>
//     {!sort ? "הצג מהישן לחדש" : "הצג מהחדש לישן"}
//   </div>

//   {list.map((list, index) => (
//     <div key={list._id} style={{ marginTop: "20px" }}>
//       הודעה מס' {index + 1}
//       <div className="message">
//         זמן הפניה: <span>{new Date(list.date).toLocaleString()}</span>
//         <br />
//         בעניין: <span>{list.nameApartment}</span>
//         <br />
//         שם פונה: <span>{list.nameUser}</span>
//         <br />
//         פרטי חזרה לפונה: <span>{list.mailUser}</span>
//         <br />
//         תוכן ההודעה: <br />
//         <p>{list.message}</p>
//         <br />
//       </div>
//     </div>
//   ))}
// </div>
