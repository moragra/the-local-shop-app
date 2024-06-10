import "./Map.scss";
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import ShopInfo from "../../components/ShopInfo/ShopInfo";

export default function Map({ filter, setFilter, searchData, setSearchData }) {
  const [shopInfo, setShopInfo] = useState(null);
  const mapContainerRef = useRef(null);
  mapboxgl.accessToken =
    "pk.eyJ1IjoibW9yYWdyYSIsImEiOiJjbHgweXp3OWEwMHo5Mmxwazlna2pzeGQ3In0.XnKqyFAxwHt3jzgBW4OjfQ";

  useEffect(() => {
    setSearchData(null);
    setShopInfo(null);
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/moragra/clx6dbgp901tw01q14hxudleg",
      zoom: 11.5,
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // sets position of the map based on your location

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setCenter([longitude, latitude]);
        },
        (error) => {
          map.setCenter([-84.2, 10.0]);
          map.setZoom(6);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    // creates the feature collection for each business in data

    const createFeatureCollection = (data) => {
      return {
        type: "FeatureCollection",
        features: data.map((bu) => {
          return {
            type: "Feature",
            properties: {
              shop_name: bu.shop_name,
              description: bu.about,
              address: bu.address.properties.name,
              phone: bu.phone,
              ig: bu.ig_url,
              fb: bu.fb_url,
              x: bu.x_url,
              li: bu.li_url,
              wb: bu.website_url,
            },
            geometry: {
              type: bu.address.geometry.type,
              coordinates: bu.address.geometry.coordinates,
            },
          };
        }),
      };
    };

    // Adds business data to layer and create the markers

    const businessData = (featureCollection) => {
      map.addSource("places", {
        type: "geojson",
        data: featureCollection,
      });

      map.addLayer({
        id: "places-layer",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "white",
          "circle-radius": 10,
        },
      });

      featureCollection.features.forEach((feature) => {
        const { geometry } = feature;
        const el = document.createElement("div");
        el.className = "marker";
        new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
      });

      map.on("click", "places-layer", (e) => {
        const { shop_name, description, address, phone, ig, fb, x, li, wb } =
          e.features[0].properties;
        setShopInfo({
          shop_name,
          description,
          address,
          phone,
          ig,
          fb,
          x,
          li,
          wb,
        });
        setSearchData(null);
      });
    };

    // get the business data from API and it renders the functions to display in map

    const renderBusiness = async () => {
      // try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}business`
      );

      const filterData = filter
        ? data.filter((d) => d.category === filter)
        : data;
      const featureCollection = createFeatureCollection(filterData);
      businessData(featureCollection);
    };

    renderBusiness();

    return () => map.remove();
  }, [filter]);

  return (
    <div className="map-container-wrapper">
      <div className="content">
        <div className="map-container" ref={mapContainerRef}></div>
        {(shopInfo || searchData) && (
          <div className="shop-info-container">
            <ShopInfo
              searchData={searchData}
              setShopInfo={setShopInfo}
              shopInfo={shopInfo}
            />
          </div>
        )}
      </div>
    </div>
  );
}
