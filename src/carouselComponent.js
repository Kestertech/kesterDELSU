import Carousel from "react-bootstrap/Carousel";
import slider1 from './images/slider1.jpeg'
import slider2 from './images/slider2.jpeg'
import slider3 from './images/slider3.png'


const CarouselComponent = () => {
    return (  
        <Carousel className="sliderHeight">
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p className="sliderText">Campus 3 Main Gate |Delta State University</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p className="sliderText">Faculty of Science Complex |Delta State University</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p className="sliderText">
            Best Graduating Student, 2016 |Delta State University
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}
 
export default CarouselComponent;