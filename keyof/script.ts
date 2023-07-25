// Aqui vemos como é extendidos as propriedades dos elementos de uma forma automatica pelo TypeScript, esse é apenas um exemplo de como funciona no core.

// ** QUERY SELECTOR ** //

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


//**** ------------------------------------------------------------------------------------------------------------  *** */
// CheckInterface

async function fetchData(url: string) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}

interface Jogo {
    nome: string;
    ano: number;
    desenvolvedora: string;
    plataformas: string[];
}

interface Livro {
    nome: string;
    ano: number;
    autor: string;
    paginas: number;
}

async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if(CheckInterface<Jogo>(jogo, 'desenvolvedora')) {
        console.log(jogo)
    }

    const livro = await fetchData('/livro.json');
    if(CheckInterface<Livro>(livro, 'autor')) { 
        console.log(livro)
    }
}

handleData()

function CheckInterface<Interface>(
    obj: unknown,
    ...keys: Array<keyof Interface>
): obj is Interface {
    if (obj && 
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length
        ) {
            return true;
        } else {
            return false
        }
}