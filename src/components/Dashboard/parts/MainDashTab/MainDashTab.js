import React, { useState, useEffect } from "react";
import { ViewWrapper } from "../ViewWrapper";
import ReactMapGL, { Marker } from "react-map-gl";
import House from "@material-ui/icons/House";

import { connect } from "react-redux";
import { getAllCompanyCustomers } from "../../../../actions/customers.js";

/* 
still have error in console: 
mapbox-gl.js:293 This page appears to be missing CSS declarations 
for Mapbox GL JS, which may cause the map to display incorrectly.
 Please ensure your page includes mapbox-gl.css, as described in 
 https://www.mapbox.com/mapbox-gl-js/api/.

going to that link, dont see anything about this??
*/

function MainDashTab(props) {
  const [viewport, setViewport] = useState({
    latitude: 28.547020999999997,
    longitude: -81.77407339999999,
    zoom: 11,
    width: "100%",
    height: "350px"
  });

  // fix for window resize issue with map
  const handleSetVp = newVp => {
    setViewport({
      ...newVp,
      // for whatever reason, if you move the map, then resize window,
      // it wont resize properly
      // this fixes it
      width: "100%"
    });
  };

  const { companyId, getAllCompanyCustomers, shouldFetchCustomers } = props;

  useEffect(() => {
    if (companyId && shouldFetchCustomers) {
      console.log("fetched customers");
      getAllCompanyCustomers(companyId);
    }
  }, [companyId, getAllCompanyCustomers, shouldFetchCustomers]);

  return (
    <ViewWrapper>
      <h3>Main Dashboard</h3>
      <hr />
      <ReactMapGL
        {...viewport}
        style={{ margin: "auto" }}
        onViewportChange={newVp => handleSetVp(newVp)}
        mapStyle="mapbox://styles/thomashessburg/ck2e8ztad251y1co1klj335tz"
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
      >
        {props.customers.map(customer => {
          return (
            <Marker
              key={customer._id}
              latitude={customer.coordinates[1]}
              longitude={customer.coordinates[0]}
            >
              <House
                onClick={e => {
                  e.preventDefault();
                  alert(JSON.stringify(customer));
                }}
                fontSize="large"
                color="secondary"
              />
            </Marker>
          );
        })}
      </ReactMapGL>
    </ViewWrapper>
  );
}

const mapStatToProps = state => {
  return {
    customers: state.customers.customers,
    shouldFetchCustomers: state.customers.shouldFetchCustomers,
    userId: state.auth.user._id,
    companyId: state.auth.user.company_id
  };
};

export default connect(
  mapStatToProps,
  { getAllCompanyCustomers }
)(MainDashTab);
