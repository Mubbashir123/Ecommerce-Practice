import { useContext } from "react";
import Modal from "../UI/Modal";
import AppContext from "../../store/app-context";
import "./Cart.css";
function CartItems({ id, name, image, quantity }) {
  const {handleIncreaseQuantity,handleDecreaseQuantity}=useContext(AppContext)
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty:{quantity}</div>
          <div>
            <button className="yellow-button qty-button qty-plus-button" onClick={()=>handleIncreaseQuantity(id)}>
              +
            </button>
          </div>
          <div>
            <button className="yellow-button qty-button" onClick={()=>handleDecreaseQuantity(id)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const handleCartClick = (e) => {
    e.stopPropagation();
  };
  const {showCart, closeCart, cartItems}=useContext(AppContext)

  return (
    <Modal show={showCart} onClose={closeCart}>
      <div className="cart-container" onClick={handleCartClick}>
        <div className="cart-heading">
          <div>
            {cartItems.length>0 ? cartItems.map((item) => (
              <CartItems
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                quantity={item.quantity}
              />
            )):(
          <div className="empty-cart">Cart is empty</div>
        ) }
          </div>
          <div className="cart-buttons">
            <button className="black-button close-cart" onClick={closeCart}>
              Close
            </button>

           {cartItems.length>0 && <button className="yellow-button" onClick={closeCart}>
              Checkout
            </button>}
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default Cart;
