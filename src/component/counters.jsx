import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            { id:1 , value:4 },
            { id:2 , value:0 },
            { id:3 , value:0 },
            { id:4 , value:0 },
        ]
     }
     handleIncremet = counterObj => {
         const counters = [...this.state.counters];
         const index = counters.indexOf( counterObj );
         counters[index] = {...counterObj};
         counters[index].value++;
         this.setState({counters});
    }
     handleDelete = counterId => {
         const counters = this.state.counters.filter( c => c.id !== counterId )
         this.setState({counters})
     }
     handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
         })
         this.setState({counters})
     }
    render() { 
        return (<React.Fragment>
                    <button onClick={ () => this.handleReset() } className="btn btn-sm btn-primary m-2">Reset</button>
                    <div className="row">
                        {this.state.counters.map( counter => ( 
                            <Counter 
                                key={counter.id} 
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncremet}
                                counter={counter} 
                            /> 
                        ))}
                    </div> 
                </React.Fragment>
                );
    }
}
 
export default Counters;