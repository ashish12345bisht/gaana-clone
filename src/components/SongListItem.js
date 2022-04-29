import React from 'react'

function SongListItem() {
  return (
    <div className="song__item">
      <div className="song__item__name">
        <img src="https://geo-media.beatport.com/image_size/250x250/32e549ef-8fd5-48a4-9a7c-3ae5ac9960c6.jpg" />
        <h4>Hello World</h4>
      </div>
      <h5>Allan Walker</h5>
      <h5>02:56</h5>
    </div>
  );
}

export default SongListItem