import { Component } from "react";
import Slider from "react-slick";
import './ProductDetailImg.scss';
class ProductDetailImg extends Component{
    render(){
        let settings = {            
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return(
            <div className="product-detail-img">
                <Slider className="slider-product-detail" {...settings} >
                    <div className="child-product-detail">
                        <img src="/product-img/vans_1.webp" alt="no img"></img>
                    </div>
                    
                    <div className="child-product-detail">
                        <img src="/product-img/vans_2.webp" alt="no img"></img>
                    </div>
                    <div className="child-product-detail">
                        <img src="/product-img/vans_3.webp" alt="no img"></img>
                    </div>
                    <div className="child-product-detail">
                        <img src="/product-img/vans_4.webp" alt="no img"></img>
                    </div>
                   

                </Slider>
            </div>
        )
    }
}
export default ProductDetailImg;