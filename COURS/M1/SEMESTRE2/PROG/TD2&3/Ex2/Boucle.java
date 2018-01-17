/**
 * Boucle
 * 
 * @author Pierre Master Bioinfo
 * 
 */

public class Boucle {
    public static void main(String[] arg) {
        int somme=0;
        for (int i = 10; i < 30; i++) {
            somme = somme + i;
        }
        System.out.print("somme= " + somme);
    }
}