import "../assets/css/cart-page.css";
import Payment from '../assets/images/payment.png';

function CartPage() {
  return (
    <div className="cart-page">
      <div className="container">
        <section id="main">
          <div className="cart-grid row">
            <div className="cart-grid-body col-xs-12 col-lg-8">
              <div className="card cart-container">
                <div className="cart-overview js-cart">
                  <ul className="cart-items">
                    <div className="cart-items-title hidden-sm-down">
                      <div className="row">
                        <div className="product-line-grid-left col-md-5 col-xs-12">
                          Item
                        </div>
                        <div className="product-line-grid-right product-line-actions col-md-7 col-xs-6">
                          <div className="row">
                            <div className="col-md-4">Price</div>
                            <div className="col-md-3">Qty</div>
                            <div className="col-md-4">Total price</div>
                            <div className="col-md-1">
                              <i
                                className="fa fa-trash-o invisible"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <li className="cart-item">
                      <div className="product-line-grid row">
                        <div className="product-line-grid-left col-md-5 col-xs-12">
                          <div className="row item-line-grid">
                            <span className="product-image media-middle col-md-4 col-sm-3 col-xs-4">
                              <img
                                src="https://demo2.posthemes.com/pos_mixy/layout2/55-cart_default/sensations-thai-sweet-chilli-sharing-crisps.jpg"
                                alt="Sensations Thai Sweet Chilli Sharing Crisps"
                              />
                            </span>
                            <div className="product-line-grid-body col-md-8 col-sm-9 col-xs-8">
                              <div className="product-line-info">
                                <a
                                  className="product_name"
                                  href="https://demo2.posthemes.com/pos_mixy/layout2/en/fresh-food/5-19-sensations-thai-sweet-chilli-sharing-crisps.html#/19-dimension-40x60cm"
                                >
                                  Sensations Thai Sweet Chilli Sharing Crisps
                                </a>
                              </div>
                              <div className="product-line-info">
                                <span className="label">Dimension:</span>
                                <span className="value">40x60cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 hidden-md-up"></div>
                        <div className="product-line-grid-right product-line-actions col-md-7 col-sm-9 col-xs-12">
                          <div className="row">
                            <div className="col-md-4 col-xs-4 product-line-info product-price-and-shipping product-price h5 has-discount">
                              <span className="price">$27.55</span>
                              <span className="regular-price">$29.00</span>
                              <span className="discount discount-percentage">
                                -5%
                              </span>
                            </div>
                            <div className="col-md-3 col-xs-3 qty">
                              <div className="input-group bootstrap-touchspin">
                                <span className="input-group-addon bootstrap-touchspin-prefix"></span>
                                <input
                                  className="js-cart-line-product-quantity form-control"
                                  type="text"
                                  name="product-quantity-spin"
                                  min="1"
                                />
                                <span className="input-group-addon bootstrap-touchspin-postfix"></span>
                                <span className="input-group-btn-vertical">
                                  <button
                                    className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up"
                                    type="button"
                                  >
                                    <i className="material-icons touchspin-up"></i>
                                  </button>
                                  <button
                                    className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down"
                                    type="button"
                                  >
                                    <i className="material-icons touchspin-down"></i>
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-3 col-xs-3 price">
                              <span className="product-price">
                                <strong>$27.55</strong>
                              </span>
                            </div>
                            <div className="col-md-2 col-xs-2 text-xs-right">
                              <div className="cart-line-product-actions">
                                <a className="remove-from-cart" href="#">
                                  <i className="material-icons float-xs-left">
                                    delete
                                  </i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <a className="btn-primary" href="#">
                Continue shopping
              </a>
            </div>

            <div className="cart-grid-right col-xs-12 col-lg-4">
              <div className="card cart-summary">
                <div className="cart-detailed-totals js-cart-detailed-totals">
                  <div className="card-block cart-detailed-subtotals js-cart-detailed-subtotals">
                    <div
                      className="cart-summary-line"
                      id="cart-subtotal-products"
                    >
                      <span className="label js-subtotal">1 item</span>
                      <span className="value">$27.55</span>
                    </div>
                    <div
                      className="cart-summary-line"
                      id="cart-subtotal-shipping"
                    >
                      <span className="label">Shipping</span>
                      <span className="value">$7.00</span>
                      <div>
                        <small className="value"></small>
                      </div>
                    </div>
                  </div>
                  <hr className="separator" />

                  <div className="card-block cart-summary-totals">
                    <div className="cart-summary-line cart-total">
                      <span className="label">Total (tax excl.)</span>
                      <span className="value">$34.55</span>
                    </div>

                    <div className="cart-summary-line">
                      <span className="label sub">Taxes</span>
                      <span className="value sub">$0.00</span>
                    </div>
                  </div>

                  <hr className="separator" />
                </div>

                <div className="checkout cart-detailed-actions card-block">
                  <div className="text-sm-center">
                    <a
                      href="https://demo2.posthemes.com/pos_mixy/layout2/en/order"
                      className="btn btn-primary"
                    >
                      Proceed to checkout
                    </a>
                  </div>
                </div>
              </div>
              <div className="payment-detail">
                <img src={Payment} alt="" />
                <p>Guarantee safe &amp; secure checkout</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default CartPage;
