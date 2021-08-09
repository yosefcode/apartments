import "./list.css";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4200/list/").then((res) => {
      setList(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <div className="list">
      {list.map((list) => (
        <div key={list.id} className="aabb">
          {list.id} {list.name}
          <br />
          מייל: {list.email}
          <br />
          הודעה: {list.message}
        </div>
      ))}
    </div>
  );
};

export default List;
