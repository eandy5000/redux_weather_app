import React, { Component } from 'react'


export default class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            term: ''
        }
    }

    onInputChange(event) {
        console.log(event.target.value)
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)} />
                    <button type="submit">Submit</button>
                </form>
            )
        }
    }

