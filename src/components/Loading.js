import React, { useState, useEffect, useContext } from "react";
import './style.css'
import { StateContext } from "../State";

const Loading = () => {
    const [state, dispatch] = useContext(StateContext);

    return <div className='loading'><p className='light'>I'm loading indicator...</p></div>;
}


export default Loading;