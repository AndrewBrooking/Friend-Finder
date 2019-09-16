// Dependencies
const express = require("express");

// Express setup
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle html and API requests
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Listen for port activity
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});