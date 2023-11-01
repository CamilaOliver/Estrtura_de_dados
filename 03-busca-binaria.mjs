/*
A função buscaBinaria é uma implementação da busca binária, que é eficiente para encontrar valores em um vetor ordenado. Ela recebe um vetor e um valor de busca como parâmetros.

O código cria duas variáveis, ini (índice inicial) e fim (índice final), que representam os limites da busca inicialmente.

O loop while continua enquanto o índice final fim não for menor que o índice inicial ini.

O índice do meio do intervalo é calculado com let meio = Math.floor((ini + fim) / 2).

A função verifica se o valor de busca é igual ao valor no meio do intervalo. Se for, ela retorna o índice onde o valor foi encontrado.

Se o valor de busca for maior que o valor no meio, a variável ini é atualizada para buscar na metade direita do intervalo. Caso contrário, a variável fim é atualizada para buscar na metade esquerda.

Se o valor não for encontrado após o loop, a função retorna -1.

O código define um vetor nums e faz três chamadas para buscaBinaria para encontrar a posição dos números 33, 77 e 81 no vetor.

Em seguida, o código importa o módulo nomes do arquivo vetor-nomes.mjs e realiza uma busca binária para encontrar a posição do nome "ALEXANDRE" no vetor de nomes ordenados. O resultado é impresso no console.

*/

// Função de busca binária que procura um valor em um vetor ordenado
function buscaBinaria(vetor, valorBusca) {
    let ini = 0;             // Inicializa o índice inicial como 0
    let fim = vetor.length - 1;  // Inicializa o índice final como o último elemento do vetor
  
    while (fim >= ini) {      // Executa o loop enquanto o índice final não for menor que o inicial
      let meio = Math.floor((ini + fim) / 2);  // Calcula o índice do meio do intervalo
  
      if (valorBusca === vetor[meio]) {  // Se o valor buscado for igual ao valor no meio
        return meio;  // Retorna o índice onde o valor foi encontrado
      } else if (valorBusca > vetor[meio]) {  // Se o valor buscado for maior que o valor no meio
        ini = meio + 1;  // Atualiza o índice inicial para buscar na metade direita
      } else {  // Se o valor buscado for menor que o valor no meio
        fim = meio - 1;  // Atualiza o índice final para buscar na metade esquerda
      }
    }
    return -1;  // Retorna -1 se o valor não for encontrado no vetor
  }
  
  let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
  
  console.log("Posição do número 33: ", buscaBinaria(nums, 33));  // Busca o número 33 no vetor
  console.log("Posição do número 77: ", buscaBinaria(nums, 77));  // Busca o número 77 no vetor
  console.log("Posição do número 81: ", buscaBinaria(nums, 81));  // Busca o número 81 no vetor
  
  // Importa o módulo 'nomes' do arquivo 'vetor-nomes.mjs'
  import { nomes } from './data/vetor-nomes.mjs';
  
  // Busca o nome 'ALEXANDRE' no vetor 'nomes' usando busca binária
  console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, "ALEXANDRE")}`);
  