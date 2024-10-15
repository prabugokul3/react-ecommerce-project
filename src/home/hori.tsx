import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hori.css';
import image1 from '../images/pexels-mareefe-672046.jpg';
import image2 from '../images/pexels-lilartsy-1793035.jpg';
import image3 from '../images/pexels-christina99999-25676797 (1).jpg';


const HorizontalScroll = () => {
    const [products] = useState([
        { id: 1, title: 'Card 1', content: 'This is the first card.', image: image1 },
        { id: 2, title: 'Card 2', content: 'This is the second card.', image: image2 },
        { id: 3, title: 'Card 3', content: 'This is the third card.', image: image3 },
        { id: 4, title: 'Card 4', content: 'This is the fourth card.', image: image1 },
        { id: 5, title: 'Card 5', content: 'This is the fifth card.', image: image2 },
        { id: 6, title: 'Card 6', content: 'This is the sixth card.', image: image3 },
        { id: 7, title: 'Card 7', content: 'This is the seventh card.', image: image1 },
        { id: 8, title: 'Card 8', content: 'This is the eighth card.', image: image2 },
        { id: 9, title: 'Card 9', content: 'This is the ninth card.', image: image3 },
        { id: 10, title: 'Card 10', content: 'This is the tenth card.', image: image1 },
        { id: 11, title: 'Card 11', content: 'This is the eleventh card.', image: image2 },
    ]);
    const [scroll] = useState(300)

    console.log(scroll)
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
    }, [scroll]);

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
            <div className="position-relative">
                <div className=" d-flex flex-nowrap overflow-auto" >
                    {products.map((card) => (
                        <div key={card.id} className="card mx-2 my-card" style={{ minWidth: '300px' }}>
                            <img src={card.image} className="card-img-top cardImage" alt="..." id="cardImage"></img>
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-start">{card.title}</h5>
                                <p className="card-text d-flex justify-content-start">{card.content}</p>
                                <button type="button" className="btn w-100 rounded-pill" style={{ border: '1px solid brown', color: 'brown' }}>Shop now</button>
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

export default HorizontalScroll;
