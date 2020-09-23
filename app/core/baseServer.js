const bodyParser = require("body-parser");
const express = require("express");
const notFound = require("./middleware/notFound");
const error = require("./middleware/error");

module.exports = class {
  constructor(params) {
    this.params = params;
    this.middleware = (req, res, next) => {
      next();
    };
    this.init();
  }

  init() {
    this.validateParams();
    this.initExpress();
    this.initRouteMiddleware();
  }

  validateParams() {
    if (!this.params.name) throw new Error("missing name");
    if (!this.params.routes) throw new Error("missing routes");
    if (this.params.middleware) this.middleware = this.params.middleware;
  }

  initExpress() {
    const port = process.env.PORT || 4000;
    this.server = express();
    this.server.set("port", port);
    this.server.set("name", this.params.name);
    this.server.use(bodyParser.json());
    this.server.use(this.middleware);
  }

  initRouteMiddleware() {
    this.server.use(this.params.routes);
    this.server.use(notFound);
    this.server.use(error);
  }

  start() {
    this.http = this.server.listen(this.server.get("port"), () => {
      console.info(`started at port: ${this.server.get("port")}`);
    });
  }

  stop() {
    if (this.http) this.http.close();
  }
};
