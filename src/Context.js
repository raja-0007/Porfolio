import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { createContext, useReducer } from "react";
export const themecontext = createContext()
const initialstate = {darkmode: false}
const themereducer = (state, action)=>{
    switch(action.type){
        case 'toggle':
            console.log('changed')
            return {darkmode: !state.darkmode}
        default:
            return state
    }
}
 export const Themeprovider = (props) =>{
    const [state, dispatch] = useReducer(themereducer, initialstate)
    return (
        <themecontext.Provider value={{state,dispatch}}>
            {props.children}
        </themecontext.Provider>
    )
 }