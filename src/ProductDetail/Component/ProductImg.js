import { Component } from "react";
import './ProductImg.scss';
class ProductImg extends Component{
    render(){
        return(
            <div className="product-img-container">
                <img src="/product-img/vans_1.webp" alt="no img"></img>
            </div>
        )
    }
}
export default ProductImg;