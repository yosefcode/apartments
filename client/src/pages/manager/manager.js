import "./manager.css";
import { useEffect, useState } from "react";
import Tabs from "../../components/tabs/tabs";
import ListApartments from "./ListApartments/ListApartments";

const Manager = () => {
  return (
    <div className="manager">
      <Tabs
        label0="מודעות לאישור"
        label1="רשימת משתמשים"
        label2="הודעות"
        // label3="עדכון פרטים"
        Tab1={<ListApartments />}
        Tab2="tab2"
        Tab3="tab3"
        Tab4="tab4"
      />
    </div>
  );
};

export default Manager;
