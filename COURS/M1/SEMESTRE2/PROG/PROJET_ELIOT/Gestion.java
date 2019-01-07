import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Gestion {
    public static void main(String[] args) {
        Animal[] tableau = new Animal[10];
        for (int i = 0; i < 10; i++) {
            String name = input("Nom de l'animal");
            int age = intInput("Age de l'animal");

            tableau[i] = new Animal(name, age);
        }
        for (int i = 0; i < 10; i++) {
            tableau[i].affiche();
        }
    }

    public static void print(String message) {
        System.out.println(message);

    }

    public static String input() {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            String out = br.readLine();
            return out;

        } catch (IOException e) {
            System.out.println("dope " + e);
            return null;
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