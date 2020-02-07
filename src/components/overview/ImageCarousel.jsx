import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

const ImageCarousel = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const requestToChangeActive = (index) => {
    setActiveItemIndex(index);
  };
  return (
    <ItemsCarousel
      activeItemIndex={activeItemIndex}
      requestToChangeActive={requestToChangeActive}
    />
  );
};

export default ImageCarousel;
