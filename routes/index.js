function route (app) {
  app.get('/', function (req, res) {
    var template = app.get("troian");

    res.send(template.index(req, res));
  });
}

module.exports = route;