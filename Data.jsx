import { useState, useEffect } from 'react';
import Loading from './Loading';
import Error from './Error';
import SearchBar from './Search';
import MovieCard from './Movie';
export default function Data() {

    let [arr, setarr] = useState([]);
    let [err, seterror] = useState("");
    let [loading, setLoading] = useState(false);
    let [query, setQuery] = useState("");

    useEffect(() => {

        async function Get() {
            try {
                setLoading(true);
                seterror("");

                let data = await fetch(
                  `https://www.omdbapi.com/?apikey=cd121ccf&s=${query}`
                );

                let ndata = await data.json();

                setarr(ndata.Search || []);

            } catch (err) {
                seterror(err.message);

            } finally {
                setLoading(false);
            }
        }

        Get();

    }, [query]);

    if (loading) return <Loading />;
    if (err) return <Error message={err} />;

    return (
        
        <>

    <SearchBar setQuery={setQuery} />

<div className="movies-grid">
  {arr.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  ))}
</div>

</>
    );
}