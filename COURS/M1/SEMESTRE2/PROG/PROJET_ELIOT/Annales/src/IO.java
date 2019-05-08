import java.util.Scanner;

public class IO {
    private static Scanner reader = new Scanner(System.in);

    public static int saisieEntier() {
        return reader.nextInt();
    }

    public static String saisieChaine() {
        return reader.next();
    }

    public static void print(String message) {
        System.out.println(message);
    }
}
