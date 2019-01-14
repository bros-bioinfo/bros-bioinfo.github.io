import java.util.Scanner;

public class Gestion {
    private static boolean exit = false;

    public static void main(String[] args) {
        while (!exit) {
            menu();
        }
    }

    public static void menu() {
        print("1 : Ajouter de nouveaux animal(ux)");
        print("2 : Afficher tous les animaux");
        print("3 : Afficher un animal selon son nom");
        print("4 : Afficher la moyenne des âges");
        print("5 : Faire vieillir tous les animaux");
        print("6 : Tuer un animal selon son numéro");
        print("7 : Exit");

        int in = intInput();

        switch (in) {
            case 1:
                Animalerie.addAnimal(intInput("Combien d'animaux voulez-vous ajouter ?"));
                break;
            case 2:
                Animalerie.presentation();
                break;
            case 3:
                try {
                    Animalerie.search(input("Quel est le nom de l'animal ?")).affiche();
                } catch (NameException e) {
                    print(e.getMessage());
                }
                break;
            case 4:
                print(Float.toString(Animalerie.calcMeanAge()));
                break;
            case 5:
                Animalerie.setAllOlder();
                break;
            case 6:
                Animalerie.killByNumber(intInput("Numéro de l'animal à tuer = "));
                break;
            case 7:
                exit = true;
                break;

            default:
                print("Entrée non valide");
        }
    }


    public static void print(String message) {
        System.out.println(message);
    }

    static void print(int nombre) {
        System.out.println(Integer.toString(nombre));
    }

    public static String input() {
//        try {
//            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//            String out = br.readLine();
//            return out;
        return new Scanner(System.in).next();

//        } catch (IOException e) {
//            System.out.println("dope " + e);
//            return "";
//        }
    }

    public static String input(String message) {
        print(message);
        return input();
    }

    public static int intInput() {
        try {
            return Integer.parseInt(input());
        } catch (Error e) {
            print("Ceci n'est pas un entier, veuillez entrez un entier");
            return intInput();
        }

    }

    public static int intInput(String message) {
        try {
            return Integer.parseInt(input(message));
        } catch (Exception e) {
            print("Ceci n'est pas un entier, veuillez entrez un entier");
            return intInput(message);
        }
    }
}