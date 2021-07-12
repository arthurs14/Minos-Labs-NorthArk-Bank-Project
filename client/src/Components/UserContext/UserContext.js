import React , { useEffect, useState } from "react";
import axios from 'axios'

export const UserContext = React.createContext();



    

    

export const UserProvider = (props) =>{
    
    const [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get('https://northark.herokuapp.com/api/sandbox/transactions')
         .then((res)=>{
             setUser([res.data])
         })
         .catch((err)=>{
             console.log(err)
         })
    }, [] )
    

    
    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )

}