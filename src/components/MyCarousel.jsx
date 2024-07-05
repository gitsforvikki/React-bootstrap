import facility from '../assets/facility.svg'
import image1 from '../assets/carousel/Image.svg'
import image2 from '../assets/carousel/Mask Group.svg'

import { Carousel } from "react-bootstrap";

function MyCarousel() {
  return (
    <>
    
      <div className="">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>facility and services</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="second slide"
            />
            <Carousel.Caption className='text-dark'>
              <h3>Dining services</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aut a rem deleniti quis?</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default MyCarousel;
