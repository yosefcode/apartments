const Modal = ({ isOpenModal, setIsOpenModal, content }) => {
  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      style={style.modal}
      onClick={() => {
        setIsOpenModal(false);
      }}
    >
      <div
        style={style.modal_content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {content}
      </div>
    </div>
  );
};
export default Modal;

const style = {
  modal: {
    width: "100%",
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    zIndex: 2000,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modal_content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "black",
    cursor: "pointer",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1001,
    border: "1px solid #000",
  },
};
