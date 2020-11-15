import { useState } from "react";
import { config } from "../config/config";

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [photosList, setPhotosList] = useState([]);
    const [collectionsList, setCollectionList] = useState([]);
    const [topicsList, setTopicsList] = useState([]);
    const [lastSearch, setLastSearch] = useState("");

    const onChange = (value) => {
        setSearchTerm(value);

        setTimeout(() => fetchCollections(value), 200);
    };

    const fetchCollections = async (value) => {
        if (value.length >= 3) {
            const collectionsResponse = await fetch(
                `${config.api_url}/search/collections?query=${value}&per_page=5`,
                {
                    headers: {
                        Authorization: `Client-ID ${config.access_key}`,
                    },
                }
            );

            const collectionsResponseData = await collectionsResponse.json();

            setCollectionList(collectionsResponseData.results);
        } else {
            setCollectionList([]);
        }
    };

    const onSubmit = async () => {
        try {
            const photosResponse = await fetch(
                `${config.api_url}/search/photos?query=${searchTerm}&per_page=100`,
                {
                    headers: {
                        Authorization: `Client-ID ${config.access_key}`,
                    },
                }
            );
            const photosResponseData = await photosResponse.json();

            setPhotosList(photosResponseData.results);

            const topicsResponse = await fetch(`${config.api_url}/topics`, {
                headers: {
                    Authorization: `Client-ID ${config.access_key}`,
                },
            });

            const topicsResponseData = await topicsResponse.json();

            setTopicsList(topicsResponseData);

            setLastSearch(searchTerm);
        } catch (error) {}
    };

    const clearSearch = () => {
        setSearchTerm("");
        setCollectionList([]);
    };

    const fetchPhoto = async (id) => {
        try {
            const response = await fetch(`${config.api_url}/photos/${id}`, {
                headers: {
                    Authorization: `Client-ID ${config.access_key}`,
                },
            });
            const responseData = await response.json();

            console.log(id);

            return responseData;
        } catch (error) {}
    };
    return {
        searchTerm,
        onChange,
        onSubmit,
        photosList,
        collectionsList,
        topicsList,
        clearSearch,
        lastSearch,
        fetchPhoto,
    };
};
