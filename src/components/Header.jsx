import './Header.css'

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-lego">LEGO</span>
        <span className="logo-store">Store</span>
      </div>
      <nav className="nav">
        <a href="#">Produkte</a>
        <span className="cart">🛒 {cartCount}</span>
      </nav>
    </header>
  )
}

export default Header
