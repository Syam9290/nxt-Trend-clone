import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

import './index.css'

const ProductCard = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkMode} = value

      const {productData} = props
      const {title, brand, imageUrl, rating, price, id} = productData

      const setTitle = isDarkMode ? 'titleColorMode' : ''

      return (
        <li className="product-item">
          <Link to={`/products/${id}`} className="link-item">
            <img src={imageUrl} alt="product" className="thumbnail" />
            <h1 className={`title ${setTitle}`}>{title}</h1>
            <p className="brand">by {brand}</p>
            <div className="product-details">
              <p className={`price ${setTitle}`}>Rs {price}/-</p>
              <div className="rating-container">
                <p className="rating">{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star"
                />
              </div>
            </div>
          </Link>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default ProductCard
