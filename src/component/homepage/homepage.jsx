import React from "react";
import ImageSlider from "./imageSlider"
import Bev from "../../assets/Winter24_1080_Bev-800x800.webp"
import coffee from "../../assets/Winter24_1080_Coffee-800x800.webp"
import coffeeR from "../../assets/Winter24_1080_CoffeeR-800x800.webp"
import food from "../../assets/Winter24_1080_Food-800x800.webp"
import Mer from "../../assets/Winter24_1080_Mer-800x800.webp"
import banner from "../../assets/Digital-New-App-MOT-Web-SR-page-banner-ENG-1400x555.webp"

let hompage = () => {
    return (
        <>
            <ImageSlider />
            <div className="homepage">
                <div className="container">
                    <div className="suggestMenu">
                        <h1>purely delightful</h1>
                        <div className="catalog">
                            <div className="coffee">
                                <img src={Bev} alt="" />
                            </div>
                            <div className="snack">
                                <img src={food} alt="" />
                            </div>
                            <div className="takeAway">
                                <img src={coffee} alt="" />
                            </div>
                            <div className="coffeeR">
                                <img src={coffeeR} alt="" />
                            </div>
                            <div className="prasent">
                                <img src={Mer} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default hompage