import Carousel from 'react-bootstrap/Carousel';
import usmaImage from '../img/essor.jpg'; 
import mobile from '../img/mobile.jpg'
import men from '../img/laptop.png'
import  '../styles/carousel.css';
function UncontrolledExample() {
  return (
    <div className='container mt-4'>
    <Carousel  indicators={false}>
      <Carousel.Item>
        <img style={{height:'auto',width:"100%"}} src={men} alt="First slide" />
        <Carousel.Caption>
          <h3 className='heading' style={{color:'white ' }}> Computer & Laptops</h3>
          <p className='p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'auto',width:"100%"}} src={ usmaImage} alt="Second slide" />
        <Carousel.Caption>
          <h3 className='heading' style={{color:'white '}}>New Gadgets </h3>
          <p className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img style={{height:'auto',width:"100%"}} src={mobile} alt="Third slide" />
        <Carousel.Caption>
          <h3 className='heading' style={{color:'white '}}> Apple & Samsung</h3>
          <p className='p'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;
