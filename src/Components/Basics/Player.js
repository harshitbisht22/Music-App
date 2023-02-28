import React from 'react'
import PlayerDetails from './PlayerDetails'


function Player (p) {
  return (
    <>
      <h4>Player</h4>
      <audio className="player_audio" src="" controls></audio>
      
      {/* details 
    controls */}
      <p> {p.newSong.title}
      </p>
    </>
  )
}

export default Player
