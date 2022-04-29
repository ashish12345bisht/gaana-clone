import React from 'react'
import SwiperContainer from '../components/SwiperContainer'
import BannerContainer from '../components/BannerContainer'
import Header from '../components/Header'


function Homepage() {
  return (
    <div>
      <Header />
      <BannerContainer />
      <SwiperContainer
        title={"Trending Songs"}
        img={
          "https://geo-media.beatport.com/image_size/250x250/32e549ef-8fd5-48a4-9a7c-3ae5ac9960c6.jpg"
        }
        name={"Hello World"}
      />
      <SwiperContainer
        title={"New Songs"}
        img={
          "https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg"
        }
        name={"Excuses"}
      />
      {/* https://mobstatus.com/wp-content/uploads/2021/10/mere-sapno-ki-rani.jpg */}
      <SwiperContainer
        title={"Old Songs"}
        img={
          "https://mobstatus.com/wp-content/uploads/2021/10/mere-sapno-ki-rani.jpg"
        }
        name={"Mere Sapno Ki Rani"}
      />
      <SwiperContainer title={"English Songs"}
      img={"https://a10.gaanacdn.com/images/albums/52/1839852/crop_480x480_1839852.jpg"}
      name={"Shape of You"} />
    </div>
  );
}

export default Homepage