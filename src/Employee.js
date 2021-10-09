import React, { Component } from 'react'

export default class Employee extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            name:"Sammy",
            employee:[
                {name:"Roy"},
                {name:"Choi"}

            ]
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.employee[1].name}</h1>
                
            </div>
        )
    }
}
