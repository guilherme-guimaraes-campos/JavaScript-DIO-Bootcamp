//Acessando propriedades do objeto:

let objeto = {
    string:'string',number: 1,boolean:true,array: ['array'], objectInterno:{objectInterno: 'objeto interno'}
}

console.log (objeto.boolean)

//Desestruturar Objeto:

var string = objeto.string;
console.log(string)

var arrayInterno = objeto.array
console.log (arrayInterno)

var {string,boolean,objectInterno} = objeto;
console.log (string,boolean,objectInterno);