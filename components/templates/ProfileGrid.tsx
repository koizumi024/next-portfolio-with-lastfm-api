import Style from '../../styles/Home.module.css'

import ProfileCard from '../ProfileCard'

const ProfileGrid = () => {
  const me = {
    name: "Mizure",
    bio: "Frontend Developer",
    avatar: "https://i.imgur.com/3KCJYih.jpeg",
    github: "mizurest",
    discord: "Mizure#2621",
    lastfm: "nero_asterisk",
  }
  return(
    <>
      <div className={Style.grid}>
        <ProfileCard
          avatar={me.avatar} 
          name={me.name} 
          bio={me.bio} 
          github={me.github} 
          discord={me.discord}
        />
      </div>
    </>
  )
}

export default ProfileGrid