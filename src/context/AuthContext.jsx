import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([]);

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

    return (
        <AuthContext.Provider value={{user, setUser, signInWithGoogle, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext);
}