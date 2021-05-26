import React from 'react'
// For "Clear Sky"
import clearD from "../assets/images/sun.svg"
import clearN from "../assets/images/night.svg"
// For "Cloudy Sky"
import cloudyD from "../assets/images/cloudy.svg"
import cloudyN from "../assets/images/sky.svg"
// For "Scaterred Clouds"
import Sclouds from "../assets/images/clouds.png"
// For "Broken Clouds"
import BcloudsD from "../assets/images/cumulus.svg"
import BcloudsN from "../assets/images/cumulusN.svg"
// For "Shower Rain"
import Srain from "../assets/images/rain.svg"
// For "Rain"
import rainD from "../assets/images/storm.svg"
import rainN from "../assets/images/heavy.svg"
// For "Thunder Storm"
import storm from "../assets/images/heavy.svg"
// For "Snow"
import snow from "../assets/images/snowflake.svg"
// For "Mist"
import mist from "../assets/images/mist.png"
// For "Cute Boy"
import boy from "../assets/images/boy.svg"
// For "Error Boy"
import error from "../assets/images/error.svg"

const ImagePreloader = () => {

    return (
        <div className="img-preload">
            <img src={cloudyD} className="img-fluid"  alt="preload-img" />
            <img src={cloudyN} className="img-fluid" alt="preload-img" />
            <img src={clearD} className="img-fluid" alt="preload-img" />
            <img src={clearN} className="img-fluid" alt="preload-img" />
            <img src={Sclouds} className="img-fluid" alt="preload-img" />
            <img src={BcloudsD} className="img-fluid" alt="preload-img" />
            <img src={BcloudsN} className="img-fluid" alt="preload-img" />
            <img src={Srain} className="img-fluid" alt="preload-img" />
            <img src={rainD} className="img-fluid" alt="preload-img" />
            <img src={rainN} className="img-fluid" alt="preload-img" />
            <img src={storm} className="img-fluid" alt="preload-img" />
            <img src={snow} className="img-fluid" alt="preload-img" />
            <img src={mist} className="img-fluid" alt="preload-img" />
            <img src={boy} className="img-fluid" alt="preload-img" />
            <img src={error} className="img-fluid" alt="preload-img" />
        </div>
    )
}

export default ImagePreloader
