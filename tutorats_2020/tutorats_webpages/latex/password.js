let password = 148302;

function modify_password(password){
    password = password*12;
    let i = 42
    password = password/(42/2)
    return password
}

function check_password() {
    let pass = modify_password(password)
    if (prompt("Entrez le mot de passe : ") == pass){
        window.open("https://google.com");
    } else {
        alert("Erreur : mauvais mot de passe !");
    }
}

