import React,{ useContext } from 'react'
import { SearchContext } from "../context/SearchContext"
import "../components/styles/ReportCard.css"
import error from "../assets/images/error.svg"


function caps(string){
    var firstLetter = string[0].toUpperCase() + string.substring(1);
    return firstLetter; 
}

const ReportCard = () => {
    // Getting the Values from "Contexts/SearchContext"
    const {value3,value16,value11,value12,value13,value14,value15} = useContext(SearchContext)
    // Getting the "Error Msg" State from "Context"
    const [errorMsg] = value3;
    // Getting the "Image SRC" State from the "Context"
    const [image] = value11;
    // Getting the "MainMsg" State from "Context"
    const [mainMsg] = value12;
    // Getting the "Tempreture" State from "Context"
    const [tempreture] = value13;
    // Getting the "Decription" State from "Context"
    const [desc] = value14;
    // Getting the Is "Loaded" State from "Context"
    const [loaded,setLoaded] = value15;
    // Getting the "Random" - "for KEY prop for the image.. to trigger Animation @ every Re-render"
    const [random] = value16;


    function loadHandler(){
        setLoaded(true)
    }
    
    return (
        <div className="card p-3 rcard">
            {!loaded &&                     
                (<div className="loader-div">
                    <div className="img-loader"></div>
                </div>)
            }
            <div className="row">
                <div className="col-7 pr-2">
                    {errorMsg === null?(<img onLoad={loadHandler} src={image} key={random} alt="Icon" className="image-fluid icon w-100" />)
                    :(<img onLoad={loadHandler} src={error} key={random} alt="Icon" className="image-fluid icon w-100" />)}
                </div>
                <div className="col-5 pl-2">
                    {errorMsg === null?(<p className="mb-0">{mainMsg}</p>):(<p className="mb-0">NIL</p>)}
                    {errorMsg === null?(<h1 className="deg">{tempreture}</h1>):(<h1 className="deg">0</h1>)}
                    <h4 className="c">°C</h4>
                </div>
            </div>
            {errorMsg === null?(<p className="mb-1 description">"{caps(desc)}"</p>):(<p className="mb-1 description">"NIL"</p>)}
        </div>
    )
}

export default ReportCard
