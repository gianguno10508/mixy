import { Markup } from 'interweave';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import '../assets/css/single-product-copy.css';
import Popupdetail from './popup-detail/popupdetail';
const SingleProductCopy = ({ countdown, showGird, data }) => {
  // console.log(data.dateOnSaleTo);
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [quickView, setquickView] = useState([]);

  let interval;
  const time_count_down = data.dateOnSaleTo;
  const startTimer = () => {
    const countDownDate = new Date(time_count_down).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <div className="item-product">
      <article
        className={`product-miniature ${showGird == 'list' ? 'row ' : ''}`}
      >
        <div className={`img_block ${showGird == 'list' ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}`}>
          {data.featuredImage.node &&
            <Link to={`/detail-product/${data.id}`}><img className="first-image" src={data.featuredImage.node.sourceUrl} alt="" /></Link>
          }
          {
            data.galleryImages.nodes &&
            <Link to={`/detail-product/${data.id}`}><img className="second-image" src={data.galleryImages.nodes[3].sourceUrl} alt="" /></Link>
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
            {/* <li className="compare">
              <a
                href="#"
                className="poscompare-add"
              ><i className="fa-solid fa-retweet"></i>
              </a>
            </li> */}
            <li className="quick-view">
              <Popup
                className='check-box'
                modal
                trigger={
                  <p
                    style={{ cursor: "pointer" }}
                    href="#"
                    className="check-box-list"
                  >
                    <a href='#' className='hover-icon-check' onClick={() => {
                      setquickView((arr) => [...arr, data]);
                    }}><i className="fa-solid fa-eye"></i></a>
                  </p>
                }
              >
                <Popupdetail item={quickView} />
              </Popup>
            </li>
            {/* <li className="quick-view">
              <a
                className="quick_view"
                href="#"
              ><i className="fa-solid fa-eye"></i>
              </a>
            </li> */}
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

            {/* {
              data.salePrice ? (
                <span className="discount-percentage">{Math.floor(100 - (data.salePrice.slice(1) / data.regularPrice.slice(1)) * 100)}%</span>
              ) : (null)
            } */}
            {
              data.variations ? (
                <span className="discount-percentage">{Math.floor(100 - (data.variations.nodes[0].salePrice.slice(1) / data.variations.nodes[0].regularPrice.slice(1)) * 100)}%</span>
              ) : (
                data.salePrice ? (
                  <span className="discount-percentage">{Math.floor(100 - (data.salePrice.slice(1) / data.regularPrice.slice(1)) * 100)}%</span>
                ) : (null)
              )

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
            <Link
              to={`/detail-product/${data.id}`}
              className="product_name "
              title="Whitworths Apricots Snack Pack 300g"
            >
              {data.name}
            </Link>
          </h3>
          {
            data.variations ? (
              <div className="product-price-and-shipping">
                <span className="regular-price">{data.variations.nodes[0].regularPrice}</span>
                <span className="price price-sale"> {data.variations.nodes[0].salePrice}</span>
              </div>
            ) : (
              data.salePrice ? (
                <div className="product-price-and-shipping">
                  <span className="regular-price">{data.regularPrice}</span>
                  <span className="price price-sale"> {data.salePrice}</span>
                </div>
              ) : (
                <div className="product-price-and-shipping">
                  <span className="regular-price price">{data.regularPrice}</span>
                </div>
              )

            )
          }

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
              <div className="time_count_down">
                <span
                  className="future_date_10_2 time_countdown is-countdown"
                >
                  <span className="countdown-row countdown-show4">
                    <span className="countdown-section">
                      <span className="countdown-amount">{timerDays}</span>
                      <span className="countdown-period">Days</span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount">{timerHours}</span>
                      <span className="countdown-period">Hours</span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount">{timerMinutes}</span>
                      <span className="countdown-period">Mins</span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount">{timerSeconds}</span>
                      <span className="countdown-period">Secs</span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          }
        </div>
      </article>

    </div>
  );
};
SingleProductCopy.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default SingleProductCopy;
