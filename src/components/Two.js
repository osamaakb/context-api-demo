import React, { useState, useContext } from "react";
import './style.css'
import { StateContext } from "../State";



const Two = () => {
    const [state, dispatch] = useContext(StateContext);
    const theme = state.dark ? 'dark' : 'light';
    const [movies, setMovies] = useState();

    const fetchMovies = () => {
        dispatch({ type: 'SET_LOADING', payload: true })
        setTimeout(() => fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&page=1"
        )
            .then((respone) => respone.json())
            .then((movies) => {
                dispatch({ type: 'SET_LOADING', payload: false })
                setMovies(movies.results)
            }), 2000)
    }


    return (
        <div className='border'>
            <button className={'button ' + theme} onClick={fetchMovies}>click me to fetch movies</button>
            <div>
                {movies &&
                    movies.length !== 0 &&
                    movies.map((movie) => {
                        return (
                            <div style={{ textAlign: "center" }} key={movie.id}>
                                <p>{movie.original_title}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Two;
