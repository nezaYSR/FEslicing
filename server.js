const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/neza-yasser'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname+'/dist/neza-yasser/index.html'))
);

app.listen(process.env.PORT || 4200);