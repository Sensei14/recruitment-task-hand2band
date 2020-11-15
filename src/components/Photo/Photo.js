import React from "react";

import "./Photo.css";

const Photo = ({ data: { urls, id }, pickPhoto }) => {
    return (
        <div className='photo'>
            <img
                src={urls.regular}
                alt='unsplash api photo'
                onClick={() => {
                    pickPhoto(id);
                }}
            />
            <div className='photo__tags'></div>
        </div>
    );
};

export default Photo;
