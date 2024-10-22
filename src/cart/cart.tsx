import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css';
import useLocalStorage from '../useLocalStorage';
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from 'react';
import { AuthContext } from '../authContext';
import { compact, flatMap, uniq } from 'lodash';

export const Cart = () => {
    const authContext = useContext(AuthContext);
    const { addToCart, readData }: any = authContext;
    const [product, setProducts]: any = useLocalStorage("cartProduct", [], "json")

    const navigate = useNavigate()

    const gotToNewPage = () => {
        navigate(-1);
    }



    const increQuantity = (item: any) => {
        if (item) {
            const index = product.findIndex((product: any) => product.id === item.id);
            const products = product[index];
            console.log(products)
            addToCart(products, products.quantity + 1);
        }
    }
    const decreQuantity = (item: any) => {
        if (item) {
            const index = product.findIndex((product: any) => product.id === item.id);
            const products = product[index];
            console.log(products)
            addToCart(products, products.quantity - 1);
        }
    }

    const deleteProduct = (item: any) => {
        if (item) {
            const updatedProducts = product.filter((product: any) => product.id === item.id);
            product.splice(updatedProducts, 1);
            setProducts(flatMap(compact(uniq(product))))
        }
    };

    const fetch = useCallback(async () => {
        const products = await readData('cartProduct');
        setProducts(products);
    }, [readData, setProducts]);

    useEffect(() => {
        fetch();
    }, [fetch]);


    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div className="header">
                    Your cart
                </div>
                <div className=" header1 text-decoration-underline d-flex align-items-center" onClick={() => gotToNewPage()}>
                    Continue shopping
                </div>
            </div>
            <div className="d-none d-lg-flex d-md-flex col-12">
                <div className='fw-lighter col-6'>
                    PRODUCT
                </div>
                <div className='fw-lighter col-4'>
                    QUANTITY
                </div>
                <div className='fw-lighter col-2 d-flex justify-content-end'>
                    TOTAL
                </div>
            </div>
            <div className=" d-flex d-lg-none d-md-none col-12">
                <div className='fw-lighter col-6'>
                    PRODUCT
                </div>
                <div className='fw-lighter col-6 d-flex justify-content-end'>
                    TOTAL
                </div>
            </div>

            <div className=" col-12">
                {product.map((item: any) =>
                    <>
                        <div className='d-none d-lg-flex d-md-flex  col-12 mb-2'>
                            <div className='d-flex fw-lighter col-6'>
                                <img src={item?.image} alt="ProductImage" style={{ objectFit: 'cover' }} className="w-25 h-100 " />
                                <div className=''>
                                    <div className='mx-5 title'>
                                        {item?.title}
                                    </div>
                                    <div className='mx-5 title'>
                                        Rs. 1,199.00
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex  col-4'>
                                {item?.quantity > 0 ?
                                    <div className=' d-flex justify-content-around align-items-center  fw-lighter  quantity' style={{ border: '1px solid brown', borderColor: '#4A2A1E' }}>
                                        <div className='' onClick={() => increQuantity(item)}>
                                            <i className="fa-solid fa-plus" ></i>
                                        </div>
                                        <div className='fw-normal'>
                                            {item?.quantity}
                                        </div>
                                        <div onClick={() => decreQuantity(item)}>
                                            <i className="fa-solid fa-minus"></i>
                                        </div>
                                    </div>
                                    : ''}
                                <div className='fs-6 mx-5 d-flex' style={{ color: '#4A2A1E' }} onClick={() => deleteProduct(item)}>
                                    <i className="fa-solid fa-trash"></i>
                                </div>
                            </div>
                            <div className='fw-lighter col-2  d-flex justify-content-end'>
                                Rs. 1,199.00
                            </div>
                        </div>

                        <div className=" d-flex d-lg-none d-md-none col-12 mb-2 mt-2">
                            <div className='col-6'>
                                <div className='d-flex fw-lighter '>
                                    <img src={item?.image} alt="ProductImage" style={{ objectFit: 'cover' }} className="w-25 h-25 " />
                                    <div className='mx-2'>
                                        <div className=' title'>
                                            {item?.title}
                                        </div>
                                        <div className='flex-col'>
                                            <div className='title'>
                                                Rs. 1,199.00
                                            </div>
                                            <div className='d-flex'>
                                                {item?.quantity > 0 ?
                                                    <div className=' d-flex justify-content-around align-items-center  fw-lighter  quantity1' style={{ border: '1px solid brown', borderColor: '#4A2A1E' }}>
                                                        <div className='' onClick={() => increQuantity(item)}>
                                                            <i className="fa-solid fa-plus"></i>
                                                        </div>
                                                        <div className='fw-normal'>
                                                            {item?.quantity}
                                                        </div>
                                                        <div onClick={() => decreQuantity(item)}>
                                                            <i className="fa-solid fa-minus"></i>
                                                        </div>
                                                    </div>
                                                    : ''}
                                                <div className='fs-6  mx-2 d-flex align-items-center' style={{ color: '#4A2A1E' }} onClick={() => deleteProduct(item)}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='fw-lighter col-6 d-flex justify-content-end'>
                                Rs. 1,199.00
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}