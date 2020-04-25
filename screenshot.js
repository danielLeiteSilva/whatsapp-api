const puppeteer = require('puppeteer');

async function printTela(site, largura, tamanho, nome){
    try{
        console.info("[INFO] ABRINDO NAVEGADOR");
        const browser = await puppeteer.launch({
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox'
            ],
            headless: true
        });
        console.info("[INFO] ABRINDO NOVA ABA");
        const page = await browser.newPage();
        console.info("[INFO] DIRECIONANDO PARA URL");

        await page.goto(site);
        console.info("[INFO] ESPERANDO UM TEMPO PARA O SCREENSHOT");
        await sleep(30000);
        console.info("[INFO] DIMENSIONANDO TAMANHO");
        await page.setViewport({
            width: largura, 
            height: tamanho
        });
        console.info("[INFO] TIRANDO SCREENSHOT");
        await page.screenshot({path: `${nome}.png`});
        console.info("[INFO] FECHANDO NAVEGADOR");
        await browser.close();
    }catch(error){
        console.info("[ERROR] Houve um erro ao tirar o screenshot", error);
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

module.exports = {
    printTela
}