import "./personalPage.css";
import Tabs from "../../components/tabs/tabs";
import { useParams } from "react-router-dom";
import MyApartments from "./myApartment";
import MyMessages from "./myMessages";
import MyDetails from "./myDetails/myDetails";
import AddApartment from "../../components/Add_&_Edit_Apartment/Add_&_Edit_Apartment";

function PersonalPage({ apiUserForFirebase }) {
  const { id } = useParams();

  return (
    <div>
      <Tabs
        label0="הוסף דירה"
        label1="הדירות שלי"
        label2="ההודעות שלי"
        label3="איזור אישי"
        Tab1={<AddApartment id={id} />}
        Tab2={<MyApartments id={id} />}
        Tab3={<MyMessages id={id} />}
        Tab4={<MyDetails id={id} apiUserForFirebase={apiUserForFirebase} />}
      />
    </div>
  );
}

export default PersonalPage;
