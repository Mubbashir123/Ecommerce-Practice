import Modal from "../UI/Modal";
import "../AddProduct/AddProduct.css";
import AppContext from "../../store/app-context";
import { useContext, useRef } from "react";
function AddProduct() {
  const nameref = useRef();
  const {showAddProduct, closeAddProduct,handleAddProduct}=useContext(AppContext);
  function handleSubmit(event) {
    event.preventDefault();
    const nameValue = nameref.current.value;
    handleAddProduct(nameValue);
    
  }
  return (
    <Modal show={showAddProduct} onClose={closeAddProduct}>
      <div className="add-product-container">
        <p className="add-product-heading">Add Product</p>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label className="form-label">Enter Product Name</label>
          <input className="form-input" ref={nameref} />
          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}
export default AddProduct;
