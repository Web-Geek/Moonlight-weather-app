import React, { createContext, useState, useRef, useEffect } from 'react'
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



// Function to Convert UNIX Time to UTC(Coordinated Universal Time)
function UTC(unix){
    var unixDate = new Date(unix*1000);
    var hours = '0'+unixDate.getHours();
    var minutes = '0'+unixDate.getMinutes();
    return(hours.substr(-2)+':'+minutes.substr(-2));
}

// Creating the Context
export const SearchContext = createContext();
export const SearchContextProvider = (props) => {
    // State for "Input Field"
    const [searchText,setSearchText] = useState('');
    // State for "Fetched Data - Weather Report"
    const [report,setReport] = useState({});
    // State for "City Name"
    const [city,setCity] = useState('Location');
    // State for "Country Name"
    const [country,setCountry] = useState('');
    // State for "Icon"
    const [icon,setIcon] = useState('');
    // State for "Image"
    const [image,setImage] = useState('');
    // State for "Mainmsg"
    const [mainMsg,setMainMsg] = useState('NIL');
    // State for "Tempreture"
    const [tempreture,setTempreture] = useState(0);
    // State for "Description"
    const [desc,setDesc] = useState('Hola, Amigo!');
    // State for "Error Message"
    const [errorMsg,setErrorMsg] = useState(null);
    // State to check if "Loaded"
    const [loaded,setLoaded] = useState(true);
    // State for "Random Number"
    const [keyNumber,setKeyNumber] = useState(0);
    // State for "Random KEY"
    const [random,setRandom] = useState('');
    // Initial Render
    const initialRender = useRef(true);

    // STATES FOR WEATHER REPORT
    const [feelsLike,setFeelsLike] = useState(0)
    const [humidity,setHumidity] = useState(0)
    const [high,setHigh] = useState(0)
    const [low,setLow] = useState(0)
    const [pressure,setPressure] = useState(0)
    const [windSpeed,setWindSpeed] = useState(0)
    const [windDirection,setWindDirection] = useState(0)
    const [visibility,setVisibility] = useState(0)
    const [clouds,setClouds] = useState(0)
    const [sunrise,setSunrise] = useState('00:00')
    const [sunset,setSunset] = useState('00:00')




    // All "UseStates"
    const [tirupattur,setTirupattur] = useState(false)
    const [ny,setNy] = useState(false);

    // "API" objects
    const API = {
        BASE:'https://api.openweathermap.org/data/2.5/',
        KEY:'e1974e6095fd2c789ad2f746ae2a4948',
    }

    //Codes for Tirupattur & NY
    const tirupatturCode = 635601;

    // "OnChange" Handling Function
    function handleChange(event){
        const value = event.target.value
        setSearchText(value)

        //Checking if its "TPT"
        if((value.toUpperCase() === "TIRUPATUR")||
            (value.toUpperCase() === "TIRUPATTUR")||
            (value.toUpperCase() === "THIRUPATUR")||
            (value.toUpperCase() === "THIRUPATTUR"))
        {
            // If its "TPT"
            setTirupattur(true);
            
        }else{
            // If its Not "TPT"
            setTirupattur(false);
        }

        //Checking if its "NY"
        if((value.toUpperCase() === "NEWYORK") || (value.toUpperCase() === "NEW YORK")){
            // If its "NY"
            setNy(true);
        }else{
            setNy(false);
        }
    }
    // "OnSubmit" Handling Function
    function submitHandler(event){
        event.preventDefault();
        // Generating a Random Number
        setKeyNumber(Math.random()*1000)
        setLoaded(prev => !prev)
        // "Fetching the API onSuzmit"

        //          "If its TPT"
        if(tirupattur){
            fetch(`${API.BASE}weather?q=${tirupatturCode}&units=metric&appid=${API.KEY}`)
            .then(res => {
                if(!res.ok){
                    throw Error('No place was found ');
                }
                return(res.json())
            })
            .then(data => {
                setReport(data)
                setErrorMsg(null)
            })
            .catch(err => {
                console.log(err);
            })
        }
        //          "If its NY"
        else if(ny){
            fetch(`${API.BASE}weather?q=new york city&units=metric&appid=${API.KEY}`)
            .then(res => {
                if(!res.ok){
                    throw Error('No place was found ');
                }
                return(res.json())
            })
            .then(data => {
                setReport(data)
                setErrorMsg(null)
            })
            .catch(err => {
                console.log(err);
            })
            setNy(false)
        }
        //          "Thanfully if not TPT & NY"
        else{
            fetch(`${API.BASE}weather?q=${searchText}&units=metric&appid=${API.KEY}`)
            .then(res => {
                if(!res.ok){
                    throw Error('Oops, Place not found');
                }
                return(res.json())
            })
            .then(data => {
                setReport(data)
                setErrorMsg(null)
            })
            .catch(err => {
                setErrorMsg(err.message)
                console.log(err);
                // Setting a RANDOM NUMBER for img-key-prop
                setRandom(keyNumber)
            })
        }
        // Clearing the Input Field after submitting
        setSearchText('');
    }

    // "UseEffect" Hook
    useEffect(()=>{
        if(initialRender.current){
            
            initialRender.current = false;
            setImage(boy)
        }
        else{
            if(errorMsg === null){
                // Changing "Thiruvannamalai" to "Tirupattur"
                if(tirupattur){
                    setCity('Tirupattur')
                }else{
                    setCity(report.name)
                }
                setCountry(report.sys.country)
                setIcon(report.weather[0].icon)
                setMainMsg(report.weather[0].main)
                setTempreture(Math.round(report.main.temp))
                setDesc(report.weather[0].description)

                // Setting the WEATHER REPORT section
                setFeelsLike(Math.round(report.main.feels_like))
                setHumidity(Math.round(report.main.humidity))
                setHigh(Math.round(report.main.temp_max))
                setLow(Math.round(report.main.temp_min))
                setPressure(Math.round(report.main.pressure))
                setWindSpeed(Math.round((report.wind.speed)*3.6))
                setWindDirection(report.wind.deg)
                setVisibility(((report.visibility)/1000).toFixed(1))
                setClouds(report.clouds.all)
                setSunrise(UTC(report.sys.sunrise))
                setSunset(UTC(report.sys.sunset))



                // Setting the "image" State according to the Icon Code
                if(icon === '01d'){
                    setImage(clearD)
                }else if (icon === '01n'){
                    setImage(clearN)
                }
                // "Cloudy"
                else if (icon === '02d'){
                    setImage(cloudyD)
                }else if (icon === '02n'){
                    setImage(cloudyN)
                }
                // "Scattered Clouds"
                else if (icon === '03d'){
                    setImage(Sclouds)
                }else if (icon === '03n'){
                    setImage(Sclouds)
                }
                // "Broken Clouds"
                else if (icon === '04d'){
                    setImage(BcloudsD)
                }else if (icon === '04n'){
                    setImage(BcloudsN)
                }
                // "Shower Rain"
                else if (icon === '09d'){
                    setImage(Srain)
                }else if (icon === '09n'){
                    setImage(Srain)
                }
                // "Rain"
                else if (icon === '10d'){
                    setImage(rainD)
                }else if (icon === '10n'){
                    setImage(rainN)
                }
                // "Storm"
                else if (icon === '11d'){
                    setImage(storm)
                }else if (icon === '11n'){
                    setImage(storm)
                }
                // "Snow"
                else if (icon === '13d'){
                    setImage(snow)
                }else if (icon === '13n'){
                    setImage(snow)
                }
                // "Mist"
                else if (icon === '50d'){
                    setImage(mist)
                }else if (icon === '50n'){
                    setImage(mist)
                }
                // Setting a RANDOM NUMBER for img-key-prop
                setRandom(keyNumber)
            }
        }
    },[report,icon,errorMsg])

    return (
        <SearchContext.Provider 
            value={
                {
                    value1:[searchText,setSearchText],
                    value2:[report,setReport],
                    value3:[errorMsg,setErrorMsg],
                    value4:[tirupattur,setTirupattur],
                    value5:[handleChange],
                    value6:[submitHandler],
                    value7:[initialRender],
                    value8:[city,setCity],
                    value9:[country,setCountry],
                    value10:[icon,setIcon],
                    value11:[image,setImage],
                    value12:[mainMsg,setMainMsg],
                    value13:[tempreture,setTempreture],
                    value14:[desc,setDesc],
                    value15:[loaded,setLoaded],
                    value16:[random,setRandom],

                    //WEATHER REPORT SECTION
                    value17:[feelsLike,setFeelsLike],
                    value18:[humidity,setHumidity],
                    value19:[high,setHigh],
                    value20:[low,setLow],
                    value21:[pressure,setPressure],
                    value22:[windSpeed,setWindSpeed],
                    value23:[windDirection,setWindDirection],
                    value24:[visibility,setVisibility],
                    value25:[clouds,setClouds],
                    value26:[sunrise,setSunrise],
                    value27:[sunset,setSunset],
                }
            }
        >
            {props.children}
        </SearchContext.Provider>
    )
}

