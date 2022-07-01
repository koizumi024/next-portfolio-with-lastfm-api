import Style from '../styles/Home.module.css'
import ContentLoader from "react-content-loader";

const LoadingTrack = () => {
  return(
    <>
    <div className={Style.track}>
        <ContentLoader
            animate={true}
            foregroundColor={'#999'}
            backgroundColor={'#777'}
            backgroundOpacity={0.5}
            foregroundOpacity={0.5}
        >
            <rect x="15" y="0" rx="5" ry="5" width="55" height="55" />
            <rect x="80" y="2" rx="4" ry="4" width="200" height="25" />
            <rect x="80" y="34" rx="3" ry="3" width="150" height="18" />
        </ContentLoader>
    </div>
    </>
  )
}

export default LoadingTrack;