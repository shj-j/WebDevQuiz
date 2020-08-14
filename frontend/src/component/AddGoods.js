import React, { Component } from 'react'

const URL = "localhost:3306/products"
class AddGoods extends Component {
    state={
        name:"",
        price:"",
        unit:"",
        picture:"",
        url:""

    }

    handleSubmit=(event)=>{
        console.log(JSON.stringify(this.state))
        event.preventDefault();
        fetch(URL,{
            method:'POST',
            Headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(JSON.stringify(this.state))
        })
        alert("Add to DATABASE success!")
    }
    handleName=(event)=>{
        this.setState({
            name: event.target.value,
        })
    }
    handlePrice=(event)=>{
        this.setState({
            price:event.target.value,
        })
    }
    handlePicture=(event)=>{
        this.setState({
            url:event.target.value,
        })
    }
    handleUnit=(event)=>{
        this.setState({
            unit:event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form">
                <h1 className="title">添加商品</h1>
                <div className="form-content"> 
     
                    <h3 className="lable_title">*名称</h3>
                    <input className="input_text" type="text" onChange={this.handleName} value = {this.state.name} placeholder="名称: " required/>

                    <h3 className="lable_title">*价格</h3>
                    <input className="input_text" type="text" onChange={this.handlePrice} value = {this.state.price} placeholder="价格: " required/>
                    <h3 className="lable_title">*单位</h3>
                    <input className="input_text" type="text" onChange={this.handleUnit} value = {this.state.unit} placeholder="单位" required/>
                    <h3 className="lable_title">*图片</h3>
                    <input className="input_text" type="text" onChange={this.handlePicture} value = {this.state.url} placeholder="URL" required/>
                </div>
                <input className="submit" type="submit" value="Submit"
                disabled={ ! this.state.name || ! this.state.url || ! this.state.price || ! this.state.unit}/>
            </form>
        );
    }
}
export default AddGoods;