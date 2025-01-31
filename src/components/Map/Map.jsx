import "./Map.scss";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect } from "react";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
console.log('Mapbox Token:', MAPBOX_TOKEN);

if (!MAPBOX_TOKEN) {
  throw new Error(
    "You need to provide a Mapbox token in your .env file."
  );
}

mapboxgl.accessToken = MAPBOX_TOKEN;

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      // Temporarily use a default style while we find your custom style URL
      style: 'mapbox://styles/mapbox/dark-v11', // or light-v11, streets-v12, etc.
      center: [-114.0719, 51.0447],
      zoom: 12
    });

    map.on('error', (e) => {
      console.error('Map error:', e);
    });

    map.on('style.load', () => {
      console.log('Style loaded successfully');
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    return () => map.remove();
  }, []);

  return (
    <div className="map">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
