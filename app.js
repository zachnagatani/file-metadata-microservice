const express = require('express'),
      app = express(),
      fs = require('fs'),
      multer = require('multer'),
      upload = multer({dest: 'uploads/'}),
      port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/get-file-size', (req, res) => {
    res.json({
        size: req.query.size + ' bytes'
    });
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
    res.json({
        size: req.file.size + ' bytes'
    });
});

app.listen(port);