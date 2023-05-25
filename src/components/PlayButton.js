import './PlayButton.css'

function PlayButton(message, name) {
  //   return <button onClick={console.log('Hello World!')}>Play</button>
  //   return <button onClick={() => console.log('Hello World!')}>Play</button>
  function HandleClick() {
    console.log(message)
  }
  return <button onClick={HandleClick}>{name}</button>
}

export default PlayButton
