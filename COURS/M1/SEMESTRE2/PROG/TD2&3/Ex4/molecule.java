
/**
 * molecule
 * 
 * @author Pierre Master Bioinfo
 * 
 */
import java.io.*;

public class molecule {
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

    public static String[] saisie_molecule() {
        clearScreen();
        System.out.println("Combien voulez-vous rentrer de molécules ?");
        int nbmol = saisie_entier();
        String moleliste[] = new String[nbmol];
        System.out.println("\n");

        for (int i = 0; i < nbmol; i++) {
            System.out.print("Nom de la molécule " + i + " : ");
            String mol = saisie_chaine();
            moleliste[i] = mol;
        }
        return moleliste;
    }

    public static String[] moleliste = new String[0];

    public static void menu() {
        clearScreen();
        System.out.println("\n[1] Rentrer le nom des molécules");
        System.out.println("[2] Afficher le nom des molécules");
        System.out.println("[0] Quitter\n");
        int option = saisie_entier();

        switch (option) {
        case 1:
            moleliste = saisie_molecule();
            clearScreen();
            menu();
            break;
        case 2:
            clearScreen();
            printArray(moleliste);
            saisie_chaine();
            menu();
            break;
        case 0:
            System.exit(0);
            break;
        default:
            menu();
            break;
        }
    }

    public static void main(String[] arg) {
        menu();
    }
}
