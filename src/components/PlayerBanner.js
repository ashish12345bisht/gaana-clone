import React from 'react'
import '../styles/PlayerBanner.css'

function PlayerBanner({img,title}) {
  return (
    <div className="player__banner">
      <img src={img} />
      <div>
        <h1>{title}</h1>
        <p>
          Top trending hits, refreshed daily
          <br /> Created by Gaana <br /> 30 Tracks
        </p>
        <button>Play</button>
      </div>
    </div>
  );
}

export default PlayerBanner