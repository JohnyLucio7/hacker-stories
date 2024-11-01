import React from "react";

const LastSearches = ({ lastSearches, onLastSearch }) => (
    <>
        {lastSearches.map((searchTerm, index) => (
            <button
                key={searchTerm + index}
                type='button'
                onClick={() => onLastSearch(searchTerm)}
                className='button buttonSmall ml'>
                {searchTerm}
            </button>
        ))}
    </>
);

export { LastSearches };

