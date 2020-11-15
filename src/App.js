import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import { SearchContext } from "./context/search-context";
import { useSearch } from "./hooks/search-hook";

import Home from "./Views/Home";
import Result from "./Views/Result";

function App() {
    const {
        searchTerm,
        onChange,
        onSubmit,
        photosList,
        collectionsList,
        topicsList,
        clearSearch,
        lastSearch,
    } = useSearch();

    return (
        <div className='App'>
            <SearchContext.Provider
                value={{
                    searchTerm,
                    onChange,
                    onSubmit,
                    photosList,
                    collectionsList,
                    topicsList,
                    clearSearch,
                    lastSearch,
                }}
            >
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/result' component={Result} />
                        <Redirect to='/' />
                    </Switch>
                </Router>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
