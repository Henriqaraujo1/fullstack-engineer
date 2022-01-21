import React from 'react';
import { Component } from 'react'
import './SearchBar.css';


export default class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder='Enter a Song, Album, or Artist' />
                <button class="SearchButton">SEARCH</button>
            </div>
        )
    }
}