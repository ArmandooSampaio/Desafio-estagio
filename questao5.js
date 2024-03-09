function reverserString (string){
    let stringArray = string.split('');
    let stringReversed = '';

    for(let i = (stringArray.length - 1); i >=0; i--){
        stringReversed += stringArray[i];
    }

    return stringReversed;
}

console.log(reverserString('Armando'));
console.log(reverserString('String'));
console.log(reverserString('Erro'));
console.log(reverserString('tentativas e tentativas'));