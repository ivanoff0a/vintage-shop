import React, { Component } from "react";
import Routes from "../../constants/Routes";
import back__icon from './../../assets/img/back__icon.png';
import basket__icon_white from "../../assets/img/bucket-icon-white.png";
import {Link} from "react-router-dom";

class ProductAbout extends Component {
  onAddClick = () => {
    this.props.addProductToBasket(this.props.currentProduct);
  }

  onQuitClick = () => {
    this.props.history.push(Routes.SHOP);
  }

  render() {
    // this.props.match.params.short_name = this.props.currentProduct.short_name;
    // const short_name = this.props.match.params.short_name;
    // console.log(short_name);
    if(this.props.productsCount === 0) {
      return (
        <div className="about__container">
          <div className="about">
            <div className="about__img">
              <img alt="Предмет" src={this.props.currentProduct.pic} />
            </div>
            <div className="about__info">
              <div className="about__desc">
                <p className="about__name">{this.props.currentProduct.brand}</p>
                <p className="about__name"> {this.props.currentProduct.name}</p>
                <p className="about__size"> {this.props.currentProduct.size}</p>
                <p className="about__portrait">{this.props.currentProduct.desc}</p>
              </div>
              <div className="about__buy">
                <p className="about__price">{this.props.currentProduct.price} руб.</p>
                <div className="basket__buy" onClick={this.onAddClick}>
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
              <img alt="Предмет" src={this.props.currentProduct.pic} />
            </div>
            <div className="about__info">
              <div className="about__desc">
                <p className="about__name">{this.props.currentProduct.brand}</p>
                <p className="about__name"> {this.props.currentProduct.name}</p>
                <p className="about__size"> {this.props.currentProduct.size}</p>
                <p className="about__portrait">
                  {this.props.currentProduct.desc}
                </p>
              </div>
              <div className="about__buy">
                <p className="about__price">
                  {this.props.currentProduct.price} руб.
                </p>
                <div className="basket__buy" onClick={this.onAddClick}>
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
