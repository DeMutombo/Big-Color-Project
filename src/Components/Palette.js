import React, { Component } from 'react'
import ColorBoxe from './ColorBoxe';

 class Pallette extends Component {
    render() {
        const coloBoxes = this.props.colors.map(color => <ColorBoxe color background={color.color} name={color.name}/>)
        return (
            <div className='Palette'>
                {/* Navigation goes here */}

                <div className='Palette-colors'> {coloBoxes}</div>

                {/* footer goes here */}
                
            </div>
        )
    }
}

export default Pallette;