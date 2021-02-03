import React, { Component } from 'react'

class CoordinatesButton extends Component {
    handleClick = (e) => {
        let array = []
        array.push(e.clientX, e.clientY)
        this.props.onReceiveCoordinates(array)
    }
    
    render () {
        return (
            <button onClick={this.handleClick}>
            </button>
        )
    }
}

export default CoordinatesButton
