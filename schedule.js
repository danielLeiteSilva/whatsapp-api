const schedule = require('node-schedule');
const { printTela } = require('./screenshot.js');
const { convertFileBas64 } = require('./convertBase64');
const { sendFile } = require('./sendGroupWhatsapp');
const config = require('./config.json');

// inicio();

async function inicio(){
    schedule.scheduleJob("*/5 * * * *", async function(){
        // processo();
        await carregaArquivos(); 
    }); 
}

// carregaArquivos();

async function carregaArquivos(){
    for(response in config){
        let url = config[response].url;
        let width = config[response].width
        let height = config[response].height
        let nome = config[response].nome
        await processo(url, width, height, nome);
    }
}

async function processo(site, width, height, nome){
    try{
        console.info('-------------------------------')
        console.info('[INFO] TIRANDO PRINT')
        console.info('-------------------------------')
        await printTela(site, width, height, nome);
        console.info('-------------------------------')
        console.info('[INFO] COVERTENDO BASE64')
        console.info('-------------------------------')
        const base64 = await convertFileBas64(nome);
        console.info('-------------------------------')
        console.info('[INFO] TIRANDO ENVIANDO ARQUIVO')
        console.info('-------------------------------')
        await sendFile(base64);
    }catch(error){
        console.info(error);
    }
}   

module.exports = {
    inicio
}