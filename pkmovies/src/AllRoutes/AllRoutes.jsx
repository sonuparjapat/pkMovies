import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from '../Component/Navbar'
import MoviePage from '../Pages/MoviePage'

import Single from '../Pages/Single'
export default function AllRoutes() {
  return (
    <div style={{backgroundColor:"black",color:"yellow"}}>
    <Navbar/>
<Routes>
    <Route path="/" element={<MoviePage/>}/>
    <Route path="/details/:id" element={<Single/>}/>
</Routes>


    </div>
  )
}
