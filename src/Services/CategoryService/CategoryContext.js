import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

const CategoryContextProvider = (props)=>{
    const [categoryList,setCategories] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8001/api/Category/getcategories`).then(response => setCategories(response.data))

    });
  return (
    <CategoryContext.Provider value={ {categoryList} }>
      {props.children}
    </CategoryContext.Provider>
  );
};
export default CategoryContextProvider;