import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props)=>{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8004/api/Users/GetUsers`).then(response => setUsers(response.data))

    });
  return (
    <UserContext.Provider value={ {users} }>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;