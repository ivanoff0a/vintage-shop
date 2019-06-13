import React, {Component} from 'react';
import basket__icon from './../../assets/img/bucket-icon.png'
import Routes from "../../constants/Routes";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to={Routes.SHOP}>
          <p>Vintage Shop</p>
        </Link>
        <Link to={Routes.BASKET}>
          <div className='header__basket'>
            <img alt='Корзина' src={basket__icon}/>
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;