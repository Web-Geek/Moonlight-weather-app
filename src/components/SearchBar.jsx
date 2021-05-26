import React, { useContext } from 'react'
import "./styles/SearchBar.css" //Importing the Stylesheet...
import { SearchContext } from '../context/SearchContext';


const SearchBar = () => {
    // Getting the Values from "Contexts/SearchContext"
    const {value1,value3,value5,value6} = useContext(SearchContext)
    // Setting the States from the "Context"
    const [searchText] = value1
    const [errorMsg] = value3
    const [handleChange] = value5;
    const [submitHandler] = value6;



    return (
        <div className="search-bar mt-3 mb-4">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input
                        type="text" 
                        className="form-control search-input"
                        placeholder=" Search for a City..."
                        onChange={handleChange}
                        value={searchText}
                        spellCheck="false"
                        autoComplete="off"
                        required
                    />
                    <button className="btn btn-primary search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <p className="text-center err-msg">
                {errorMsg !== null && (<i className="far fa-frown sad"></i>)}
                {errorMsg===null?null:errorMsg}
            </p>
        </div>
    )
}

export default SearchBar;
