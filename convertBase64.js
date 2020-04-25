const fs = require('fs');

function convertFileBas64(nome){
    try{
        return new Promise(function(resolve, reject){
            const file = fs.readFileSync(`${nome}.png`);
            const buffer = Buffer.from(file).toString('base64');
            
            return buffer ? resolve(buffer) : reject(false);
        }) 
    }catch(e){
        console.info('[ERROR] Houve um erro ao converter')
    }
}

module.exports = {
    convertFileBas64
}