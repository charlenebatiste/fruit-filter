import React, { Component } from 'react';

class List extends Component{
    render(){
        // iterate through the list of fruits that are passed down as props(from FruitContainer) and display each as an li
        const fruitItems = this.props.fruits.map((f, idx) => {
            return <li key={idx}>{f}</li>
        })
        return(
            <ul>
                {fruitItems}
            </ul>
        )
    }
}

export default List;