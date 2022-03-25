import Style from '../../../styles/Home.module.css'
import Image from 'next/image'

export default function Track(props){
  const { src, name, artist } = props
  return(
    <>
    <div className={Style.track}>
      <Image
        className={Style.thumb}
          src={src}
          width="55"
          height="55"
          alt="track-thumbnail"
      />
      <div className={Style.description}>
        <div className={Style.name}>{name}</div>
        <div className={Style.artist}>{artist}</div>
      </div>
    </div>
    </>
  )
}