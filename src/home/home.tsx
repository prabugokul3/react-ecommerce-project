import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import image1 from '../images/pexels-mareefe-672046.jpg';
import image2 from '../images/pexels-lilartsy-1793035.jpg';
import image3 from '../images/pexels-christina99999-25676797 (1).jpg';
import HorizontalScroll from './product';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

export const Home = () => {

    const [toggleOpen1, setToggleOpen1] = useState(false)
    const [toggleOpen2, setToggleOpen2] = useState(false)


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

            <div className="fs-1 text   text-center">
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

            <div className='d-none d-lg-block d-lg-flex  '>
                <div className='col'>
                    <div className=' d-flex justify-content-center align-items-center'>
                        <div className='col d-sm-none d-lg-block'>
                            <h5 className='text-white'>CONTACT</h5>
                            <div className='fw-bold text-white'>India</div>
                            <div className='text-white'>contact@9skin.in</div>
                            <div className='text-white'>+91 7996189999</div>
                        </div>
                        <div className='col d-sm-none d-lg-block'>
                            <h5 className='text-white'>PRODUCTS</h5>
                            <div className='text-white'>Revive</div>
                            <div className='text-white'>Rejuvenate</div>
                            <div className='text-white'>Eternelle</div>
                            <div className='text-white'>Illuminate</div>
                        </div>
                        <div className='col d-sm-none d-lg-block'>
                            <h5 className='text-white'>ABOUT US</h5>
                            <div className='text-white'>Our Story</div>
                            <div className='text-white'>Mission & Vision</div>
                            <div className='text-white'>Skincare Philosophy</div>
                        </div>
                        <div className='col d-sm-none d-lg-block'>
                            <i className="fa-brands fa-facebook  fa-2x text-white mx-2"></i>
                            <i className="fa-brands fa-twitter  fa-2x text-white mx-2"></i>
                            <i className="fa-brands fa-instagram  fa-2x text-white mx-2"></i>
                        </div>
                    </div>
                    <div className='text fw-bold fs-1 d-flex justify-content-center align-items-center'>
                        9 S K I N
                    </div>
                    <div className=' text-white d-flex justify-content-center align-items-center'>
                        Copyright © 2024, 9skin India | All Rights Reserved.
                    </div>

                </div>
            </div>
            <div className='d-lg-none d-md-none justify-content-around align-items-center p-2'>
                <div className='text fw-bold fs-1 d-flex justify-content-center align-items-center'>
                    9 S K I N
                </div>
                <div className='col d-sm-none d-lg-block mb-5'>
                    <h5 className='text-white d-flex justify-content-center align-items-center'>CONTACT</h5>
                    <div className='fw-bold text-white d-flex justify-content-center align-items-center'>India</div>
                    <div className='text-white d-flex justify-content-center align-items-center'>contact@9skin.in</div>
                    <div className='text-white d-flex justify-content-center align-items-center'>+91 7996189999</div>
                </div>
                <div className='col pb-2'>
                    <div className="d-flex justify-content-between ">
                        <div className="text-white" onClick={() => setToggleOpen1(true)}>PRODUCTS</div>
                        <div className=" dropdown-toggle dropdown-toggle-split text-white" data-bs-toggle="dropdown" aria-expanded="false" >
                            <span className="visually-hidden" >Toggle Dropdown</span>
                        </div>
                    </div>

                    <div>
                        {toggleOpen1 === true ?
                            <div className='flex-col'>
                                <div className='text-white' onClick={() => setToggleOpen1(false)}>Revive</div>
                                <div className='text-white'>Rejuvenate</div>
                                <div className='text-white'>Eternelle</div>
                                <div className='text-white'>Illuminate</div>
                            </div>
                            : ''}
                    </div>
                </div>
                <div className='border border-1 mb-2'></div>
                <div className='col pb-2'>
                    <div className="d-flex justify-content-between">
                        <div className="text-white" onClick={() => setToggleOpen2(true)}>ABOUT US</div>
                        <div className=" dropdown-toggle dropdown-toggle-split text-white" data-bs-toggle="dropdown" aria-expanded="false" >
                            <span className="visually-hidden" >Toggle Dropdown</span>
                        </div>
                    </div>

                    <div>
                        {toggleOpen2 === true ?
                            <div className='flex-col mt-2'>
                                <div className='text-white mb-2' onClick={() => setToggleOpen2(false)}>Our Story</div>
                                <div className='text-white mb-2'>Mission & Vision</div>
                                <div className='text-white mb-2'>Skincare Philosophy</div>
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};
