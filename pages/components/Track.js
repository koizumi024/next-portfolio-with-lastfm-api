import Style from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Track(props){
  const { src, name, artist } = props
  return(
    <>
    <div className={Style.track}>
      <Image
        className={Style.trackThumb}
          src={src}
          width="55"
          height="55"
          alt="track-thumbnail"
      />
      <div className={Style.trackDescription}>
        <div className={Style.trackName}>{name}</div>
        <div className={Style.trackArtist}>{artist}</div>
      </div>
    </div>
    </>
  )
}