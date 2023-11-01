/*A função buscaBinaria é uma implementação da busca binária que permite encontrar um valor em um vetor de objetos. Ela recebe o vetor e uma função de comparação fnComp como parâmetros.

O código define duas variáveis, ini (índice inicial) e fim (índice final), que representam os limites da busca inicialmente.

O loop while continua enquanto o índice final fim não for menor que o índice inicial ini.

O índice do meio do intervalo é calculado com let meio = Math.floor((ini + fim) / 2).

A função de comparação fnComp é chamada com o valor no meio do intervalo (valorMeio) e deve retornar um dos três valores:

0 se o valor foi encontrado.
1 se o valor deve ser buscado na metade direita do intervalo.
Qualquer outro valor para buscar na metade esquerda do intervalo.
Se a função de comparação retornar 0, a função retorna o índice onde o valor foi encontrado.

Se a função de comparação retornar 1, a variável ini é atualizada para buscar na metade direita do intervalo.

Caso contrário, a variável fim é atualizada para buscar na metade esquerda do intervalo.

Se o valor não for encontrado após o loop, a função retorna -1.

O código importa o módulo objNomes do arquivo vetor-obj-nomes.mjs, que contém um vetor de objetos com nomes.

Em seguida, o código chama a função buscaBinaria para encontrar o objeto com first_name igual a 'ALEXANDRE' no vetor de objetos. O resultado é impresso no console. A função de comparação é definida como uma função de seta inline.




*/

// Função de busca binária que procura um valor em um vetor de objetos usando uma função de comparação (fnComp)
function buscaBinaria(vetor, fnComp) {
    let ini = 0;             // Inicializa o índice inicial como 0
    let fim = vetor.length - 1;  // Inicializa o índice final como o último elemento do vetor

    while (fim >= ini) {      // Executa o loop enquanto o índice final não for menor que o inicial
        let meio = Math.floor((ini + fim) / 2);  // Calcula o índice do meio do intervalo

        switch (fnComp(vetor[meio])) { // Avalia a função de comparação para o valor no meio
            case 0:
                return meio;  // Se a função retorna 0, o valor foi encontrado e seu índice é retornado
            case 1:
                ini = meio + 1;  // Se a função retorna 1, atualiza o índice inicial para buscar na metade direita
                break;
            default:
                fim = meio - 1;  // Se a função não retorna 0 nem 1, atualiza o índice final para buscar na metade esquerda
        }
    }
    return -1;  // Retorna -1 se o valor não for encontrado no vetor
}

// Importa o módulo 'objNomes' do arquivo 'vetor-obj-nomes.mjs'
import { objNomes } from './data/vetor-obj-nomes.mjs';

// Chama a função de busca binária para encontrar o objeto com 'first_name' igual a 'ALEXANDRE'
console.log('Posição de first_name === ALEXANDRE', buscaBinaria(objNomes, (valorMeio, valorBusca = 'ALEXANDRE') => {
    if (valorBusca === valorMeio.first_name) return 0;
    else if (valorBusca > valorMeio.first_name) return 1;
    else return -1;
}));
