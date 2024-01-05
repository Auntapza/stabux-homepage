import React from "react";
import facebookLogo from "../assets/facebook_w.png"
import igLogo from "../assets/Instagram.png"
import lineLogo from "../assets/LINE_APP.png"
import TicktokLogo from "../assets/TikTok-Social-Icon-Rounded-Square-White.png"
import appStore from "../assets/app-store_tcm78-10560_w1024_n.png"
import googlePlay from "../assets/google-play_tcm78-10559_w1024_n.png"

let footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="links">
                            <div className="aboutUs">
                                <h1>About US</h1>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </div>
                            <div className="coffee-details">
                                <h1>coffee & tea at home</h1>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </div>
                            <div className="coffee-details 2">
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </div>
                            <div className="country">
                                <div className="eng">
                                    <i className="fa-solid fa-flag"></i>
                                    English
                                </div>
                                <div className="th">
                                    <i className="fa-solid fa-flag"></i>
                                    ไทย
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="social">
                <div className="container">
                    <img src={facebookLogo} alt="" />
                    <img src={igLogo} alt="" />
                    <img src={lineLogo} alt="" />
                    <img src={TicktokLogo} alt="" />
                    <img src={appStore} alt="" />
                    <img src={googlePlay} alt="" />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="links">
                        <a href="">links to any page</a>
                        <a href="">links to any page</a>
                        <a href="">links to any page</a>
                        <a href="">links to any page</a>
                        <a href="">links to any page</a>
                    </div>
                    <p>&copy; 2024 By น้องอู๋ (สร้างเพื่อการฝึกฝนเท่านั่น ไม่มีเจตนาในการนำไปลอกเลียนเเบบเพื่อสร้างผลประโยชน์)</p>
                </div>
            </div>
        </>
    )
}

export default footer