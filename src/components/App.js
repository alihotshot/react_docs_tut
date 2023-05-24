import './App.css'
import Video from './Video'

function App() {
  let channelName = 'Verge Future'
  //Object
  let videos = [
    {
      title: 'React JS Tutorials',
      views: '100K',
      time: '1 Year ago',
      channel: channelName,
      verified: true,
    },
    {
      title: 'Node JS Tutorials',
      views: '1M',
      time: '3 Year ago',
      channel: 'Verge Future',
      verified: true,
    },
  ]
  return (
    <div className="App">
      <h1>YouTube Videos</h1>
      {/* spread operator */}
      {/* <Video {...obj} /> */}
      {videos.map((video) => (
        <Video
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
