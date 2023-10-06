import { Component } from "react";
import './ProductDetail.scss';
import ContactMenu from "../HomePage/Component/header/ContactMenu";
import HeaderMenu from "../HomePage/Component/header/HeaderMenu";
import BreadCrumb from "../HomePage/Component/header/BreadCrumb";
import ProductImg from "./Component/ProductImg";
import ProductInformation from "./Component/ProductInformation";
import ProductDetailImg from "./Component/ProductDetailImg";
import HomeFooter from "../HomePage/Component/HomeFooter";

class ProductDetail extends Component{
    render(){
        return(
            <div className="product-detail-container">
                <div className="header-product-detail">
                <ContactMenu/>
                <HeaderMenu/>
                <BreadCrumb/>
                </div>
                <div className="content-product-detail">
                    <ProductImg/>
                    <ProductInformation/>
                    
                </div>
                <ProductDetailImg/>
                <div className="footer-product-detail">
                    <HomeFooter/>
                </div>
            </div>
        )
    }
}
export default ProductDetail;