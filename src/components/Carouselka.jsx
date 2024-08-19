import React from 'react';
import { useState } from 'react';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';

//Examples
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
      <Carousel.Item style={{height: '700px'}}>
            <img src={example1} alt='example'/>
      </Carousel.Item>
      <Carousel.Item style={{height: '700px'}}>
            <img src={example2} alt='example'/>
      </Carousel.Item>
      <Carousel.Item style={{height: '700px'}}>
            <img src={example3} alt='example'/>
      </Carousel.Item>
      <Carousel.Item style={{height: '700px'}}>
            <img src={example4} alt='example'/>
      </Carousel.Item>
      <Carousel.Item style={{height: '700px'}}>
            <img src={example5} alt='example'/>
      </Carousel.Item>
      <Carousel.Item style={{height: '700px'}}>
            <img src={example6} alt='example'/>
      </Carousel.Item>
      <Carousel.Item style={{height: '700px'}}>
            <img src={example7} alt='example'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;