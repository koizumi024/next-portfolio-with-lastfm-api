import Image from 'next/image'
import Style from '../../../styles/Home.module.css'

type Props = {
  src: string;
  width?: string;
  height?: string;
  alt?: string;
}

const CircleImage: React.VFC<Props> = (props) =>{
  const {src, width, height, alt} = props
  return(
    <Image
      className={Style.avatar}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  )
}

export default CircleImage;
