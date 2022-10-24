import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom' // é o que permite pegar a query string da URL e utilizá-la como precisarmos, no caso na API 

import MovieCard from '../Components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css'



const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    setMovies(data.results);

  };

  useEffect(()=>{

    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`; //query string - parâmetro de URL. O & serve para adicionar mais um parâmetro
    getSearchedMovies(searchWithQueryURL);

  },[query])

  return (
    <div className='container'>
      <h2 className="title">Resultados para: <span className='query-text'>{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p>...carregando</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search