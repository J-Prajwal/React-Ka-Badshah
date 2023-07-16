import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from './Movies'
import CreateMovies from './CreateMovies'
import EditMovies from './EditMovies'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/create' element={<CreateMovies />} />
        <Route path='/edit/:id' element={<EditMovies />} />
    </Routes>
  )
}

export default MainRoutes