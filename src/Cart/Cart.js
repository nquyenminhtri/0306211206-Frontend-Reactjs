import { Component } from "react";
import './Cart.scss';
import ContactMenu from "../HomePage/Component/header/ContactMenu";
import HeaderMenu from "../HomePage/Component/header/HeaderMenu";
import BreadCrumb from "../HomePage/Component/header/BreadCrumb";
import HomeFooter from "../HomePage/Component/HomeFooter";
class Cart extends Component{
    render(){
        const pageTitle = 'GIỎ HÀNG';
        return(
            <>
            <ContactMenu/>
            <HeaderMenu/>
            <BreadCrumb pageTitle={pageTitle}/>
            <div className="cart-container">
                <div className="table-product">
                        <table className="table">
                        <tbody>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                                <th>Xóa</th>
                            </tr>
                            <tr>
                                <td>Sản phẩm 1</td>
                                <td className="col-quantity">
                                    <div className="quantity">
                                        <button className="reduce">-</button>
                                        <input type="text" className="input-quantity" readOnly />
                                        <button className="increase">+</button>
                                    </div>
                                </td>
                                <td>Dòng 1, Cột 3</td>
                                <td>Dòng 1, Cột 4</td>
                            </tr>
                            
                            </tbody>
                        </table>
                    
                </div>
                <div className="pay">
                    <div className="price">
                        <p>Tổng tiền: <span>1.450.000Đ</span></p>
                    </div>
                    <div className="btn_">
                        <a><button>Tiếp tục mua hàng</button></a>
                        <a><button>Thanh toán</button></a>
                    </div>
                </div>
            </div>
            <HomeFooter/>
            </>
        )
    }
}
export default Cart;