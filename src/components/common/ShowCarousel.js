import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { getCarousel } from  "../../redux/actions/getActions";

export default function ShowCarousel() {
  useEffect(() => {
    dispatch(getCarousel());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const carousels = useSelector((state) => state.carouselReducer);
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === carousels.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? carousels.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carousels.map((carousel) => {
    return (
      <CarouselItem
        width="1200px"
        height="300px"
        className="border-8 justify-content-center shadow-lg"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={carousel.fields.image[0].id}
      >
        <a href={carousel.fields.url}>
          <img
            width="1150px"
            height="300px"
            className="border-8 justify-content-center "
            src={carousel.fields.image[0].thumbnails.full.url}
            alt=""
          />
        </a>
      </CarouselItem>
    );
  });
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={carousels}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
