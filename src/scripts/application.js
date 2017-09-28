/*

Notes.

*/

// TODO: all the things.
class Application {
  constructor(){
    $("body").html(require('../templates/example.html')({name: "neat"}));
  }
}

module.exports = Application;
new Application();