import React, { useState, useEffect, useContext } from "react";
import './style.css'
import { StateContext } from "../State";


const One = () => {
    const [state, dispatch] = useContext(StateContext);
    const theme = state.dark ? 'dark' : 'light';


    const toggleHandler = () => {
        dispatch({ type: 'CHANGE_THEME', payload: !state.dark })
    }

    return (
        <div className='border'>
            <button className={'button ' + theme} onClick={toggleHandler}>Change Theme in One</button>
        </div>
    );
};

export default One;
