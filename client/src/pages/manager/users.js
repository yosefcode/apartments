import React, { useState } from "react";
import Table from "../../components/table/table";
import { GetDataLoading } from "../../components/getData";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Users() {
  const [users, setUsers] = useState([]);

  const icon = (test) => {
    return test ? (
      <CheckCircleIcon
        style={{
          fontSize: "2.5rem",
          color: "green",
        }}
      />
    ) : (
      <CancelIcon
        style={{
          fontSize: "2.5rem",
          color: "red",
        }}
      />
    );
  };

  const valueHeader = [
    { title: "תאריך הצטרפות", width: "10%" },
    { title: "שם", width: "10%" },
    { title: "מייל", width: "10%" },
    { title: "טלפון", width: "10%" },
    { title: "הודעות חיפוש", width: "5%" },
    { title: "איזור חיפוש", width: "10%" },
    { title: "מבצעים", width: "5%" },
    { title: "איזור מבצעים", width: "10%" },
    { title: "מקבל הודעות", width: "5%" },
    { title: "מקבל ווצאפ", width: "5%" },
    { title: "uidFirebase", width: "10%" },
  ];

  return (
    <div>
      <GetDataLoading
        url="/api/listUsers/"
        data={setUsers}
        content={
          <Table
            valueHeader={valueHeader.map((item, i) => (
              <th key={i} style={{ width: item.width }}>
                {item.title}
              </th>
            ))}
            valueBody={users.map((item) => (
              <tr key={item._id}>
                <td>{new Date(item.date).toLocaleString()}</td>
                <td>{item.nameUser}</td>
                <td>{item.mailUser}</td>
                <td>{item.phoneUser}</td>
                <td>{icon(item.msgSearchApartment)}</td>
                <td>{item.areaSearchApartment}</td>
                <td>{icon(item.msgSaleApartment)}</td>
                <td>{item.areaSaleApartment}</td>
                <td>{icon(item.receivingMessages)}</td>
                <td>{icon(item.receivingWTS)}</td>
                <td>{item.uidFirebase}</td>
              </tr>
            ))}
          />
        }
      />
      <Table />{" "}
    </div>
  );
}

export default Users;
