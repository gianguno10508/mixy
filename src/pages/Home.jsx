import React from 'react';
import '../assets/css/home.css';
import { popularCategories } from '../assets/fakedata/HomeData';
import Banner from '../components/homepage/Banner';
import PopularCategories from '../components/homepage/PopularCategories';
function Home() {
    return (
        <div className='section-home-page'>
            <Banner />
            <PopularCategories popularCategories={popularCategories} />

        </div>
    );
}

export default Home;