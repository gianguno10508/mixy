import "../assets/css/detail-product.css";
import SliderDetailProduct from "../components/detail-product/slider-detail-product";
import FormAddCart from "../components/detail-product/form-add-cart";
import GET_DETAIL_PRODUCT from "../graphql/detail-product";
import { useQuery } from "@apollo/client";
import Page404 from "./404";
import InformationDetailProduct from "../components/detail-product/information-detail-product";

function DetailProduct() {
  const { loading, error, data } = useQuery(GET_DETAIL_PRODUCT, {
    variables: {
      idProduct: "cHJvZHVjdDozNTQ=",
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <Page404 />;
  if (data) {
    return (
      <div className="detail-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-left-product-details">
              <SliderDetailProduct
                slidesArr={data.product.galleryImages.nodes}
              />
            </div>
            <FormAddCart data={data.product} />
            <InformationDetailProduct data={data.product}/>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailProduct;
