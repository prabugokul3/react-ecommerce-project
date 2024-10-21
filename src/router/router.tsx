import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../home/home';
import { Product } from '../products/product';
import { Navbar } from '../navbar';
import { ProductDetail } from '../productDetail/productDetail';
import { Cart } from '../cart/cart';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <Navbar />
                        
                    </>
                }>
                    <Route index element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/products' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/productDetail' element={<ProductDetail />} />

                </Route>
            </Routes>
        </Router>
    );
};
