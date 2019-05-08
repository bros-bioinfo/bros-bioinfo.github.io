import java.util.ArrayList;
import java.util.List;

public class Article {
    private ArrayList<String> auteurs = new ArrayList<>();
    private String nomJournal;
    private int year;
    private List<String> motClefs = new ArrayList<>();

    public Article() {
        IO.print("Combien d'auteurs pour cet article ?");
        for (int i = 0; i < IO.saisieEntier(); i++) {
            IO.print("Auteur n°" + (i + 1) + " ?");
            auteurs.add(IO.saisieChaine());
        }
        IO.print("Quel est le nom du journal ?");
        nomJournal = IO.saisieChaine();
        IO.print("En quelle année cet article a t-il été publié ?");
        year = IO.saisieEntier();

        IO.print("Combien de mot clés pour cet article ?");
        for (int i = 0; i < IO.saisieEntier(); i++) {
            IO.print("Mot clé n°" + (i + 1) + " ?");
            auteurs.add(IO.saisieChaine());
        }
    }
}
