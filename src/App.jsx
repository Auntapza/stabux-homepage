import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar"
import HomePage from "./component/homepage/homepage"
import Footer from "./component/footer"
import "./App.css"

let App = () => {

  let [scrollVal, setScrollVal] = useState()

  window.addEventListener('scroll', () => {
      setScrollVal(window.scrollY)
  })
  return (
    <>
      <Navbar scrollVal={scrollVal}/>
      <HomePage />
      <Footer />
    </>
  )
}

export default App