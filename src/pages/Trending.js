import React from "react";
import SongList from "../components/SongList";
import PlayerBanner from "../components/PlayerBanner";

function Trending() {
  return (
    <div>
      <PlayerBanner
        img={
          "https://geo-media.beatport.com/image_size/250x250/32e549ef-8fd5-48a4-9a7c-3ae5ac9960c6.jpg"
        }
        title={"Trending Songs"}
      />
      <h1 style={{ fontSize: "2em" }}>Trending</h1>
      <SongList />
    </div>
  );
}

export default Trending;
