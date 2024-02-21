import React, { useState } from 'react';

const EmbedMap = () => {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Use a geocoding service to convert the location input into coordinates
    // This could be done using the Geolocation API or a third-party service
    // For simplicity, let's assume we're using a mock geocoding function
    const mockGeocoding = (location) => {
      // Mock implementation, replace with actual geocoding logic
      return {
        lat: 51.5074, // Example latitude for London
        lng: -0.1278, // Example longitude for London
      };
    };
    const { lat, lng } = mockGeocoding(location);
    setCoordinates({ lat, lng });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>
      {coordinates && (
        <div style={{ width: '100%', height: '400px', border: 'dashed' }}>
          {/* Embed Google Maps using the provided coordinates */}
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBL5p7ii1_G81f35B3lH4GKQKW46hHh16s&center=${coordinates.lat},${coordinates.lng}&zoom=15`}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default EmbedMap;