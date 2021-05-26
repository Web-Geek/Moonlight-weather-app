import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import "./styles/NavBar.css"

const NavBar = () => {

    const {value3} = useContext(SearchContext)
    const [errorMsg] = value3;

    const [initial,setInitial] = useState(true);
    const [toggle,setToggle] = useState(false);

    function handleClick(){
        setInitial(false)
        setToggle(prev => !prev)
    }

    return (
        <div className={`nav-container ${toggle?'display':null}`}>
            {
                errorMsg === null &&             
                <button  className={`i-btn`} onClick={handleClick}>
                    <i className='fas fa-info-circle'></i>
                </button>
            }
 
            <div className={`contents ${toggle?'show':null} ${(!initial && !toggle)?'hide':null}`}> 
                <div className="elms">
                    <p className="i-wr mb-3 mt-3 text-center">Icon Interpretation</p>

                    <p><i className="fas fa-temperature-low"></i> - Feels Like Tempreture</p>
                    <p><i className="fas fa-tint mr-2"></i> - Humidity</p>

                    <p><i className="fas fa-long-arrow-alt-up"></i><i className="fas fa-long-arrow-alt-down"></i> - High/Low Tempreture</p>
                    <p><i className="fab fa-product-hunt mr-1"></i> - Pressure</p>

                    <p><i className="fas fa-wind mr-1"></i> - Wind Speed</p>
                    <p><i className="fas fa-map-signs mr-1"></i> - Wind Direction</p>

                    <p><i className="far fa-eye mr-1"></i> - Visibility</p>
                    <p><i className="fas fa-cloud"></i> - Cloudliness</p>

                    <p><i className="fas fa-sun mr-2"></i> - Sunrise Time in (IST)</p>
                    <p><i className="fas fa-cloud-sun mr-1"></i> - Sunset Time in (IST)</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
