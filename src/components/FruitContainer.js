import React, { Component } from 'react';
import List from './List';
import Input from './Input';

class FruitContainer extends Component{
    state={
        fruitsToDisplay: this.props.fruits,
        // sets a state attribute using thr fruits property passed down from App.js
        fruitValue: '',
    }
    handleFilterChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        // sets the value equal to whatever the user inputs
        const filteredFruitList = this.props.fruits.filter(fruit => {
            // creates new variable which grabs a copy of the fruits property and filters through them.
            // for each fruit in the fruits property it will check to see if the fruit includs the value (user input)
            if (fruit.includes(value.toLowerCase())){
                // toLowerCase changes the userinput to all lower case. failsafe for if they add uppercase which would not match the data we defined in App.js
                    return true;
            } else {
                return false;
            }
            // Another way to write this
            // return fruit.includes(value.toLowerCase());
        })
        this.setState({
            fruitsToDisplay: filteredFruitList,
            // after filtering it will change the fruitsToDisplay attribute from all passed down fruit properties to only those that match the user input
            fruitValue: value,
            // updates the fruit value to equal user input
        })
    }
    render(){
        return(
            <div>
              <Input value={this.state.fruitValue} onChange={this.handleFilterChange}/>
              {/* passes the current state of fruit value to the Input Component in an attribute called value */}
              {/* passes the handleFilterChange function to the Input Component in an attribute called onChange */}
              <List fruits={this.state.fruitsToDisplay}/>
              {/* passes the current state of fruitsToDisplay to the List Component in an attribute called fruits */}
            </div>
        )
    }
}

export default FruitContainer;