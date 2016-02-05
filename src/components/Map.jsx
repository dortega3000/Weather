import React from 'react';
import _ from 'lodash';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default(props) => {
  return (

      <GoogleMapLoader
        containerElement={<div style={{height: '100%'}}/>}
        googleMapElement={<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat,lng: props.lon}} />}
        />
    
  );
}
