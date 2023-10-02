import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import ProductList from './components/ProductList/ProductList';
import ProductAdd from './components/Product/ProductAdd';

import CategoryList from './components/CategoryList/CategoryList';
import ProductEdit from './components/Product/ProductEdit';
import CategoryAdd from './components/Category/CategoryAdd';
import CategoryEdit from './components/Category/CategoryEdit';
import UserList from './components/UserList/UserList';
import UserEdit from './components/User/UserEdit';
import ProductAlbum from './components/ProductList/ProductAlbum';
import Basket from './components/Basket/Basket';
import Order from './components/Order/Order';
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"ProductList/",
        element: <ProductList/>
        
      },
      {
        path:"Categories/",
        element: <CategoryList/>
      },
      {
        path:"Category_Add/",
        element: <CategoryAdd/>
      },
      {
        path:"CategoryEdit/:id",
        element: <CategoryEdit/>
      },
      {
        path:"Product_add/",
        element:<ProductAdd/>
      },
      {
        path:"ProductEdit/:id",
        element:<ProductEdit />
      },
      {
        path:"UserList/",
        element:<UserList />
      },
      {
        path:"UserEdit/:id",
        element:<UserEdit/>
      }
      ,
      {
        path:"/Products/",
        element:<ProductAlbum/>
      },
      {
        path:"/Sepet/",
        element:<Basket/>
      },
      {
        path:"/Siparislerim/",
        element:<Order/>
      },
    ]
  },
  {
    path:"giris/",
    element: <Login/>
  },
  {
    path:"kayit_ol/",
    element: <Register/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>
);

