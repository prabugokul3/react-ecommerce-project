import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import { Home } from '../home/home';
import { Product } from '../products/product';
import { Navbar } from '../navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <Navbar />
                        <Outlet />
                    </>
                }>
                    <Route index element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/products' element={<Product />} />
                </Route>
            </Routes>
        </Router>
    );
};
