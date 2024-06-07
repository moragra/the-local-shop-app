import "./ShopInfo.scss";
import circles from "../../assets/circles.svg";
import ig from "../../assets/instagram.svg";
import fb from "../../assets/facebook.png";
import x from "../../assets/twitter.svg";
import li from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ShopInfo({ shopInfo, searchData , setShopInfo}) {

  useEffect(()=>{
    if(searchData){
      setShopInfo(null)
    }
  },[searchData])

  return (
    <div className="main__shop">
      <div className="main__shop-top">
        <div className="main__shop-left">
          <img className="main__shop-icon" src={circles} alt="" />
        </div>
        <hr className="main__shop-hr" />
        <div className="main__shop-right">
          {shopInfo && <h3 className="main__shop-name">{shopInfo.shop_name}</h3>}
          {searchData && <h3 className="main__shop-name">{searchData.shop_name}</h3>}
        </div>
      </div>
      <hr className="main__shop-hro" />
      <div className="main__shop-bottom">
        <div className="main__shop-bio">
          {shopInfo && <p className="main__shop-bio-t">{shopInfo.description}</p>}
          {searchData && <p className="main__shop-bio-t">{searchData.about}</p>}
        </div>
        <div className="main__shop-info">
          <div className="main__shop-founded">
            <h4 className="main__shop-h">Phone</h4>
            {shopInfo && <h4 className="main__shop-t">{shopInfo.phone}</h4>}
            {searchData && <h4 className="main__shop-t">{searchData.phone}</h4>}
          </div>
          <div className="main__shop-founders">
            <h4 className="main__shop-h">Address</h4>
            {shopInfo && <h4 className="main__shop-t">{shopInfo.address}</h4>}
            {searchData && <h4 className="main__shop-t">{searchData.address.properties.full_address}</h4>}
          </div>
        </div>
      </div>
      <hr className="main__shop-hro" />
      <div className="main__shop-socials">
        <div className="main__shop-socials-ic">
          {shopInfo && <Link to={shopInfo.ig}><img className="main__shop-socials-i" src={ig} alt="" /></Link>}
          {searchData && <Link to={searchData.ig_url}><img className="main__shop-socials-i" src={ig} alt="" /></Link>}
        </div>
        <hr className="main__shop-socials-hr" />
        <div className="main__shop-socials-ic">
          {shopInfo && <Link to={shopInfo.fb}><img className="main__shop-socials-i" src={fb} alt="" /></Link>}
          {searchData && <Link to={searchData.fb_url}><img className="main__shop-socials-i" src={fb} alt="" /></Link>}
        </div>
        <hr className="main__shop-socials-hr" />
        <div className="main__shop-socials-ic">
          {shopInfo && <Link to={shopInfo.x}><img className="main__shop-socials-i" src={x} alt="" /></Link>}
          {searchData && <Link to={searchData.x_url}><img className="main__shop-socials-i" src={x} alt="" /></Link>}
        </div>
        <hr className="main__shop-socials-hr" />
        <div className="main__shop-socials-ic">
          {shopInfo && <Link to={shopInfo.li}><img className="main__shop-socials-i" src={li} alt="" /></Link>}
          {searchData && <Link to={searchData.li_url}><img className="main__shop-socials-i" src={li} alt="" /></Link>}
        </div>
      </div>
      <hr className="main__shop-hro" />
      <div className="main__shop-website">
        {shopInfo && <Link className="main__shop-website-l" to={shopInfo.wb}><h3 className="main__shop-website-t">WEBSITE</h3></Link>}
        {searchData && <Link className="main__shop-website-l" to={searchData.website_url}><h3 className="main__shop-website-t">WEBSITE</h3></Link>}
      </div>
    </div>
  );
}
