import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar"
import HomePage from "./component/homepage/homepage"
import Coffee from './component/coffee/coffee'
import Footer from "./component/footer"
import "./App.css"
import { Route, Routes } from 'react-router-dom'

let App = () => {

  let [scrollVal, setScrollVal] = useState(0)

  window.addEventListener('scroll', () => {
      setScrollVal(window.scrollY)
  })

  return (
    <>
      <Navbar scrollVal={scrollVal}/>
        <Routes>
          <Route index path="/" Component={HomePage}/>
          <Route path="/coffee" Component={Coffee}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App