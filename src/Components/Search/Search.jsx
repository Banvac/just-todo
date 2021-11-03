import React from 'react';

const Search = ({ setSearchWord }) => {
    return (
        <div>
            <input type="text" placeholder="Search" onChange={ setSearchWord }/>
        </div>
    );
};

export default Search;