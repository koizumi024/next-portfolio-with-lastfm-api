import Style from '../../../styles/Home.module.css'
import Head from 'next/head'

const UnsupportBrowser = () => {
  return (
    <>
    <Head>
      <title>Unsupport Browser</title>
    </Head>

    <div className={Style.container}>
      <span>Sorry, this sites is not supported Firefox, IE. Please visit using other browser.</span>
    </div>
    </>
  )
}

export default UnsupportBrowser