import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import image1 from '../images/pexels-lilartsy-1793035.jpg';
import image2 from '../images/pexels-lilartsy-1793035.jpg';
import image3 from '../images/pexels-lilartsy-1793035.jpg';
import { useNavigate } from 'react-router-dom';

export const Product = ({navigation}:any) => {
    const [products] = useState([
        { id: 1, title: '9teen Again Gift Bundle', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image1 },
        { id: 2, title: 'Cream Team Gift Bundle', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image2 },
        { id: 3, title: 'ETERNELLE - Anti-Aging Serum', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image3 },
        { id: 4, title: 'Hey There, Sunshine! Gift Bundle', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image1 },
        { id: 5, title: 'Hey There, Sunshine! Gift Bundle', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image2 },
        { id: 6, title: 'ETERNELLE - Anti-Aging Serum', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image3 },
        { id: 7, title: 'ETERNELLE - Anti-Aging Serum', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image1 },
        { id: 8, title: 'REJUVENATE - Night Cream', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image2 },
        { id: 9, title: 'REVIVE - Day Cream', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image3 },
        { id: 10, title: 'Skin-credibles Gift Bundle', content: 'TExperience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image1 },
        { id: 11, title: 'Sleeping Beauty Gift Bundle', content: 'Experience magic like never before with our light & nourishing Skintillate Booster Oil which heals your skin &...', image: image2 },
    ]);
    // const [scroll] = useState(300)
    const navigate = useNavigate();
    useEffect(() => {
        const cardElements = document.querySelectorAll('.my-card');

        cardElements.forEach((item: any) => {
            const image: any = item.querySelector('.cardImage');
            const originalImageSrc = image.src;

            item.addEventListener('mouseenter', () => {
                image.src = image2;
            });

            item.addEventListener('mouseleave', () => {
                image.src = originalImageSrc;
            });
        });
    }, []);

    const onEdit = (data:any) => {
        navigate('/productDetail', { state: { Id: data } });
    }

    // const scrollLeft = () => {
    //     if (scrollContainerRef.current) {
    //         scrollContainerRef.current.scrollLeft -= 300;
    //         setScroll(scrollContainerRef.current.scrollLeft)
    //     }
    // };

    // const scrollRight = () => {
    //     if (scrollContainerRef.current) {
    //         scrollContainerRef.current.scrollLeft += 300;
    //         setScroll(scrollContainerRef.current.scrollLeft)
    //     }
    // };

    return (
        <div className="container position-relative " style={{ borderRadius: 0 }}>
            <h4 className='text fw-normal d-flex justify-content-center'>Products</h4>

            <div className="row " >
                {products.map((card) => (
                    <div className='col-md-4 col-lg-3  d-flex mb-5 justify-content-center align-items-center' >
                        <div key={card.id} className="card my-card scroll-animate d-flex align-items-stretch" style={{height:'100%'}}>
                            <img src={card.image} className="card-img-top cardImage rounded-0 " alt="..." id="cardImage"></img>
                            <div className="card-body">
                                <div className="card-title d-flex align-items-stretch fw-normal fs-4 p-2">{card.title}</div>
                                <p className="card-text ">{card.content}</p>
                                <button type="button" className="btn w-100 rounded-pill" style={{ border: '1px solid brown', color: 'rgb(109 75 59)', borderColor: 'rgb(109 75 59)' }} onClick={()=>onEdit(card)}>Shop now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left and Right Buttons */}
            {/* {scroll > 300 ?
                    <div id="slideLeft" onClick={scrollLeft} className="position-absolute" style={{ top: '50%', left: '0', transform: 'translateY(-50%)' }}>
                        <img src={previous} className="" alt="..." id="cardImage" style={{ width: '5%' }}></img>
                    </div> : ''}

                <div id="slideRight" onClick={scrollRight} className="position-absolute" style={{ top: '50%', right: '0', transform: 'translateY(-50%)' }}>
                    <img src={next} className="" alt="..." id="cardImage" style={{ width: '5%' }}></img>
                </div> */}
        </div>


    );
};

