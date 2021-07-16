// let oneToFifteen = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze']

let oneToNineteen = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']

let sixToNine = ['seis', 'sete', 'oito', 'nove']

let tenToNineteen = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']

let tenName = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta",
"sessenta", "setenta", "oitenta", "noventa"]

let hundredName = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

let hundredName2 = ['', 'cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']


let divText = document.querySelector('.wordsDiv')


const numbersToWords = () => {
    let words = ''
    for (let i = 1; i <= 19; i++) {
        words += oneToNineteen[i] + ', '
        
    }
    
    for (let i = 2; i <= 9; i++){
        for (let j = 0; j < 10; j++){
            if (j === 0){
                words += tenName[i] + ', '
            } else {
            words += tenName[i] + ' e ' + oneToNineteen[j] + ', '
            }
        }
    }
    
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++){
            for (let k = 0; k <= 9; k++){
                if (j === 0){
                    if (k === 0) {
                        words += hundredName2[i] + ', '
                    } else {
                        words += hundredName[i] + ' e ' + oneToNineteen[k] + ', '
                    }
                }
                if (j === 1){
                    words += hundredName[i] + ' e ' + tenToNineteen[k] + ', '
                    
                }
                if (j > 1) {
                    if (k === 0){
                        words += hundredName[i] + ' e ' + tenName[j] + ', '
                    } else {
                        words += hundredName[i] + ' e ' + tenName[j] + ' e ' + oneToNineteen[k] + ', '
                    }
                }
            }
        }
    }
    words += 'mil'
    return words
}

divText.innerHTML = numbersToWords()