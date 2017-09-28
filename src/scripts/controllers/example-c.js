/*

Copyright (c) YEAR Name. All Rights Reserved.

*/

// Dependencies
import BaseC from "./base-c";

class ExampleC extends BaseC {

  /*
  ------------------------------------------
  | constructor:void
  |
  | init:object - init params
  |
  | Construct.
  ------------------------------------------ */
  constructor(init) {
    super(init);
    this.build();
  }

  /*
  ------------------------------------------
  | build:void
  |
  | Build.
  ------------------------------------------ */
  build() {
    super.build();
    this.model.$v = $(require("../../templates/example-v.html")(this.model)).appendTo(this.model.$e);

    this.observe();
  }

  /*
  ------------------------------------------
  | observe:void
  |
  | Observe.
  ------------------------------------------ */
  observe() {
    super.observe();
  }

  /*
  ------------------------------------------
  | activate:void
  |
  | Activate.
  ------------------------------------------ */
  activate() {
    super.activate();
  }

  /*
  ------------------------------------------
  | suspend:void
  |
  | Suspend.
  ------------------------------------------ */
  suspend() {
    super.suspend();
  }
}

module.exports = ExampleC;