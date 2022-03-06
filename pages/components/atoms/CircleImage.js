import Image from 'next/image'
import Style from '../../../styles/Home.module.css'

export default function CircleImage(props){
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