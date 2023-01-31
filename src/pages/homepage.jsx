import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import BannerHomepage from "../components/homepage/banner-homepage";
import HOMEPAGE from "../graphql/homepage";
import { popularCategories } from "../assets/fakedata/HomeData";
import Banner from "../components/homepage/Banner";
import PopularCategories from "../components/homepage/PopularCategories";
import "../assets/css/home.css";
import PosSpecialProducts from "../components/homepage/PosSpecialProducts";
import PoslistCateProduct from "../components/homepage/PoslistCateProduct";
import BannerTwo from "../components/homepage/BannerTwo";
import BannerBlog from "../components/homepage/BannerBlog";
import Categories from "../root-components/categories";
import PRODUCTS from "../graphql/products";
import CATEGORIES from "../graphql/categories";
const Homepage = () => {
  const [productCategory, setproductCategory] = useState([]);
  // console.log(productCategory);

  const { loading: loadingProduct, error: errorProduct, data: dataProduct } = useQuery(PRODUCTS);
  const { loading: loadingCategory, error: errorCategory, data: dataCategory } = useQuery(CATEGORIES)

  var categories;
  if (loadingCategory) return <p>Loading...</p>;
  if (errorCategory) return <p>Error : {errorCategory.message}</p>;
  if (dataCategory) {
    categories = dataCategory.productCategories.nodes;

  }
  const filterItems = (category) => {

    const newItems = categories.filter((item) =>
      item.name === category);
    setproductCategory(newItems);
  };



  let listDataProductCategory = [];
  if (productCategory !== undefined && productCategory !== null) {
    productCategory.map(p => (
      listDataProductCategory = p.products.nodes
    ))
  }
  console.log(listDataProductCategory);

  var products;
  if (loadingProduct) return <p>Loading...</p>;
  if (errorProduct) return <p>Error : {errorProduct.message}</p>;

  if (dataProduct) {
    products = dataProduct.products.nodes;
    const dataSale = products.filter(ite => ite.onSale == true);
    // console.log(products);
    return (
      <div className="section-home-page">
        <Banner />
        {/* <Categories /> */}
        <PopularCategories slidesToShow={8} />
        <PosSpecialProducts
          slidesToShow={5}
          slidesPerRow={1}
          title={"Deals Of The Days"}
          description={
            "Dont miss this opportunity at a special discount just for this week"
          }
          countdown={true}
          category={false}
          dataProduct={dataSale}
        />
        <PoslistCateProduct
          slidesToShow={4}
          slidesPerRow={1}
          title={"Fresh Vegetables"}
          description={
            "Buy farm fresh fruits and vegetables online at the best prices"
          }
          image={
            "https://demo2.posthemes.com/pos_mixy/layout2/modules/poslistcateproduct/images/thumb-1.jpg"
          }
          countdown={false}
          category={false}
          dataProduct={products}
        />
        <PoslistCateProduct
          slidesToShow={4}
          slidesPerRow={1}
          title={"Fresh Fruit"}
          description={
            "Buy best quality breakfast online from bigbasket stop near you."
          }
          image={
            "https://demo2.posthemes.com/pos_mixy/layout2/modules/poslistcateproduct/images/thumb-2.jpg"
          }
          countdown={false}
          category={false}
          dataProduct={products}
        />

        <BannerTwo />
        {
          listDataProductCategory.length > 0 ? (
            <PoslistCateProduct
              slidesToShow={3}
              slidesPerRow={2}
              title={"Fresh Fruit"}
              description={
                "Buy best quality breakfast online from bigbasket stop near you."
              }
              image={
                "https://demo2.posthemes.com/pos_mixy/layout2/modules/postabcateslider/img/cms.jpg"
              }
              countdown={false}
              category={true}
              dataProduct={listDataProductCategory}
              filterItems={filterItems}
              categories={categories}
            />
          ) : (<PoslistCateProduct
            slidesToShow={3}
            slidesPerRow={2}
            title={"Fresh Fruit"}
            description={
              "Buy best quality breakfast online from bigbasket stop near you."
            }
            image={
              "https://demo2.posthemes.com/pos_mixy/layout2/modules/postabcateslider/img/cms.jpg"
            }
            countdown={false}
            category={true}
            dataProduct={products}
            filterItems={filterItems}
            categories={categories}
          />)
        }


        <BannerBlog />
      </div>
    );
  }
};
export default Homepage;
