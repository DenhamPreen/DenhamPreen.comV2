import Link from "next/link";
import Emoji from 'react-emoji-render'

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => (
  <Layout>
    <div>
      <Banner />
      <div id="main">
        <section id="one" className="tiles">
          <article
            style={{ backgroundImage: `url('/static/images/pawelcz1.jpg')` }}
          >
            <header className="major">
              <h3>About</h3>
              <p>Some information about me</p>
            </header>
            <Link href="/about">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pawelcz3.jpg')` }}
          >
            <header className="major">
              <h3>Portfolio</h3>
              <p>Projects I have worked on</p>
            </header>
            <Link href="/portfolio">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pawelcz4.jpg')` }}
          >
            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pawelcz5.jpg')` }}
          >
            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pawelcz6.jpg')` }}
          >
            <header className="major">
              <h3>Contact</h3>
              <p>Get in touch</p>
            </header>
            <Link href="/contact">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pawelcz7.jpg')` }}
          >
            <header className="major">
              <h3>Writings</h3>
              <p>My thoughts and texts</p>
            </header>
            <Link href="https://medium.com/@denhampreen">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>      
      </div>
    </div>
  </Layout>
);
