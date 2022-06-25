import "./table.css";

function Table({ valueHeader, valueBody }) {
  return (
    <div className="divTable">
      <table>
        {valueHeader}
        {valueBody}
      </table>
    </div>
  );
}

export default Table;
