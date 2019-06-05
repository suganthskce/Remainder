/**
 * Base Middlware
 */

"use strict";

class Middleware {
  constructor() {}
  init(app, type, action) {
    if (typeof action === "function" && type == "preHandler") {
      app.addHook("preHandler", action);
    } else if (typeof action === "function" && type == "onSend") {
      app.addHook("onSend", action);
    }
  }
}

module.exports = Middleware;
