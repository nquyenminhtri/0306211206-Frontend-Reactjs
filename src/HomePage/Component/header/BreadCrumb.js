import { Component } from "react";
import './BreadCrumb.scss';
class BreadCrumb extends Component{
    
    render(){
        const { pageTitle } = this.props;
        return(
            <div className="bread-crumb-container">
                <div className="title-page">
                    <p>{pageTitle}</p>

                </div>
                <div className="bread-crumb">
                    <span><ul><li><a>Trang chủ</a></li>/
                                <li>Chi tiết sản phẩm</li>/
                                <li>Tên sản phẩm</li>
                            </ul>
                    </span>
                </div>
            </div>
        )
    }
}
export default BreadCrumb;