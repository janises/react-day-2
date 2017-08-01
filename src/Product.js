import React, {Component} from "react";

class Product extends Component {
    constructor() {
        super();
        this.state = {
            color: "white"
        }
    }

    componentWillReceiveProps(newProps){ //the newProps is different than what the props were before. keeps track of local state from props from parent. 
        if(newProps.inCart) {
            this.setState({
                color: "lightblue"
            })
        }
    }   

    render(){
        let buyButton = this.props.inCart ? null : <button onClick={()=>this.props.bought(this.props.index)}> Buy </button>;

        let bgObj = {backgroundColor: this.state.color}

        return (
            <div className="product" style={bgObj}> 
                <h1> {this.props.imageUrl} </h1>
                <h2> {this.props.title} </h2>
                <h3> Description: {this.props.description}</h3>
                <h4> ${this.props.price} </h4>   
                {buyButton}
            </div>
        );
    }
}

export default Product;