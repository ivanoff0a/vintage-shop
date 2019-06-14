import React, { Component } from "react";
import { Route, browserHistory } from "react-router-dom";
import Routes from "./constants/Routes.js";
import Header from "./components/Header/Header";
import ProductsList from "./components/Products/ProductsList";
import product1__pic from "./assets/img/product1.jpg";
import product2__pic from "./assets/img/product2.jpg";
import product3__pic from "./assets/img/product3.jpg";
import product4__pic from "./assets/img/product4.jpg";
import BasketList from "./components/Basket/BasketList";
import ProductAbout from "./components/Products/ProductAbout";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
      productsMoney: 0,
      choosenProducts: [],
      products: [
        {
          brand: "Custom & Bogema",
          name: "Тоут 'Underdog'",
          short_name: 'tote-underdog',
          size: 'Один Размер',
          type: "Тоут",
          price: 2990,
          desc: "Сделан Глебом Костиным и мной в Апреле, 2019 'Мастерская'",
          pic: product1__pic
        },
        {
          brand: "Богема",
          name: "Шарф «ЛЕНИНГРАД»",
          short_name: 'scarf-leningrad',
          size: 'Один Размер',
          type: "Шарф",
          price: 3990,
          desc: "Куплен в Феврале, 2019. 9/10, один размер",
          pic: product2__pic
        },
        {
          brand: "Custom",
          name: "Тоут 'Mixed Cultures'",
          short_name: 'tote-mixedcultures',
          size: 'Один Размер',
          type: "Тоут",
          price: 1990,
          desc: "Сделан мной в Июне, 2019. 1/1",
          pic: product3__pic
        },
        {
          brand: "Custom & Bogema",
          name: "Футболка 'Underdog'",
          short_name: 't-shirt-underdog',
          size: 'M',
          type: "Футболка",
          price: 3990,
          desc: "Сделана Глебом Костиным и мной в Апреле, 2019 'Мастерская'",
          pic: product4__pic
        }
      ]
    };
  }

  addProductToBasket = product => {
    this.setState({
      choosenProducts: [...this.state.choosenProducts, product]
    });
    this.state.productsCount += 1;
    this.state.productsMoney += product.price;
  };

  removeProductFromBasket = (product, i) => {
    let newChoosenProducts = this.state.choosenProducts;
    newChoosenProducts.splice(i, 1);
    this.setState({ choosenProducts: newChoosenProducts });
    this.state.productsCount -= 1;
    this.state.productsMoney -= product.price;
  };

  render() {
    return (
      <>
        <Header />
        <Route
          exact
          path={Routes.SHOP}
          render={props => (
            <ProductsList
              products={this.state.products}
              productsCount={this.state.productsCount}
              addProductToBasket={this.addProductToBasket}
            />
          )}
        />
        <Route
          path={Routes.PRODUCT}
          render={props => (
            <ProductAbout
              {...props}
              addProductToBasket={this.addProductToBasket}
              productsCount={this.state.productsCount}
              products={this.state.products}
            />
          )}
        />
        <Route
          path={Routes.BASKET}
          render={props => (
            <BasketList
              removeProductFromBasket={this.removeProductFromBasket}
              productsMoney={this.state.productsMoney}
              productsCount={this.state.productsCount}
              choosenProducts={this.state.choosenProducts}
            />
          )}
        />
      </>
    );
  }
}

export default App;
