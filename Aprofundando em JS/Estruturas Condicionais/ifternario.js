var jogador1 = 1;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log ('Os jogadores são válidos'):console.log ('Jogadores são inválidos');

if (jogador1 > 0 && jogador2 == 0){
    console.log ('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2;
}
if(jogador1>0){
    console.log('Jogador 1 marcou ponto!')
}else if (jogador2>0){
    console.log ('Jogador 2 marcou ponto!')
    jogador2>jogador1
}else{
    console.log ('Ninguem marcou ponto.')
}