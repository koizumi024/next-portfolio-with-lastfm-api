import Style from '../../../styles/Home.module.css'

import CircleImage from '../atoms/CircleImage'
import IconWithRightText from '../molecules/IconWithRightText'

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

export default function ProfileCard(props){
  const {avatar, name, bio, github, discord} = props
  return(
    <>
      <CircleImage
        src={avatar}
        width="150"
        height="150"
        alt="avatar" 
      />
      <div className={Style.nameWrap}>
        <span className={Style.username}>{name}</span>
        <span className={Style.bio}>{bio}</span>
      </div>
      <a href={`https://github.com/${github}`}>
        <IconWithRightText icon={faGithub}>{github}</IconWithRightText>
      </a>
      {/* <IconWithRightText icon={faDiscord}>{discord}</IconWithRightText> */}
    </>
  )
}