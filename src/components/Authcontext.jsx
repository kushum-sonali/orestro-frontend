import React from 'react';
import {useContext,useReducer,createContext} from 'react';
const AuthContext=createContext();
export function useAuth(){
    return useContext(AuthContext);
}
const token = localStorage.getItem("User");
const innitialState={
    isAuthenticeted:token?true:false,
};
const  reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                isAuthenticeted:true,
            };

            case "LOGOUT":
                return{
                    isAuthenticeted:false,
                };
                default:
                    return state;
    }
};
export function AuthProvider({children}){
    const [state,dispatch]=useReducer(reducer,innitialState);
    const value={
        state,
        dispatch,
    };
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}