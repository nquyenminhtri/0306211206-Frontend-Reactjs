import { Component } from "react";
import { Link } from 'react-router-dom';
import './ProductInformation.scss';
class ProductInformation extends Component{
    render(){
        return(
            <div className="product-information-container">
                <div className="detail-title">
                    <div className="title">
                        <p>VANS AUTHENTIC CLASSIC BLACK/WHITE</p>

                    </div>
                    <div className="label-product-code">
                        <span><ul><li>Thương hiệu:<span> VANS</span></li>/
                                    <li>Mã sản phẩm:<span>VN000EE3BLK</span></li>
                                </ul>
                        </span>
                    </div>

                </div>
                <div className="product-price">
                    <h4>1.450.000Đ</h4>
                </div>
                <div className="list-size">
                    <span>SIZE</span>
                    <ul>
                        <li>37.5</li>
                        <li>38</li>
                        <li>38.5</li>
                        <li>39</li>
                        <li>39.5</li>
                        <li>40</li>
                        <li>40.5</li>
                        <li>41</li>
                        <li>41.5</li>
                        <li>42</li>
                    </ul>
                    
                    
                </div>
                <div className="quantity-buy">
                    <div className="quantity">
                        <button className="reduce">-</button>
                        <input type="text" className="input-quantity" readOnly />
                        <button className="increase">+</button>
                    </div>
                    <Link className="buy" to='/cart'><button>Mua ngay</button></Link>
                </div>
                <div className="summary">
                    <span className="phone">Tư vấn:<a>0967646120</a></span><br/>
                    <span className="size-chart"><a>SIZE CHART</a></span>
                </div>
            </div>
        )
    }
}
export default ProductInformation;