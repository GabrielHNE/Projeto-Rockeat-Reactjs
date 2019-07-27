function dataFromObj(endereco){
    return (
        "O usuário mora em " + 
        endereco.cidade + "/" +
        endereco.uf + ", no bairro " +
        endereco.bairro + ", na rua \"" + 
        endereco.rua +"\" com nº " + 
        endereco.numero
        );
}
var x;

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

x =1;
console.log(dataFromObj(endereco));