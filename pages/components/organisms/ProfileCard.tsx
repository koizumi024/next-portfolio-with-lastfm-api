import Style from '../../../styles/Home.module.css'

import CircleImage from '../atoms/CircleImage'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

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
          <FontAwesomeIcon className={Style.icon} icon={faGithub} />
        </div>
      </a>
    </>
  )
}

export default ProfileCard
