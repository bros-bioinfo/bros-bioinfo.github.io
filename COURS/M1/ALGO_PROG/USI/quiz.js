//liste avec:
//question
//réponse juste après
var question = [
  "Quitter un processus",
  "exit",

  "Rechercher un motif dans un fichier",
  "grep",

  "Remplacer un mot",
  "sed",

  "Afficher les utilisateurs UNIX connectés",
  "who",

  "Afficher la date",
  "date",

  "Afficher un calendrier",
  "cal",

  'Afficher "Bonjour" dans la console',
  'echo "Bonjour"',

//man
  'Afficher le manuel',
  "man",

  'Afficher le manuel de la fonction "du" en anglais',
  "man -L en du",

//du
  'Afficher la taille occupée sur le disque par chacun des éléments du dossier courant',
  'du *',

  'Afficher la taille occupée sur le disque par chacun des éléments du dossier courant en omettant les dossiers et en ajoutant un suffixe',
  'du -sh *',

//ls
  'Afficher le contenu du répertoire dans lequel on se trouve',
  'ls',

  'Afficher le contenu du répertoire même les fichiers cachés et en ajoutant un caractère à chaque entrée',
  'ls -aF',

  'Afficher le chemin du répertoire courant',
  'pwd',

//cd
  'Aller dans le sous-répertoire "dossier1" ',
  'cd dossier1',

  'Aller directement au répertoire "home"',
  'cd',

  'Aller au répertoire parent',
  'cd ..',

//répertoire...
  'Créer un répertoire',
  'mkdir',

  'Supprimer un répertoire',
  'rmdir',

  'Créer un fichier',
  'touch',

  "Copie d'un fichier",
  "cp",

  "Déplacer ou renommer un fichier",
  "mv",

  "Supprimer un fichier en demandant confirmation",
  "rm -i",

  "Afficher un fichier page par page",
  "more",

  "Afficher un fichier au fur et à mesure",
  "less",

//cat et lecture de fichiers
  "Lit le contenu d’un fichier et l’affiche dans le terminal",
  "cat",

  "Déterminer le type d'un fichier",
  "file",

  "Compter le nombre d'occurences d'un mot",
  "wc",

  "Afficher la différence entre deux fichiers",
  "diff",

// processus
  "Afficher la liste des processus",
  "ps ux",

  "Tuer un processus",
  "kill",
//alias

  "Créer l'alias permettant d'imprimer 'bonjour' dans la console en tapant juste la commande brosbio - (utilisez des doubles guillemets)",
  'alias brosbio="echo bonjour"',

  "Supprimer l'alias brosbio",
  "unalias brosbio",

  "Changer les droits",
  "chmod",

  "Rechercher les fichiers binaires",
  "whereis",

  "Donner le chemin où se trouve le programme que l'on souhaite exécuter",
  "which",

  "Trouver un élement de type dossier dans un répertoire",
  "find -type d",

  "Afficher les processus en cours d’exécution ou les processus stoppés",
  "jobs",

  "Raccourci clavier permettant de stopper un processus imméditatement sans possibilité d'attendre",
  "ctrl+z",

  "Raccourci clavier permettant d'envoyer un signal d'arrêt à un processus lui laissant le temps de s'arrêter proprement",
  "ctrl+c",

  "Place un processus en arrière plan",
  "bg",

  "Place un processus au premier plan",
  "fg",

  "Trier",
  "sort",

  "Créer un lien entre deux fichiers",
  "ln",

  "Créer un lien symbolique entre deux fichiers",
  "ln -s",

  "Raccourci permettant de chercher une commande dans l'historique",
  "ctrl+r",

  "Afficher le code d'erreur/retour d'un processus",
  "echo $?",

  "Créer un vecteur de variable",
  "set",

  "Translation d'un caractère par un autre caractère",
  "tr"
];

var range = question.length; //nombre d'élements dans la liste
var nbquestion = Math.floor(range / 2);
var palier0= Math.floor(nbquestion *0);
var palier1= Math.floor(nbquestion *0.2);
var palier2= Math.floor(nbquestion *0.4);
var palier3= Math.floor(nbquestion *0.6);
var palier4= Math.floor(nbquestion *0.8);



questiondone = [];
note=0;
stop=0;//pour éviter le spam de la touche entrée si on a une bonne réponse

