
/**
 * animal
 * 
 * @author Pierre Master Bioinfo
 * 
 */
import java.io.*;
import java.util.*;

public class Animalerie {
    public static void printArray(Vector<Animal> anArray) {
        System.out.print("\n");
        for (int i = 0; i < anArray.size(); i++) {
            anArray.get(i).affiche();
        }
        System.out.println(" ");
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

    public static boolean saisie_boolean() {
        String temp = saisie_chaine();
        boolean bvar = Boolean.parseBoolean(temp);
        return bvar;
    }

    public static String saisie_chaine() {
        try {
            BufferedReader buff = new BufferedReader(new InputStreamReader(System.in));
            String chaine = buff.readLine();
            return chaine;
        } catch (IOException e) {
            System.out.println(" impossible de travailler" + e);
            return null;
        }
    }

    public static int saisie_entier() {
        try {
            BufferedReader buff = new BufferedReader(new InputStreamReader(System.in));
            String chaine = buff.readLine();
            int num = Integer.parseInt(chaine);
            return num;
        } catch (IOException e) {
            return 0;
        }
    }

    private String nom;
    public static Vector<Animal> tab = new Vector<Animal>();
    public static int compteur = 0;


    public void setNom_animalerie(String id) {
        nom = id;
    }

    public String getNom_animalerie() {
        return nom;
    }


    public static void menu() {
        clearScreen();
        System.out.println("NATACHA VETERINAIRE BONJOUUUUUUR...");
        System.out.println("\n[1] Rentrer le nom des animaux");
        System.out.println("[2] Afficher les infos des animaux");
        System.out.println("[3] Afficher les infos d'un animal");
        System.out.println("\n[4] Saisir l'état d'un animal");
        System.out.println("[5] Vieillir tous les animaux");
        System.out.println("[6] Vieillir un animal");
        System.out.println("\n[0] Quitter\n");
        int option = saisie_entier();

        switch (option) {
        case 1:
            clearScreen();
            tab = saisie_animal();
            clearScreen();
            menu();
            break;
        case 2:
            clearScreen();
            printArray(tab);
            saisie_chaine();
            menu();
            break;
        case 3:
            clearScreen();
            System.out.println("Quel est le nom de l'animal ?: ");
            String nom = saisie_chaine();
            afficher_lui(tab, nom);
            saisie_chaine();
            menu();
            break;
        case 4:
            clearScreen();
            System.out.println("Quel est le nom de l'animal ?: ");
            nom = saisie_chaine();
            passer_en_revue(nom);
            saisie_chaine();
            menu();
            break;
        case 5:
            clearScreen();
            le_temps_qui_passe();
            saisie_chaine();
            menu();
            break;
        case 6:
            clearScreen();
            System.out.println("Quel est le nom de l'animal ?: ");
            String nomduvieux = saisie_chaine();
            vieux_crouton(nomduvieux);
            saisie_chaine();
            menu();
            break;
        case 0:
            gerer_animalerie.menuanimalerie();
            break;
        default:
            menu();
            break;
        }
    }

    public static Animal Avis_de_recherche(Vector<Animal> tab, String nom) {
        for (int j = 0; j < compteur; j++) {
            if (tab.get(j).getId().equals(nom)) {
                return tab.get(j);
            }
        }
        return null;
    }

    public static void afficher_lui(Vector<Animal> tab, String nom) {
        Animal found = Avis_de_recherche(tab, nom);
        System.out.println("\nid: " + found.getId());
        System.out.println("Age: " + found.getAge() + " mois");
        System.out.println("Encore en vie: " + found.getStatus() + "\n");
    }

    public static void le_temps_qui_passe() {
        for (int j = 0; j < compteur; j++) {
            int newage = tab.get(j).getAge() + 1;
            tab.get(j).setAge(newage);
        }
    }

    public static void vieux_crouton(String nom) {
        Animal found = Avis_de_recherche(tab, nom);
        int newage = found.getAge() + 1;
        found.setAge(newage);
    }

    public static boolean prouve_que_tu_existe(Vector<Animal> tab, String nom) {
        if (compteur == 0) {
            return false;
        }
        Animal found = Avis_de_recherche(tab, nom);
        if (found != null) {
            System.out.println("\nNom déjà existant, rentrez en un autre: ");
            return true;
        }
        return false;
    }

    public static Vector<Animal> saisie_animal() {
        System.out.println("\nCombien voulez-vous ajouter d'animaux ? : ");
        int nombre = saisie_entier();
        //agrandir_tableau(tab,nombre);
        Vector<Animal> tab = new Vector<Animal>();//[nombre];
        for (int i = 0; i < nombre; i++) {

            System.out.println("\nDonnez un nom: ");
            String nom = saisie_chaine();
            while (prouve_que_tu_existe(tab, nom) == true) {
                nom = saisie_chaine();
            }

            System.out.println("\nDonnez un age: ");
            int age = saisie_entier();
            boolean vivant = true;
            afficheChoix();
            int reponse = saisie_entier();
            Animal item = null;
            switch (reponse) {
            case 1:
                item = new chat(nom, age, vivant);
                break;
            case 2:
                item = new canari(nom, age, vivant);
                break;
            case 3:
                item = new souris(nom, age, vivant);
                break;
            default:
                System.out.println("Option inexistante recommencez");
                i--;
            }
            if (item != null) {
                tab.add(item);
                compteur = compteur + 1;
            }
        }
        clearScreen();
        return tab;
    }

    static void afficheChoix() {
        System.out.println("\nQuel est l'espèce de l'animal ?");
        System.out.println("[1]\t Gros matou");
        System.out.println("[2]\t Canari de Mémé");
        System.out.println("[3]\t Grosse Souris");

    }

    public static Vector<Animal> passer_en_revue(String nom) {
        for (int i = 0; i < tab.size(); i++) {
            if (tab.get(i).getId().equals(nom)) {
                System.out.println("\n" + tab.get(i).getId() + " est-il encore en vie ? (True/False): ");
                boolean boule = saisie_boolean();
                int age = tab.get(i).getAge();
                Animal item = new Animal(nom, age, boule);
                tab.set(i, item);
            }
        }
        return tab;
    }

    public Animalerie(String chaine) {
        nom=chaine;
        tab=new Vector();
    }

    public static void main(String[] arg) {
        menu();
    }

}
