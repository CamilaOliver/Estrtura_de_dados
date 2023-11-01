/*
A função quickSort é a implementação do algoritmo Quick Sort para ordenação de vetores. 
Ela aceita três argumentos: vetor (o vetor a ser ordenado), ini (o índice de início da partição a ser ordenada),
 e fim (o índice de término da partição a ser ordenada).

A primeira condição if (fim <= ini) é a condição de parada da recursão. Se fim for menor ou igual a ini, 
a partição tem 1 elemento ou nenhum, o que significa que já está ordenada, e a função retorna sem fazer alterações.

O pivô é escolhido como o elemento na posição fim (o último elemento da partição a ser ordenada).

A variável div é inicializada com ini - 1. Ela será usada para rastrear a posição onde os elementos menores que o 
pivô devem ser colocados.

O loop for itera sobre os elementos da partição, excluindo o pivô, e verifica se cada elemento é menor que o pivô.

Se um elemento for menor que o pivô, incrementa div e troca o elemento com o elemento em div, o que efetivamente move 
os elementos menores para a esquerda do vetor.

Após o loop, incrementa div novamente e coloca o pivô na posição div. Isso garante que o pivô esteja na posição correta 
no vetor ordenado.

O algoritmo Quick Sort divide o vetor em duas partições e chama a função recursivamente para ordenar cada uma delas. 
A primeira chamada recursiva ordena a partição à esquerda do pivô (elementos menores), e a segunda chamada recursiva ordena a partição à direita do pivô (elementos maiores).

Finalmente, o código cria um vetor nums desordenado e chama o quickSort para ordená-lo. Em seguida, imprime o vetor 
nums ordenado no console.
*/
function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
    if (fim <= ini) return;

    const pivot = fim; // O pivô é escolhido como o último elemento do vetor.

    let div = ini - 1;

    for (let i = ini; i < fim; i++) {
        if (vetor[pivot] > vetor[i]) {
            div++;
            if (div !== i) {
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]; // Troca os elementos se necessário.
            }
        }
    }
    div++;

    if (vetor[div] > vetor[pivot] && div !== pivot) {
        [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]]; // Coloca o pivô na posição correta.
    }

    // Chamadas recursivas para ordenar as partições à esquerda e à direita do pivô.
    quickSort(vetor, ini, div - 1);
    quickSort(vetor, div + 1, fim);
}

let nums = [2, 5, 7, 1, 6, 3, 4];

quickSort(nums); // Chama o quickSort para ordenar o vetor 'nums'.

console.log(nums); // Imprime o vetor 'nums' ordenado.
