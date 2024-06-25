let input = '';
let contador = 0;
let anagrama = [];

console.log('Digite uma palavra que irei listar todos os Anagramas existentes da mesma.');
console.log('Para finalizar, digite "Sair" ou "sair" duas vezes.');

process.stdin.on('data', function (data) {
    input = data.toString().trim();

    if (input == 'Sair' || input == 'sair') {
        contador = contador + 1;
    }

    if (contador == 2) {
        process.exit();
    }

    input = input.split('');
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            let aux = input[i];
            input[i] = input[j];
            input[j] = aux;
            
            if (!anagrama.includes(input.join(''))) {
                anagrama.push(input.join(''));
                console.log(input.join(''));
            }
        }
    }
})