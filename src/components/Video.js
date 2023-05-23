import './Video.css'

function Video({ title, channel, views, time, verified }) {
  return (
    <>
      <div className="container">
        <img src="https://picsum.photos/id/237/200/300" alt="Apple" />
        <div className="title">{title}</div>
        {/* {verified ? (
          <div className="channel">{channel} ✅</div>
        ) : (
          <div className="channel">{channel} </div>
        )} */}
        <div className="channel">
          {/* {channel} {verified ? '✅' : null} */}
          {channel} {verified && '✅'}
        </div>
        <div className="views">
          {views} <span> . </span> {time}
        </div>
      </div>
    </>
  )
}

export default Video
