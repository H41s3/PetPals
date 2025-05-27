import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const [isNavActive, setIsNavActive] = React.useState(false)

  return (
    <>
      <section id="header">
        <Link to="/"><img src="/images/logo.png" className="logo" alt="" /></Link>

        <div>
          <ul id="navbar" className={isNavActive ? 'active' : ''}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/pets" className={location.pathname === '/pets' ? 'active' : ''}>Pets</Link></li>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            <li id="lg-bag"><Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}><i className="far fa-shopping-bag"></i></Link></li>
            <Link to="#" id="close" onClick={() => setIsNavActive(false)}><i className="far fa-times"></i></Link>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart"><i className="far fa-shopping-bag"></i></Link>
          <i id="bar" className="fas fa-outdent" onClick={() => setIsNavActive(!isNavActive)}></i>
        </div>
      </section>

      <Outlet />

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>Get e-mail updates about our <span>adorable pets.</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="/images/logo.png" alt="" />
          <h4>Contact</h4>
          <p><strong>Address: </strong> Quezon City, Philippines</p>
          <p><strong>Phone: </strong> +63 966 827 6394</p>
          <p><strong>Hours: </strong> 9:00 a.m - 10:00 p.m, Mon - Sat</p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <a href="https://www.facebook.com/profile.php?id=61558304394940&mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></a>
              <i className="fab fa-twitter"></i>
              <a href="https://www.instagram.com/thepetpalsphilippines/"><i className="fab fa-instagram"></i></a>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <Link to="/about">About us</Link>
          <Link to="#">Delivery Information</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <Link to="#">Sign in</Link>
          <Link to="/cart">View Pet Cart</Link>
          <Link to="#">My Wishlist</Link>
          <Link to="#">Track My Pet</Link>
          <Link to="#">Help</Link>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From Appstore or Google Play</p>
          <div className="row">
            <img src="/images/app.jpg" alt="" />
            <img src="/images/play.jpg" alt="" />
          </div>
        </div>

        <div className="copyright">
          <p>© 2024, PetPals</p>
        </div>
      </footer>
    </>
  )
}

export default Layout