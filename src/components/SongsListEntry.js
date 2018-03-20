import React from "react";



function SongsListEntry({ song }) {
  return <table>
  <tbody className ="song-header-container">
    
  <tr>
    <td>
      <img src={song.album.images[2].url} height={song.album.images[2].height } width={song.album.images[2].width} />
    </td>
    <td>
    <i className='fa fa-play-circle-o play-btn' aria-hidden="true"/>
  </td>

  <td className='song-title'>
   <p>{ song.name }</p>
  </td>

  <td className='song-artist'>
    <a href={song.artists[0].external_urls.spotify}>{ song.artists[0].name }</a>
  </td>

  <td className='song-album'>
    <a href={song.album.external_urls.spotify}>{ song.album.name }</a>
  </td>
<td />
  <td  className='song-artist'>
    <p>{song.popularity}</p>
  </td>

    <td align="center"className='song-length'>
    <p>{ msToMinutesAndSeconds(song.duration_ms) }</p>
    </td>
    <td className="song-album">
    <audio controls>
      <source src={song.preview_url} type="audio/mpeg" />
    </audio>
    </td>
  </tr>
  </tbody>
</table>
}
function msToMinutesAndSeconds(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export default SongsListEntry;

