import { useEffect, useState } from "react";
import AppContext from "./app-context";
import initialProduct from "../components/data/products.json"
import { body } from "framer-motion/client";

const AppContextProvider = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [showAddProduct, setShowProduct] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openAddProduct = () => setShowProduct(true);
  const closeAddProduct = () => setShowProduct(false);
  const handleAddToCart = (productId, productName, productImage) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (productInCartIndex === -1) {
      const cartItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setCartItems((state) => [...state, cartItem]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productInCartIndex].quantity++;
      setCartItems(updatedCartItems);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    const updatedCartItems = [...cartItems];
    updatedCartItems[productInCartIndex].quantity++;
    setCartItems(updatedCartItems);
  };
  const handleDecreaseQuantity = (productId) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    const qty = cartItems[productInCartIndex].quantity;
    let updatedCartItems = [...cartItems];
    if (qty === 1) {
      updatedCartItems = updatedCartItems.filter(
        (item, index) => index !== productInCartIndex
      );
    } else {
      updatedCartItems[productInCartIndex].quantity--;
    }
    setCartItems(updatedCartItems);
  };
  const handleAddProduct = (productName) => {
    const product = {
      id: products.length + 1,
      name: productName,
      image: "default_product.png",
    };
    sendProductData(product);
    setProducts((state)=>
    {
      return{...state,[Object.keys(state).length+1]:product};
    })
    setShowProduct(false);
  };
  const sendProductData= async (product)=>
  {
    const response=await fetch("https://react-store-de73c-default-rtdb.firebaseio.com/products.json",
      {
        method:"POST",
        body:JSON.stringify(product)
      }
      
    );
    const data=await response.json();
    console.log(data);
  }
  useEffect(()=>{
    const fetchProducts=async()=>
    { setIsLoading(true);
      setTimeout(async () => {
        const response=await fetch("https://react-store-de73c-default-rtdb.firebaseio.com/products.json");
      const data=await response.json();
      setIsLoading(false);
      setProducts(data);
      }, 3000);
      
    };
    fetchProducts();
  },[]);
  const appContextValue = {
    handleAddProduct,
    closeAddProduct,
    openAddProduct,
    openCart,
    closeCart,
    showAddProduct,
    isLoading,
    products,
    showCart,
    cartItems,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleAddToCart,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider