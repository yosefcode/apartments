import Tabs from "../../components/tabs/tabs";
import ListApartments from "./ListApartments";
import Users from "./users";
import Messages from "./messages";

const Manager = () => {
  return (
    <div className="manager">
      <Tabs
        label0="מודעות לאישור"
        label1="רשימת משתמשים"
        label2="הודעות"
        // label3="עדכון פרטים"
        Tab1={<ListApartments />}
        Tab2={<Users />}
        Tab3={<Messages />}
        Tab4="tab4"
      />
    </div>
  );
};

export default Manager;
