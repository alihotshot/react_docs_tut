import './PlayButton.css'

function PlayButton({ children, onPlay, onPause }) {
  //   return <button onClick={console.log('Hello World!')}>Play</button>
  //   return <button onClick={() => console.log('Hello World!')}>Play</button>
  let playing = false
  function HandleClick() {
    if (playing) onPause()
    else onPlay()

    playing = !playing
  }
  return <button onClick={HandleClick}>{children}</button>
}

export default PlayButton
