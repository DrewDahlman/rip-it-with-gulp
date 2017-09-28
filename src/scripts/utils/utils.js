/*

Notes.

*/

class Utils {

  /*
  ------------------------------------------
  | transform:string
  |
  | Get a browser specific transform.
  ------------------------------------------ */
  static get transform() {
    return Modernizr.prefixed("transform").replace(/([A-Z])/g, function(str, m1) {
      return "-" + m1.toLowerCase();
    }).replace(/^ms-/,"-ms-");
  }

  /*
  ------------------------------------------
  | translate:string
  |
  | Get a browser specific translate.
  ------------------------------------------ */
  static translate(x, y, z = 0) {
    let tran = Modernizr.csstransforms3d === true ? "translate3d" : "translate";
    let vals = Modernizr.csstransforms3d === true ? "(" + x + ", " + y + ", " + z + ")" : "(" + x + ", " + y + ")";
    return tran + vals;
  }

  /*
  ------------------------------------------
  | transitionend:string
  |
  | Get a browser specific transitionend.
  ------------------------------------------ */
  static get transitionend() {
    let t = {
      "WebkitTransition": "webkitTransitionEnd",
      "MozTransition": "transitionend",
      "OTransition": "oTransitionEnd otransitionend",
      "msTransition": "MSTransitionEnd",
      "transition": "transitionend"
    };

    return t[Modernizr.prefixed("transition")];
  }

  /*
  ------------------------------------------
  | mobile:string
  |
  | Do some user agent testing for mobile.
  ------------------------------------------ */
  static get mobile() {
    return ((/Android/i).test(navigator.userAgent) || (/BlackBerry/i).test(navigator.userAgent) || (/iPhone|iPad|iPod/i).test(navigator.userAgent) || (/Opera Mini/i).test(navigator.userAgent) || (/IEMobile/i).test(navigator.userAgent));
  }
}

module.exports = Utils;
