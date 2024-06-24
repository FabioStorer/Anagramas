let input = '';

console.log('Digite uma palavra que irei listar todos os Anagramas existentes da mesma.');

process.stdin.on('data', function (data) {
    input = data.toString().trim();

    if (input == 'Sair' || input == 'sair') {
        process.exit();
    }

    console.log(input)
    
    for (let i = 1; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            input = input.split('');
            let aux = input[i];
            input[i] = input[j];
            input[j] = aux;
        }
        console.log(input);
    }
})