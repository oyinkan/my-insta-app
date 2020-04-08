import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>This is my Homepage</h1>
                    <h1>I will link to my <Link to="/about">About</Link> page</h1>
                    <h1>I will link to my <Link to="/contact">Contact</Link> page</h1>
                </div>
            </div>
        )
    }
}