import "./Map.scss";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect, useState } from "react";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
// console.log('Mapbox Token:', MAPBOX_TOKEN);

if (!MAPBOX_TOKEN) {
  throw new Error(
    "You need to provide a Mapbox token in your .env file."
  );
}

mapboxgl.accessToken = MAPBOX_TOKEN;

const Map = ({ businesses }) => {
  const mapContainer = useRef(null);
  const mapRef = useRef(null); // Create a ref to hold the map instance
  const [selectedBusiness, setSelectedBusiness] = useState(null); // State to hold selected business info

  useEffect(() => {
    // Default coordinates for Calgary
    const calgaryCoordinates = [-114.0719, 51.0447];

    // Initialize the map
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11', // Your map style
      center: calgaryCoordinates, // Default initial center
      zoom: 12, // Set the zoom level
    });

    // Check if geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Set the map center to the user's location
          mapRef.current.setCenter([longitude, latitude]);
          // Optionally, set a marker for the user's location
          new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(mapRef.current);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          // If there's an error, the map will remain centered on Calgary
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // If geolocation is not supported, the map will remain centered on Calgary
    }

    // Add pinpoints for each business
    businesses.forEach(business => {
      const { shop_name, address } = business;
      const coordinates = address.geometry.coordinates; // Access the coordinates array

      // Check if coordinates are valid
      if (Array.isArray(coordinates) && coordinates.length === 2) {
        const [longitude, latitude] = coordinates; // Destructure longitude and latitude

        // Check if longitude and latitude are valid numbers
        if (typeof longitude === 'number' && !isNaN(longitude) && 
            typeof latitude === 'number' && !isNaN(latitude)) {
          const marker = new mapboxgl.Marker()
            .setLngLat([longitude, latitude]) // Use the correct coordinates
            .setPopup(new mapboxgl.Popup().setText(shop_name)) // Optional: add a popup
            .addTo(mapRef.current);

          // Add click event to the marker
          marker.getElement().addEventListener('click', () => {
            setSelectedBusiness(business); // Update state with the selected business info
          });
        } else {
          console.error(`Invalid coordinates for business: ${shop_name}`, { longitude, latitude });
        }
      } else {
        console.error(`Coordinates are not valid for business: ${shop_name}`, coordinates);
      }
    });

    mapRef.current.on('error', (e) => {
      console.error('Map error:', e);
    });

    mapRef.current.on('style.load', () => {
      // console.log('Style loaded successfully');
    });

    const nav = new mapboxgl.NavigationControl();
    mapRef.current.addControl(nav, "top-right");

    return () => mapRef.current.remove(); // Cleanup on unmount
  }, [businesses]); // Re-run effect when businesses change

  return (
    <div className="map-container-wrapper">
      <div ref={mapContainer} className="map-container" />
      {selectedBusiness && (
        <div className="shop-info-container">
          <h3>{selectedBusiness.shop_name}</h3>
          <p>Category: {selectedBusiness.category}</p>
          <p>Email: {selectedBusiness.email}</p>
          <p>Phone: {selectedBusiness.phone}</p>
          <p>Address: {selectedBusiness.address.properties.full_address}</p>
          <p>About: {selectedBusiness.about}</p>
          <p>Website: <a href={selectedBusiness.website_url} target="_blank" rel="noopener noreferrer">{selectedBusiness.website_url}</a></p>
          <p>Instagram: <a href={selectedBusiness.ig_url} target="_blank" rel="noopener noreferrer">{selectedBusiness.ig_url}</a></p>
          <p>Facebook: <a href={selectedBusiness.fb_url} target="_blank" rel="noopener noreferrer">{selectedBusiness.fb_url}</a></p>
          <p>X: <a href={selectedBusiness.x_url} target="_blank" rel="noopener noreferrer">{selectedBusiness.x_url}</a></p>
          <p>LinkedIn: <a href={selectedBusiness.li_url} target="_blank" rel="noopener noreferrer">{selectedBusiness.li_url}</a></p>
        </div>
      )}
    </div>
  );
};

export default Map;
