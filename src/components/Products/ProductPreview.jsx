import React, {Component} from 'react';

class ProductPreview extends Component {
  render() {
    return (
      <div className='product'>
        <div className='product__img'>
          <img alt='Предмет' src={this.props.data.pic} />
        </div>
        <div className='product__info'>
          <p className='product__name'>{this.props.data.name}</p>
          <p className='product__price'>{this.props.data.price}</p>
        </div>
      </div>
    );
  }
}

export default ProductPreview;