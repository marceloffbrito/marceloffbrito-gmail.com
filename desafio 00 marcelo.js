//1
var myvar
//2
myvar = 10
//3
var soma = 15+8
console.log(soma)
//4
soma +=1
console.log(soma)
//5
soma *=3
console.log(soma)
//6
72
//7
var souninja=true
//8
var comida =['arroz', 'feijão', 'ovo']
//9
console.log(comida[1])
//10
soma === myvar
 //false
//11
myvar <= soma
    
//12
var nome ="marcelo"
var idade = "22"
var cpf ="878.698.426-87 "
console.log('NOME:'+nome ,'IDADE: '+ idade ,'CPF: '+ cpf  )
//13
var n1 = 20
var n2 = 10
console.log(n1+n2)
console.log(n1-n2)
console.log(n1*n2)
console.log(n1/n2)
//14
function soma (n1, n2){
    return n1+n2
}
//15
var num =soma(10,10)+5
console.log(num)
//16
25
//17
var newvar;
//18
var newvar
function adicionar(){
    newvar =50
    return ("Novo valor é:" + newvar)
}
//19
adicionar()
//20

/*"novo valor é:50"*/

//21
function novaFuncao(n1, n2, n3){
    
    if(n1===undefined || n2===undefined || n3===undefined ){
        return'digite os numeros!'
    }else{
        return ((n1*n2*n3)+2)
    }
}
//22
novaFuncao(2,5)
   
//23 
    // digite os números!

//24
novaFuncao(2,5,10)
    
//25

    //102

 //26
 function argumentos(n1, n2, n3){
   
    if(n1,n2,n3){
		return (n1+n2)/n3;
	}else if(n1,n2){
		return (n1+n2);
	}else if(n1){
		return n1;
	}else{
        return false;
    }
    }

//27
argumentos(); 
//false
argumentos(2); 
//2
argumentos(3, 5);
 //8
argumentos(4, 4, 2);
 //4


    