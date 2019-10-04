import React, { Component, Fragment } from 'react';

class List extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="mt-5">Todo List</h1>
                <ul className="list-group text-left">
                    { this.props.item.map((item, index) => <li className="list-group-item" key={index}> {item} </li>) }
                </ul>
            </Fragment>
        )
    }
}

export default List;