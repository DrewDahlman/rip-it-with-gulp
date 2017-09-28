/*

Copyright (c) YEAR Name. All Rights Reserved.

*/

// Dependencies
import BaseM from "./base-m";

class ExampleM extends BaseM {

  /*
  ------------------------------------------
  | constructor:void
  |
  | data:object - data
  |
  | Construct.
  ------------------------------------------ */
  constructor(data) {
    super(data);

    // internals for get / set
    this._example = null;

    // parse app data
    this.parse();
  }

  /*
  ------------------------------------------
  | parse:void
  |
  | Parse sync data.
  ------------------------------------------ */
  parse() {
    super.parse();

    // example
    this._example = this.app_data.example;
  }

  /*
  ------------------------------------------
  | example:string (get)
  |
  | Get the example.
  ------------------------------------------ */
  get example() {
    return this._example;
  }

  /*
  ------------------------------------------
  | example:void (set)
  |
  | e:string - example
  |
  | Set the example.
  ------------------------------------------ */
  set example(e) {
    this._example = e;
  }
}

module.exports = ExampleM;
