import Style from '../../../styles/Home.module.css'
import Image from 'next/image'

type Props = {
  src: string;
  name: string;
  artist: string;
}

const Track: React.VFC<Props> = (props) => {
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

export default Track;