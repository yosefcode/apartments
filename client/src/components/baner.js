function Baner({ content, height }) {
  let mql = window.matchMedia("(max-width: 600px)");
  const style = {
    width: "94%",
    fontSize: mql.matches ? "1.3rem" : "1.8rem",
    margin: "10px auto",
    color: "var(--purple)",
    fontWeight: "700",
    backgroundImage: "linear-gradient(to right,  var(--purple),  var(--blue))",
    padding: "0.5rem 3%",
    borderRadius: "0.3rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: height,
  };
  return <div style={style}>{content}</div>;
}

export default Baner;
