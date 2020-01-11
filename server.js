var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
    res.render('index', {deneme: "deneme metni"});
});

var port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log('Port no -> '+port + ' hizmete başladı..')
})