import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'
import CartContext from '../../context/CartContext'

import Header from '../Header'

import './index.css'

const Products = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkMode} = value

      const productsTheme = isDarkMode ? 'SetproductsTheme' : ''
      return (
        <>
          <Header />
          <div className={`product-sections ${productsTheme}`}>
            <PrimeDealsSection />
            <AllProductsSection />
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Products
