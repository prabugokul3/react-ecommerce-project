import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import image1 from '../images/pexels-mareefe-672046.jpg';
import image2 from '../images/pexels-lilartsy-1793035.jpg';
import image3 from '../images/pexels-christina99999-25676797 (1).jpg';
import HorizontalScroll from './category';
import '@fortawesome/fontawesome-free/css/all.css';

export const Home = () => {



    return (
        <div className=''>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div className="fs-1 text2   text-center">
                Discover Your Inner Light &<br />
                Illuminate Your Radiance
            </div>
            <div className="fs-5 text1 text-center">
                Elevate your self-care routine with 9SKIN. Unique formulas backed by nature and modern <br />
                science with nanotechnology. Pamper yourself with clean, luxurious skincare
            </div>
            <div className="mt-5  ">
                <HorizontalScroll />
            </div>

           
        </div>
    );
};
