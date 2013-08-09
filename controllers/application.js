function index(req, res) {
  res.render('index', {
    title: 'Welcome to Node.ACS!',
    layout: 'layout',
    req: req
  });
}

function about(req, res) {
  res.render('about', {
    title: 'About',
    layout: 'layout',
    req: req
  });
}

function test(req, res) {
  res.render('test', {
    title: 'Test',
    layout: 'layout',
    req: req
  });
}