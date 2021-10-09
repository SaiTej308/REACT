import React, { Component } from 'react'
import Reg from './Reg'

export default class Login extends Component {
    render(props) {
        return (
            <div>
                <h1>Login page for {this.props.name}</h1>
            </div>
        )
    }
}
