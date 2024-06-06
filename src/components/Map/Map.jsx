import "./Map.scss";
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect } from 'react';

export default function Map() { 
  // const token = import.meta.env.MAPBOX_ACCESS_TOKEN

  mapboxgl.accessToken = 'pk.eyJ1IjoibW9yYWdyYSIsImEiOiJjbHgweXp3OWEwMHo5Mmxwazlna2pzeGQ3In0.XnKqyFAxwHt3jzgBW4OjfQ'
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  }, []); 

  return(
    <>
    <div className="map-container" ref={mapContainerRef} />
  </>
  )
}