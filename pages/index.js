import Style from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react';

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

import IconWithRightText from './components/IconWithRightText'
import Track from './components/Track'

export default function Home() {
  const [tracks, setTracks] = useState([])
  const [trackLoading, setTrackLoading] = useState(false)
  const [trackLoadingError, setTrackLoadingError] = useState(false)

  const me = {
    name: "Mizure Furlanza",
    github: "koizumi024",
    discord: "Mizure#2621",
    lastfm: "nero_asterisk",
  }
  
  useEffect(() =>{
    setTrackLoading(true)
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=3&user=${me.lastfm}&api_key=5e81a94ee1bd10956d3073070a27dd1f&format=json`).then((res) => {
      setTracks(res.data.recenttracks.track)
      setTrackLoading(false)
    }).catch(() => {
      setTrackLoadingError(true)
      setTrackLoading(false)
    })
  }, [])

  return (
    <>
    <Head>
      <title>next-portfolio-with-lastfm-api</title>
    </Head>

    <div className={Style.container}>
      <div className={Style.grid}>
        <Image
          className={Style.avatar}
          src="https://i.imgur.com/oh6lOXQ.jpeg"
          width="150"
          height="150"
          alt="avatar"
        />
        <div className={Style.nameWrap}>
          <span className={Style.username}>{me.name}</span>
          <span className={Style.bio}>Frontend Developer</span>
        </div>
        <a href={`https://github.com/${me.github}`}>
          <IconWithRightText icon={faGithub}>{me.github}</IconWithRightText>
        </a>
        
        <IconWithRightText icon={faDiscord}>{me.discord}</IconWithRightText>
      </div>

      <div className={Style.grid}>
        <h1>Recently played tracks</h1>
        <div className={Style.trackList}>
          {tracks.map((track) => {
            return(
              <Track
                key={track.name}
                src={track.image[2]["#text"]}
                name={track.name}
                artist={track.artist["#text"]}
              />
            )
          })}
        </div>
        
        {trackLoading && <p className={Style.trackStatus}>Loading...</p>}
        {trackLoadingError && <p className={Style.trackStatus}>Not found tracks</p>}
        
        <p className={Style.apiDescription}>The tracks are fetching from <a href="https://www.last.fm/ja/api">Last.fm API</a></p>
        
      </div>
    </div>
    </>
  )
}
