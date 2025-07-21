import React, { useContext } from "react";
import AppContext from "../../store/app-context";
import "./Header.css";
function Header() {
  const {openCart,openAddProduct}=useContext(AppContext);
  return (
    <div>
      <div className="header">
        <h1>My React Store</h1>
        <div>
          <button
            className="yellow-button"
            onClick={openAddProduct}
            style={{ marginRight: "20px" }}
          >
            Add Product
          </button>
          <button className="yellow-button" onClick={openCart}>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
