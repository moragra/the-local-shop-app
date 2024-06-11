import "./Home.scss";
import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";
import { useState } from "react";
import axios from 'axios'

export default function Home() {
  const [filter, setFilter] = useState(null)
  const [searchData, setSearchData] = useState(null)
  const searchHadler = async (e) => {
    e.preventDefault();
    const shop_name = e.target.search.value;
    const {data} = await axios.get(`${import.meta.env.VITE_LOCALHOST}business/shop/${shop_name}`)
    setSearchData(data)

  };
  return (
    <>
      <main className="main">
        <h2 className="main__header">EXPLORE ALL SHOPS</h2>
        <form className="main__form" action="" onSubmit={searchHadler}>
          <div className="main__form-input">
            <img className="main__form-input-icon" src={search} alt="" />
            <input
              className="main__form-input-field"
              type="text"
              placeholder="Search"
              name="search"
            />
          </div>

          <button className="main__form-search-btn">
            <h3 className="main__form-search-t">SEARCH</h3>
          </button>
          </form>
          <div className="main__categories">
          {["groceries", "fashion", "restaurants", "recreational", "convenience", "hotel"].map((category) => (
            <button
              key={category}
              className="main__categories-b"
              onClick={() => setFilter(category)}
            >
              <img className="main__categories-icon" src={bag} alt="" />
              <h4 className="main__categories-name">{category.toUpperCase()}</h4>
            </button>
          ))}
          </div>
       
        <div className="main__map">
          <Map filter={filter} setFilter={setFilter} searchData ={searchData} setSearchData={setSearchData}/>
        </div>
      </main>
    </>
  );
}
