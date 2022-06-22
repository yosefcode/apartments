import "./manager.css";
import { useEffect, useState } from "react";
import Tabs from "../../components/tabs/tabs";

const Manager = () => {
  return (
    <div className="manager">
      <Tabs
        label0="מודעות לאישור"
        label1="רשימת משתמשים"
        label2="הודעות"
        // label3="עדכון פרטים"
        Tab1="tab1"
        Tab2="tab2"
        Tab3="tab3"
        Tab4="tab4"
      />
    </div>
  );
};

export default Manager;
