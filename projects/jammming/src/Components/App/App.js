import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'lucas', artist: 'lucas2', album: 'lucas3', id: 1 },
      { name: 'pedro', artist: 'pedro2', album: 'pedro3', id: 2 },
      { name: 'marcos', artist: 'marcos2', album: 'marcos3', id: 3 }],
      playlistName: 'New Playlist',
      playlistTracks: [{ name: 'lucas5', artist: 'lucas2', album: 'lucas3', id: 1 },
      { name: 'pedro5', artist: 'pedro2', album: 'pedro3', id: 2 },
      { name: 'marcos5', artist: 'marcos2', album: 'marcos3', id: 3 }]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks : tracks})
  }

  removeTrack(track){
    let tracksOut = this.state.playlistTracks;
    tracksOut = tracksOut.filter(removedTrack => removedTrack.id !== track.id)

    this.setState({playlistTracks : tracksOut})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResult={this.state.searchResults} 
                          onAdd={this.addTrack}/>
            <Playlist playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;