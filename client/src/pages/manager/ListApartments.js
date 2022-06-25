import ListApartments from "../../components/ListApartment&delete&edit/ListApartment&delete&edit";

const ListApartment = () => {
  return (
    <div className="myApartment">
      <ListApartments url={"/api/allApartmentsForEditDelete/"} />
    </div>
  );
};
export default ListApartment;
