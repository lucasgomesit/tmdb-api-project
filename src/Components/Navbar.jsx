import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate(); // hook para fazer o redirecionamento do componente

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return;

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <nav id="navbar">
      <h2>
        <Link to="/"><BiCameraMovie />Movies Library</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Busque um filme"
         onChange={(e) => setSearch(e.target.value)} value={search} 
         />
        <button type='submit'><BiSearchAlt2 /></button>
      </form>

      {/* toda vez que algo é digitado no INPUT, estou mudando state do Search*/}
      {/* fazendo o bind para depois conseguir limpar o campo */}

      {/**
      <Link to="/movie/1">Movie</Link>
      <Link to="/search">Search</Link>
       */}
      
    </nav>
  )
}

export default Navbar