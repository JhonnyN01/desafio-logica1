// DESAFIO LANÇADO PELO FELIPE - DIO
// desafio classificador de heroi
/*crie uma variavel para armazenar o nome e a quantidade de experiencia (xp) de um heroi, depois utilize uma estrtura de decisao para apresentar alguma das mensagens abaixo:*/

let pokemon = 8
let experiencia1 = " menor que 1.000"
let experiencia2 = " de 1.001 ha 2.000"
let experiencia3 = " de 2.001 ha 5.000"
let experiencia4 = " de 5.001 ha 6.000"
let experiencia5 = " de 6.001 ha 7.000"
let experiencia6 = " de 8.001 ha 10.000"
let experiencia7 = " de maior ou igual ha 10.001"

switch (pokemon){

    case 1:
        console.log("O Bulbassauro tem a experiencia" + experiencia1, "e esta no nivel Ferro.")
        break

    case 2:
        console.log("O Ivysaur tem a experiencia" + experiencia2, "e esta no nivel Bronze.")
        break

    case 3:
        console.log("O Charmander tem a experiencia" + experiencia3, "e esta no nivel Prata.")
        break

    case 4:
        console.log("O Squirtle tem experiencia" + experiencia4, "e esta no nivel Ouro.")
        break
    
    case 5:
        console.log("O Pikachu tem experiencia" + experiencia5, "e esta no nivel Platina Diamante.")
        break

    case 6:
        console.log("O Clefairy tem a experiencia" + experiencia6, "e esta no nivel Imortal.")
        break

    case 7:
        console.log("Jigglypuff tem a experiencia" + experiencia7, "e esta no nivel Radiante.")

    default:
        console.log("Pokemon nao classificado.")

}