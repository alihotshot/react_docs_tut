import './App.css'
import Video from './Video'

function App() {
  let channelName = 'Verge Future'
  let obj = {
    title: 'React JS Tutorials',
    views: '10K',
    time: '1 Year ago',
    channel: 'Verge Future',
    verified: true,
  }
  return (
    <div className="App">
      <h1>YouTube Videos</h1>
      {/* spread operator */}
      <Video {...obj} />
      <Video
        title="Node JS Tutorials"
        views="100K"
        time="6 months ago"
        channel={channelName}
        verified={false}
      />
    </div>
  )
}

export default App
