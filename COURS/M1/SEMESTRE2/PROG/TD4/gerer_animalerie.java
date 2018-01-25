import java.io.*;
import java.util.*;

class gerer_animalerie {
    public static Vector liste_animalerie = new Vector();

    public static void creer_animalerie(Vector liste) {
        System.out.println("Donnez un nom: ");
        String nom_animalerie = Animalerie.saisie_chaine();
        Animalerie item = new Animalerie(nom_animalerie);
        liste_animalerie.addElement(item);
        item.menu();
    }

    static void menuanimalerie() {
        System.out.println("\n");
        System.out.println("[1]\t Créer une animalerie");
        System.out.println("[2]\t Editer une animalerie");
        System.out.println("[3]\t Afficher la liste des animaleries");
        System.out.println("[4]\t Afficher les animaux d'une animalerie");
        System.out.println("[0]\t Quitter");
    }

    public static Animalerie trouver_animalerie(String nom) {
        for (Iterator it = liste_animalerie.iterator(); it.hasNext();) {
            Animalerie courrant = (Animalerie) it.next();
            String nom_animalerie = courrant.getNom_animalerie();
            if (nom_animalerie == nom) {
                return courrant;
            }
        }
        return null;
    }

    public static void editer_animalerie() {
        System.out.println("[2]\t Quel animalerie voulez-vous editer ?");
        String nom = Animalerie.saisie_chaine();
        Animalerie found = trouver_animalerie(nom);
        found.menu();
    }

    public static void afficher_animaleries() {
        for (Iterator it = liste_animalerie.iterator(); it.hasNext();) {
            Animalerie courrant = (Animalerie) it.next();
            System.out.println(courrant.getNom_animalerie());
        }
        Animalerie.saisie_chaine();
    }

    public static void afficher_info_animalerie() {
        System.out.println("Quel animalerie voulez-vous afficher ?");
        String nom = Animalerie.saisie_chaine();
        Animalerie found = trouver_animalerie(nom);
        found.printArray(found.tab);
        Animalerie.saisie_chaine();
    }

    public static void main(String[] arg) {
        while (true) {
            Animalerie.clearScreen();
            menuanimalerie();
            int num = Animalerie.saisie_entier();
            switch (num) {
            case 0:
                System.exit(0);
                break;
            case 1:
                Animalerie.clearScreen();
                creer_animalerie(liste_animalerie);
                break;
            case 2:
                Animalerie.clearScreen();
                editer_animalerie();
                break;
            case 3:
                Animalerie.clearScreen();
                afficher_animaleries();
                break;
            case 4:
                Animalerie.clearScreen();
                afficher_info_animalerie();
                break;
            default:
                System.out.println("Erreur de saisie");
                break;
            }
        }
    }
}