import {
  CarouselProvider,
  Dot,
  Image,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "pure-react-carousel/dist/react-carousel.es.css";
import "yet-another-react-lightbox/styles.css";
import Img1 from "../assets/images/products/doves-farm-organic-whole-meal-spelt-flour (1).jpg";
import Img2 from "../assets/images/products/doves-farm-organic-whole-meal-spelt-flour (2).jpg";
import Img3 from "../assets/images/products/doves-farm-organic-whole-meal-spelt-flour (3).jpg";
import Img4 from "../assets/images/products/doves-farm-organic-whole-meal-spelt-flour.jpg";
import '../assets/css/popup-styles.css';

function DetailProduct() {
  const [open, setOpen] = useState(false);
  const slidesArr = [Img1, Img2, Img3, Img4];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-left-product-details">
          <CarouselProvider
            naturalSlideWidth={60}
            naturalSlideHeight={100}
            totalSlides={slidesArr.length}
            hasMasterSpinner
            dragEnabled={false}
          >
            <Slider>
              {slidesArr.map((item, i) => (
                <Slide index={i} key={i}>
                  <ImageWithZoom onClick={() => setOpen(true)} src={item} />
                </Slide>
              ))}
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slidesArr.map((item, i) => ({
                  src: item,
                }))}
              />
            </Slider>
            {slidesArr.map((e, index) => (
              <Dot className="dot-details" slide={index} key={index}>
                <Image className="product-card-image" src={e} />
              </Dot>
            ))}
          </CarouselProvider>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-right-product-details">
		
		
		<h1 class="h1 namne_details" itemprop="name">Sensations Thai Sweet Chilli Sharing Crisps</h1>
		
		
		 <div id="product_comments_block_extra" class="no-print">
			<div class="comments_note">
			<div class="star_content">
				<span class="rating_star" ></span>
				<meta itemprop="worstRating" content="0" />
				<meta itemprop="ratingValue" content="5" />
				<meta itemprop="bestRating" content="5" />
			</div>
		</div> 
	
	<ul class="comments_advices">
					<li>
				<a href="#product_comments_block_tab" class="reviews _mPS2id-h">
					Read reviews (<span itemprop="reviewCount">2</span>)
				</a>
			</li>
							<li>
				<a class="open-comment-form">
					Write a review
				</a>
			</li>
			</ul>
</div>
		  <div class="product-prices">
    
              <div class="product-discount">
          
          <span class="regular-price">$49.00</span>
        </div>
          

    
      <div class="product-price h5 has-discount">
        <meta itemprop="priceCurrency" content="USD"/>

        <div class="current-price">
          <span itemprop="price" content="46.55">$46.55</span>

                                    <span class="discount discount-percentage">Save 5%</span>
                              </div>
      </div>
    <div class="tax-shipping-delivery-label">
            
      
                        </div>
  </div>
		

		<div class="product-information">
			 
			  <div id="product-description-short-5" class="product-description" itemprop="description"><p>40 count of your favorite Frito-Lay snacks perfect for any snacking occasion and great as a care package for a loved one.</p></div>
			

			
			<div class="product-actions">
				
				<form id="add-to-cart-or-refresh">
					<div class="product-variants">
          <div class="clearfix product-variants-item">
      <span class="control-label">Dimension</span>
              <ul id="group_3">
                      <li class="input-container float-xs-left">
              <label>
                <input class="input-radio" type="radio" data-product-attribute="3" name="group[3]" value="19"/>
                <span class="radio-label">40x60cm</span>
              </label>
            </li>
                      <li class="input-container float-xs-left">
              <label>
                <input class="input-radio" type="radio" data-product-attribute="3" name="group[3]" value="20" checked="checked"/>
                <span class="radio-label">60x90cm</span>
              </label>
            </li>
                      <li class="input-container float-xs-left">
              <label>
                <input class="input-radio" type="radio" data-product-attribute="3" name="group[3]" value="21"/>
                <span class="radio-label">80x120cm</span>
              </label>
            </li>
                  </ul>
          </div>
      </div>
				  
					<section class="product-discounts">
  </section>
				  

				  
					<div class="product-add-to-cart">
      <span class="control-label">Quantity</span>

    
      <div class="product-quantity clearfix">
        <div class="qty">
          <div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix"></span><input type="text" name="qty" id="quantity_wanted" value="1" class="input-group form-control" min="1" aria-label="Quantity" /><span class="input-group-addon bootstrap-touchspin-postfix" ></span><span class="input-group-btn-vertical"><button class="btn btn-touchspin js-touchspin bootstrap-touchspin-up" type="button"><i class="material-icons touchspin-up"></i></button><button class="btn btn-touchspin js-touchspin bootstrap-touchspin-down" type="button"><i class="material-icons touchspin-down"></i></button></span></div>
        </div>

        <div class="add">
          <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit">
            <i class="material-icons shopping-cart"></i>
            Add to cart
          </button>	
		</div>
		<div class="cart_button">
			<a id="wishlist_button" href="#" onclick="WishlistCart('wishlist_block_list', 'add', '5', '20', document.getElementById('quantity_wanted').value, '', 'Sensations Thai Sweet Chilli Sharing Crisps', 'https://demo2.posthemes.com/pos_mixy/layout2/55-home_default/sensations-thai-sweet-chilli-sharing-crisps.jpg'); return false;" title="Add to my wishlist">
	<i class="icon-rt-heart2"></i>Add to wishlist
</a><button href="#" class="poscompare-add compare-button js-poscompare-add" data-id_product="5" onclick="posCompare.addCompare($(this),5, 'Sensations Thai Sweet Chilli Sharing Crisps', 'https://demo2.posthemes.com/pos_mixy/layout2/55-home_default/sensations-thai-sweet-chilli-sharing-crisps.jpg'); return false;" title="Add to compare"><i class="icon-rt-repeat-outline"></i>Add to compare</button>  

		</div>
      </div>
	 
    
    
      <span id="product-availability">
              </span>
    
    
    
      <p class="product-minimal-quantity">
              </p>
    
  </div>
				  

				  
					<div class="product-additional-info">
  

      <div class="social-sharing">
      <span>Share</span>
      <ul>
                  <li class="facebook"><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2Fen%2Ffresh-food%2F5-sensations-thai-sweet-chilli-sharing-crisps.html" title="Share" target="_blank">Share</a></li>
                  <li class="twitter"><a href="https://twitter.com/intent/tweet?text=Sensations+Thai+Sweet+Chilli+Sharing+Crisps https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2Fen%2Ffresh-food%2F5-sensations-thai-sweet-chilli-sharing-crisps.html" title="Tweet" target="_blank">Tweet</a></li>
                  <li class="pinterest"><a href="https://www.pinterest.com/pin/create/button/?media=https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2F55%2Fsensations-thai-sweet-chilli-sharing-crisps.jpg&amp;url=https%3A%2F%2Fdemo2.posthemes.com%2Fpos_mixy%2Flayout2%2Fen%2Ffresh-food%2F5-sensations-thai-sweet-chilli-sharing-crisps.html" title="Pinterest" target="_blank">Pinterest</a></li>
              </ul>
    </div>
  

</div>
				  

				  				  
				</form>
			  

			</div>

			
			  <div class="blockreassurance_product">
        <div class="clearfix"></div>
</div>
  <div class="payment-detail"><img src="/pos_mixy/layout2/img/cms/payment.png" alt=""/>
<p>Guarantee safe &amp; secure checkout</p>
</div>

			

		</div>
        </div>
      </div>
    </div>
  );
}
export default DetailProduct;
