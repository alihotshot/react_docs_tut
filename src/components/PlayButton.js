import './PlayButton.css'

function PlayButton({ message, children }) {
  //   return <button onClick={console.log('Hello World!')}>Play</button>
  //   return <button onClick={() => console.log('Hello World!')}>Play</button>
  function HandleClick() {
    console.log(message)
  }
  return <button onClick={HandleClick}>{children}</button>
}

export default PlayButton
