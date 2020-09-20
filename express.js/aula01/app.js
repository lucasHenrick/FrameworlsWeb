const express = require('express');
const app = express();
const port = 3000;

//Method Get
app.get('/', function(req, res){
    res.send('Get Teste');
});
//Method Post
app.post('/', function(req, res){
    res.send('Post Teste');
});
//Method Put
app.put('/', function(req, res){
    res.send('Put Teste');
});
//Method Delete
app.delete('/', function(req, res){
    res.send('Delete Teste');
});

app.listen(port, () =>{console.log('Serve Online' + port)});
