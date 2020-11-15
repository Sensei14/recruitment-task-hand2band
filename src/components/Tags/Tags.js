import React, { useContext } from "react";

import Carousel, { consts } from "react-elastic-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { SearchContext } from "../../context/search-context";

import "./Tags.css";

const Tags = ({ tags }) => {
    const search = useContext(SearchContext);

    if (!tags || tags.length === 0) {
        return <div>No tags found.</div>;
    }

    const pickTerm = (value) => {
        search.onChange(value);

        search.onSubmit();
    };

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer =
            type === consts.PREV ? (
                <FontAwesomeIcon icon={faAngleLeft} size='2x' />
            ) : (
                <FontAwesomeIcon icon={faAngleRight} size='2x' />
            );
        return (
            <button onClick={onClick} disabled={isEdge} className='arrow-btn'>
                {pointer}
            </button>
        );
    };

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 550, itemsToShow: 3, itemsToScroll: 2 },
        { width: 800, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1000, itemsToShow: 6, itemsToScroll: 2 },
        { width: 1400, itemsToShow: 8, itemsToScroll: 2 },
    ];

    const tagsList = tags.map((tag) => (
        <div
            className='tag'
            key={tag.id}
            onClick={() => {
                pickTerm(tag.slug);
            }}
        >
            {tag.slug}
        </div>
    ));

    return (
        <div className='tags'>
            <Carousel
                breakPoints={breakPoints}
                pagination={false}
                renderArrow={myArrow}
            >
                {tagsList}
            </Carousel>
        </div>
    );
};

export default Tags;
