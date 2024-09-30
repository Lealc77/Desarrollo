import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe usarse dentro de un AuthProvider")
    }
    return context;
};

export const AuthProvider = ({children}) => {
    const [user, SetUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signin = async (user) =>{
        try{
            const res = await loginRequest(user)
            console.log(res)
        }catch (error){
            if (Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }


    useEffect(() =>{
        if (errors.length > 0){
            const timer = setTimeout(() =>{
                setErrors([])

            }, 5000)
            return () => clearTimeout(timer)
        }

    }, [errors])


    return (
        <AuthContext.Provider
        value={{
            signin,
            user,
            isAuthenticated,
            errors
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};