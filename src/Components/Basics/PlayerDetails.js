import React from 'react'

const PlayerDetails = (props) => {
  return (
    <div className=''>
        <div className="details-img">
            <img src={props.song.img_src} alt="" />
        </div>
        <h3 className="details-title">{props.song.title}</h3>
        <h3 className="details-title">{props.song.artist}</h3>
      
    </div>
  )
}

export default PlayerDetails
