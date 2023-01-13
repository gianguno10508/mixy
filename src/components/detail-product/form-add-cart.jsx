import { Markup } from "interweave";
import { useState } from "react";
import { Link } from "react-router-dom";
import Payment from "../../assets/images/payment.png";
import ReviewStar from "../../root-components/review-star";

const FormAddCart = ({ data }) => {
  const [isActive, setIsActive] = useState(0);
  const [quantity, setQuantity] = useState(1);
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
  // const list = [];
  // if (data.averageRating > 0) {
  //   var star = Math.floor(data.averageRating);
  //   for (let index = 0; index < star; index++) {
  //     list.push(
  //       <li>
  //         <i class="fa-solid fa-star"></i>
  //       </li>
  //     );
  //   }
  // }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stars, setStar] = useState();
  const callback = (payload) => {
    setStar(payload);
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-right-product-details">
      {/* <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <div id="new_comment_form">
            <form id="id_new_comment_form">
              <h2>Write your review</h2>
              <div className="row">
                <div className="product">
                  <img
                    src="https://demo2.posthemes.com/pos_mixy/layout2/55-medium_default/sensations-thai-sweet-chilli-sharing-crisps.jpg"
                    alt="Sensations Thai Sweet Chilli Sharing Crisps"
                  />
                  <div className="product_desc">
                    <p className="product_name">
                      Sensations Thai Sweet Chilli Sharing Crisps
                    </p>
                  </div>
                </div>
                <div className="new_comment_form_content">
                  <div id="new_comment_form_error" className="error">
                    <ul></ul>
                  </div>
                  <ul id="criterions_list">
                      <li>
                        <label>Quality</label>
                        <div className="star_content">
                          <StarRating callback={callback} />
                        </div>
                      </li>
                    </ul>
                  <label for="comment_title">
                    Title for your review<sup className="required">*</sup>
                  </label>
                  <input
                    id="comment_title"
                    name="title"
                    className="form-control"
                    type="text"
                  />
                  <label>
                    Your name<sup className="required">*</sup>
                  </label>
                  <input
                    id="commentCustomerName"
                    className="form-control"
                    name="customer_name"
                    type="text"
                  />

                  <label for="content">
                    Your review<sup className="required">*</sup>
                  </label>
                  <textarea
                    id="content"
                    className="form-control"
                    name="content"
                  ></textarea>
                  <div id="new_comment_form_footer">
                    <input
                      id="id_product_comment_send"
                      className="form-control"
                      name="id_product"
                      type="hidden"
                    />
                    <p className=" required">
                      <sup>*</sup> Required fields
                    </p>
                    <p className="button_comment">
                      <button
                        type="button"
                        className="closefb btn btn-secondary"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={handleClose}
                      >
                        <span aria-hidden="true">Cancel</span>
                      </button>
                      <button
                        id="submitNewMessage"
                        className="btn btn-secondary"
                        name="submitMessage"
                        type="submit"
                      >
                        Send
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal> */}
      <div className="info-detail-product">
        <h1 className="h1 namne_details">{data.name}</h1>
        <div id="product_comments_block_extra" className="no-print">
          <div className="comments_note">
            <div className="star_content">
              <ReviewStar starNumber={data.averageRating} />
            </div>
          </div>
          <ul className="comments_advices">
            <li>
              <Link className="reviews" to={"#product_comments_block_tab"}>
                <i className="fa-regular fa-message"></i>
                Read reviews (<span>{data.commentCount}</span>)
              </Link>
            </li>
            <li>
              <a
                style={{ cursor: "pointer" }}
                className="open-comment-form"
                onClick={handleShow}
              >
                <i class="fa-brands fa-github"></i>
                Write a review
              </a>
            </li>
          </ul>
        </div>
        <div className="product-prices">
          <div className="product-discount">
            <span className="regular-price">
              {data.variations.nodes[isActive].regularPrice}
            </span>
          </div>
          <div className="product-price h5 has-discount">
            <div className="current-price">
              <span>{data.variations.nodes[isActive].salePrice}</span>
              <span className="discount discount-percentage">
                Save{" "}
                {Math.ceil(
                  ((data.variations.nodes[isActive].regularPrice.slice(1) -
                    data.variations.nodes[isActive].salePrice.slice(1)) /
                    100) *
                    100
                )}
                %
              </span>
            </div>
          </div>
        </div>
        <div id="product-description-short-5" className="product-description">
          <Markup content={data.excerpt} />
        </div>
      </div>
      <div className="product-information">
        <div className="product-actions">
          <form id="add-to-cart-or-refresh">
            <div className="product-variants">
              <div className="product-variants-item">
                <span className="control-label">
                  {data.variations.nodes[0].attributes.nodes[0].label}
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
                          <span className={`radio-label`}>{e.description}</span>
                        )}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
                {/* <div className="cart_button">
                  <a id="wishlist_button" href="#" title="Add to my wishlist">
                    <i className="icon-rt-heart2"></i>Add to wishlist
                  </a>
                  <button
                    href="#"
                    className="poscompare-add compare-button js-poscompare-add"
                    data-id_product="5"
                    title="Add to compare"
                  >
                    <i className="icon-rt-repeat-outline"></i>Add to compare
                  </button>
                </div> */}
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
        <div className="payment-detail">
          <img src={Payment} alt="Payment" />
          <p>Guarantee safe &amp; secure checkout</p>
        </div>
      </div>
    </div>
  );
};
export default FormAddCart;
