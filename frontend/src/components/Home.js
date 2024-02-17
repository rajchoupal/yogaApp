import React from 'react';
import Navigation from './Navigation';
import Listings from './Listings';
import SearchBar from './SearchBar';

function Home() {
    return (
        <div>
            <Navigation />
            <SearchBar />
            <Listings />
        </div>
    );
}

export default Home;