package Utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class IO {
    public static void print(String message) {
        System.out.println(message);
    }

    public static void print(int nombre) {
        System.out.println(nombre);
    }

    public static String input() {
        try {
            return new BufferedReader(new InputStreamReader(System.in)).readLine();
        } catch (IOException e) {
            print("Erreur");
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
