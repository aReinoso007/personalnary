import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    async function signInWithGoogle(){
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google'
            });
            if(error) throw error;
            return data;
        } catch (error) {
            console.log(error);
        }
        
    }

    async function signOut(){
        try {
            const { error } = await supabase.auth.signOut();
            if(error) throw error;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        const {data: authListener} = supabase.auth.onAuthStateChange(async (event, session)=>{
            if(session === null){
                navigate('/login', {replace: true});
            }else{
                navigate('/', {replace: true});
            }
        });
    },[]);

    return (
        <AuthContext.Provider value={{user, setUser, signInWithGoogle, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext);
}