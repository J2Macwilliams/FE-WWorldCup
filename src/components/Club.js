import React, { Component } from 'react'
import axios from 'axios';

import Players from './Players';

import Navbar from './Navbar';



class Club extends Component {
    state = {
        players: [],
    }

    componentDidMount() {

        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                console.log(response)
                this.setState({
                    players: response.data
                })
            })
            .catch(err => console.log(err));
    }

   

    render() {
        return (
            <div>
                <Navbar />
                <Players data={this.state.players} />
                
            </div>
        )
    }
}
export default Club