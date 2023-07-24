// Aqui vemos como é extendidos as propriedades dos elementos de uma forma automatica pelo TypeScript, esse é apenas um exemplo de como funciona no core.

interface Elementos {
    a: HTMLAnchorElement;
    video: HTMLVideoElement;
    div: HTMLElement;
    body: HTMLBodyElement;
    audio: HTMLAudioElement;
}

function select<Chaves extends keyof Elementos>(seletor: Chaves): Elementos[Chaves] | null {
    return document.querySelector(seletor);
}

select('a')?.href;
select('video')?.volume;
select('div')?.title;