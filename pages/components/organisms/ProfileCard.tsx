import Style from '../../../styles/Home.module.css'

import CircleImage from '../atoms/CircleImage'

import { FaGithub } from "react-icons/fa"

type Props = {
  avatar: string;
  name: string;
  bio: string;
  github?: string;
  discord?: string;
}

const ProfileCard: React.VFC<Props> = (props) => {
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
        <div className={Style.iconWrap}>
          <FaGithub className={Style.icon} />
        </div>
      </a>
    </>
  )
}

export default ProfileCard
