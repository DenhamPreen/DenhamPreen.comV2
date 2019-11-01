import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        {/* <Link href="/">
        <h1><Emoji text="👨‍💻️" /></h1>
        </Link> */}
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
