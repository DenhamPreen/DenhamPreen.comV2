import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import Contact from '../components/Contact'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Contact</title>
            <meta name="description" content="Contact Denham Preen" />
        </Head>

        <div>
            <BannerLanding 
            title='Contact Me'
            subTitle=''
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Get in touch</h2>
                        </header>
                        <p>Send me a message below if you want get in contact</p>
                    </div>
                </section>
            </div>

        </div>
        <Contact />
    </Layout>
)
