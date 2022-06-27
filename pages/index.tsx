import axios from 'axios'
import { isIE, isFirefox, isChrome } from 'react-device-detect';
import { useState, useEffect } from 'react';

import TopPage from '../components/pages/TopPage';
import UnsupportBrowser from '../components/pages/UnsupportBrowser';

const Home = () => {
  const [tracks, setTracks] = useState([])
  const [bgImage, setBgImage] = useState([])
  const [trackLoading, setTrackLoading] = useState(false)
  const [trackLoadingError, setTrackLoadingError] = useState(false)
  const [nowplaying, setNowplaying] = useState(false)
  const [supportBrowser, setSupportBrowser] = useState(true)

  useEffect(() =>{
    if(isIE || isFirefox){
      setSupportBrowser(false)
    }
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

  return (
    <>

      { supportBrowser ? <TopPage 
          bgImage={bgImage}
          tracks={tracks}
          trackLoading={trackLoading}
          trackLoadingError={trackLoadingError}
        /> : <UnsupportBrowser />}

    </>
  )
}

export default Home
