import React, { useState, useEffect, useContext } from "react";
import './style.css'
import { StateContext } from "../State";


const One = () => {
    const [state, dispatch] = useContext(StateContext);
    const theme = state.dark ? 'dark' : 'light';


    const toggleHandler = () => {
        dispatch({ type: 'CHANGE_THEME', payload: !state.dark })
    }

    const loadTimer = () => {
        dispatch({ type: 'SET_LOADING', payload: true })
        setTimeout(() => {
            dispatch({ type: 'SET_LOADING', payload: false })
        }, 2000)
    }

    return (
        <div className='border'>
            <button className={'button ' + theme} onClick={toggleHandler}>Change Theme in One</button>
            <button className={'button ' + theme} onClick={loadTimer}>show loading for 2 seconds</button>
        </div>
    );
};

export default One;
