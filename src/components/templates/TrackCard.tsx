import Style from '../../styles/Home.module.css'
import Utilities from '../../styles/utilities.module.css'
import Track from '../Track'
import LoadingTrack from '../LoadingTrack'

type Props = {
  tracks: any[],
  trackLoading: boolean,
  trackLoadingError: boolean
}

const TrackCard = (props: Props) => {
  const { tracks, trackLoading, trackLoadingError } = props

  return(
    <>
      <div className={Style.card}>
        <h1>Recently played tracks</h1>
        <div className={Style.trackList}>
          {tracks && tracks.map((track) => {
            return(
              <Track
                key={track.name}
                src={track.image[2]["#text"]}
                name={track.name}
                artist={track.artist["#text"]}
              />
            )
          })}
          {trackLoading && <><LoadingTrack /><LoadingTrack /><LoadingTrack /><LoadingTrack /></>}
        </div>

        
        {trackLoadingError && <p className={Style.trackStatus}>Not found tracks</p>}

        <p className={Utilities.text_sm_light}>The tracks are fetching from <a href="https://www.last.fm/ja/api">Last.fm API</a></p>
      </div>
    </>
  )
}

export default TrackCard