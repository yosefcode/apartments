import Tabs from "../../components/tabs/tabs";
import MyApartments from "./myApartment";
import MyMessages from "./myMessages";
import MyDetails from "../../components/myDetails/myDetails";
import AddPost from "./AddPost";

function PersonalPage() {
  return (
    <div>
      <Tabs
        label0="פרסם מודעה"
        label1="המודעות שלי"
        label2="ההודעות שלי"
        label3="איזור אישי"
        Tab1={<AddPost />}
        Tab2={<MyApartments />}
        Tab3={<MyMessages />}
        Tab4={<MyDetails />}
      />
    </div>
  );
}

export default PersonalPage;
