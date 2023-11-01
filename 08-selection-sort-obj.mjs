/*
let pass, comps, trocas; - Declaração de variáveis globais para rastrear o número de passagens (pass), 
comparações (comps) e trocas (trocas) durante a ordenação.

function selectionSort(vetor, fnComp) { - Declaração da função selectionSort, 
    que aceita um vetor e uma função de comparação fnComp como argumentos, e ordena o vetor usando o algoritmo Selection Sort.

pass = 0, comps = 0, trocas = 0; - Inicializa as variáveis pass, comps e trocas como zero para contagem.

O algoritmo Selection Sort é implementado em um loop aninhado que percorre o vetor para encontrar o menor elemento e, 
em seguida, o coloca na posição apropriada.

for (let posSel = 0; posSel < vetor.length - 1; posSel++) { - O loop externo percorre o vetor e rastreia a posição do elemento 
    a ser selecionado.

pass++; - Incrementa a variável pass para rastrear o número de passagens.

let posMenor = posSel + 1; - Inicializa a posição do menor elemento como a próxima posição após o elemento atual.

O loop interno percorre o restante do vetor a partir da posição posMenor para encontrar o índice do menor elemento.

for (let i = posMenor + 1; i < vetor.length; i++) { - O loop interno percorre o vetor a partir de posMenor + 1.

if (fnComp(vetor[posMenor], vetor[i])) { - Verifica se a função de comparação fnComp retorna verdadeira para a comparação 
    entre vetor[posMenor] e vetor[i]. 
    Se verdadeiro, atualiza posMenor para i e incrementa comps.

if (fnComp(vetor[posSel], vetor[posMenor])) { - Verifica se a função de comparação fnComp retorna verdadeira para a 
    comparação entre vetor[posSel] e vetor[posMenor].

Se a condição for verdadeira, realiza a troca dos elementos nas posições posSel e posMenor usando uma desestruturação e 
incrementa trocas.

Fora dos loops, o vetor estará ordenado.

O código importa o módulo 'objMotoristas' do arquivo 'motoristas-obj-desord.mjs', que contém um vetor de objetos com informações 
de motoristas a serem ordenados.

console.time('...'); - Inicia a medição de tempo para acompanhar o tempo de execução da ordenação.

selectionSort(objMotoristas, (elem1, elem2) => {...}); - Chama a função selectionSort para ordenar o vetor de objetos 
objMotoristas. A função de comparação é definida como uma função de seta inline para determinar a ordenação com base
 na razão social e, em caso de empate, no nome do motorista.

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024; - Calcula o uso de memória em megabytes durante a ordenação.

console.timeEnd("..."); - Encerra a medição de tempo e imprime o tempo decorrido.

console.log(objMotoristas); - Imprime o vetor de motoristas ordenado.

console.log({ pass, comps, trocas, memoriaMB }); - Imprime informações sobre o desempenho da ordenação, 
incluindo o número de passagens, comparações, trocas e uso de memória em megabytes.
*/

let pass, comps, trocas;

function selectionSort(vetor, fnComp) {
    pass = 0, comps = 0, trocas = 0;
    for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
        pass++;
        let posMenor = posSel + 1;
        for (let i = posMenor + 1; i < vetor.length; i++) {
            if (fnComp(vetor[posMenor], vetor[i])) {
                posMenor = i;
                comps++;
            }
        }
        if (fnComp(vetor[posSel], vetor[posMenor])) {
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]];
            trocas++;
        }
    }
}

// Importa o módulo 'objMotoristas' do arquivo 'motoristas-obj-desord.mjs'
import { objMotoristas } from './data/motoristas-obj-desord.mjs';

console.time('...');  // Inicia a medição de tempo

// Chama a função 'selectionSort' para ordenar o vetor de objetos 'objMotoristas'
// A função de comparação é definida como uma função de seta inline
selectionSort(objMotoristas, (elem1, elem2) => {
    if (elem1.razao_social === elem2.razao_social) { // Mesma empresa
        // O desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista;
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social;
});

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024;  // Calcula o uso de memória em megabytes

console.timeEnd("...");  // Encerra a medição de tempo e imprime o tempo decorrido

console.log(objMotoristas);  // Imprime o vetor de motoristas ordenado

console.log({ pass, comps, trocas, memoriaMB });  // Imprime informações sobre o desempenho da ordenação
