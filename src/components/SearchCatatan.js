import React from "react";
import PropsTypes from 'prop-types';

function SearchCatatan({ kata, onSearch  }){

    return(
        <section className="search-bar">
            <input type="text" placeholder="Cari Judul.." value={kata} onChange={(event) => onSearch(event.target.value)} />
        </section>
    );
};

SearchCatatan.propsTypes = {
    kata: PropsTypes.string.isRequired,
    onSearch: PropsTypes.func.isRequired,
}

export default SearchCatatan;