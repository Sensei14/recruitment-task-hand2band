import { createContext } from "react";

export const SearchContext = createContext({
    searchTerm: "",
    onChange: () => {},
    onSubmit: () => {},
    photosList: [],
    collectionsList: [],
    topicsList: [],
    clearSearch: () => {},
    lastSearch: "",
});
