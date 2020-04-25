const request = require('request');

const url = 'https://api.chat-api.com/instance120111/sendFile?token=zzc4sjws2of9hbew';

function sendFile(base64){
    const options = {
        json: {
            "chatId": "5511943666624-1587741168@g.us",
            "body": `data:image/png;base64,${base64}`,
            "filename": `${base64}.png`,
            "caption": "Informação sobre situação do corona vírus no Brasil"
        }
    }
    return new Promise(function(resolve, reject){
        request.post(url, options, function(error, response, dados){
            if(!error && response.statusCode == 200){
                console.log(dados);
                resolve(true);
            }else{
                console.log('Houve um erro', error);
                reject(false);
            }
        });
    })
}

module.exports = {
    sendFile
}
