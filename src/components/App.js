import './App.css'
import Video from './Video'
import videos from '../data/data'

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
    </div>
  )
}

export default App
