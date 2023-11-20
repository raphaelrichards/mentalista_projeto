var resposta = prompt('Quer jogar?(s/n) ')
if (resposta == 's'){
  var numeroSecreto = parseInt(Math.random() * 10 + 1)
  var tentativas = 0
  while(chute != numeroSecreto){
    var chute = prompt('Chute um número entre 1 e 10')
    tentativas = tentativas + 1
    if (chute == numeroSecreto){
      alert('Você acertou!')
    }
    else if (chute < numeroSecreto){
      alert('É um número maior do que esse')
    }
    else if (chute > numeroSecreto){
      alert('É um número menor do que esse')
    }
  }
  alert('Você acertou em ' + tentativas + ' tentativas')
}
else{
  alert('Volte sempre')
}
