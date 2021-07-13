import { 
    //useEffect, 
    useReducer,
    useState, 
    createContext, 
    useContext, 
    useEffect
} from "react";
//import axios from 'axios'
import { AUTH, LOGOUT } from "./userActions";
import userReducer from './userReducer';
import * as api from '../../api';
import decode from 'jwt-decode';

const UserContext = createContext();
export const useUser = () => useContext(UserContext)

const UserProvider = (props) => {
    const initialState = {
        authData: null,
    };

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [state, dispatch] = useReducer(userReducer, initialState);
    
    useEffect(() => {
        // check to see if token exists or not
        // if token time expires, logout user
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [user?.token]);
    
    // useEffect(()=>{
    //     axios.get('https://northark.herokuapp.com/api/sandbox/transactions')
    //      .then((res)=>{
    //          setUser([res.data])
    //      })
    //      .catch((err)=>{
    //          console.log(err)
    //      })
    // }, [] )

    const login = async (formData, history) => {
        try {
            // login in user via backend
            const { data } = await api.signIn(formData);

            // update central state
            dispatch({ type: AUTH, data });

            history.push('/home');
        } catch (err) {
            console.log(err);
        }
    };

    const signup = async (formData, history) => {
        try {
            // sign up a new user via backend
            const { data } = await api.signUp(formData);

            // update central state
            dispatch({ type: AUTH, data });

            history.push('/home');
        } catch (err) {
            console.log(err);
        }
    };

    const logout = (history) => {
        try {
            // update state.authData to null
            dispatch({ type: LOGOUT });

            // redirect back to log in
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    };
    
    const value = {
        user: state,
        login,
        signup,
        logout,
    };

    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserProvider;