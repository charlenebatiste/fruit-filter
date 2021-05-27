import React, { Component } from 'react';

class Input extends Component{
    render(){
        return(
            <div>
                <label htmlFor='fruit-filter'>Filter these fruits:</label>
                <input type="text" name="fruit-filter" id="fruit=filter" value={this.props.value} onChange={this.props.onChange}></input>
                {/* sets the input value attribute equal to the value attribute passed down from FruitContainer */}
                {/* sets the input onChange attribute equal to the onChange attribute passed down from FruitContainer */}
            </div>
           
        )
    }
}

export default Input;