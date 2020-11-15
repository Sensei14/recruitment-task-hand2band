import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../../context/search-context";

import "./RelatedTerms.css";

const RelatedTerms = (props) => {
    const search = useContext(SearchContext);

    const history = useHistory();

    if (search.collectionsList.length === 0 && search.searchTerm >= 3) {
        return <div className='related-terms'>No results found.</div>;
    }

    const pickTerm = (value) => {
        search.onChange(value);

        search.onSubmit();

        props.onPick();

        history.push("/result");
    };

    const terms = search.collectionsList.map((term) => (
        <div
            key={term.id}
            className='related-term'
            onClick={() => pickTerm(term.title)}
        >
            {term.title}
        </div>
    ));

    return (
        <div className={`related-terms related-terms--${props.class}`}>
            {terms}
        </div>
    );
};

export default RelatedTerms;
