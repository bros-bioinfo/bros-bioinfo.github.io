let password = 148302;

function modify_password(password){
    password = password*12;
    let i = 42
    password = password/(42/2)
    return password
}

function check_password() {
    let pass = modify_password(password);
    if (prompt("Entrez le mot de passe : ") == pass){
        window.open("https://bros-bioinfo.github.io/tutorats_2020/tutorats_webpages/latex/rapport/get_rapport.html");
    } else {
        alert("Erreur : mauvais mot de passe !");
    }
}

