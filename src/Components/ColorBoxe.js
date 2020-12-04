import React, { Component } from 'react'

class ColorBoxe extends Component {
    render() {
        return (
            <div>
                <div style={{background:this.props.background}}>
                    <div>{this.props.name}</div>
                    <span>MORE</span>
                </div>
            </div>
        )
    }
}

export default ColorBoxe;
