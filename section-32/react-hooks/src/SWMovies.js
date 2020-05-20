import React, { useState, useEffect } from 'react'
import axios from 'axios';

function SWMovies() {
    const [movieNumber, setMovieNumber] = useState(1);
    const [movie, setMovie] = useState('');

    useEffect(() => {
        async function getData() {
            let url =` https://swapi.dev/api/films/${movieNumber}/`;
            let response = await axios.get(url);
            setMovie(response.data);
        }
        getData();
    }, [movieNumber])
    return (
        <div>
            <h1>pick move</h1>
            <h3>{movie.title}</h3>
            <p>{movie.opening_crawl}</p>
            <select name="movies" id="swmovies" value={movieNumber} onChange={(e) => setMovieNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">emp srtyk bak</option>
                <option value="3">lonliest jedeye</option>
            </select>
        </div>
    )
}

export default SWMovies
