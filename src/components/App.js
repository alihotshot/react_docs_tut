import './App.css'
import Video from './Video'
import videos from '../data/data'
import PlayButton from './PlayButton'

function App() {
  return (
    <div className="App">
      <h1>YouTube Videos</h1>
      {/* spread operator */}
      {/* <Video {...obj} /> */}
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
        />
      ))}
      <div className="playbutton" style={{ clear: 'both' }}>
        <PlayButton message="Play-Button">Play</PlayButton>
      </div>
    </div>
  )
}

export default App
