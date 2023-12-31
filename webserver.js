const express = require('express');
const app = express();
const port = 4200;
const path = require('path');

app.use(express.static('./web-build'));

app.get('*', function(req,res) {
    res.sendFile(path.resolve('./web-build/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
