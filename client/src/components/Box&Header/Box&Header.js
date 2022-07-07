import "./Box&Header.css";

function BoxHeader({ width, content, label }) {
  return (
    <div className="Box_Header" style={{ width: width }}>
      <div className="Header">{label}</div>
      <div className="Box">{content} </div>
    </div>
  );
}

export default BoxHeader;
