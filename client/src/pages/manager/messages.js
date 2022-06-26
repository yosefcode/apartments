import React, { useState } from "react";
import Table from "../../components/table/table";
import PostToServerLoading from "../../components/getData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [sortDate, setSortDate] = useState(false);
  const [sortNameApartment, setSortNameApartment] = useState(false);

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
  const sortDatea = () => {
    setSortNameApartment(!sortNameApartment);
    messages.sort((a, b) =>
      sortNameApartment
        ? b.nameApartment.localeCompare(a.nameApartment)
        : a.nameApartment.localeCompare(b.nameApartment)
    );
  };

  const valueHeader = [
    { title: "מייל בעל הדירה", width: "10%" },
    { title: "שם פונה", width: "10%" },
    { title: "פרטי חזרה לפונה", width: "10%" },
    { title: "תוכן ההודעה", width: "50%" },
  ];

  return (
    <div>
      <PostToServerLoading
        url="/api/messages/"
        data={setMessages}
        content={
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
                <th style={{ width: "10%" }} onClick={sortDatea}>
                  {"בעניין"}{" "}
                  <ExpandMoreIcon
                    sx={{
                      fontSize: "2rem",
                      marginInline: "10px",
                      color: "white",
                      transform: sortNameApartment ? "rotate(180deg)" : "",
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
                <td>{list.mailApartment}</td>
                <td>{list.nameUser}</td>
                <td>{list.mailUser}</td>
                <td>{list.message}</td>
              </tr>
            ))}
          />
        }
      />
    </div>
  );
}

export default Messages;
