import React, { useState } from "react";
import { ViewWrapper } from "../ViewWrapper";
import ReactMapGL from "react-map-gl";

export default function MainDashTab() {
  const [viewport, setViewport] = useState({
    latitude: 28.547020999999997,
    longitude: -81.77407339999999,
    zoom: 15,
    width: "100%",
    height: "350px"
  });

  return (
    <ViewWrapper>
      <h3>Main Dashboard</h3>
      <hr />
      <ReactMapGL
        {...viewport}
        style={{ margin: "auto" }}
        onViewportChange={newVp => setViewport(newVp)}
        mapStyle="mapbox://styles/thomashessburg/ck2e8ztad251y1co1klj335tz"
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
      >
        {/* 
      add markers here
      check around 8 minutes in this video for further directions -> https://www.youtube.com/watch?v=JJatzkPcmoI
      heres info on geocoding -> https://docs.mapbox.com/help/glossary/geocoding/ -> https://docs.mapbox.com/help/how-mapbox-works/geocoding/
      need to take user addresses and turn them into lat/lons
      */}
      </ReactMapGL>
    </ViewWrapper>
  );
}
