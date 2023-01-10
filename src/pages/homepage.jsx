import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import BannerHomepage from "../components/homepage/banner-homepage";
import HOMEPAGE from "../graphql/homepage";
import { popularCategories } from '../assets/fakedata/HomeData';
import Banner from '../components/homepage/Banner';
import PopularCategories from '../components/homepage/PopularCategories';
import '../assets/css/home.css';
import PosSpecialProducts from "../components/homepage/PosSpecialProducts";
import PoslistCateProduct from "../components/homepage/PoslistCateProduct";
import BannerTwo from "../components/homepage/BannerTwo";
import BannerBlog from "../components/homepage/BannerBlog";
const Homepage = () => {
  // const { loading, error, data } = useQuery(HOMEPAGE);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  // if (data) {
  //   const datab = data.page.homepage.banner
  //   console.log(datab);
  return (
    <div className='section-home-page'>

      {/* {datab.filter(ite => ite.isSlider.includes('Yes')).map(item => (
          <p>{item.title}</p>
        ))
        } */}
      {/* <BannerHomepage banner={data.page.homepage.banner} /> */}
      <Banner />
      <PopularCategories popularCategories={popularCategories} slidesToShow={8} />
      <PosSpecialProducts
        slidesToShow={5}
        slidesPerRow={1}
        title={'Deals Of The Days'}
        description={'Dont miss this opportunity at a special discount just for this week'}
        countdown={true}
        category={false}
      />
      <PoslistCateProduct
        slidesToShow={4}
        slidesPerRow={1}
        title={'Fresh Vegetables'}
        description={'Buy farm fresh fruits and vegetables online at the best prices'}
        image={'https://demo2.posthemes.com/pos_mixy/layout2/modules/poslistcateproduct/images/thumb-1.jpg'}
        countdown={false}
        category={false}
      />
      <PoslistCateProduct
        slidesToShow={4}
        slidesPerRow={1}
        title={'Fresh Fruit'}
        description={'Buy best quality breakfast online from bigbasket stop near you.'}
        image={'https://demo2.posthemes.com/pos_mixy/layout2/modules/poslistcateproduct/images/thumb-2.jpg'}
        countdown={false}
        category={false}
      />

      <BannerTwo />
      <PoslistCateProduct
        slidesToShow={4}
        slidesPerRow={2}
        title={'Fresh Fruit'}
        description={'Buy best quality breakfast online from bigbasket stop near you.'}
        image={'https://demo2.posthemes.com/pos_mixy/layout2/modules/postabcateslider/img/cms.jpg'}
        countdown={false}
        category={true}
      />


      <BannerBlog />

    </div>
  );
  // }
};
export default Homepage;
