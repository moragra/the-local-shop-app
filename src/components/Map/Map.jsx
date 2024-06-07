import "./Map.scss";
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import ShopInfo from "../../components/ShopInfo/ShopInfo";

export default function Map({ filter, searchData, setSearchData }) {
  const [shopInfo, setShopInfo] = useState(null);
  const [filterMap, setFilterMap] = useState("");
  const mapContainerRef = useRef(null);
  mapboxgl.accessToken = "pk.eyJ1IjoibW9yYWdyYSIsImEiOiJjbHgweXp3OWEwMHo5Mmxwazlna2pzeGQ3In0.XnKqyFAxwHt3jzgBW4OjfQ";
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 11,
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");


    // start the map based on the users geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setCenter([longitude, latitude]);
        },
        (error) => {
          map.setCenter([-114.067695, 51.042616]);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    //rendering business in map

    const renderBusiness = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}business`
        );

         //filtering business by category selected
        if (filter) {
            const { data } = await axios.get(
              `${import.meta.env.VITE_LOCALHOST}business`
            );
            
            const category = data.filter((d) => d.category == filter);

            const featureCollection = {
              type: "FeatureCollection",
              features: category.map((bu) => {
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
            map.addSource("places", {
              type: "geojson",
              data: featureCollection,
            });
    
            map.addLayer({
              id: "places-layer",
              type: "circle",
              source: "places",
              paint: {
                "circle-color": "blue",
                "circle-radius": 5,
              },
            });
    
            featureCollection.features.forEach((feature) => {
              const { geometry, properties } = feature;
              const marker = new mapboxgl.Marker()
                .setLngLat(geometry.coordinates)
                .addTo(map);
            });
    
            map.on("click", "places-layer", (e) => {
              // const coordinates = e.features[0].geometry.coordinates.slice();
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

        }
        

        const featureCollection = {
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

        map.addSource("places", {
          type: "geojson",
          data: featureCollection,
        });

        map.addLayer({
          id: "places-layer",
          type: "circle",
          source: "places",
          paint: {
            "circle-color": "blue",
            "circle-radius": 5,
          },
        });

        featureCollection.features.forEach((feature) => {
          const { geometry, properties } = feature;
          const marker = new mapboxgl.Marker()
            .setLngLat(geometry.coordinates)
            .addTo(map);
        });

        map.on("click", "places-layer", (e) => {
          // const coordinates = e.features[0].geometry.coordinates.slice();
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
      } catch (error) {
        // console.error("Error rendering business data:", error);
      }
    };

    renderBusiness();

    return () => map.remove();
  }, [filter]);

  return (
    <>
      {shopInfo ? (
        <div className="map-container" ref={mapContainerRef} />
      ) : (
        <div className="map-container" ref={mapContainerRef} />
      )}
      {shopInfo && <ShopInfo shopInfo={shopInfo} />}
      {searchData && (
        <ShopInfo searchData={searchData} setShopInfo={setShopInfo} />
      )}
    </>
  );
}
