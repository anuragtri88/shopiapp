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
      <Carousel.Item>
        <Image src={DummyImg} alt="First slide" className='img-fluid' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={DummyImg2} alt="Second slide" className='img-fluid' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={DummyImg3} alt="Third slide" className='img-fluid' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;