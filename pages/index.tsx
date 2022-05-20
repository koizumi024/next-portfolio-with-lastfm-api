import Style from '../styles/Home.module.css'
import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react';

import ProfileGrid from './components/templates/ProfileGrid';
import TrackCard from './components/templates/TrackCard';

const Home = () => {
  const [tracks, setTracks] = useState([])
  const [bgImage, setBgImage] = useState([])
  const [trackLoading, setTrackLoading] = useState(false)
  const [trackLoadingError, setTrackLoadingError] = useState(false)
  const [nowplaying, setNowplaying] = useState(false)
  
  useEffect(() =>{
    setTrackLoading(true)
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=4&user=nero_asterisk&api_key=5e81a94ee1bd10956d3073070a27dd1f&format=json`)
    .then((res) => {
      setTracks(res.data.recenttracks.track)
      setBgImage(res.data.recenttracks.track[0].image[3]["#text"])
      const attr = res.data.recenttracks.track[0]["@attr"]
      if(typeof attr !== "undefined" ){
        setNowplaying(attr.nowplaying)
      }
      
      setTrackLoadingError(false)
    })
    .catch((err) => {
      setTrackLoadingError(true)
      console.log(err)
    })
    .finally(() => {
      setTrackLoading(false)
    })
  }, [])

  if(nowplaying){
    tracks.pop()
  }

  const bgStyle = {
    backgroundImage: 'url('+bgImage+')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <>
    <Head>
      <title>next-portfolio-with-lastfm-api</title>
    </Head>

    <div className={Style.container} style={bgStyle}>
      <div className={Style.blur}>
        <ProfileGrid />
        
        <TrackCard 
          tracks={tracks}
          trackLoading={trackLoading}
          trackLoadingError={trackLoadingError}
        />
      </div>
    </div>
    </>
  )
}

export default Home
