var friends = require("../app/data/friends");
//configuring routes
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });



  app.post("/api/survey", function (req, res) {

    friendData.push(req.body);

    friendCalc();

    res.json(bff);


  });

};
