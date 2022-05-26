let array = ['valor1','valor2','valor3','valor4','valor5'];
let object = {
    propriedade1:'valor1',propriedade2:'valor2',propriedade3:'valor3'
}


// For Of
for (i of array){
    console.log (i)
}

//For of com objetos não funciona:
for(i of object.propriedade1){
    console.log (i)
}