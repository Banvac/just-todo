import React from 'react';

const Filter = ({ filterBy, changeFilter }) => {
    return (
        <div className="filter">
            <label>
                Filter:
                <select value={ filterBy } onChange={ changeFilter }>
                    <option value="">all</option>
                    <option value="important">important</option>
                    <option value="done">done</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;