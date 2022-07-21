import ListRentApartment from "../../components/ListRentApartment&delete&edit/ListRentApartment";

const ListApartment = () => {
  return (
    <div className="myApartment">
      <ListRentApartment url={"/api/allApartmentsForEditDelete/"} />
    </div>
  );
};
export default ListApartment;
