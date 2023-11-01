/*
O comentário no início do código descreve o que é o fatorial de um número natural, que é o produto desse número e 
todos os seus antecessores.

A função fatorial(n) recebe um argumento n, que é o número para o qual queremos calcular o fatorial.

let res = 1; - Inicializa a variável res com o valor 1, porque o fatorial de 0 e 1 é igual a 1.

O loop for é usado para calcular o fatorial. Ele começa com o valor de i igual a n e decrementa i em cada iteração até 
que i seja maior que 1.

res *= i; - Multiplica o resultado res pelo valor atual de i em cada iteração. Isso acumula o produto de todos os 
antecessores de n.

Após o loop, a função retorna o valor calculado em res, que é o fatorial de n.

console.log('Fatorial de 8:', fatorial(8)); - Calcula o fatorial de 8 usando a função fatorial e imprime o resultado no console. 
O resultado é o fatorial de 8, que é 40320.
*/

/* 
    Fatorial de um número natural é igual a ele
    próprio multiplicado por todos os seus antecessores
*/

function fatorial(n) {
    let res = 1; // Inicializa o resultado como 1, pois 0! e 1! são iguais a 1.
    for (let i = n; i > 1; i--) {
        res *= i; // Multiplica o resultado pelo valor atual de i em cada iteração.
    }
    return res; // Retorna o resultado do fatorial.
}

console.log('Fatorial de 8:', fatorial(8)); // Calcula e imprime o fatorial de 8.
