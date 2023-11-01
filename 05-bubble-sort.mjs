/*
let pass, comps, trocas; - Declaração de variáveis globais para rastrear o número de passagens (trocas), 
comparações e trocas durante a ordenação.

function bubbleSort(vetor) { - Declaração da função bubbleSort que aceita um vetor como argumento e 
    ordena o vetor usando o algoritmo Bubble Sort.

pass = 0, comps = 0, trocas = 0; - Inicializa as variáveis pass, comps e trocas como zero para contagem.

let swap; - Declara uma variável swap para verificar se houve trocas em uma passagem.

do { - Inicia um loop do-while que continuará até que nenhuma troca seja feita em uma passagem completa.

pass++; - Incrementa a variável pass para acompanhar o número de passagens.

swap = false; - Define swap como falso no início de cada passagem para determinar se houve alguma troca.

for (let i = 0; i < vetor.length - 1; i++) { - Inicia um loop que percorre o vetor.

comps++; - Incrementa a variável comps para acompanhar o número de comparações.

if (vetor[i] > vetor[i + 1]) { - Verifica se o elemento atual é maior do que o próximo elemento.

[vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]; - Realiza a troca de elementos usando uma desestruturação, 
caso a condição seja verdadeira.

swap = true; - Define swap como verdadeiro para indicar que uma troca foi feita nesta passagem.

trocas++; - Incrementa a variável trocas para acompanhar o número de trocas realizadas.

} while (swap); - O loop continua enquanto houver trocas nesta passagem.

let nums = [...] - Declara um vetor nums que será ordenado com o Bubble Sort.

bubbleSort(nums); - Chama a função bubbleSort para ordenar o vetor nums.

console.log(nums); - Imprime o vetor ordenado no console.

console.log({ pass, comps, trocas }); - Imprime um objeto no console com informações sobre o desempenho do algoritmo, 
incluindo o número de passagens, comparações e trocas.
*/

let pass, comps, trocas;

function bubbleSort(vetor) {
    pass = 0, comps = 0, trocas = 0;
    let swap;
    do {
        pass++;
        swap = false;
        for (let i = 0; i < vetor.length - 1; i++) {
            comps++;
            if (vetor[i] > vetor[i + 1]) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
                swap = true;
                trocas++;
            }
        }
    } while (swap);
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

// melhor caso
// let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

// pior caso
// let nums = [99, 88, 77, 66, 55, 44, 33, 22, 11, 0]

bubbleSort(nums);
console.log(nums);
console.log({ pass, comps, trocas });
