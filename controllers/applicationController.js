var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = [{id: 1, title: "Siemano", content: "To ja typ niepokorny"}, {id: 2, title: "Witam", content: "To ja kot bawiący sie pilka"}];

module.exports = function(app){

  app.get('/item',(req,res)=>{
    res.render('index', {data: data});
  })

  app.post('/item', urlencodedParser, (req,res)=>{
    data.push(req.body);
    res.render('index', {data: data});
  })


}
