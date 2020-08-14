import React, { Component } from 'react'
import Product from './Product';

class Mall extends Component {
    state={
        products: require('../assets/products.json')
    }
    render() {
        return(
            <div className="mall">
                {Object.values(this.state.products).map((info)=>
                <Product product={info}></Product>)}
            </div>
        );

    }
}
export default Mall;