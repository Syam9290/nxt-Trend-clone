import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkMode, toggleDarkMode, cartList} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      console.log(isDarkMode)

      const setNavbarMode = isDarkMode ? 'navBarMode' : ''

      const setNavBarItemMode = isDarkMode ? 'navBarItems' : ''

      const setNavTitleClr = isDarkMode ? 'titleColorMode' : ''

      const changeMode = () => {
        toggleDarkMode()
      }

      const renderDarkBtn = () => (
        <button
          type="button"
          alt="darkBtn"
          className="darkBtn"
          onClick={changeMode}
        >
          <li className="nav-menu-item">
            <FaMoon />
          </li>
        </button>
      )

      const renderLightBtn = () => (
        <button
          type="button"
          alt="darkBtn"
          className="darkBtn"
          onClick={changeMode}
        >
          <li className="nav-menu-item">
            <BsBrightnessHigh className="brightBtn" />
          </li>
        </button>
      )

      const renderCartItemsCount = () => {
        const cartItemsCount = cartList.length
        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }

      return (
        <nav className={`nav-header ${setNavbarMode}`}>
          <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
              <Link to="/">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="website logo"
                />
              </Link>

              {isDarkMode ? renderLightBtn() : renderDarkBtn()}

              <button
                type="button"
                className="nav-mobile-btn"
                onClick={onClickLogout}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                  alt="nav logout"
                  className="nav-bar-img"
                />
              </button>
            </div>

            <div className="nav-bar-large-container">
              <Link to="/">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="website logo"
                />
              </Link>
              <ul className="nav-menu">
                {isDarkMode ? renderLightBtn() : renderDarkBtn()}

                <li className="nav-menu-item ">
                  <Link to="/" className={`nav-link ${setNavTitleClr}`}>
                    Home
                  </Link>
                </li>

                <li className="nav-menu-item ">
                  <Link to="/products" className={`nav-link ${setNavTitleClr}`}>
                    Products
                  </Link>
                </li>

                <li className="nav-menu-item ">
                  <Link to="/cart" className={`nav-link ${setNavTitleClr}`}>
                    Cart
                    {renderCartItemsCount()}
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="nav-menu-mobile">
            <ul className={`nav-menu-list-mobile ${setNavBarItemMode}`}>
              <li className="nav-menu-item-mobile">
                <Link to="/" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                    alt="nav home"
                    className="nav-bar-img"
                  />
                </Link>
              </li>

              <li className="nav-menu-item-mobile">
                <Link to="/products" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                    alt="nav products"
                    className="nav-bar-img"
                  />
                </Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/cart" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                    alt="nav cart"
                    className="nav-bar-img"
                  />
                  {renderCartItemsCount()}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
