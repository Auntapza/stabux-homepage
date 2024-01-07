import React, { useState }  from "react";
import drinkWithCake from "../../assets/img-01.webp"
import image1Text from "../../assets/text-01.webp"
import image2Text from "../../assets/text-1-copy.webp"
import image2Logo from "../../assets/text-top-right-copy.webp"
import image2StarTop from "../../assets/star-top-text-1-copy.webp"
import image2StarBottom from "../../assets/starbottom-text-1-copy.webp"
import image2Rider from "../../assets/img-left-1-copy.webp"

let Slider = () => {
    
    let [slider, setSlider] = useState(0)

    let followslide = () => {
        if (slider <= -100) {
            setSlider(0)
        } else {
            setSlider(slider-100)
        }
    }
    let priviousSlide = () => {
        if (slider == 0) {
            setSlider(-100)
        } else {
            setSlider(slider+100)
        }
    }

    return (
        <>
            <div className="slider">
                <button className="privious" onClick={priviousSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className="slider-content" style={{transform:`translateX(${slider}%)`}}>
                    <div className="slider-content-2">
                        <img src={image2Logo} alt="" className="logoImg"/>
                        <div>
                            <img src={image2Rider} alt="" className="Rider"/>
                            <img src={image2Text} alt="" className="Text"/>
                        </div>
                        <img src={image2StarTop} alt="" className="star top"/>
                        <img src={image2StarBottom} alt="" className="star bottom"/>
                    </div>
                    <div className="slider-content-1">
                        <img src={drinkWithCake} alt="" />
                        <img src={image1Text} alt="" />
                    </div>
                </div>
                <button className="follow" onClick={followslide}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
                <div className="sliderTab">
                    <span className={slider == 0 ? 'circle active' : 'circle'} onClick={() => {setSlider(0)}}></span>
                    <span className={slider == -100 ? 'circle active' : 'circle'} onClick={() => {setSlider(-100)}}></span>
                </div>
            </div>
        </>
    )
}

export default Slider