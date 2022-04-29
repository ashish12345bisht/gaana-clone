import React from "react";
import Header from "../components/Header";
import Grid from '../components/Grid';
import PlayerBanner from '../components/PlayerBanner'

function NewSongs() {
  return (
    <div>
      <Header />
      <PlayerBanner
        img={
          "https://a10.gaanacdn.com/images/albums/52/1839852/crop_480x480_1839852.jpg"
        }
        title={"New Songs"}
      />
      <h1 style={{ fontSize: "2em" }}>
        New Songs 2022 - Tera Saath Ho, Sweetest Pie
      </h1>
      <Grid
        name={"Shape Of You"}
        img={
          "https://a10.gaanacdn.com/images/albums/52/1839852/crop_480x480_1839852.jpg"
        }
      />
    </div>
  );
}

export default NewSongs;
