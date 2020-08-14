import React, { Component } from 'react';
import ProImage from "../assets/product_image.png"

const URL = null;
class Product extends Component {

  addToCart=(product)=>{
    fetch(URL,{
        method:'POST',
        Headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(product)
    })
  }

  render() {
    const { product } = this.props;
    console.log(product)
    
    return (
      <div className="product">
        <img src={ProImage} alt="product image" className="image-size" />
        <div style={{ display: 'flex', alignItems:'center' }}>
            <div className="product_info">
                <b>{product.name}</b>
                <p>{product.price}</p>
            </div>
            <button conClick={ this.addToCart(product) }>
              <i className = "material-icons" >add</i>
            </button>
        </div>
      </div>
    );
  }
}
export default Product;