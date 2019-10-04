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
        <h1 className="mt-5">Todo Input</h1>
        <div className="card text-center">
          <div className="card-body">
            
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="fa fa-list"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.todoItem} onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Tambah</button>
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
