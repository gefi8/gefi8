import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoGefi from '../images/logo-temp.png'

const Header = () => (
  <header className="side-menu">
    <div className="side-menu-content">
      <Link to="/">
        <img
          src={logoGefi}
          className="logo-img"
          alt="Logo GEFI - Link para Home"
        />
      </Link>
      <nav>
        <Link to="#sobre">Sobre</Link>
        <Link to="#inscricao">Inscrições</Link>
        <Link to="#conferencistas">Conferencistas</Link>
        <Link to="#programacao">Programação</Link>
        <Link to="#organizacao">Organização</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
