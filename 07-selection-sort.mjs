/*
let pass, comps, trocas; - Declaração de variáveis globais para rastrear o número de passagens (pass), comparações (comps)
 e trocas (trocas) durante a ordenação.

function selectionSort(vetor) { - Declaração da função selectionSort, que aceita um vetor como argumento e ordena o vetor
     usando o algoritmo Selection Sort.

pass = 0, comps = 0, trocas = 0; - Inicializa as variáveis pass, comps e trocas como zero para contagem.

O algoritmo Selection Sort é implementado em um loop aninhado que percorre o vetor para encontrar o menor elemento e,
 em seguida, o coloca na posição apropriada.

for (let posSel = 0; posSel < vetor.length - 1; posSel++) { - O loop externo percorre o vetor e rastreia a 
    posição do elemento a ser selecionado.

pass++; - Incrementa a variável pass para rastrear o número de passagens.

let posMenor = posSel + 1; - Inicializa a posição do menor elemento como a próxima posição após o elemento atual.

O loop interno percorre o restante do vetor a partir da posição posMenor para encontrar o índice do menor elemento.

for (let i = posMenor + 1; i < vetor.length; i++) { - O loop interno percorre o vetor a partir de posMenor + 1.

if (vetor[posMenor] > vetor[i]) { - Verifica se o elemento na posição posMenor é maior do que o elemento em i. Se for verdade, 
    atualiza posMenor para i e incrementa comps.

if (vetor[posSel] > vetor[posMenor]) { - Verifica se o elemento na posição posSel é maior do que o elemento no índice posMenor.

Se a condição for verdadeira, realiza a troca dos elementos nas posições posSel e posMenor usando uma desestruturação, 
e incrementa trocas.

Fora dos loops, o vetor estará ordenado.

O código importa o módulo 'nomes' do arquivo 'nomes-desord.mjs', que contém um vetor de nomes a ser ordenado.

console.time('...'); - Inicia a medição de tempo para acompanhar o tempo de execução da ordenação.

selectionSort(nomes); - Chama a função selectionSort para ordenar o vetor de nomes.

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024; - Calcula o uso de memória em megabytes durante a ordenação.

console.timeEnd("..."); - Encerra a medição de tempo e imprime o tempo decorrido.

console.log(nomes); - Imprime o vetor de nomes ordenado.

console.log({ pass, comps, trocas, memoriaMB }); - Imprime informações sobre o desempenho da ordenação, 
incluindo o número de passagens, comparações,
 trocas e uso de memória em megabytes.
*/

let pass, comps, trocas;

function selectionSort(vetor) {
    pass = 0, comps = 0, trocas = 0;
    for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
        pass++;
        let posMenor = posSel + 1;
        for (let i = posMenor + 1; i < vetor.length; i++) {
            if (vetor[posMenor] > vetor[i]) {
                posMenor = i;
                comps++;
            }
        }
        if (vetor[posSel] > vetor[posMenor]) {
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]];
            trocas++;
        }
    }
}

// Importa o módulo 'nomes' do arquivo 'nomes-desord.mjs'
import { nomes } from './data/nomes-desord.mjs';

console.time('...');
selectionSort(nomes);  // Chama a função de ordenação para ordenar o vetor 'nomes'
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024;
console.timeEnd("...");

console.log(nomes);  // Imprime o vetor de nomes ordenado
console.log({ pass, comps, trocas, memoriaMB });  // Imprime informações sobre a ordenação
