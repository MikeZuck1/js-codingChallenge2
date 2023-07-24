// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

console.log("2. CONVERT ALIENS");
// Cette fonction greetAliens() prend un tableau de chaine
const greetAliens = strArr => {
    // utilise la boucle for() qui imprime un message d'accueil avec chaque chaine de tableau
    for(let i = 0; i < strArr.length; i++) {
      let alienName = strArr[i]; 
       
      console.log(
        `Oh powerful ${alienName}, we humans offer our unconditional surrender!`
        ); 
    }
}; 
// tableau contenant les chaines 
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]

console.log(greetAliens(aliens));
// doit imprimer : 
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!