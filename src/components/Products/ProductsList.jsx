import React, {Component} from 'react';
import ProductPreview from "./ProductPreview";

class ProductList extends Component {

  render() {
    let products = this.props.products.map((product, i) => {
      return (
        <ProductPreview key={i} data={product} index={i} />
      )
    });

    return (
      <div>
        {products}
      </div>
    );
  }
}

export default ProductList;