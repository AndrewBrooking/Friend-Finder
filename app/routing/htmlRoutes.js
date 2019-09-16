const path = require("path");

module.exports = (app) => {
    // Serve home page
    app.get("/", (req, res) => {
        res.json(path.join(__dirname, "../public/home.html"));
    });

    // Serve survey page
    app.get("/survey", (req, res) => {
        res.json(path.join(__dirname, "../public/survey.html"));
    });
}