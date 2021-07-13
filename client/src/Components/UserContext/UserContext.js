import { 
    useEffect, 
    useState, 
    createContext, 
    useContext 
} from "react";
import axios from 'axios'

const UserContext = createContext();
export const useUser = () => useContext(UserContext)

const UserProvider = (props) =>{
    
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
    
    const value = {
        user,
        setUser,
    };

    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserProvider;