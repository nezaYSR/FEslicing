const express = require('express');

const app = express();

app.use(express.static('./dist/neza-yasser'));

app.get('/*', (req, res) =>
    {console.log('tatata');
    res.sendFile('index.html', {root: 'dist/neza-yasser/'})}
);

app.listen(process.env.PORT || 8080);