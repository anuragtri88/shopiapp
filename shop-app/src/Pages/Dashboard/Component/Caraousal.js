import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DummyImg from '../../../assets/images/dummy-img.png';
import DummyImg2 from '../../../assets/images/dummt-img2.png';
import DummyImg3 from '../../../assets/images/dummy-img-3.png';
import { Image } from 'react-bootstrap';



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='sliderBlock'>
        <Image src={DummyImg} alt="First slide" className='img-fluid imgBlock' />
      </Carousel.Item>
      <Carousel.Item className='sliderBlock'>
        <Image src={DummyImg2} alt="Second slide" className='img-fluid imgBlock' />
      </Carousel.Item>
      <Carousel.Item className='sliderBlock'>
        <Image src={DummyImg3} alt="Third slide" className='img-fluid imgBlock' />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;