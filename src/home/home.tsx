import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import image1 from '../images/pexels-mareefe-672046.jpg';
import image2 from '../images/pexels-lilartsy-1793035.jpg';
import image3 from '../images/pexels-christina99999-25676797 (1).jpg';
import HorizontalScroll from './hori';

export const Home = () => {


    return (
        <div>
            <Carousel prevIcon={false} nextIcon={false} interval={2000}>
                <Carousel.Item>
                    <img className="d-block w-100" src={image1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <div className="scroll-slide-up scroll-animate ">
                <div className="fs-1 text">
                    Discover Your Inner Light &<br />
                    Illuminate Your Radiance
                </div>
                <div className="mt-5">
                    <div className="fs-5 text1">
                        Elevate your self-care routine with 9SKIN. Unique formulas backed by nature and modern <br />
                        science with nanotechnology. Pamper yourself with clean, luxurious skincare
                    </div>
                    <div className="mt-5">
                        <HorizontalScroll />
                    </div>
                </div>
            </div>
        </div>
    );
};
