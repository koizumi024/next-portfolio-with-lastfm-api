import Style from '../../../styles/Home.module.css'

import ProfileCard from '../organisms/ProfileCard'

export default function ProfileGrid(){
  const me = {
    name: "Mizure",
    bio: "Frontend Developer",
    avatar: "https://i.imgur.com/oh6lOXQ.jpeg",
    github: "koizumi024",
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
          discord={me.github}
        />
      </div>
    </>
  )
}