function randomgif(){
  var gifnum = Math.floor(Math.random() * 4) + 1
  if (gifnum == 1){
    giftag="kaamelott"
  }
  if (gifnum == 2){
    giftag="palmashow"
  }
  if (gifnum == 3){
    giftag="fun"
  }
  if (gifnum == 4){
    giftag="geek"
  }
  $.ajax({
      url: "https://tv.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=palmashow&tag="+giftag,
      type: "GET",
      success: function(response) {
          //console.log("This works too");
          //debugger
          //console.log(response.data.image_url); // here is where I'm having an issue!
          var url=response.data.image_url;
          $("#gif").css("display","table");
          $('#gif').show();
          $('#gif').attr("src",url);

      }
  });
}


function generatequestion(question) {

  if (questiondone.length >= nbquestion) { //On regarde si le test est fini avant d'aller plus loin
    console.log("TEST FINI !");
    $('#question').text('TEST TERMINE');
    $('#note').text("Note: "+note+"/"+nbquestion);
    $('#scoretext').show();
    if (note == palier0){
      $('#scoretext').text("Note: "+note+"/"+nbquestion+" |  T'as essayé au moins ??");
      $('#gif').attr("src","https://memegenerator.net/img/images/600x600/343322/cereal-guy-angry.jpg");
    }

    if (note >= palier1){
      $('#scoretext').text("Note: "+note+"/"+nbquestion+" |  Mouai c'est pas terrible terrible");
      $('#gif').attr("src","http://www.buzzly.fr/uploads/thumb/650/4112655501207.jpg");
    }

    if (note >= palier2){
      $('#scoretext').text("Note: "+note+"/"+nbquestion+" |  Allez courage faut réapprendre !");
      $('#gif').attr("src","https://static.mmzstatic.com/wp-content/uploads/2015/11/kaamelott-film-tournage.jpg");
    }

    if (note >= palier3){
      $('#scoretext').text("Note: "+note+"/"+nbquestion+" |  Nice pas mal ça !");
      $('#gif').attr("src","http://static.mmzstatic.com/wp-content/uploads/2015/11/kaamelott-retour-bohort.jpg");
    }

    if (note >= palier4){
      $('#scoretext').text("Note: "+note+"/"+nbquestion+" |  Richard Stallman is that you ??");
      $('#gif').attr("src","https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAcQAAAAJDE1MDcxYWUzLWFmNzktNDU2Mi1hYmY0LWRiN2UzYjQ3ZmY3Yw.jpg");
    }



    $('#reponse').val(''); //vide la barre

    $('#tablerep').show();
    for (i=0; i<question.length;i=i+2){
    $('<tr><td>'+question[i]+":</td> <td><code style='float:right; text-align:right'>"+question[i+1]+'</code></td></tr>').appendTo('#listereponses');
  }
    return;
  }


  var number = Math.floor(Math.random() * range / 2) * 2; //génére un nombre impair aléatoire
  while (questiondone.indexOf(number) >= 0) { // ON CHECK SI LE NOMBRE EST DEJA SORTI DANS LES QUESTIONS
    number = Math.floor(Math.random() * range / 2) * 2; //génére un nombre impair aléatoire
  }
  numeroquestion = questiondone.length + 1;

  $('#numquestion').text("Question "+numeroquestion+"/"+nbquestion); //écrit la question
  $('#question').text(question[number]); //écrit la question

  questiondone.push(number);
  console.log("Question effectuées: "+questiondone);
  return number
}




function validating(question, getnumber) {
 indexreponse = getnumber + 1;
  $(document).keypress(function(event) {

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') { //détecte la touche entrée

      var checkreponse = $('#reponse').val();

      if (checkreponse != question[indexreponse]) {
        $('#yes').hide();
        $('#nope').show();
      }

      if (stop==0){
      if (checkreponse == question[indexreponse]) {
        console.log("L'index de la réponse est: "+indexreponse);
        note=note+1;
        $('#note').text("Note: "+note+"/"+nbquestion);
        randomgif();
        $('#nope').hide();
        $('#yes').show();
        stop=1;
        event.preventDefault();
        event.stopPropagation();
        }
      }

    }
  });
}


//INIT HERE
$('#note').text("Note: "+note+"/"+nbquestion);
var number = generatequestion(question);
validating(question, number);

$("#next").on("click", function() { //à chaque click sur le bouton next on relance tout
  $('#nope').hide();
  $("#yes").hide();
  $('#reponse').val(''); //vide la barre
  stop=0;
  var getnumber ="";
  var getnumber = generatequestion(question);
  validating(question, getnumber);
});
