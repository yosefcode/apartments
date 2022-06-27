import Tabs from "../../components/tabs/tabs";
import MyApartments from "./myApartment";
import MyMessages from "./myMessages";
import MyDetails from "../../components/myDetails/myDetails";
import AddApartment from "../../components/Add_&_Edit_Apartment/Add_&_Edit_Apartment";

function PersonalPage() {
  return (
    <div>
      <Tabs
        label0="הוסף דירה"
        label1="הדירות שלי"
        label2="ההודעות שלי"
        label3="איזור אישי"
        Tab1={<AddApartment />}
        Tab2={<MyApartments />}
        Tab3={<MyMessages />}
        Tab4={<MyDetails />}
      />
    </div>
  );
}

export default PersonalPage;
