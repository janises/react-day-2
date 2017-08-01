import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";

class App extends Component {
  constructor() {
    super();
    this.state = { //never change the data from a different component. wherever your state is, that's where you make functions that change the data. 
      products: [
        {imageUrl:"", title: "Coconuts", description: "Fruit", price: "3.50", isInCart: false},
        {imageUrl:"", title: "Coco Puffs", description: "Cereal", price: "1.95", isInCart: false},
        {imageUrl:"", title: "Cocoa Butter", description: "Lotion", price: "8.50", isInCart: false},
        {imageUrl:"", title: "Hot Cocoa", description: "Powder", price: "2.00", isInCart: false},
        {imageUrl:"", title: "Cacao", description: "Bean", price: "12.50", isInCart: false}
      ]
    };
    this.bought = this.bought.bind(this);
  }

     bought(index) {
      let productsCopy = this.state.products.slice();
      productsCopy[index].isInCart = true;
      this.setState({
      products: productsCopy
      })
    }

  render() {
    let products = []
    for(var i = 0; i < this.state.products.length; i++) {
      var product = this.state.products[i];
      products.push(<Product 
      imageUrl={product.imageUrl} 
      title={product.title} 
      description={product.description} 
      price={product.price}
      inCart={product.isInCart}
      index ={i}
      bought= {this.bought}/>);
    }
   

    return (
      <div className="App"> 
        <h1> Stuff to Buy </h1>
        {products}
      </div>
    );
  }
}

export default App;
