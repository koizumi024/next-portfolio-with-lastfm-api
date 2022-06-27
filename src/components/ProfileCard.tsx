import Style from '../styles/Home.module.css'
import Utilities from '../styles/utilities.module.css'

import CircleImage from './CircleImage'

import { FaGithub } from "react-icons/fa"

type Props = {
  avatar: string;
  name: string;
  bio: string;
  github?: string;
  discord?: string;
}

const ProfileCard = (props: Props) => {
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
        <span className={Utilities.text_md_bold}>{name}</span>
        <span className={Utilities.text_sm_light}>{bio}</span>
      </div>
      <a href={`https://github.com/${github}`}>
        <div className={Style.iconWrap}>
          <FaGithub className={Utilities.icon} />
        </div>
      </a>
    </>
  )
}

export default ProfileCard
