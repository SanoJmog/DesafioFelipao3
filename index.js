// Minha primeira idéia foi já usar o desafio 2 como base para saber como começar 
// e tirar idéias e utilizando os vídeos da ultima aula.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class heros {
    constructor(characterName, playerAge, playerVocation){
        this.characterName = characterName
        this.playerAge = playerAge
        this.playerVocation = playerVocation
    }
    toString(){

        console.log(`Olá ${this.characterName}, você tem ${this.playerAge} anos, e é um grande ${this.playerVocation.toLowerCase()}!`)   
    }

    attack(){
                if(this.playerVocation.toLowerCase() === "knight") {
            console.log(`O ${this.playerVocation.toLowerCase()} atacou usando a espada!`)
                }
            else if(this.playerVocation.toLowerCase() === "mago") {
                console.log(`O ${this.playerVocation.toLowerCase()} atacou usando magia!`)
            }
            else if(this.playerVocation.toLowerCase() === "monge") {
                console.log(`O ${this.playerVocation.toLowerCase()} atacou usando artes marciais!`)
            }
            else if(this.playerVocation.toLowerCase() ==="ninja") {
                console.log(`O ${this.playerVocation.toLowerCase()} atacou usando shurikens!`)
            }
            else {
                console.log(`O ${this.playerVocation.toLowerCase()} atacou com tapa, já que não possui classe.`)
            }
        }

}

console.log("Olá aventureiro, por favor se identifique-se :");

rl.question("characterName: ", (characterNameInput) => {
    rl.question("playerAge: ", (playerAgeInput) => {
        rl.question("playerVocation: ", (playerVocationInput) => {

            const characterName = characterNameInput.toLowerCase();
            const playerAge = Number(playerAgeInput);
                if (Number.isNaN(playerAge)) {
                    console.log("Idade inválida. Informe apenas números.");
                    rl.close();
                    return;
                }
            const playerVocation = (playerVocationInput);

            const hero = new heros(characterName, playerAge, playerVocation);

            hero.toString();
            hero.attack();

            rl.close();
        });
    });
});




//let hero = new heros ("Jean", "18", "biruleibe")
//hero.toString()
//hero.attack()
//console.log(hero)
