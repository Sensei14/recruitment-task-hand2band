import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { SearchContext } from "../../context/search-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import RelatedTerms from "../RelatedTerms/RelatedTerms";

import "./SearchInput.css";

const SearchInput = (props) => {
    const search = useContext(SearchContext);
    const [focus, setFocus] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        search.onSubmit();

        setFocus(false);

        history.push("/result");
    };

    return (
        <form
            className={`search-form search-form--${props.class}`}
            onSubmit={handleSubmit}
        >
            <button className='search-btn confirm-btn'>
                <FontAwesomeIcon icon={faSearch} color='#777' size='2x' />
            </button>
            <input
                type='text'
                className='search-input'
                placeholder='Search free high-resolution photos'
                value={search.searchTerm}
                onChange={(e) => search.onChange(e.target.value)}
                onFocus={() => setFocus(true)}
            />
            <button
                className='search-btn cancel-btn'
                type='button'
                onClick={search.clearSearch}
            >
                <FontAwesomeIcon icon={faTimes} color='#777' size='2x' />
            </button>
            {focus && (
                <RelatedTerms
                    onPick={() => setFocus(false)}
                    class={props.class}
                />
            )}
        </form>
    );
};

export default SearchInput;
