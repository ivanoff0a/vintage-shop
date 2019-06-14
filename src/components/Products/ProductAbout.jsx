import React, { Component } from "react";
import Routes from "../../constants/Routes";
import back__icon from './../../assets/img/back__icon.png';
import basket__icon_white from "../../assets/img/bucket-icon-white.png";
import {Link} from "react-router-dom";

class ProductAbout extends Component {
  onQuitClick = () => {
    this.props.history.push(Routes.SHOP);
  }

  render() {
    const itemShortKey = this.props.match.params.short_name;
    const currentProduct = this.props.products.filter(product => product.short_name === itemShortKey)[0];
    console.log(currentProduct);

    if(this.props.productsCount === 0) {
      return (
        <div className="about__container">
          <div className="about">
            <div className="about__img">
              <img alt="Предмет" src={currentProduct.pic} />
            </div>
            <div className="about__info">
              <div className="about__desc">
                <p className="about__name">{currentProduct.brand}</p>
                <p className="about__name"> {currentProduct.name}</p>
                <p className="about__size"> {currentProduct.size}</p>
                <p className="about__portrait">{currentProduct.desc}</p>
              </div>
              <div className="about__buy">
                <p className="about__price">{currentProduct.price} руб.</p>
                <div className="basket__buy" onClick={() => this.props.addProductToBasket(currentProduct)}>
                  <p>Купить</p>
                </div>
              </div>
            </div>
            <div className='about__quit' onClick={this.onQuitClick}>
              <img alt='Назад' src={back__icon}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="about__container">
          <div className="about">
            <div className="about__img">
              <img alt="Предмет" src={currentProduct.pic} />
            </div>
            <div className="about__info">
              <div className="about__desc">
                <p className="about__name">{currentProduct.brand}</p>
                <p className="about__name"> {currentProduct.name}</p>
                <p className="about__size"> {currentProduct.size}</p>
                <p className="about__portrait">
                  {currentProduct.desc}
                </p>
              </div>
              <div className="about__buy">
                <p className="about__price">
                  {currentProduct.price} руб.
                </p>
                <div className="basket__buy" onClick={() => this.props.addProductToBasket(currentProduct)}>
                  <p>Купить</p>
                </div>
              </div>
            </div>
            <div className="about__quit" onClick={this.onQuitClick}>
              <img alt="Назад" src={back__icon} />
            </div>
          </div>
          <Link to={Routes.BASKET}>
            <div className="products__count">
              <img src={basket__icon_white} alt="Корзина" />
              <p className="name">В корзине </p>
              <p className="sum">{this.props.productsCount}</p>
            </div>
          </Link>
        </div>
      );
    }
  }
}

export default ProductAbout;
