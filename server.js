const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/ajax', function(req, res){
    console.log("ok");
    res.end("ok")
})

app.get("/resp", function (request, response) {
    var login = request.log;
    var pass = response.pass;
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Headers', 'origin, content-type, accept');
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    // response.statusCode = 302;
    console.log("Url: " + request.url);
    console.log(request.headers);
    console.log(`${login} - ${pass}`);
    response.send(`${login} - ${pass}`);
    response.end();
});

app.get('/asd1', function(req, res){
    console.log("ok");
    var dat = new Date();
    res.end(dat.toString());
});

app.listen(3000);
