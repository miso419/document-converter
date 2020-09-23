const Server = require("./core/baseServer");
const routes = require("./routes");

const server = new Server({
  name: "DOCUMMENT-CONVERTER",
  routes,
});

server.start();

module.exports = {
  server,
};
