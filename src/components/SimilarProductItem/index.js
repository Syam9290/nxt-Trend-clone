import CartContext from '../../context/CartContext'
import './index.css'

const SimilarProductItem = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {productDetails} = props
      const {title, brand, imageUrl, rating, price} = productDetails

      const setTitle = isDarkMode ? 'titleColorMode' : ''

      return (
        <li className="similar-product-item">
          <img
            src={imageUrl}
            className="similar-product-img"
            alt={`similar product ${title}`}
          />
          <p className={`similar-product-title ${setTitle}`}>{title}</p>
          <p className="similar-products-brand">by {brand}</p>
          <div className="similar-product-price-rating-container">
            <p className={`similar-product-price ${setTitle}`}>Rs {price}/-</p>
            <div className="similar-product-rating-container">
              <p className="similar-product-rating">{rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="similar-product-star"
              />
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default SimilarProductItem
