import Style from '../../styles/Home.module.css'
import Head from 'next/head'

import ProfileGrid from '../templates/ProfileGrid';
import TrackCard from '../templates/TrackCard';

type Props = {
  bgImage: any,
  tracks: any[],
  trackLoading: boolean,
  trackLoadingError: boolean
}

const TopPage = (props: Props) => {
  const{ bgImage, tracks, trackLoading, trackLoadingError } = props;
  const bgStyle = {
    backgroundImage: 'url('+bgImage+')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <>
    <Head>
      <title>Hello</title>
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

export default TopPage