import Style from '../styles/Home.module.css'
import Head from 'next/head'

import ProfileGrid from './components/templates/ProfileGrid';
import TrackGrid from './components/templates/TrackGrid';

export default function Home() {

  return (
    <>
    <Head>
      <title>next-portfolio-with-lastfm-api</title>
    </Head>

    <div className={Style.container}>
      <ProfileGrid />
      <TrackGrid />
    </div>
    </>
  )
}
