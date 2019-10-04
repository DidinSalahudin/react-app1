import React, { Component } from 'react';
import List from './List';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoItem: '',
            item: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            item: [...this.state.item, this.state.todoItem],
            todoItem: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            todoItem: event.target.value
        })
        console.log(this.state)
    }

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
            <input value={this.state.todoItem} onChange={this.handleChange} />
            <button>Tambah</button>
        </form>

        <List item={this.state.item} />
			</div>
		)
	}
}

export default App;
