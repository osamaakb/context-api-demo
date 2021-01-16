import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = { isLoading: false, dark: true };

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "CHANGE_THEME":
            return { ...state, dark: action.payload };
        default:
            return state;
    }
};

export const StateProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {props.children}
        </StateContext.Provider>
    );
};
