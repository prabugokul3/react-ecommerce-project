import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';
import { AuthContext } from './authContext';

export const Navbar = () => {
    const [toggleOpen1, setToggleOpen1] = useState(false)
    const [toggleOpen2, setToggleOpen2] = useState(false)
    const authContext = useContext(AuthContext);
    const { readData } = authContext;
    const [product, setProduct] = useLocalStorage("cartProduct", [], "json")
    useEffect(() => {
        const fetchProduct = async () => {
            const fetch = await readData('cartProduct')
            setProduct(fetch)
        }
        fetchProduct()
    }, [product, readData, setProduct])
    useEffect(() => {
        if (toggleOpen2) {
            const element = document.getElementById('drop')
            console.log(element)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (toggleOpen1) {
            const element = document.getElementById('drop')
            console.log(element)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

    }, [toggleOpen2, toggleOpen1])

    return (
        <>
            <nav className=" navbar navbar-expand-lg navbar-light ">
                <div class='container'>
                    <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#e7cca4' }}>
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div className='text3 fw-bold fs-1 '>
                        9 S K I N
                    </div>
                    <div class='d-lg-none d-md-block  ms-auto text3 position-relative' type="button">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {product.length > 0 ?
                            <div className='text3 p-1 border border-1 rounded-circle position-absolute cartCount lg-fs-5 d-flex justify-content-center align-items-center'>{product.length}</div>
                            :
                            ''
                        }
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                        <ul class="navbar-nav  my-2 my-lg-0 navbar-nav-scroll ">
                            <li class="nav-item ">
                                <Link class=" text3" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class=" text3" to="/products">Product</Link>
                            </li>
                            {/* <li class="nav-item"> <Link class="text" href="#">About</Link></li>
                            <li class="nav-item"> <Link class="text" href="#">Link</Link></li> */}
                        </ul>
                    </div>
                    <div class=' d-none d-lg-block ms-5 text3 fs-4 position-relative' type="button" >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {product.length > 0 ?
                            <div className='text3 p-1 border border-1 rounded-circle position-absolute cartCount fs-5 d-flex justify-content-center align-items-center'>{product.length}</div>
                            :
                            ''
                        }
                    </div>
                </div>
            </nav>
            <Outlet />
            <div className='footer '>
                <div className='d-none d-lg-block d-md-block d-lg-flex d-md-flex  mt-5'>
                    <div className='col '>
                        <div className=' d-flex justify-content-around mt-5'>
                            <div className=' d-sm-none d-lg-block'>
                                <h5 className='text-white'>CONTACT</h5>
                                <div className='fw-bold text-white'>India</div>
                                <div className='text-white'>contact@9skin.in</div>
                                <div className='text-white'>+91 7996189999</div>
                            </div>
                            <div className=' d-sm-none d-lg-block'>
                                <h5 className='text-white'>PRODUCTS</h5>
                                <div className='text-white'>Revive</div>
                                <div className='text-white'>Rejuvenate</div>
                                <div className='text-white'>Eternelle</div>
                                <div className='text-white'>Illuminate</div>
                            </div>
                            <div className=' d-sm-none d-lg-block'>
                                <h5 className='text-white'>ABOUT US</h5>
                                <div className='text-white'>Our Story</div>
                                <div className='text-white'>Mission & Vision</div>
                                <div className='text-white'>Skincare Philosophy</div>
                            </div>
                            <div className=' d-sm-none d-lg-block'>
                                <i className="fa-brands fa-facebook  fa-2x text-white mx-2"></i>
                                <i className="fa-brands fa-twitter  fa-2x text-white mx-2"></i>
                                <i className="fa-brands fa-instagram  fa-2x text-white mx-2"></i>
                            </div>
                        </div>
                        <div className='text2 fw-bold fs-1 d-flex justify-content-center align-items-center'>
                            9 S K I N
                        </div>
                        <div className=' text-white d-flex justify-content-center align-items-center mb-5'>
                            Copyright © 2024, 9skin India | All Rights Reserved.
                        </div>

                    </div>
                </div>
                <div className='d-lg-none d-md-none justify-content-around align-items-center p-2 mt-5'>
                    <div className='text2 fw-bold fs-1 d-flex justify-content-center align-items-center'>
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
                                <div className='flex-col' id='drop'>
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
                                <div className='flex-col mt-2' id='drop'>
                                    <div className='text-white mb-2' onClick={() => setToggleOpen2(false)}>Our Story</div>
                                    <div className='text-white mb-2'>Mission & Vision</div>
                                    <div className='text-white mb-2'>Skincare Philosophy</div>
                                </div>
                                : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




