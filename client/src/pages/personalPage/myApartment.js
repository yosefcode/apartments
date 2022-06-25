import ListApartments from "../../components/ListApartment&delete&edit/ListApartment&delete&edit";

function MyApartments({ id, setValue }) {
  return (
    <div className="myApartment">
      <ListApartments url={"/api/myApartments/" + id} />
    </div>
  );
}

export default MyApartments;
