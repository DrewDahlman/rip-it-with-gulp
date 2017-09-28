/*

Copyright (c) YEAR Name. All Rights Reserved.

*/

// data
let AppData = require("../data/data");

class BaseM {

  /*
  ------------------------------------------
  | constructor:void
  |
  | data:object - data
  |
  | Construct.
  ------------------------------------------ */
  constructor(data) {
    // app data
    this.app_data = AppData;

    // internals for get / set
    this._$e = null;
    this._$v = null;

    // set passed data
    this.$e = data.$e;
  }

  /*
  ------------------------------------------
  | parse:void
  |
  | Parse relevent app data.
  ------------------------------------------ */
  parse() {

  }

  /*
  ------------------------------------------
  | $e:jQuery (get)
  |
  | Get the element.
  ------------------------------------------ */
  get $e() {
    return this._$e;
  }

  /*
  ------------------------------------------
  | $e:void (set)
  |
  | $el:jQuery - element
  |
  | Set the element.
  ------------------------------------------ */
  set $e($el) {
    if($el instanceof jQuery === true) this._$e = $el;
    else throw "Error: $e must be a jQuery object.";
  }

  /*
  ------------------------------------------
  | $v:jQuery (get)
  |
  | Get the view.
  ------------------------------------------ */
  get $v() {
    return this._$v;
  }

  /*
  ------------------------------------------
  | $v:void (set)
  |
  | $el:jQuery - element
  |
  | Set the view.
  ------------------------------------------ */
  set $v($el) {
    if($el instanceof jQuery === true) this._$v = $el;
    else throw "Error: $v must be a jQuery object.";
  }
}

module.exports = BaseM;