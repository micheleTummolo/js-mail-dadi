let player_num;
let computer_num; 
let max_num;
let button;

function getRandomInt(max) {
    return Math.floor (Math.random() * max);
}

button = document.getElementById ('start');

button.addEventListener ('click', function(){

    player_num = getRandomInt (6) + 1;
    computer_num = getRandomInt (6) + 1;
    
    console.log ("Numero player: " + player_num);
    console.log ("Numero computer: " + computer_num);
    
    document.getElementById ('player_number').innerHTML = player_num;
    document.getElementById ('computer_number').innerHTML = computer_num;
    
    console.log ("Numero maggiore: " + Math.max(player_num, computer_num));
    
    
    max_num = Math.max(player_num, computer_num);
    
    if (player_num == computer_num) {
        document.getElementById ('output').innerHTML = "Pareggio"; 
        console.log ("Pareggio")
    }
    else if (max_num == player_num) {
        document.getElementById ('output').innerHTML = "Hai vinto!!"; 
        console.log ("Hai vinto!!");
    }
    else {
        document.getElementById ('output').innerHTML = "Hai perso!!"; 
        console.log ("Hai perso!!");
    }
});
