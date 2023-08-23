import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

function MapComponent() {

    return (
      <div style={{ height: '500px', width: '50%'}}>
        <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyA7R4tdO1a6kgYWv4ly370Q0DRFD1Zruho'}}
          defaultCenter={{lat: -28.024, lng: 140.887}}
          defaultZoom={5}
          
        />
      </div>
    );
  }
  
  export default MapComponent;
  