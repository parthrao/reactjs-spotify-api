import React, { Component } from "react";
import SongsListEntry from "./SongsListEntry";

class SongsList extends Component {

  render() {

    return (
      <div>
        <h1>{this.props.songList.length} songs</h1>
        <div className='song-header-container'>
        
          <div className='song-title-header'>
            <p>Title</p>
          </div>
          <div className='song-artist-header'>
            <p>Artist</p>
          </div>
          <div className='song-album-header'>
            <p>Album</p>
          </div>
          <div className='song-album-header'>
          <p>Popularity</p>
          </div>
          <div className='song-length-header'>
            <p><i className="fa fa-clock-o" aria-hidden="true" /></p>
          </div>
        </div>
        
          {this.props.songList.map(song => {
            return <SongsListEntry song={song} key={song.id} />;
          })}
    
      </div>
    );
  }

}

export default SongsList;