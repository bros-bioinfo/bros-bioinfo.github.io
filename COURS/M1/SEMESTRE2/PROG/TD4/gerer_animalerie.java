import java.io.*;
import java.util.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

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
        try {
            ecrire(liste_animalerie);
        } catch (Exception exp) {
            System.out.println("Erreur bouuu");
            return;
        }
        System.out.println("\n");
        System.out.println("[1]\t Créer une animalerie");
        System.out.println("[2]\t Editer une animalerie");
        System.out.println("[3]\t Afficher la liste des animaleries");
        System.out.println("[4]\t Afficher les animaux d'une animalerie");
        System.out.println("[5]\t Charger une animalerie");
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

    public static void ecrire(Vector liste_animalerie) throws IOException {
        for (Iterator it = liste_animalerie.iterator(); it.hasNext();) {
            Animalerie courant = (Animalerie) it.next();
            String filename = courant.getNom_animalerie() + ".txt";
            BufferedWriter buff = new BufferedWriter(new FileWriter(filename));
            courant.saveanimals(buff);
            buff.flush();
            buff.close();
        }
    }

    public static void chargeeeeer() {
        System.out.println("Quel est le nom du fichier à charger ?");
        String file = Animalerie.saisie_chaine();
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader(file));
            String line;
            Animalerie ext_animalerie = new Animalerie(file.substring(0,file.lastIndexOf('.')));
            // Vector<Animal> tab = new Vector<Animal>();                
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                String[] extracted = line.split(";", -1);
                String type = extracted[0];                
                String ext_name = extracted[1];
                int ext_age = Integer.parseInt(extracted[2]);
                boolean ext_status = Boolean.parseBoolean(extracted[3]);
               
                System.out.println(ext_name);                
                System.out.println(ext_age);
                System.out.println(ext_status);
               
                if (type.equals("CHAT")){            
                    Animal ext_animal = new chat(ext_name, ext_age, ext_status);
                    ext_animalerie.tab.add(ext_animal);
                }
                if (type.equals("SOURIS")){
                    Animal ext_animal = new souris(ext_name, ext_age, ext_status);
                    ext_animalerie.tab.add(ext_animal);                    
                }
                if (type.equals("CANARI")){
                    Animal ext_animal = new canari(ext_name, ext_age, ext_status);
                    ext_animalerie.tab.add(ext_animal);
                }
            }        
            liste_animalerie.addElement(ext_animalerie);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (br != null) {
                    br.close();
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
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
                case 5:
                Animalerie.clearScreen();
                chargeeeeer();
                Animalerie.saisie_chaine();                
                break;
            default:
                System.out.println("Erreur de saisie");
                break;
            }
        }
    }
}