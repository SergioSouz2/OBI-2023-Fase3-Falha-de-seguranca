let n = prompt('informe numero de usuarios')  // Recebendo a quantidade de usuarios 
let users = []  // aqui eu estou criando um array onde vai ser armazendos as senhas de usuarios

let count_pairs = 0 // variavel contador onde vou guarda quem passa no teste. 

for( let i=0; i <n; i++ ){     // FOR e um laço de repeticao onde posso receber n vezes  
  users.push(prompt('informe a senha')) // aqui em cada circulo do meu for recebe um dado e guardo no meu array users 
}

users.map((item, Uid)=>{ // aqui estou pecorrendo array users pegando cada item e sua possicao 
  users.map((value, index) =>{ // percorro novamente o array users pegando cada item e sua possicao
    if(Uid != index && item.includes(value)){ // aqui eu verifico se o valor de um item contem nos outros itens e e verifico tambem suas posicoes 
      
      // se essa condicoes forem aceitas ele esta afirmando q contem 
      count_pairs += 1 // e pra cada vez q contem eu estou add 1 em minha variavel contador 
      
    }
  })

})

console.log(count_pairs); // e aqui mostro meu resultado de quantos atenderam minhas condicoes  ( minha saida ) no terminal 