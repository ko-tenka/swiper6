import './Header.css'
import Logo from '../../../public/Vector.svg'
import Line1 from '../../../public/Line1.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item"><a href="#">Professions</a></li>
            <li className="header__menu-item header__menu-item-color"><a href="#">Online education</a></li>
            <li className="header__menu-item"><a href="#">Schools</a></li>
            <li className="header__menu-item"><a href="#">Support</a></li>
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#" className="header__button header__button--outlined">See institutions</a>
          <a href="#" className="header__button header__button--filled">Leave</a>
        </div>
      </div>

      <img className="header__line" src={Line1} alt="line" />
    </header>
  )
}

