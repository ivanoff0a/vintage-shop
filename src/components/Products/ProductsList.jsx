import React, { Component } from "react";
import ProductPreview from "./ProductPreview";
import basket__icon_white from './../../assets/img/bucket-icon-white.png'
import Routes from "../../constants/Routes";
import { Link } from "react-router-dom";

class ProductsList extends Component {
  render() {
    let products = this.props.products.map((product, i) => {
      return (
        <Link to={product.short_name} key={i}>
          <ProductPreview
            data={product}
            index={i}
            addProductToBasket={this.props.addProductToBasket}
            setCurrentProduct={this.props.setCurrentProduct}
          />
        </Link>
      );
    });


    if(this.props.productsCount === 0) {
      return (
        <>
          <div className='products'>{products}</div>
        </>
      )
    } else {
      return (
        <>
          <div className='products'>{products}</div>
          <Link to={Routes.BASKET}>
            <div className='products__count'>
              <img src={basket__icon_white} alt='Корзина'/>
              <p className='name'>В корзине </p>
              <p className='sum'>{this.props.productsCount}</p>
            </div>
          </Link>
        </>
      )
    }
  }
}

export default ProductsList;
