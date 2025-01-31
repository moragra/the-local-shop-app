import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer({token, setToken}) {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h3 className="footer__left-header">Get Involved</h3>
        <div className="footer__text">
          <div className="footer__text-l">
            <Link className="footer__text-ll" to={'/signup'}>
              <h4 className="footer__t">CREATE AN ACCOUNT</h4>
            </Link>
            {token? (<Link className="footer__text-ll" to={'/get-added'}>
              <h4 className="footer__t">SUBMIT A SHOP</h4>
            </Link>) : (<Link className="footer__text-ll" to={'/signup'}>
              <h4 className="footer__t">SUBMIT A SHOP</h4>
            </Link>)}
          </div>
          <div className="footer__text-r">
            <Link className="footer__text-ll" to={"/about"}>
              <h4 className="footer__t"> ABOUT</h4>
            </Link>
            <Link className="footer__text-ll" to={"/credits"}>
              <h4 className="footer__t">CREDITS</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__right">
        <Link className="footer__right-link" to={"/"}>
          <h2 className="footer__name">Neighbor</h2>
          <h2 className="footer__name">Good</h2>
        </Link>
      </div>
    </footer>
  );
}
