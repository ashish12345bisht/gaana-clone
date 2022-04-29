import React from 'react'
import {HiOutlineUserCircle} from 'react-icons/hi'

function LeftBar() {
  return (
    <div>
      <div style={{display:"flex",alignItems:"center"}}>
        <HiOutlineUserCircle />
        Hello, Gaana User
      </div>
      <p>Home</p>
      <p>Radio</p>
      <p>Podcast</p>
      <p>My Music</p>
      <p>India's Music</p>
      <p>Language</p>
    </div>
  );
}

export default LeftBar