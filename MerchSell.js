import React, { Component } from "react";

export default class MerchSell extends Component {
  state = {
    counter: 1,
  };
  onButtonClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="sellProduct">
        <img
          src="https://img.myloview.com/posters/shopping-cart-icon-thin-linear-shopping-cart-outline-icon-isolated-on-white-background-line-vector-shopping-cart-sign-symbol-for-web-and-mobile-700-257197562.jpg"
          alt="cart"
          width="60px"
        />
        {this.state.counter}
        <h1>Buy My Best Electronics Products</h1>
        <h3 style={{ color: "green" }}>Products</h3>
        <div>
          <h3>laptop</h3>
          <h4>$999.99</h4>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmT3IMFu61wKchj558EGfxnMSAxSzbzKv2qw&usqp=CAU"
            alt="laptop"
            style={{ width: "80px" }}
          />
          <br />
          <button onClick={this.onButtonClick}>Add to Cart</button>
        </div>
        <div>
          <h3>Charger</h3>

          <h4>$59</h4>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71PTw3I2zrL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            alt="laptop"
            style={{ width: "80px" }}
          />
          <br />
          <button onClick={this.onButtonClick}>Add to Cart</button>
        </div>
        <div>
          <h3>AirPods</h3>
          <h4>$100</h4>
          <img
            alt="laptop"
            style={{ width: "80px" }}
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604686090000"
          />
          <br />
          <button onClick={this.onButtonClick}>Add to Cart</button>
        </div>
      </div>
    );
  }
}
