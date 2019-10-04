import React, { Component, Fragment } from 'react';

import './Surah.css';

class Surah extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            isLoading: true
        }
    }

    // componentDidMount() {
    //     fetch("http://api.alquran.cloud/surah")
    //         .then(response => response.json())
    //         .then(data => this.setState({ item: data, isLoading: false }))
    // }

    render() {
        const { item, isLoading } = this.state
        // if (isLoading) {
        //     return <p>Loading . . . .</p>
        // }
        console.log(item.data)
        return (
            <Fragment>
                <div className="header">
                    <div className="title"><p>Qur'an App</p></div>
                </div>
                <div className="card-first">
                    {/* <ul>
                        {
                            item.data.map((item, index) => <li key={index}>{item.englishName}</li>)
                        }
                    </ul> */}
                </div>
            </Fragment>
        )
    }
}

export default Surah;
