import React, { Component } from "react";
import BasketItem from "./BasketItem";

class BasketList extends Component {
  render() {
    let purchases = this.props.choosenProducts.map((purchase, i) => {
      return (
        <BasketItem
          key={i}
          data={purchase}
          index={i}
          removeProductFromBasket={this.props.removeProductFromBasket}
        />
      );
    });

    if (this.props.productsCount === 0) {
      return (
        <div className="basket__container" >
          <div className="basket">
            <div className="basket__header">
              <p>Корзина</p>
            </div>
            <div className="basket__empty">
              <p>В корзине пока пусто</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="basket__container">
          <div className="basket">
            <div className="basket__header">
              <p>Корзина</p>
            </div>
            <div className="basket__body">
              {purchases}
            </div>
          </div>
          <div className="basket__footer">
            <div className="basket__info-item basket-sum">
              <p>Количество:</p>
              <p className="basket__amount">{this.props.productsCount}</p>
            </div>
            <div className="basket__info-item basket-end">
              <p>Итого:</p>
              <p className="basket__amount">
                {this.props.productsMoney} руб.
              </p>
            </div>
            <div className="basket__buy">
              <p>Купить</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BasketList;
