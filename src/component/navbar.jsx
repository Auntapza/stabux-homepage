import React, { useState } from "react";
import logo from "../assets/starbucks_corporation_logo.png"

let navbar = (scrollVal) => {

    return (
        <>
            <nav className={scrollVal.scrollVal >= 120 ? "scroll" : ""}>
                <div className="container">
                    <div className="left">
                        <img src={logo} alt="" />
                        <div className="nav-item">
                            <ul>
                                <li>coffee tea at home</li>
                                <li>menu</li>
                                <li>merchandice</li>
                                <li>starbucks rewards</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <a href="">
                            <i className="fa-solid fa-location-dot"></i>
                            Find a Store
                        </a>
                        <a href="">
                            <i className="fa-solid fa-flag"></i>
                            ไทย
                        </a>
                    </div>
                    <div className="hambergerBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar