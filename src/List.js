import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul>
                { this.props.item.map((item, index) => <li key={index}> {item} </li>) }
            </ul>
        )
    }
}

export default List;