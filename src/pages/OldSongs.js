import React from 'react'
import Header from "../components/Header";
import SongList from "../components/SongList";
import PlayerBanner from '../components/PlayerBanner';

function OldSongs() {
  return (
    <div>
      <Header />
      <PlayerBanner
        img={
          "https://mobstatus.com/wp-content/uploads/2021/10/mere-sapno-ki-rani.jpg"
        }
        title={"Old Songs"}
      />
      <h1 style={{ fontSize: "2em" }}>OldSongs</h1>
      <SongList />
    </div>
  );
}

export default OldSongs