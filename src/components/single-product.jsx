import '../assets/css/single-product.css';
const SingleProduct = () => {
  return (
    <div className="item-product">
      <article
        className="product-miniature js-product-miniature style_product3"
      >
        <div className="img_block">
        <img class="first-image ls-is-cached lazyloaded" data-src="https://demo2.posthemes.com/pos_mixy/layout2/42-home_default/whitworths-apricots-snack-pack-300g.jpg" src="https://demo2.posthemes.com/pos_mixy/layout2/42-home_default/whitworths-apricots-snack-pack-300g.jpg" alt="Whitworths Apricots Snack..." data-full-size-image-url="https://demo2.posthemes.com/pos_mixy/layout2/42-large_default/whitworths-apricots-snack-pack-300g.jpg"/>
          <ul className="add-to-links">
            <li>
              <a
                className="addToWishlist"
                href="#"
              >
                <span>Add to wishlist</span>
              </a>
            </li>
            <li className="compare">
              <a
                href="#"
                className="poscompare-add compare-button js-poscompare-add"
                title="Add to compare"
              >
                <span>Add to compare</span>
              </a>
            </li>
            <li className="quick-view">
              <a
                className="quick_view"
                href="#"
                title="Quick view"
              >
                <span>Quick view</span>
              </a>
            </li>
            <li className="cart">
              <div className="product-add-to-cart">
                <form
                  method="post"
                  className="add-to-cart-or-refresh"
                >
                  <input
                    type="hidden"
                    name="token"
                    value="0ffd2a30ac8aebc826ace57e0a6e88ab"
                  />
                  <input
                    type="hidden"
                    name="id_product"
                    value="2"
                    className="product_page_product_id"
                  />
                  <input type="hidden" name="qty" value="1" />
                  <button
                    className="button ajax_add_to_cart_button add-to-cart btn-default"
                    data-button-action="add-to-cart"
                    type="submit"
                  >
                    Add to cart
                  </button>
                </form>
              </div>
            </li>
          </ul>

          <ul className="product-flag">
            <li className="discount">
              <span>-20%</span>
            </li>
            <li className="new">
              <span>New</span>
            </li>
          </ul>

          <div className="product-price-and-shipping-top">
            <span className="discount-percentage discount-product">-20%</span>
          </div>
        </div>
        <div className="product_desc match_height">
          <div className="hook-reviews">
            <div
              className="comments_note"
            >
              <div className="star_content clearfix">
                <span className="rating_star"></span>
              </div>
              <span className="nb-comments">
                <span>2</span> Review(s)
              </span>
            </div>
          </div>
          <h3>
            <a
              href="https://demo2.posthemes.com/pos_mixy/layout2/en/fresh-food/2-9-whitworths-apricots-snack-pack-300g.html#/1-size-100g"
              className="product_name "
              title="Whitworths Apricots Snack Pack 300g"
            >
              Whitworths Apricots Snack Pack 300g
            </a>
          </h3>

          <div className="product-price-and-shipping">
            <span className="sr-only">Regular price</span>
            <span className="regular-price">$39.90</span>

            <span className="sr-only">Price</span>
            <span className="price price-sale">
              $31.92
            </span>
          </div>

          <div className="variant-links"></div>
          <div className="countdown">
            <div className="title_countdown">Hurry Up! Offers ends in:</div>
            <div
              className="time_count_down"
            >
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
            </div>
          </div>
          <span id="future_date_10_2" className="id_countdown"></span>
        </div>
      </article>
    </div>
  );
};

export default SingleProduct;
