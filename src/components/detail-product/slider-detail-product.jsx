import {
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

const SliderDetailProduct = ({ slidesArr }) => {
  const [open, setOpen] = useState(false);
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
            <ImageWithZoom onClick={() => setOpen(true)} src={item.mediaItemUrl} />
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
          <Image className="product-card-image" src={e.mediaItemUrl} />
        </Dot>
      ))}
    </CarouselProvider>
  );
};
export default SliderDetailProduct;
