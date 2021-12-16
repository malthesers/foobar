import React, {useEffect, useRef } from "react";
import Slider from "react-slick";
import BeerItemSlide from "./BeerItemSlide";

function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img src="./images/icons/icon-arrow-l.svg" alt="Foobar icon sliding arrow left"
        className={className}
        onClick={onClick}
        />
    );
}

function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img src="./images/icons/icon-arrow-r.svg" alt="Foobar icon sliding arrow right"
        className={className}
        onClick={onClick}
        />
    );
}

export default function BeerSlider (props) {
  const slideIndex = props.slideIndex;
  const slideRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  useEffect(() => {
    slideRef.current.slickGoTo(slideIndex);
  }, [slideIndex])

  const mappedBeers = props.props.map(beer => <BeerItemSlide {...beer} basket={props.basket} setBasket={props.setBasket} setSliderDisplay={props.setSliderDisplay} setBasketDisplay={props.setBasketDisplay} key={beer.index} />)

  return (
    <section id="modal-slider" className={ props.sliderDisplay ? "" : "slide-hidden"}>
    <Slider {...settings} ref={slideRef}>
        {mappedBeers}
    </Slider>
  </section>
  )
}