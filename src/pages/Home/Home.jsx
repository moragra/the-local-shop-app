import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ShopInfo from "../../components/ShopInfo/ShopInfo";
import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <h2 className="main__header">All Shops</h2>
        <form className="main__form" action="">
          <div className="main__form-input">
            <img className="main__form-input-icon" src={search} alt="" />
            <input
              className="main__form-input-field"
              type="text"
              placeholder="Search Local Owned Shops"
            />
          </div>
          <div className="main__form-search">
            <Link className="main__form-search-link">
              <h3 className="main__form-search-t">SEARCH</h3>
            </Link>
          </div>
          <div className="main__categories">
            <div className="main__categories-b">
              <img
                className="main__categories-icon"
                src={bag}
                alt=""
              />
              <h4 className="main__categories-name">GROCERIES</h4>
            </div>

            <div className="main__categories-b">
              <img
                className="main__categories-icon"
                src={bag}
                alt=""
              />
              <h4 className="main__categories-name">FASHION</h4>
            </div>

            <div className="main__categories-b">
              <img
                className="main__categories-icon"
                src={bag}
                alt=""
                
              />
              <h4 className="main__categories-name">RESTAURANTS</h4>
            </div>

            <div className="main__categories-b">
              <img
                className="main__categories-icon"
                src={bag}
                alt=""
                
              />
              <h4 className="main__categories-name">RECREATIONAL</h4>
            </div>

            <div className="main__categories-b">
              <img
                className="main__categories-icon"
                src={bag}
                alt=""
                
              />
              <h4 className="main__categories-name">CONVENIENCE</h4>
            </div>

            <div className="main__categories-b">
              <img
                className="main__categories-icon"
                src={bag}
                alt=""
                
              />
              <h4 className="main__categories-name">HOTEL</h4>
            </div>
          </div>
        </form>
        <div className="main__map">
          <Map />
        </div>
        <ShopInfo />
      </main>
      <Footer />
    </>
  );
}
