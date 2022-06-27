import Image from 'next/image'
import Utilities from '../styles/Utilities.module.css'

type Props = {
  src: string;
  width?: string;
  height?: string;
  alt?: string;
}

const CircleImage = (props: Props) =>{
  const {src, width, height, alt} = props
  return(
    <Image
      className={Utilities.circleImage}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  )
}

export default CircleImage;
