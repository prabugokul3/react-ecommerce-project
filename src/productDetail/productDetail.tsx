import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import './productDetail.css'

export const ProductDetail = () => {
    const location = useLocation()
    const { Id } = location.state
    useEffect(() => {
        if (Id) {
            setDetail(Id)
        }
    }, [Id])
    const [detail, setDetail]: any = useState({})
    console.log(detail)

    return (
        <div className="container mt-5">
            <div className="sm:none row">
                <div className="col">
                    <img src={detail?.image} alt='...' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="col">
                    <div className="title">{detail.title}</div>
                    <h5 className="sub-title">Anti-aging Combo - Rejuvenate + Eternelle</h5>
                    <div className="d-flex mt-5">
                        <div className="discountPrice  text-decoration-line-through d-flex justify-content-center align-items-center">Rs. 3,398</div>
                        <div className="price mx-2  fs-3 ">Rs. 3,299</div>
                    </div>
                    <div className="sub-title fw-bold">Uncover the secret to timeless love and skin that feels 9teen again</div>
                    <div className="mt-2 w-50 fs-4 content">
                        {detail?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}