// Dependencies
var express = require("express");

//connecting
var app = express();
var PORT = process.env.PORT || 3000;

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});
