import Emoji from 'react-emoji-render'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, I'm Denham<Emoji text="👋️" /></h1>
            </header>
            <div className="content">
                <p>I am a full stack software developer currently working on <a href='https://wildcards.world'>wildcards</a><Emoji style={{fontSize: '1.6rem'}} text="👨‍💻️" /> </p>
                {/* <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul> */}
            </div>
        </div>
    </section>
)

export default Banner
