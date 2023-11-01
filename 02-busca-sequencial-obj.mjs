/*O código começa importando o módulo objNomes do arquivo vetor-obj-nomes.mjs. Este módulo contém um vetor de objetos.

A função buscaSequencial é definida para realizar uma busca sequencial em um vetor usando uma função de comparação. A função aceita dois parâmetros: o vetor a ser pesquisado e a função fnComp que será usada para determinar se um elemento do vetor atende aos critérios de busca.

A função de comparação comparaNome verifica se o atributo first_name de um objeto é igual a 'ALEXANDRE'. Isso será usado para encontrar a posição de 'ALEXANDRE' no vetor.

A função de comparação comparaFrequencia verifica se o atributo frequency_group de um objeto é igual a 1144. Isso será usado para encontrar a posição da frequência 1144 no vetor.

O código chama a função buscaSequencial três vezes:

A primeira chamada busca 'ALEXANDRE' no vetor objNomes usando a função comparaNome.
A segunda chamada busca a frequência 1144 no vetor objNomes usando a função comparaFrequencia. O tempo entre console.time() e console.timeEnd() é medido para esta busca.
A terceira chamada busca 'GERCINA' no vetor objNomes usando uma função de comparação inline.
O resultado de cada busca é impresso no console, incluindo a posição onde o item foi encontrado ou -1 se não foi encontrado.


*/
// Importação do módulo 'objNomes' do arquivo 'vetor-obj-nomes.mjs'
import { objNomes } from './data/vetor-obj-nomes.mjs'

// Função buscaSequencial que aceita um vetor e uma função de comparação (fnComp)
function buscaSequencial(vetor, fnComp) {
    for (let i = 0; i < vetor.length; i++) {
        // Verifica se a função de comparação (fnComp) retorna true para o elemento atual
        if (fnComp(vetor[i])) {
            return i; // Retorna o índice onde a função de comparação retorna true
        }
    }
    return -1; // Retorna -1 se nenhum elemento satisfizer a função de comparação
}

// Função de comparação que verifica se o nome "first_name" é igual a 'ALEXANDRE'
function comparaNome(obj) {
    return obj.first_name === 'ALEXANDRE';
}

// Função de comparação que verifica se a frequência "frequency_group" é igual a 1144
function comparaFrequencia(obj) {
    return obj.frequency_group === 1144;
}

// Busca o nome 'ALEXANDRE' no vetor 'objNomes' usando a função de comparação 'comparaNome'
console.log('Posição de ALEXANDRE: ', buscaSequencial(objNomes, comparaNome));

// Inicia a medição de tempo
console.time();

// Busca a frequência 1144 no vetor 'objNomes' usando a função de comparação 'comparaFrequencia'
console.log('Posição da Frequência 1144: ', buscaSequencial(objNomes, comparaFrequencia));

// Encerra a medição de tempo e exibe o tempo decorrido
console.timeEnd();

// Busca o nome 'GERCINA' no vetor 'objNomes' usando uma função de comparação inline
console.log('Posição de GERCINA: ', buscaSequencial(objNomes, obj => obj.first_name === 'GERCINA'));


