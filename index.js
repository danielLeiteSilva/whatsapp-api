const http = require('http');
const { inicio } = require('./schedule');
const port = process.env.PORT || 8080;

const server = http.createServer(async function(req, res){

    if(req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end({message: `Ok.I'm fine on port ${port}`});
        await inicio();
    }

});

server.listen(port, function(){
    console.info("Conectado na porta ->", port);
})

