import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist  from '../Playlist/Playlist.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 }
      ],

      playlistName: 'MyPlaylist',

      playListTracks:[
        { name: "playListName1", artist: "playListArtist1", album: "playListAlbum1", id: 4 },
        { name: "playListName2", artist: "playListArtist2", album: "playListAlbum2", id: 5 },
        { name: "playListName3", artist: "playListArtist3", album: "playListAlbum3", id: 6}
      ]
    };
    this.addTrack = this.addTrack.bind(this); //so the blueprint of the state doesnt change
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const playlistTracks = this.state.playListTracks;

    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      playlistTracks.push(track);
    }
    this.setState({playlistTracks: playlistTracks}) //to reRender the browser so the uptdate can take place
  }

  removeTrack(track) {
    let tracks = this.state.playListTracks
      tracks = tracks.filter(currentTrack=> {
      return currentTrack.id !== track.id  ; ///this returns the array with the traks that pass the condition meaning that the track we will pas on track.js that will fail the condition becasue the id it will be true and that the filter method will check all of the tracks and that track that doesnt pass the condition it will be removed.
    })

    this.setState({playListTracks: tracks} )
 }


  updatePlaylistName(name) {
    this.setState({playListName: name})
  }

  savePlaylist() {
    const trackUris = this.state.playListTracks.map(track => {
      return track.uri;
    })
  }


  search(term) {
    console.log(term);
  }

  render() {
  return (
     <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} 
                         onAdd={this.addTrack} /> 

          <Playlist playListName={this.state.playlistName}
                    playListTracks={this.state.playListTracks} 
                    onRemove={this.removeTrack} 
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist} /> 
       </div>
      </div>
    </div>
)
}}

export default App;
