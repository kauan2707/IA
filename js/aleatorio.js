const nomes = ["Mika Galvão", "Gabriel", "Micael", "Fernanda", "Giuliana", "Gustavo"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);