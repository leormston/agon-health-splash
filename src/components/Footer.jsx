import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">Agon Health</span>
          </div>
          <p className="footer__copyright">
            © {currentYear} Agon Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
