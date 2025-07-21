import "./Modal.css";
function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }
  return (
    <div className="backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
