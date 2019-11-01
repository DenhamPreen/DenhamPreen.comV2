import Head from "next/head"
import Emoji from 'react-emoji-render'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>About</title>
            <meta name="description" content="About Denham Preen" />
        </Head>

        <div>
            <BannerLanding 
            title='About Me'
            subTitle='Some information about me'
            />

            <div id="main">
            <section id="one">
          <div className="inner">
            {/* <header className="major">
              <h2>About Me</h2>
            </header> */}
            <p>
              I build exciting passion driven applications. I develop web,
              desktop and mobile applications working mostly in JavaScript. I have 4 years of
              studies under my belt from Rhodes University and the University of
              Cape Town in Economics and Computer Science with a few years of industry experience. I am a blockchain enthusiast <Emoji text="🔗" />, love to explore <Emoji text="✈️" /> and believe social impact projects deserve my focus <Emoji text="🐋" />.
            </p>        
          </div>
        </section>
            </div>

        </div>
    </Layout>
)
