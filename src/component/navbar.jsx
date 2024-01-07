import logo from "../assets/starbucks_corporation_logo.png"
import { Link } from "react-router-dom";

let navbar = (prop) => {

    return (
        <>
            <nav className={prop.scrollVal > 200 ? "scroll" : ""}>
                <div className="container">
                    <div className="left">
                        <Link to={'/'}><img src={logo} alt=""/></Link>
                        <div className="nav-item">
                                <ul>
                                    <Link to={'/coffee'}>
                                        <li>coffee tea at home</li>
                                    </Link>
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