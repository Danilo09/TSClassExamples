"use strict";
// Aqui vemos como é extendidos as propriedades dos elementos de uma forma automatica pelo TypeScript, esse é apenas um exemplo de como funciona no core.
function select(seletor) {
    return document.querySelector(seletor);
}
select('a')?.href;
select('video')?.volume;
select('div')?.title;
//**** ------------------------------------------------------------------------------------------------------------  *** */
// CheckInterface
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if (CheckInterface(jogo, 'desenvolvedora')) {
        console.log(jogo);
    }
    const livro = await fetchData('/livro.json');
    if (CheckInterface(livro, 'autor')) {
        console.log(livro);
    }
}
handleData();
function CheckInterface(obj, ...keys) {
    if (obj &&
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length) {
        return true;
    }
    else {
        return false;
    }
}
