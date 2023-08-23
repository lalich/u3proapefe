import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const MapComponent = () => {
  const [places, setPlaces] = useState([]);

  const handleApiLoaded = (map, maps) => {
    // Get user's location using browser's geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Perform a nearby search for farms using Places API
        const service = new maps.places.PlacesService(map);
        service.nearbySearch(
          {
            location: userLocation,
            radius: 100, // Adjust the radius as needed
            keyword: 'farms',
          },
          (results, status) => {
            if (status === maps.places.PlacesServiceStatus.OK) {
              setPlaces(results);
            }
          }
        );
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA7R4tdO1a6kgYWv4ly370Q0DRFD1Zruho' }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* Render markers for fetched places */}
        {places.map((place) => (
          <Marker
            key={place.place_id}
            lat={place.geometry.location.lat()}
            lng={place.geometry.location.lng()}
            text={place.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ text }) => <div className="marker">{text}</div>;

export default MapComponent;
