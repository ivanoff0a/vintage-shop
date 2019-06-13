import React, {Component} from 'react';

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <div className='product'>
          <div className='product__img'>
            <img alt='Предмет' src={this.props.currentProduct.pic} />
          </div>
          <div className='product__desc'>
            <div className='product__info'>
              <p className='product__name'>{this.props.currentProduct.brand}</p>
              <p className='product__name'> {this.props.currentProduct.name}</p>
            </div>
            <p className='product__price'>{this.props.currentProduct.price} руб.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;