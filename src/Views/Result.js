import React, { useContext, useEffect, useState } from "react";

import SearchInput from "../components/SearchInput/SearchInput";
import PhotosList from "../components/PhotosList/PhotosList";
import Tags from "../components/Tags/Tags";
import Backdrop from "../components/Backdrop/Backdrop";
import Modal from "../components/Modal/Modal";

import { SearchContext } from "../context/search-context";

import "./Result.css";

const Result = () => {
    const search = useContext(SearchContext);

    const [photos, setPhotos] = useState([]);
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState("");
    const [pickedPhoto, setPickedPhoto] = useState();

    const onClose = () => {
        setPickedPhoto(null);
    };

    const pickPhoto = (photo) => {
        setPickedPhoto(photo);
    };

    useEffect(() => {
        setTitle(search.searchTerm);
        setPhotos(search.photosList);
        setTags(search.topicsList);
    }, [search.searchTerm, search.photosList, search.topicsList]);

    console.log(pickedPhoto);

    return (
        <>
            <Modal
                show={!!pickedPhoto}
                pickedPhoto={pickedPhoto}
                onClose={onClose}
            />
            <div className='result'>
                <SearchInput class='result' />
                <h1>{title}</h1>

                <Tags tags={tags} />
                <PhotosList photos={photos} pickPhoto={pickPhoto} />
            </div>
        </>
    );
};

export default Result;
