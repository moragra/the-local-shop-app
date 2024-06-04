import "./ShopInfo.scss";
import circles from "../../assets/circles.svg";
import ig from "../../assets/instagram.svg";
import fb from "../../assets/facebook.png";
import x from "../../assets/twitter.svg";
import li from "../../assets/linkedin.png";

export default function ShopInfo() {
  return (
    <div className="main__shop">
      <div className="main__shop-top">
        <div className="main__shop-left">
          <img className="main__shop-icon" src={circles} alt="" />
        </div>
        <hr className="main__shop-hr" />
        <div className="main__shop-right">
          <h3 className="main__shop-name">NAME OF SHOP</h3>
        </div>
      </div>
      <hr className="main__shop-hro" />
      <div className="main__shop-bottom">
        <div className="main__shop-bio">
          <p className="main__shop-bio-t">
            Short description of the products the shop sells
          </p>
        </div>
        <div className="main__shop-info">
          <div className="main__shop-founded">
            <h4 className="main__shop-h">Founded</h4>
            <h4 className="main__shop-t">20XX</h4>
          </div>
          <div className="main__shop-founders">
            <h4 className="main__shop-h">Founders</h4>
            <h4 className="main__shop-t">
              Graciela Mora, Maria Jose Rodriguez Campos
            </h4>
          </div>
        </div>
      </div>
      <hr className="main__shop-hro" />
      <div className="main__shop-socials">
        <div className="main__shop-socials-ic">
          <img className="main__shop-socials-i" src={ig} alt="" />
        </div>
        <hr className="main__shop-socials-hr" />
        <div className="main__shop-socials-ic">
          <img className="main__shop-socials-i" src={fb} alt="" />
        </div>
        <hr className="main__shop-socials-hr" />
        <div className="main__shop-socials-ic">
          <img className="main__shop-socials-i" src={x} alt="" />
        </div>
        <hr className="main__shop-socials-hr" />
        <div className="main__shop-socials-ic">
          <img className="main__shop-socials-i" src={li} alt="" />
        </div>
      </div>
      <hr className="main__shop-hro" />
      <div className="main__shop-website">
        <h3 className="main__shop-website-t">WEBSITE</h3>
      </div>
    </div>
  );
}