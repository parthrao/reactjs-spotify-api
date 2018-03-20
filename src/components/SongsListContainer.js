import React, { Component } from "react";
import { searchForSongs } from "../utility/spotifyApi";

import SongsList from "./SongsList";

class SongsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfMatchingSongs: []
    };
  }

  async componentDidMount () {
    if (this.props.searchTrack) {
      const matches = await searchForSongs(this.props.searchTrack);
      this.setState({
        listOfMatchingSongs: matches
      });
    }
  };

  componentWillReceiveProps = async newProps => {
    if (newProps.searchTrack && newProps.searchTrack !== this.props.searchTrack) {
      const matches = await searchForSongs(newProps.searchTrack);

      this.setState({
        listOfMatchingSongs: matches
      });
    }
  };

  render() {
    if (!this.props.searchTrack) {
      return <h1>Search for someone</h1>;
    }

    const songs = [...this.state.listOfMatchingSongs];

    if (this.props.orderById) {
      songs.sort((x, y) => {
        if (x.id < y.id) return 1;
        if (x.id > y.id) return -1;

        return 0;
      });
    }

    return <SongsList songList={songs} />;
  }
}

export default SongsListContainer;
