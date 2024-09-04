import React from 'react';
import { useState } from 'react';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';

//Examples
import example1 from '../img/examples__photo/example1.png';
import example2 from '../img/examples__photo/example2.png';
import example3 from '../img/examples__photo/example3.png';
import example4 from '../img/examples__photo/example4.png';
import example5 from '../img/examples__photo/example5.png';
import example6 from '../img/examples__photo/example6.png';
import example7 from '../img/examples__photo/example7.png';

import exmpl1 from '../img/examples__photo/exmpl1.png';
import exmpl2 from '../img/examples__photo/exmpl2.png';
import exmpl3 from '../img/examples__photo/exmpl3.png';
import exmpl4 from '../img/examples__photo/exmpl4.png';
import exmpl5 from '../img/examples__photo/exmpl5.png';
import exmpl6 from '../img/examples__photo/exmpl6.png';
import exmpl7 from '../img/examples__photo/exmpl7.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='imageItem'>
            <img src={exmpl1} alt='example'/>
      </Carousel.Item>
      <Carousel.Item className='imageItem'>
            <img src={exmpl2} alt='example'/>
      </Carousel.Item>
      <Carousel.Item className='imageItem'>
            <img src={exmpl3} alt='example'/>
      </Carousel.Item>
      <Carousel.Item className='imageItem'>
            <img src={exmpl4} alt='example'/>
      </Carousel.Item>
      <Carousel.Item className='imageItem'>
            <img src={exmpl5} alt='example'/>
      </Carousel.Item>
      <Carousel.Item className='imageItem'>
            <img src={exmpl6} alt='example'/>
      </Carousel.Item>
      <Carousel.Item className='imageItem'>
            <img src={exmpl7} alt='example'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;