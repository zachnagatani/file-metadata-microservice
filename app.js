const express = require('express'),
      app = express(),
      port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port);