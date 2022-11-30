const mail = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com",]

let user_mail;
let access = false;
const button = document.getElementById ('get_value');
const reset = document.getElementById ('reset')

button.addEventListener ('click', function(){

    user_mail = document.getElementById('mail_user').value;
    console.log("Mail utente: " + user_mail);

    for (let i=0; i < mail.length; i++){
        console.log(mail[i])
        if (mail[i] == user_mail){
            access = true;
        }
    }
    
    console.log("Esito controllo accesso: " + access)
    
    if (access) {
        document.getElementById ('output').innerHTML = "Benvenuto!";
    }
    else {
        document.getElementById ('output').innerHTML = "Inserire una mail valida!";
    }

    
})

reset.addEventListener ('click', function(){
    document.getElementById("form_mail").reset();
    document.getElementById ('output').innerHTML = "";
    access = false;
})