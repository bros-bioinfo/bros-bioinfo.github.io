import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Gestion {
    public static void main(String[] args) {
//        Animal[] tableau = new Animal[3];
        List<Animal> animaux = new ArrayList<Animal>();

        for (int i = 0; i < 3; i++) {
            String name = input("Nom de l'animal");
            int age = intInput("Age de l'animal");

            animaux.add(Animal.newInstance(name, age));
        }

        for (Animal bete : animaux) {
            bete.affiche();
        }
    }

    public static void print(String message) {
        System.out.println(message);
    }

    public static void print(int nombre) {
        System.out.println(Integer.toString(nombre));
    }

    public static String input() {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            String out = br.readLine();
            return out;

        } catch (IOException e) {
            System.out.println("dope " + e);
            return "";
        }
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