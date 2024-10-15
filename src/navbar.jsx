import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light ">
            <div class='container'>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='text fw-bold fs-1 '>
                    9 S K I N
                </div>
                <div class='d-lg-none d-md-block  ms-auto' type="button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                    <ul class="navbar-nav  my-2 my-lg-0 navbar-nav-scroll ">
                        <li class="nav-item ">
                            <Link class=" text" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class=" text" to="/products">Product</Link>
                        </li>
                        {/* <li class="nav-item"> <Link class="text" href="#">About</Link></li>
                            <li class="nav-item"> <Link class="text" href="#">Link</Link></li> */}
                    </ul>
                </div>
                <div class=' d-none d-lg-block ms-5 text fs-4' type="button" >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </div>
        </nav>
    )
}




