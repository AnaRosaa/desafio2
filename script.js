let age= 19;
if(age>=18){
    console.log('maior que 18')
}else{"não é maior"}


let newAge= 18;
let humano=true
if((newAge=18) && (humano=true)){
    console.log('liberado')
}else{
    console.log('nao ta liberado')
}


let niver= 'janeiro';
if((niver === 'janeiro') || (niver === 'dezembro')){
    console.log('Parabéns!')
} else{
    console.log('seu aniversário nao está chegando.')
}


let name='R';
if(name === 'R'){
    console.log('Meu nome começa com a letra R')
} else{
    console.log('Meu nome não começa com a letra R')
}

let lastName= 'Santos';
if(lastName.length>=6 || lastName.substring(0,1) == 'E'){
    console.log('Seu sobrenome tem 6 letras e seu nome começa com E')
}else{
    console.log('seu nome nao tem 6 letras e seu nome nao começa com a letra E')
}


