const http = require('http');

const port = process.env.PORT || '8080';

const server = http.createServer(function(req, res){

    if(req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end({message: `Ok.I'm fine on port ${port}`});
    }

});

server.listen(port, function(){
    console.info("Conectado na porta ->", port);
})

