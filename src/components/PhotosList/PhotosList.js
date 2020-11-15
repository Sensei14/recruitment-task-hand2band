import React, { useContext, useEffect, useState } from "react";
import Photo from "../Photo/Photo";

import Masonry from "react-masonry-css";

import "./PhotosList.css";

import { SearchContext } from "../../context/search-context";

const PhotosList = ({ photos, pickPhoto }) => {
    const search = useContext(SearchContext);

    if (!photos || photos.length === 0) {
        return <div>No images found.</div>;
    }

    const photosList = photos.map((photo) => (
        <Photo key={photo.id} data={photo} pickPhoto={pickPhoto} />
    ));

    return (
        <div className='photos-list'>
            <Masonry
                breakpointCols={{ default: 3, 1250: 2, 850: 1 }}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {photosList}
            </Masonry>
        </div>
    );
};

export default PhotosList;
