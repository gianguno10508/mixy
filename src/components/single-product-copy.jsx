import '../assets/css/single-product-copy.css';
const SingleProductCopy = ({ countdown }) => {
  return (
    <div className="item-product">
      <article
        className="product-miniature"
      >
        <div className="img_block">
          <img class="first-image" data-src="https://demo2.posthemes.com/pos_mixy/layout2/42-home_default/whitworths-apricots-snack-pack-300g.jpg" src="https://demo2.posthemes.com/pos_mixy/layout2/42-home_default/whitworths-apricots-snack-pack-300g.jpg" alt="Whitworths Apricots Snack..." data-full-size-image-url="https://demo2.posthemes.com/pos_mixy/layout2/42-large_default/whitworths-apricots-snack-pack-300g.jpg" />
          <img class="second-image" data-src="https://demo2.posthemes.com/pos_mixy/layout2/42-home_default/whitworths-apricots-snack-pack-300g.jpg" src="https://demo2.posthemes.com/pos_mixy/layout2/72-home_default/organic-greek-cantaloupe-melon-min-weight-100g.jpg" alt="Whitworths Apricots Snack..." data-full-size-image-url="https://demo2.posthemes.com/pos_mixy/layout2/42-large_default/whitworths-apricots-snack-pack-300g.jpg" />
          <ul className="add-to-links">
            <li>
              <a
                className="addToWishlist"
                href="#"
              >
                <i className="fa-solid fa-heart"></i>
              </a>
            </li>
            <li className="compare">
              <a
                href="#"
                className="poscompare-add"
              ><i className="fa-solid fa-retweet"></i>
              </a>
            </li>
            <li className="quick-view">
              <a
                className="quick_view"
                href="#"
              ><i className="fa-solid fa-eye"></i>
              </a>
            </li>
            <li className="cart">
              <div className="product-add-to-cart">
                <button
                  className="button ajax_add_to_cart_button add-to-cart btn-default"
                  data-button-action="add-to-cart"
                  type="submit"
                ><i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
            </li>
          </ul>

          <ul className="product-flag">
            <li className="new">
              <span>New</span>
            </li>
          </ul>

          <div className="product-price-and-shipping-top">
            <span className="discount-percentage">-20%</span>
          </div>
        </div>
        <div className="product_desc">
          <div className="hook-reviews">
            <div className="comments_note" >
              <div className="star_content">
                <span className="rating_star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <h3>
            <a
              href="#"
              className="product_name "
              title="Whitworths Apricots Snack Pack 300g"
            >
              Whitworths Apricots Snack Pack 300g
            </a>
          </h3>

          <div className="product-price-and-shipping">
            <span className="regular-price">$39.90</span>
            <span className="price price-sale"> $31.92</span>
          </div>
          {countdown === true &&
            <div className="countdown">
              <div className="title_countdown">Hurry Up! Offers ends in:</div>
              {/* <div className="time_count_down">
              <span
                className="future_date_10_2 time_countdown is-countdown"
              >
                <span className="countdown-row countdown-show4">
                  <span className="countdown-section">
                    <span className="countdown-amount">1048</span>
                    <span className="countdown-period">Days</span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount">7</span>
                    <span className="countdown-period">Hours</span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount">30</span>
                    <span className="countdown-period">Mins</span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount">6</span>
                    <span className="countdown-period">Secs</span>
                  </span>
                </span>
              </span>
            </div> */}
            </div>
          }
          <span id="future_date_10_2" className="id_countdown"></span>
        </div>
      </article>

    </div>
  );
};

export default SingleProductCopy;
