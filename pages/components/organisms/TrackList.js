import Style from '../../../styles/Home.module.css'
import Image from 'next/image'

import Track from '../molecules/Track'

export default function TrackList(props){
  const {tracks} = props;
  return(
    <>
    <div className={Style.trackList}>
      {tracks.map((track) => {
        return(
          <Track
            key={track.name}
            src={track.image[2]["#text"]}
            name={track.name}
            artist={track.artist["#text"]}
          />
        )
      })}
    </div>
    </>
  )
}