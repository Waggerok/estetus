import React from 'react';
import { useState } from 'react';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


import example1 from '../img/examples__photo/example1.jpeg';
import example2 from '../img/examples__photo/example2.jpeg';
import example3 from '../img/examples__photo/example3.jpeg';
import example4 from '../img/examples__photo/example4.jpeg';
import example5 from '../img/examples__photo/example5.jpeg';
import example6 from '../img/examples__photo/example6.jpeg';
import example7 from '../img/examples__photo/example7.jpeg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height: '600px'}}>
            <img src={example1}/>
      </Carousel.Item>
      <Carousel.Item style={{height: '600px'}}>
            <img src={example2}/>
      </Carousel.Item>
      <Carousel.Item style={{height: '600px'}}>
            <img src={example3}/>
      </Carousel.Item>
      <Carousel.Item style={{height: '600px'}}>
            <img src={example4}/>
      </Carousel.Item>
      <Carousel.Item style={{height: '600px'}}>
            <img src={example5}/>
      </Carousel.Item>
      <Carousel.Item style={{height: '600px'}}>
            <img src={example6}/>
      </Carousel.Item>
      <Carousel.Item style={{height: '600px'}}>
            <img src={example7}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;