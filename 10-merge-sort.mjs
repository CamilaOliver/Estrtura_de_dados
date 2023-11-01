/*
A função mergeSort(vetor) é a implementação do algoritmo Merge Sort para ordenação de vetores.

O código começa verificando se o vetor tem menos de 2 elementos. Se for o caso, o vetor já está ordenado, 
e ele retorna o próprio vetor sem fazer nenhuma alteração.

Em seguida, encontra o índice do meio do vetor usando Math.floor(vetor.length / 2).

Divide o vetor original em dois subvetores: vetEsq e vetDir, 
usando o método slice. vetEsq conterá os elementos da esquerda do vetor original, e vetDir conterá os elementos da direita.

Chama recursivamente mergeSort para ordenar os subvetores vetEsq e vetDir.

Inicializa índices posEsq e posDir para percorrer vetEsq e vetDir, respectivamente. Além disso, 
inicializa um vetor vetRes para armazenar o resultado da combinação dos subvetores.

O loop while combina os elementos dos subvetores ordenados (vetEsq e vetDir) em ordem crescente e adiciona ao vetor vetRes.

Após o loop, verifica se algum dos subvetores ainda possui elementos não incluídos no resultado.
 Caso positivo, os elementos restantes são copiados para sobra.

O vetor resultante é criado concatenando vetRes e sobra.

Finalmente, o código importa um vetor de nomes do arquivo "nomes-desord.mjs",
 chama mergeSort para ordená-lo e imprime o vetor de nomes ordenado no console.
*/
function mergeSort(vetor) {
    // Verifica se o vetor tem menos de 2 elementos, o que significa que já está ordenado.
    if (vetor.length < 2) return vetor;

    // Encontra o índice do meio do vetor.
    let meio = Math.floor(vetor.length / 2);

    // Divide o vetor em dois subvetores: vetEsq e vetDir.
    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    // Chama recursivamente o mergeSort para ordenar os subvetores.
    vetEsq = mergeSort(vetEsq);
    vetDir = mergeSort(vetDir);

    // Inicializa índices para percorrer os subvetores e um vetor resultante.
    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];

    // Combina os subvetores ordenados em um único vetor ordenado.
    while (posEsq < vetEsq.length && posDir < vetDir.length) {
        if (vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq]);
            posEsq++;
        } else {
            vetRes.push(vetDir[posDir]);
            posDir++;
        }
    }

    let sobra;

    // Verifica se algum dos subvetores ainda possui elementos não incluídos.
    if (posEsq < posDir) {
        sobra = vetEsq.slice(posEsq);
    } else {
        sobra = vetDir.slice(posDir);
    }

    // Retorna o vetor resultante, que é a concatenação dos elementos ordenados e os elementos que sobraram.
    return [...vetRes, ...sobra];
}

// Importa o vetor 'nomes' do arquivo 'nomes-desord.mjs'.
import { nomes } from "./data/nomes-desord.mjs";

// Chama o mergeSort para ordenar o vetor de nomes.
let nomesOrd = mergeSort(nomes);

// Imprime o vetor de nomes ordenado.
console.log(nomesOrd);
