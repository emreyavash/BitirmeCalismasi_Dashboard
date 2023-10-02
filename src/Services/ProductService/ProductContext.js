import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props)=>{
    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Product/getProducts`).then(response => setProducts(response.data))

    });
  return (
    <ProductContext.Provider value={ {products} }>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;