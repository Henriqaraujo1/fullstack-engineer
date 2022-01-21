import { Component } from "react";
import './TrackList.css'
import Track from "../Track/Track";

export default class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
              <Track />  
            </div>
        )
    }
}