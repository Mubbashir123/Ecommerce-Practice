
import { useContext } from "react";
import "./Products.css";
import AppContext from "../../store/app-context";
import { LoaderThree } from "../UI/Loader/loader.tsx";
function Product({id,name,image})
{   const {handleAddToCart}=useContext(AppContext)
   return( <div key={id} className="product">
                     <img src={require(`../../assets/${image}`)} alt={name} /> 
                    <div className="product-name">{name}</div>
                   <button className="yellow-button" onClick={()=>handleAddToCart(id,name,image)}>  Add to Cart </button>
                </div>);
}
function Products()
{   const {products,isLoading}=useContext(AppContext);
    if(isLoading)
    {
        return (<div><LoaderThree/></div>);
    }
    return(
        <div className="products-container">
        {
            Object.keys(products).map((k) => (
                <Product
                    key={k}
                    id={products[k].id}
                    name={products[k].name}
                    image={products[k].image}
                    
                />
                
            ))
            
        }
        </div>
    );
}
export default Products;