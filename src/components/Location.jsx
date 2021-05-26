import React, { useContext,} from 'react'
import { SearchContext } from '../context/SearchContext'

const Location = () => {
    const {value3,value8,value9} = useContext(SearchContext);
    const [errorMsg] = value3
    const [city] = value8;
    const [country] = value9;


    return (
        <div className="location pt-4">
            <h1 className="country">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {errorMsg === null ? city:'Location,'}
                {errorMsg === null ? (', '+country):''}
            </h1>
        </div>
    )
}

export default Location
