// Importação do módulo 'nomes' do arquivo 'vetor-nomes.mjs'
import { nomes } from './data/vetor-nomes.mjs'

// Inicia a medição de tempo para a busca de "ALEXANDRE"
console.time("Buscando ALEXANDRE...")

// Chama a função buscaSequencial para procurar "ALEXANDRE" no vetor 'nomes'
console.log("Posição de ALEXANDRE: ", buscaSequencial(nomes, "ALEXANDRE"))

// Encerra a medição de tempo e exibe a duração da busca
console.timeEnd("Buscando ALEXANDRE...")

// Função que realiza a busca sequencial em um vetor
function buscaSequencial(vetor, valorBusca) {
    for (let i = 0; i < vetor.length; i++) {
        // Verifica se o elemento atual é igual ao valor de busca
        if (vetor[i] === valorBusca) {
            return i; // Retorna o índice onde o valor foi encontrado
        }
    }
    return -1; // Retorna -1 se o valor não for encontrado no vetor
}
