import React from 'react';


const styling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    fontSize: "20px",
}


const SearchBox = ({ onSearchFieldChange }) =>{
    
    return (
        <div style ={styling}>
            <input type="search" placeholder="search" onChange={onSearchFieldChange}/>
        </div>
    )
}

export default SearchBox;