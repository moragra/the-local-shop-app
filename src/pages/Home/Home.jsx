import "./Home.scss";
import ShopInfo from "../../components/ShopInfo/ShopInfo";
import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";
import { useState } from "react";

export default function Home() {
  const [filter, setfilter] = useState(null)
  const searchHadler = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    
  };
  return (
    <>
      <main className="main">
        <h2 className="main__header">All Shops</h2>
        <form className="main__form" action="" onSubmit={searchHadler}>
          <div className="main__form-input">
            <img className="main__form-input-icon" src={search} alt="" />
            <input
              className="main__form-input-field"
              type="text"
              placeholder="Search Local Owned Shops"
              name="search"
            />
          </div>

          <button className="main__form-search-btn">
            <h3 className="main__form-search-t">SEARCH</h3>
          </button>

          <div className="main__categories">
            <button className="main__categories-b" onClick={()=>{setfilter('groceries')}}>
              <img className="main__categories-icon" src={bag} alt="" />
              <h4 className="main__categories-name">GROCERIES</h4>
            </button>

            <button className="main__categories-b" onClick={()=>{setfilter('fashion')}}>
              <img className="main__categories-icon" src={bag} alt="" />
              <h4 className="main__categories-name">FASHION</h4>
            </button>

            <button className="main__categories-b" onClick={()=>{setfilter('restaurants')}}>
              <img className="main__categories-icon" src={bag} alt="" />
              <h4 className="main__categories-name">RESTAURANTS</h4>
            </button>

            <button className="main__categories-b" onClick={()=>{setfilter('recreational')}}>
              <img className="main__categories-icon" src={bag} alt="" />
              <h4 className="main__categories-name">RECREATIONAL</h4>
            </button>

            <button className="main__categories-b" onClick={()=>{setfilter('convenience')}}>
              <img className="main__categories-icon" src={bag} alt="" />
              <h4 className="main__categories-name">CONVENIENCE</h4>
            </button>

            <button className="main__categories-b" onClick={()=>{setfilter('hotel')}}>
              <img className="main__categories-icon" src={bag} alt="" />
              <h4 className="main__categories-name">HOTEL</h4>
            </button>
          </div>
        </form>
        <div className="main__map">
          <Map filter={filter}/>
        </div>
        <ShopInfo />
      </main>
    </>
  );
}
