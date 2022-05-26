let array = ['valor1','valor2','valor3','valor4','valor5'];
let object = {
    propriedade1:'valor1',propriedade2:'valor2',propriedade3:'valor3'
}
for(let indice = 0;indice<array.length;indice++){
    console.log(indice)
}
//For In
for(let i in array){
    console.log(i)

}

for(i in object){
    console.log (i);
}