import { Component } from 'react';
import './Track.css'

export default class Track extends Component {
    render() {
        return (
            <div className='Track'>
                <div className='Track-information'>
                    {/* <h3><!-- track name will go here --></h3> */}
                    {/* <p><!-- track artisti will go here --> | <!-- Track album will go here --></p> */}
                </div>
                {/* <button className='Track-action'><!-- + or - will go here --></button> */}
            </div>
        ) 
    }
}