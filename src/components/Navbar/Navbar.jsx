import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__toggle">
                <label htmlFor="menu" aria-label="Main Navigation Menu"></label>
                <input id="menu" className="navbar__input" name="menu" type="checkbox" aria-label="Main Navigation Menu" />
                <span className="navbar__span navbar__span--empty"></span>
                <span className="navbar__span"></span>
                <span className="navbar__span"></span>
                <ul className="navbar__menu list-menu">
                    <li className="navbar__container-logo"><h2><Link className="navbar__logo link-no-style h1" to="/">React Responsive Navbar</Link></h2></li>
                    <li className="navbar__menu-item"><Link className="body-md link-no-style" to="/">Home</Link></li>
                    <li className="navbar__menu-item"><Link className="body-md link-no-style" to="/about">About</Link></li>
                    <li className="navbar__menu-item"><Link className="body-md link-no-style" to="/portfolio">Portfolio</Link></li>
                    <li className="navbar__menu-item"><Link className="body-md link-no-style" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;