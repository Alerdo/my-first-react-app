import React from "react";
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js'


class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange= this.handleNameChange.bind(this);
    }


    handleNameChange(event) {
     this.props.onNameChange(event.target.value)
    }


    render() {
        return (
            <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />   
                       {/* /*we use same attribute traks so tracks can render the same .map() */ }
             <TrackList playList={this.props.playListName}
                        tracks={this.props.playListTracks}
                        onRemove={this.props.onRemove} 
                        isRemoval={true} /> 
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}



export default Playlist