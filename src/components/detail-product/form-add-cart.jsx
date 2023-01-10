import { Markup } from "interweave";
const FormAddCart = ({ data }) => {
  console.log(data);
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-right-product-details">
      <div className="info-detail-product">
        <h1 className="h1 namne_details">{data.name}</h1>
        <div id="product_comments_block_extra" className="no-print">
          <div className="comments_note">
            <div className="star_content">
              <span className="rating_star"></span>
            </div>
          </div>
          <ul className="comments_advices">
            <li>
              <a href="#" className="reviews">
                <i className="fa-regular fa-message"></i>
                Read reviews (<span>{data.commentCount}</span>)
              </a>
            </li>
            <li>
              <a className="open-comment-form">
              <i class="fa-brands fa-github"></i>
                Write a review
                </a>
            </li>
          </ul>
        </div>
        <div className="product-prices">
          <div className="product-discount">
            <span className="regular-price">$49.00</span>
          </div>
          <div className="product-price h5 has-discount">
            <div className="current-price">
              <span content="46.55">$46.55</span>
              <span className="discount discount-percentage">Save 5%</span>
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
                <span className="control-label">{data.variations.nodes[0].attributes.nodes[0].label}</span>
                <ul id="dimension">
                  {data.variations.nodes.map((e, i) => (
                    <li className="input-container float-xs-left">
                      <label>
                        <input
                          className="input-radio"
                          type="radio"
                          name="dimension"
                        />
                        <span className="radio-label">{e.description}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="product-add-to-cart">
              <span className="control-label">Quantity</span>
              <div className="product-quantity">
                <div className="qty">
                  <div className="input-group bootstrap-touchspin">
                    <span className="input-group-addon bootstrap-touchspin-prefix"></span>
                    <input
                      type="text"
                      name="qty"
                      id="quantity_wanted"
                      className="input-group form-control"
                      min="1"
                      aria-label="Quantity"
                    />
                    <span className="input-group-btn-vertical">
                      <button
                        className="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                        type="button"
                      >
                        <i className="material-icons touchspin-up"></i>
                      </button>
                      <button
                        className="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                        type="button"
                      >
                        <i className="material-icons touchspin-down"></i>
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
                <div className="cart_button">
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
                </div>
              </div>
            </div>

            <div className="product-additional-info">
              <div className="social-sharing">
                <span>Share</span>
                <ul>
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2Fen%2Ffresh-food%2F5-sensations-thai-sweet-chilli-sharing-crisps.html"
                      title="Share"
                      target="_blank"
                    >
                      Share
                    </a>
                  </li>
                  <li className="twitter">
                    <a
                      href="https://twitter.com/intent/tweet?text=Sensations+Thai+Sweet+Chilli+Sharing+Crisps https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2Fen%2Ffresh-food%2F5-sensations-thai-sweet-chilli-sharing-crisps.html"
                      title="Tweet"
                      target="_blank"
                    >
                      Tweet
                    </a>
                  </li>
                  <li className="pinterest">
                    <a
                      href="https://www.pinterest.com/pin/create/button/?media=https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2F55%2Fsensations-thai-sweet-chilli-sharing-crisps.jpg&amp;url=https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2Fen%2Ffresh-food%2F5-sensations-thai-sweet-chilli-sharing-crisps.html"
                      title="Pinterest"
                      target="_blank"
                    >
                      Pinterest
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div className="payment-detail">
          <img src="/pos_mixy/layout2/img/cms/payment.png" alt="" />
          <p>Guarantee safe &amp; secure checkout</p>
        </div>
      </div>
    </div>
  );
};
export default FormAddCart;
