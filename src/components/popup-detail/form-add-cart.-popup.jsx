import { useMutation, useQuery } from "@apollo/client";
import { Markup } from "interweave";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Payment from "../../assets/images/payment.png";
import ADD_TO_CART from "../../graphql/add-to-cart";
import GET_CART from "../../graphql/get-cart";
import { AppContext } from "../../root-components/app-context";
import ReviewStar from "../../root-components/review-star";
import { getFormattedCart } from "../../untils/functions";
import { v4 } from "uuid";


const FormAddCartPopup = ({ data }) => {
  const [isActive, setIsActive] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // console.log(data);
  const handleItemClick = (e, i) => {
    setIsActive(i);
  };
  const handleClickUp = () => {
    setQuantity(quantity + 1);
  };
  const handleClickDown = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stars, setStar] = useState();
  const [requestError, setRequestError] = useState(null);
  const [cart, setCart] = useContext(AppContext);
  const productQtyInput = {
    clientMutationId: v4(), // Generate a unique id.
    productId: 352,
    quantity: 1
  };

  const callback = (payload) => {
    setStar(payload);
  };
  // Get Cart Data.
  const { dataCart, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // console.warn( 'completed GET_CART' );
      console.log(dataCart);
      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(dataCart);

      localStorage.setItem("woo-cart", JSON.stringify(updatedCart));

      // Update cart data in React Context.
      setCart(updatedCart);
    },
    onError: (error) => {
      if (error) {
        console.log(error);
      }
    },
  });

  // Add to Cart Mutation.
  const [
    addToCart,
    { data: addToCartRes, loading: addToCartLoading, error: addToCartError },
  ] = useMutation(ADD_TO_CART, {
    variables: {
      //input: productQtyInput,
      input: {
        productId: 352,
        quantity: 1,
        clientMutationId: "myId",
      },
    },
    onCompleted: () => {
      // If error.
      if (addToCartError) {
        console.log(addToCartError);
        setRequestError(addToCartError.graphQLErrors[0].message);
      }
      console.log(addToCartRes);
      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      refetch();

      // 2. Show View Cart Button
      //setShowViewCart(true);
    },
    onError: (error) => {
      if (error) {
        console.log(error);
        setRequestError(error.graphQLErrors[0].message);
      }
    },
  });

  const handleClick = () => {
    setRequestError(null);
    console.log('asd');
    addToCart();
  };
  let existingCart = localStorage.getItem("woo-cart");
  existingCart = JSON.parse(existingCart);
  // console.log(existingCart);
  // console.log(data);
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-right-product-details">
      <div className="info-detail-product">
        <h1 className="h1 namne_details">{data.name}</h1>
        <div id="product_comments_block_extra" className="no-print">
          <div className="comments_note">
            <div className="star_content">
              <ReviewStar starNumber={data.reviews.averageRating} />reviews
            </div>
          </div>
        </div>
        <div className="product-prices">
          <div className="product-discount">
            <span className="regular-price">
              {data.variations
                ? data.variations.nodes[isActive].regularPrice
                : data.regularPrice}
            </span>
          </div>
          <div className="product-price h5 has-discount">
            <div className="current-price">
              {data.variations ? (
                <span>{data.variations.nodes[isActive].salePrice}</span>
              ) : (
                data.onSale === true ? (
                  <span>{data.salePrice}</span>
                ) : (
                  <span>{data.regularPrice}</span>
                )
              )}
              {
                data.onSale === true ? (
                  <span className="discount discount-percentage">
                    Save{" "}
                    {data.variations
                      ? Math.ceil(
                        ((data.variations.nodes[isActive].regularPrice.slice(1) -
                          data.variations.nodes[isActive].salePrice.slice(1)) /
                          100) *
                        100
                      )
                      : Math.ceil(
                        ((data.regularPrice.slice(1) - data.salePrice.slice(1)) /
                          100) *
                        100
                      )}
                    %
                  </span>
                ) : (
                  null
                )
              }

            </div>
          </div>
        </div>
        <div id="product-description-short-5" className="product-description">
          <Markup content={data.shortDescription} />
        </div>
      </div>
      <div className="product-information">
        <div className="product-actions">
          <p onClick={handleClick}>test</p>
          <form id="add-to-cart-or-refresh">
            {data.variations && (
              <div className="product-variants">
                <div className="product-variants-item">
                  <span className="control-label">
                    {data.variations.nodes[0].slug}
                  </span>
                  <ul id="dimension">
                    {data.variations.nodes.map((e, i) => (
                      <li className="input-container float-xs-left" key={i}>
                        <label>
                          <input
                            className="input-radio"
                            type="radio"
                            name="dimension"
                            onClick={(event) => handleItemClick(event, i)}
                          />
                          {isActive == i ? (
                            <span className={`radio-label checked-radio`}>
                              {e.description}
                            </span>
                          ) : (
                            <span className={`radio-label`}>
                              {e.description}
                            </span>
                          )}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <div className="product-add-to-cart">
              <div className="product-quantity">
                <div className="qty">
                  <div className="input-group bootstrap-touchspin">
                    <input
                      type="text"
                      name="qty"
                      id="quantity_wanted"
                      className="input-group form-control"
                      min="1"
                      aria-label="Quantity"
                      value={quantity}
                      onChange={handleChangeQuantity}
                    />
                    <span className="input-group-btn-vertical">
                      <button
                        className="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                        type="button"
                        onClick={handleClickUp}
                      >
                        <i className="fa-solid fa-angle-up"></i>
                      </button>
                      <button
                        className="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                        type="button"
                        onClick={handleClickDown}
                      >
                        <i class="fa-solid fa-angle-down"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <div className="add">
                  <button
                    className="btn btn-primary add-to-cart"
                    data-button-action="add-to-cart"
                    type="submit"
                  >
                    <i className="material-icons shopping-cart"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="product-additional-info">
              <div className="social-sharing">
                <span>Share</span>
                <ul>
                  <li className="facebook">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="pinterest">
                    <a href="#">
                      <i class="fa-brands fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
export default FormAddCartPopup;
