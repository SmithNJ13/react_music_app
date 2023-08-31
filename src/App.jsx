import { useState } from 'react'
import './App.css'

function ArtistOne() {
  return (
    <div id="artistInfo">
      <img src="https://i.scdn.co/image/ab6761610000e5eb6a224073987b930f99adc706" alt="Taylor Swift"></img>
      <div id="songList">
        <p>Songs List:</p>
        <li>Cruel Summer</li>
        <li>Anti-Hero</li>
        <li>Blank Space</li>
        <li>Style</li>
        <li>August</li>
      </div>
      <div id="albumList">
        <p>Album List:</p>
        <li>Speak Now (Taylor's Version)</li>
        <li>Midnights</li>
        <li>Red (Taylor's Version)</li>
        <li>Fearless (Taylor's Version)</li>
        <li>"Evermore"</li>
      </div>
    </div>
  )
}
function ArtistTwo() {
  return (
    <div id="artistInfo">
      <img src="https://i.scdn.co/image/ab6761610000e5eb6645bac3b77cc24451d5467f" alt="Against the Current"></img>
      <div id="songList">
        <p>Songs List:</p>
        <li>Legends Never Die</li>
        <li>Legends Never Die (Remix)</li>
        <li>Weapon</li>
        <li>Blindfolded</li>
        <li>"Good Guy"</li>
      </div>
      <div id="albumList">
        <p>Album List:</p>
        <li>Fever</li>
        <li>Past Lives</li>
        <li>In Our Bones</li>
        <li>Gravity (EP)</li>
        <li>Infinity (EP)</li>
      </div>
    </div>
  )
}
function ArtistThree() {
  return (
    <div id="artistInfo">
      <img src="https://i.scdn.co/image/ab676161000051747463374e86c3eb7bd763f98f" alt="Mr. Kitty"></img>
      <div id="songList">
        <p>Songs List:</p>
        <li>After Dark</li>
        <li>0% Angel</li>
        <li>Neglect</li>
        <li>Habits (Feat. Pastel Ghost)</li>
        <li>Destroy Me</li>
      </div>
      <div id="albumList">
        <p>Album List:</p>
        <li>Ephemeral</li>
        <li>A.I.</li>
        <li>Fragments</li>
        <li>Time</li>
        <li>Life</li>
      </div>
    </div>
  )
}

function App() {
  const [CurrentArtist, SetArtist] = useState(0);
  return (
    <>
    <img id="icon" src="src/assets/musicIcon.png"></img>
    <img id="ring" src="src\assets\selectionRing.png"></img>
    <div id="return">
      <button onClick={() => SetArtist(0)}>///</button>
    </div>
    <div id="info">
      {CurrentArtist === 1 && <h1 onClick={() => SetArtist(1)}>Taylor Swift</h1>}
      {CurrentArtist === 2 && <h1 onClick={() => SetArtist(2)}>Against the Current</h1>}
      {CurrentArtist === 3 && <h1 onClick={() => SetArtist(3)}>Mr. Kitty</h1>}

      {CurrentArtist === 1 && <ArtistOne />}
      {CurrentArtist === 2 && <ArtistTwo />}
      {CurrentArtist === 3 && <ArtistThree />}
    </div>
    <div id="menu">
      {CurrentArtist === 0 && <h1 onClick={() => SetArtist(1)}>Taylor Swift</h1>}
      {CurrentArtist === 0 && <h1 onClick={() => SetArtist(2)}>Against the Current</h1>}
      {CurrentArtist === 0 && <h1 onClick={() => SetArtist(3)}>Mr. Kitty</h1>}
    </div>
    </>
  )
}

export default App
