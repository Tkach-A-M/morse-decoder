const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const SPACE_CODE = '**********';
    const DZERO = /00/g;
    const TEN = /10/g;
    const ELEVEN = /11/g;

    //из строки в код из 0, 1 и *
    // const MORZE_KEYS = Object.keys(MORSE_TABLE);
    // const MORZE_VALUES = Object.values(MORSE_TABLE);
    // const DOT = /[.]/g;
    // const DASH = /-/g;
    // let arrExpr = expr.split("");
    // let result = '';
    // let r = [];
    // // arrExpr.forEach(element => element == ' ' ? r.push(SPACE_CODE) : r.push(MORZE_KEYS[MORZE_VALUES.indexOf(element)].replace(DASH, 11).replace(DOT, 10)));
    // for(let i = 0; i < arrExpr.length; i++){
    //     if(arrExpr[i] == ' '){
    //         r[i] = SPACE_CODE;
    //     }
    //     else{
    //         r[i] = MORZE_KEYS[MORZE_VALUES.indexOf(arrExpr[i])].replace(DASH, 11).replace(DOT, 10);
    //     }
    // }
    // for(let i = 0; i < r.length; i++){
    //     result += ('00000000'+r[i]).slice(-10);
    // } 
    // console.log(result);

    let r = [];
    let result = [];


    while(expr.length){
        r.unshift(expr.slice(-10));
        expr = expr.slice(0, expr.length - 10);
    }

    r.forEach(element => result.unshift(element.replace(DZERO, '').replace(TEN, '.').replace(ELEVEN, '-')));
    r.length = 0;

    result.forEach(element => r.unshift(element == SPACE_CODE ? ' ' : MORSE_TABLE[element]));
    
    result.length = 0;
    result = r.join('');

    console.log(r);
    console.log(result);

    return result;
}

module.exports = {
    decode
}