import React from "react";

import SearchInput from "../components/SearchInput/SearchInput";

import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <div>
                    <h1>Unsplash</h1>
                    <p>
                        The internet's source of{" "}
                        <a href='https://unsplash.com/license'>
                            freely-usable images
                        </a>
                        .
                    </p>
                    <p>Powered by creators everywhere.</p>
                </div>
                <SearchInput class='home' />
                <div className='home__trending'>
                    Trending: flower, wallpapers, backgrounds, happy, love
                </div>
            </div>
        </div>
    );
};

export default Home;
