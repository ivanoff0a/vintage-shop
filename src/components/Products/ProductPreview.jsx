import React, {Component} from 'react';
import basket__icon from './../../assets/img/bucket-icon.png'
import { Link } from "react-router-dom";

class ProductPreview extends Component {
  constructor() {
    super();
    this.state = {
      // blacked: '',
      // whiten: ''
    }
  }

  onAddClick = () => {
    this.props.addProductToBasket(this.props.data);
    // this.toggleClasses();
  };

  // onPreviewClick = () => {
  //   this.props.setCurrentProduct(this.props.data)
  // }

  // toggleClasses = () => {
  //   var cssBlacked =
  //     this.state.blacked === '' ? 'blacked' : '';
  //   this.setState({blacked: cssBlacked});
  //   var cssWhiten =
  //     this.state.whiten === '' ? 'whiten' : '';
  //   this.setState({whiten: cssWhiten});
  // };

  render() {
    const productUrl = `/product/${this.props.data.short_name}`;
    return (
        <div className='product'>
          <Link to={productUrl} className='product__container'>
            <div className='product__img' onClick={this.onPreviewClick}>
              <img alt='Предмет' src={this.props.data.pic} />
            </div>
            <div className='product__desc' onClick={this.onPreviewClick}>
              <div className='product__info'>
                <p className='product__name'>{this.props.data.brand}</p>
                <p className='product__name'> {this.props.data.name}</p>
              </div>
              <p className='product__price'>{this.props.data.price} руб.</p>
            </div>
          </Link>
          <div className='product__add' onClick={this.onAddClick}>
            <img alt='В корзину' src={basket__icon} />
          </div>
        </div>
    );
  }
}

export default ProductPreview;