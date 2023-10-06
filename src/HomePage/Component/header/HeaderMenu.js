import { Component } from 'react';
import './HeaderMenu.scss';
import '@fortawesome/fontawesome-free-webfonts';
import { Link } from 'react-router-dom';

class HeaderMenu extends Component{
    render(){
        
        return(
            <div className='headerMenu-container'>
                <div className='content-left'>
                    <div className='logo'>
                        <Link to='/'><img src='/images/logo.webp'/></Link>
                    </div>
                </div>
                <div className='content-center'>
                    <ul className='item-big'>
                        <li className='nav-item'><a><span>ALL VANS</span></a></li>
                        <li className='nav-item'>
                            <a><span>SHOES</span>
                                <i className="fas fa-caret-down"></i>  
                            </a>
                            
                        </li>
                        <li className='nav-item'><a><span>NEW ARRIVALS</span></a></li>
                        <li className='nav-item'><a><span>ACCESSORIES</span><i className="fas fa-caret-down"></i></a></li>
                        <li className='nav-item'><a><span>COLLECTIONS</span><i className="fas fa-caret-down"></i></a></li>
                        <li className='nav-item'><a><span>SALE OFF</span></a></li>
                        <li className='nav-item'><a><span>SIZE CHART</span></a></li>
                        <li className='nav-item'><a><span>ABOUT US</span></a></li>
                    </ul>
                </div>
                <div className='content-right'>
                    <div className='search-cart'>
                        <div className='search-item child-item'>
                            <i className="fas fa-search">
                                <div className='input' ><input type='text' placeholder='Search' /></div>
                            </i>
                            
                        </div>
                        <div className='cart-item child-item'><Link to='/cart'><i className="fas fa-cart-plus"></i></Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderMenu;