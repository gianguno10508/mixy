import { Markup } from 'interweave';
import '../assets/css/single-product-copy.css';
const SingleProductCopy = ({ countdown, showGird, data }) => {
  return (
    <div className="item-product">
      <article
        className={`product-miniature ${showGird == 'list' ? 'row ' : ''}`}
      >
        <div className={`img_block ${showGird == 'list' ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}`}>
          {data.featuredImage.node &&
            <img className="first-image" src={data.featuredImage.node.sourceUrl} alt="" />
          }
          {
            data.galleryImages.nodes &&
            <img className="second-image" src={data.galleryImages.nodes[3].sourceUrl} alt="" />
          }
          <ul className={`add-to-links ${showGird == 'list' ? 'links-top' : ''}`}>
            <li>
              <a
                className={`addToWishlist `}
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
            {showGird == 'list' ?
              (<li className="cart" style={{ display: 'none' }}>
                <div className="product-add-to-cart">
                  <button
                    className="button ajax_add_to_cart_button add-to-cart btn-default"
                    data-button-action="add-to-cart"
                    type="submit"
                  ><i className="fa-solid fa-bag-shopping"></i>
                  </button>
                </div>
              </li>
              ) : (<li className="cart" style={{ display: 'block' }}>
                <div className="product-add-to-cart">
                  <button
                    className="button ajax_add_to_cart_button add-to-cart btn-default"
                    data-button-action="add-to-cart"
                    type="submit"
                  ><i className="fa-solid fa-bag-shopping"></i>
                  </button>
                </div>
              </li>)
            }

          </ul>

          <ul className="product-flag">
            <li className="new">
              <span>New</span>
            </li>
          </ul>

          <div className="product-price-and-shipping-top">
            {
              data.salePrice ? (
                <span className="discount-percentage">{Math.floor(100 - (data.salePrice.slice(1) / data.regularPrice.slice(1)) * 100)}%</span>
              ) : null
            }

          </div>
        </div>
        <div className={`product_desc ${showGird == 'list' ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : ''}`}>
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
              {data.name}
            </a>
          </h3>

          <div className="product-price-and-shipping">
            <span className="regular-price">{data.regularPrice}</span>
            <span className="price price-sale"> {data.salePrice}</span>
          </div>
          {showGird == 'list' &&
            <div className="product-content">
              <Markup content={data.shortDescription} />
            </div>
          }
          {showGird == 'list' &&
            <button className="button-list" type="submit">
              Add to cart
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          }
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
      </article >

    </div >
  );
};

export default SingleProductCopy;
