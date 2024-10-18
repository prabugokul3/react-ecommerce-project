import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import './productDetail.css'
import image1 from '../images/pexels-mareefe-672046.jpg';
import image2 from '../images/pexels-lilartsy-1793035.jpg';
import image3 from '../images/pexels-christina99999-25676797 (1).jpg';
import { isEmpty } from 'lodash'
import useLocalStorage from '../useLocalStorage';
import { AuthContext } from '../authContext';

export const ProductDetail = () => {
    const authContext = useContext(AuthContext);
    const { addToCart, readData }: any = authContext;
    const location = useLocation()
    const { Id } = location.state
    useEffect(() => {
        if (Id) {
            setDetail(Id)
        }
    }, [Id])
    const [detail, setDetail]: any = useState({})
    const [product, setProduct]: any = useLocalStorage("cartProduct", [], "json")
    const fetchProduct = async () => {
        const fetchDtata = await readData('cartProduct')
        setProduct(fetchDtata)
    }
    useEffect(() => {
        fetchProduct()
    }, [product,readData])
    const addCart = (item: any, product: any) => {
        console.log(product)
        if (isEmpty(product)) {
            addToCart(item, 1)
        } else {
            const finder = product.findIndex((product: any) => product.id === item.id)
            if (finder !== -1) {
                addToCart(product, product[finder].quantity + 1)
            }
        }
    }

    return (
        <div className="container mt-5">
            <div className="row d-lg-flex">
                <div className="d-none d-lg-block col-lg-1 ">
                    <img src={detail?.image} alt="ProductImage" style={{ objectFit: 'cover' }} className="w-75 h-25 mb-2" />
                </div>
                <div className=" d-none d-lg-block col-lg-5 mb-4 mb-lg-0">
                    <img src={detail?.image} alt="..." style={{ objectFit: 'cover' }} className="w-100 " />
                </div>
                <div id="carouselExampleIndicators" className="carousel slide d-sm-block d-lg-none " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src={image1} className="d-block  w-100 h-25" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100 h-25" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100 h-25" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="col-lg-6">
                    <div className="title">{detail.title}</div>
                    <h5 className="sub-title">Anti-aging Combo - Rejuvenate + Eternelle</h5>
                    <div className="d-flex mt-5">
                        <div className="discountPrice text-decoration-line-through d-flex justify-content-center align-items-center">
                            Rs. 3,398
                        </div>
                        <div className="price mx-2 fs-3">Rs. 3,299</div>
                    </div>
                    <div className="sub-title fw-bold">
                        Uncover the secret to timeless love and skin that feels 9teen again
                    </div>
                    <div className="mt-2 fs-4 content">{detail?.content}</div>
                    <div className='mt-5 mb-2'>
                        <button type="button" className="btn w-100 rounded-pill mb-2 fs-5" style={{ border: '1px solid brown', color: '#4A2A1E', borderColor: '#4A2A1E' }} onClick={() => addCart(detail, product)}>Add to cart</button>
                        <button type="button" className="btn w-100 rounded-pill fs-5" style={{ border: '1px solid brown', color: 'white', borderColor: '#4A2A1E', backgroundColor: '#4A2A1E' }}>Buy now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}