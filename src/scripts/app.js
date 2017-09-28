/*

Notes.

*/

// NOTE: you need at least one test to get Modernizr to
// build. Cool. But, yeah, add 'em to get 'em ...
if(Modernizr.webgl) console.log("webgl!");
if(Modernizr.postmessage) console.log("postmessage!");

// Require our stuff
import ApplicationC from "./controllers/application-c";

// Send it!
$( () => { window.Namespace = new ApplicationC(); });