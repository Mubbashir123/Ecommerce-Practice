import { createContext } from "react";

const AppContext= createContext({

    handleAddProduct:()=>{},
    closeAddProduct:()=>{},
    openAddProduct:()=>{},
    openCart:()=>{},
    closeCart:()=>{},
    showAddProduct:false,
    products:[],
    showCart:false,
    cartItems:[],
    isLoading:false,
    handleDecreaseQuantity:()=>{},
    handleIncreaseQuantity:()=>{},
    handleAddToCart:()=>{},
});
export default AppContext;