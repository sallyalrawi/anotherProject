var db = require("../models");

module.exports = function(app) {
  // Get all examples
<<<<<<< HEAD
  app.get("/products", function(req, res) {
=======
  app.get("/", function(req, res) {
>>>>>>> 8b648078e7c092be9e06395b26bddcae624ca95c
    db.hookahzon.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // Create a new example
  app.post("/api/products", function(req, res) {
    db.hookahzon.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete an example by id
  app.delete("/api/products/:id", function(req, res) {
    db.hookahzon
      .destroy({ where: { id: req.params.id } })
      .then(function(result) {
        res.json(result);
      });
  });
};
