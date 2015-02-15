var express = require('express'),
    exphbs  = require('express-handlebars'),

    // TODO: the file below is not included in the sample code
    frontEndRouter = require('./routes/frontend.js'),
    backEndRouter = require('./routes/backend.js'),
    backEndAPIRouter = require('./routes/backend.api.js');

var app = express();

// TODO: the default layout is not included in the sample code
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// TODO: serve static files from the public folder
// app.use(/**/)

// backend routers run first
app.use('/admin/api', backEndAPIRouter);
app.use('/admin', backEndRouter);
// TODO: shift your routes into ./routes/frontend.js
app.use('/', frontEndRouter);

app.listen(process.env.PORT || 3000, function () {
    console.log('Example Server listening at port ' + (process.env.PORT || 3000));
});