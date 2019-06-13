import React, {Component} from 'react';
import delete__icon from './../../assets/img/delete-icon.png'

class BasketItem extends Component {

  onRemoveClick = () => {
    this.props.removeProductFromBasket(this.props.data);
  };

  render() {
    return (
      <div className='basket__item'>
        <div className='basket__img'>
          <img alt='Продукт' src={this.props.data.pic}/>
        </div>
        <div className='basket__info'>
          <p className='basket__name'>{this.props.data.brand}</p>
          <p className='basket__name'> {this.props.data.name}</p>
          <p className='basket__price'>{this.props.data.price} руб.</p>
        </div>
        <div className='basket__delete' onClick={this.onRemoveClick}>
          <img alt='Удалить' src={delete__icon} />
        </div>
      </div>
    );
  }
}

export default BasketItem;