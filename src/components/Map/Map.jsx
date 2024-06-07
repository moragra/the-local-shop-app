import "./Map.scss";
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect } from "react";
import axios from "axios";

export default function Map({ filter }) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibW9yYWdyYSIsImEiOiJjbHgweXp3OWEwMHo5Mmxwazlna2pzeGQ3In0.XnKqyFAxwHt3jzgBW4OjfQ";
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 11,
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
        const {latitude, longitude} = position.coords
        map.setCenter([longitude, latitude])
      }, (error) =>{
        map.setCenter([-114.067695, 51.042616])
      })
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    const renderBusiness = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}business`
        );
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

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${properties.shop_name}</h3>
            <p>${properties.description}</p>
            <p>${properties.address}</p>
            <p>${properties.phone}</p>`
          );

          marker.getElement().addEventListener("mouseenter", () => {
            popup.addTo(map);
            popup.setLngLat(geometry.coordinates);
          });

          marker.getElement().addEventListener("mouseleave", () => {
            popup.remove();
          });
        });

        map.on("click", "places-layer", (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const { shop_name, description, address, phone } =
            e.features[0].properties;

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${shop_name}</h3><p>${description}</p><p>${address}</p><p>${phone}</p>`
          );

          popup.setLngLat(coordinates).addTo(map);
        });
      } catch (error) {
        // console.error("Error rendering business data:", error);
      }
    };

    renderBusiness();

    return () => map.remove();
  }, []);

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
}
