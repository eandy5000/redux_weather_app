import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'


class SearchBar extends Component {
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
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ''
        })
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchWeather: fetchWeather
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)