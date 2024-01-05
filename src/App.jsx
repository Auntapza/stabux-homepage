import React from "react";
import Navbar from "./component/navbar"
import HomePage from "./component/homepage/homepage"
import Footer from "./component/footer"
import "./App.css"

let App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App