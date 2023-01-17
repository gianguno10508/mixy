import React from 'react';
import BannerLeft from './Banner/BannerLeft';
import BannerRight from './Banner/BannerRight';
import '../../assets/css/banner.css';
import { useQuery } from '@apollo/client';
import HOMEPAGE from '../../graphql/homepage';
function Banner() {
    const { loading, error, data } = useQuery(HOMEPAGE);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) {
        const banner = data.page.homepage.banner;
        const bannerLeft = banner.filter(item => item.isSlider.includes('Yes'));
        const bannerRight = banner.filter(item => item.isSlider.includes('No'));
        return (
            <div className='pos_bannerslide'>
                <div className="container">
                    <div className='row'>
                        <BannerLeft bannerLeft={bannerLeft} />
                        <BannerRight bannerRight={bannerRight} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Banner;