import React, { Component } from 'react';
import List from './List';
import './App.css';
import './bootstrap.min.css';

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
			<div className="container text-center">
        <div className="card mt-5 text-center">
          <div className="card-body">
            <h1>Todo List</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input className="form-control" value={this.state.todoItem} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Tambah</button>
                </div>
            </form>
          </div>
        </div>

        <List item={this.state.item} />
			</div>
		)
	}
}

export default App;
