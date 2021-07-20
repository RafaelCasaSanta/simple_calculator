var a = '';
var b = '';
var num = [];
var ans;


//* Todos os inputs de numeros e operadores serão guardados em um array "num" utilizando a função sendNum()
function sendNum(digit) {

    num.push(digit);

    if (num.length != 1) {
        a = '';
        document.getElementById('screen').innerHTML = a; //Limpando a tela
    }


    for (i = 0; i < num.length; i++) {
        a = a + num[i];      // Concatena os elementos do array "num" dentro de uma unica string, na qual sera mostrada na tela.
    }
    document.getElementById('screen').innerHTML = a;   //exibindo a string concatenada
}

//*Quando o usuario pressionar "=", a função "equalTo()" sera chamada
function equalTo() {
    document.getElementById('screen').innerHTML = '';

    for (i = 0; i < num.length; i++) {

        b += num[i]; //Concatenando o array num em uma unica string 
    }
    ans = eval(b);

    document.getElementById('screen').innerHTML = ans; //Mostra do resultado

    while (num.length > 0) {
        num.pop();  //lIMPAR O ARRAY NUM
    }

    num.push(ans.toString());
}

//*Quando o usuario pressionar "AC", a função "clearScr()" é chamada

function clearScr() {
    document.getElementById('screen').innerHTML = '';

    while (num.length > 0) {
        num.pop();  //Limpando o array num
    }

    a = '';
    b = '';

}