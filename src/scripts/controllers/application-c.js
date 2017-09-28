/*

Copyright (c) YEAR Name. All Rights Reserved.

*/

// Util, etc
import Utils from "../utils/utils";
import Eventful from "../utils/eventful";

// Components
import ExampleM from "../models/example-m";
import ExampleC from "./example-c";

class ApplicationC extends Eventful {

  /*
  ------------------------------------------
  | constructor:void
  |
  | Construct.
  ------------------------------------------ */
  constructor() {
    super();

    // class vars
    this._utils = Utils;

    // build
    this.build();
  }

  /*
  ------------------------------------------
  | build:void
  |
  | Build.
  ------------------------------------------ */
  build() {
    // example
    this.example_m = new ExampleM({"$e": $("#example")});
    this.example_c = new ExampleC({"model": this.example_m});
    this.example_c.trigger("activate");

    this.routes();
    this.observe();
  }

  /*
  ------------------------------------------
  | routes:void
  |
  | Routes.
  ------------------------------------------ */
  routes() {
    // For routes, use page!
    // page('/test', () => {
    //   console.log('pagey!');
    // });
    // page();
  }

  /*
  ------------------------------------------
  | observe:void
  |
  | Observe.
  ------------------------------------------ */
  observe() {

  }
}

module.exports = ApplicationC;
