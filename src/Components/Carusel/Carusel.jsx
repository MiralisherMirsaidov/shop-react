import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carusel.css'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <img
          src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg"
          alt=""
        />
      </div>
      <div className="slider">
        <img
          src="https://images.samsung.com/uz_ru/smartphones/galaxy-z-flip4/images/galaxy-z-flip4-share-image.jpg    "
          alt=""
        />
      </div>
      <div className="slider">
        <img
          src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_New-Camera-System_09142021_Full-Bleed-Image.jpg.slideshow-xlarge_2x.jpg"
          alt=""
        />
      </div>
      <div className="slider">
        <img
          src="https://www.soccerbible.com/media/2438/nike_free_collection_april_2014_img4.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
}
