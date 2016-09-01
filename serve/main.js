var serve = require('koa-static');
var koa = require('koa');
var app = koa();

// $ GET /package.json
app.use(serve('dist'));

var port = process.env.PORT || 9000;
app.listen(port);
console.log('listening on port ' + port);
