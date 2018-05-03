var express = require('express');
var app = express();
var applicationController = require('./controllers/applicationController');

app.set('view engine', 'ejs');
app.use(express.static('public'));

applicationController(app);


app.listen(3000);
console.log('server listen in 3000 port');
