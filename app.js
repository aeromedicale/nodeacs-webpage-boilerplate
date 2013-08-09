require('newrelic');
var ACS = require('acs').ACS,
  partials = require('express-partials');

// initialize app
function start(app, express) {
  // initialize ACS
  ACS.init('<APP KEY>', '<APP SECRET>');

  // express setups
  app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
  app.use(express.cookieParser());
  app.use(express.session({key: 'node.acs', secret: 'my secret'}));

  //set to use express-partial for view
  app.use(partials());

  //Request body parsing middleware supporting JSON, urlencoded, and multipart
  app.use(express.bodyParser());
}

// release resources
function stop() {

}
