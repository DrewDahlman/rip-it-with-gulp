/*

Notes.

*/

// TODO: all the things.
export class Application {
  constructor(){
    $("body").html(require("../templates/example.html")({name: "neat"}));
    let test = [{
      name: "foo"
    },{
      name: "bar"
    }];
    _.each( test, (item) => {
      console.log(item);
    });
  }
}

new Application();