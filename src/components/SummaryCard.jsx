import React, { useContext } from 'react'
import "../components/styles/SummaryCard.css"
import {SearchContext} from "../context/SearchContext"

const SummaryCard = () => {
    // Getting the Context From "SearchContext"
    const {value3,value17,value18,value19,value20,value21,value22,value23,value24,value25,value26,value27} = useContext(SearchContext)
    // Getting the States
    const [errorMsg] = value3
    const [feelsLike] = value17
    const [humidity] = value18
    const [high] = value19
    const [low] = value20
    const [pressure] = value21
    const [windSpeed] = value22
    const [windDirection] = value23
    const [visibility] = value24
    const [clouds] = value25
    const [sunrise] = value26
    const [sunset] = value27


    return (
        <div className="card pt-3 pb-3 pl-2 pr-2 mt-4 mb-4 sCard">
            <p className="wr mb-3">Weather Report</p>
            <div className="b-line"></div>
            <div className="row text-center">

                <div className="col-2 pr-0">
                    <p><i className="fas fa-temperature-low"></i>
                    </p>
                </div>
                <div className="col-4 pr-2">
                    <p className="p-value">
                        {errorMsg === null?feelsLike+"°C":'NIL'}
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fas fa-tint"></i></p>
                </div>
                <div className="col-4 pl-1">
                    <p className="p-value">
                        {errorMsg === null?humidity+"%":'NIL'}
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fas fa-long-arrow-alt-up"></i><i className="fas fa-long-arrow-alt-down"></i></p>
                </div>
                <div className="col-4">
                    <p className="p-value">
                        {errorMsg === null?high+'/'+low+'°C':'NIL'}
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fab fa-product-hunt"></i></p>
                </div>
                <div className="col-4 pl-1">
                    <p className="p-value">
                        {errorMsg === null?pressure+'hPa':'NIL'}
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fas fa-wind"></i></p>
                </div>
                <div className="col-4">
                    <p className="p-value">
                        {errorMsg === null?windSpeed+'km/hr':'NIL'}  
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fas fa-map-signs"></i></p>
                </div>
                <div className="col-4 pl-1">
                    <p className="p-value">
                        {errorMsg === null?windDirection+'°deg':'NIL'}
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="far fa-eye"></i></p>
                </div>
                <div className="col-4">
                    <p className="p-value">
                        {errorMsg === null?visibility+'km':'NIL'}
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fas fa-cloud"></i></p>
                </div>
                <div className="col-4 pl-1">
                    <p className="p-value">
                        {errorMsg === null?clouds+'%':'NIL'}
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fas fa-sun"></i></p>
                </div>
                <div className="col-4">
                    <p className="p-value" style={{letterSpacing:".5px"}}>
                        {errorMsg === null?sunrise:'NIL'}<sub>(IST)</sub>
                    </p> 
                </div>

                <div className="col-2 pr-0">
                    <p><i className="fas fa-cloud-sun"></i></p>
                </div>
                <div className="col-4 pl-1">
                    <p className="p-value" style={{letterSpacing:".5px"}}>
                        {errorMsg === null?sunset:'NIL'}<sub>(IST)</sub>
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default SummaryCard
