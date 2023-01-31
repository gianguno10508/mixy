import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Image,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import Lightbox from "yet-another-react-lightbox";
import "pure-react-carousel/dist/react-carousel.es.css";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const SliderPopUpDetailProduct = ({ slidesArr }) => {
  const [open, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleHoverIn = () => {
    setIsHover(true);
  };
  const handleHoverOut = () => {
    setIsHover(false);
  };
  return (
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
            <ImageWithZoom
              onClick={() => setOpen(true)}
              src={item.sourceUrl}
            />
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
      <div className="button-action-slider">
        {isHover ? (
          <ButtonBack className="button-action ishover">
            <i className="fa-solid fa-arrow-left"></i>
          </ButtonBack>
        ) : (
          <ButtonBack className="button-action">
            <i className="fa-solid fa-arrow-left"></i>
          </ButtonBack>
        )}
        <ButtonNext
          className="button-action"
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </ButtonNext>
      </div>
      <div className="dot-details">
        {slidesArr.map((e, index) => (
          <Dot slide={index} key={index}>
            <Image className="product-card-image" src={e.sourceUrl} />
          </Dot>
        ))}
      </div>
      <ul class="product-flag">
        <li class="new">New</li>
      </ul>
    </CarouselProvider>
  );
};
export default SliderPopUpDetailProduct;
