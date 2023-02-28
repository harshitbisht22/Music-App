// import Profile from "./Components/Basics/Profile";
// import State from "./Components/Basics/State";
// import UseStateHooks from "./Components/Basics/UseStateHooks";
// import UseEffectHooks from "./Components/UseEffectHooks";
// import UseReducerHooks from "./Components/Basics/UseReducerHooks";
import Player from "./Components/Basics/Player";
import React, { useState } from "react";

function App() {
  const [songs, SetSongs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, SetnextSongIndex] = useState(currentSongIndex + 1);

  return (
    <>
      {/* <h1>Hello World</h1> */}
      {/* Propes Example */}
      {/* <Profile text={{name:'Peter'}} data="Profile Data"/>
    <State /> */}
      {/* <UseStateHooks />
    <UseEffectHooks /> */}
      {/* <UseReducerHooks /> */}

      {/* <Api /> */}

      <Player
        song={songs[currentSongIndex]}
        newSong={[songs[nextSongIndex]]}
      />
    </>
  );
}

export default App;
