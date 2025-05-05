/* EXEMPLO 1 */ 
 
function mensagem () {
    console.log("Seja bem-vindo(a)!")
    console.log("É um prazer tê-lo aqui.")
    console.log("Aproveite")
}



/* EXEMPLO 2 - Funções com parâmetros */

function somarNumeros(valor1, valor2){
    let soma = valor1 + valor2
    console.log(soma)
}

somarNumeros(15,27)



/* EXEMPLO 3 - Função com parâmetros */

function boasVindas(nome, cargo){
    console.log(`Seja bem-vindo(a) ${cargo} ${nome}!`)
}
boasVindas("Marcio", "professor")


/* EXEMPLO 4 - Função com return */

function somar(valor1, valor2){
    return valor1 + valor2
}

let resultado = somar(29,32)

console.log(somar(12,12))
console.log(resultado)


/* EXEMPLO 5 - Função condicional sem else */

function parImpar(valor){
    if(valor % 2 === 0){
        return "par"
    }
    
    return "ímpar"
    
}
    let verificacao = parImpar(13)
    console.log(verificacao)