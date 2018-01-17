
/**
 * animal
 * 
 * @author Pierre Master Bioinfo
 * 
 */
import java.io.*;

public class main {
    private static void printArray(String[] anArray) {
        System.out.print("\n");
        for (int i = 0; i < anArray.length; i++) {
            System.out.print(anArray[i] + "\t");
        }
        System.out.println(" ");
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
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

    public static void main(String[] arg) {
        Animal[] tab = new Animal[10];
        System.out.println("Donnez un nom: ");
        String nom = saisie_chaine();
        System.out.println("Donnez un age: ");
        int age = saisie_entier();
        Animal item= new Animal(nom,age);
        clearScreen();
        item.affiche();
        }



}
