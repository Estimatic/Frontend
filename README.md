# Frontend

Estimatic is a platform specializing in good-better-best style estimation.

## dev notes:

1. Data is controlled by the DataFetchingHOC file in the components directory. This lets us define what data we want in each view, keeping us from having to fetch all data on initial load of the app, and speeding up render times on reload (i.e. the customers view will only query for customers and other relevant data on initial load).

2. users are able to control UI colors. This lets them customize the app to fit their company. Because of this, we have to remember to render the UI accordingly. Use default Estimatic colors, but also check to see if a user has set their own colors, and render ui accordingly.
