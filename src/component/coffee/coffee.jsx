import React, { useState } from "react";
import SliderImage from "./imageSlide"
import { FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6"
import { FaChevronDown } from "react-icons/fa";
import './coffee.css'

let coffee = () => {

    let [filter, setFilter] = useState(false)

    return (
        <>
            <SliderImage />
            <div className="coffee">
                <div className="container">
                    <div className="search-product">
                        <div className="fillter" onClick={() => setFilter(!filter)}>
                            {filter ? <a> Hide Details <FaChevronUp/></a> : <a> Show Details <FaChevronDown/></a>}
                        </div>
                        <form>
                            <input type="text" placeholder="Search"/>
                            <button>
                                <FaMagnifyingGlass />
                            </button>
                        </form>
                    </div>
                    <div className={filter ? 'filter-list active' : 'filter-list'}>
                        <div className="list">
                            <h1>List Title</h1>
                            <div className="list-items">
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <h1>List Title</h1>
                            <div className="list-items">
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <h1>List Title</h1>
                            <div className="list-items">
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <h1>List Title</h1>
                            <div className="list-items">
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>Check Box lable</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </>
    )
}

export default coffee