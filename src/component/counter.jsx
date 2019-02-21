import React, { Component } from 'react';

export default class Counter extends Component{
    // state = {
    //     value: this.props.counter.value
    // };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    //arow function inherit the this class properties
    // handleIncrement = (product) => {
    //     console.log( product )
    //     //incrementing but not using
    //     // this.state.value++;
    //     //see where it is used and change it it awsome :o
    //     this.setState({ value: this.state.value + 1 });
        
    // }

    render(){
        console.log( this.props.counter );
        return <div className="col-sm-12 m-1" >
                    <span className={this.getBadgeClasses()} > {this.formatCount()} </span>
                    <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-sm btn-secondary" >Increment</button>
                    <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-sm btn-danger m-2">Delete</button>
                </div>;
    }
    getBadgeClasses = () => {
        let classes = "bagde m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}