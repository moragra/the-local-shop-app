import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h3 className="footer__left-header">Get Involved</h3>
        <div className="footer__text">
          <div className="footer__text-l">
            <h4 className="footer__t">CREATE AN ACCOUNT</h4>
            <h4 className="footer__t">SUBMIT A SHOP</h4>
          </div>
          <div className="footer__text-r">
          <h4 className="footer__t"> ABOUT</h4>
          <h4 className="footer__t">CONTACT US</h4>
          </div>
        </div>
      </div>
      <div className="footer__right">
        <Link className="footer__right-link" to={"/"}>
          <h2 className="footer__name">The</h2>
          <h2 className="footer__name">Local Shop</h2>
        </Link>
      </div>
    </footer>
  );
}
