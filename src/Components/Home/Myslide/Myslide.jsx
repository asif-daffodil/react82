import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../assets/images/homeslides/slide1.jpg';
import slide2 from '../../../assets/images/homeslides/slide2.jpg';
import slide3 from '../../../assets/images/homeslides/slide3.jpg';

function Myslide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={slide1} alt="" className='img-fluide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slide2} alt="" className='img-fluide' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slide3} alt="" className='img-fluide' />
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

export default Myslide;