/**
 * Triangle de Pascal
 * 
 * @author Pierre Master Bioinfo
 * 
 */

public class Pascal {
    private static void printArray(long[] anArray) {
        for (int i = 0; i < anArray.length; i++) {
            if (anArray[i] != 0) {
                System.out.print(anArray[i] + "\t");
            }
        }
        System.out.println(" ");

    }

    public static void main(String[] arg) {
        String max = arg[0];
        int maxtour = Integer.parseInt(max);

        int longueur = maxtour + 1;
        long[] pascal = new long[longueur];
        pascal[0] = 1;

        int tour = 0;

        printArray(pascal);

        while (tour < maxtour) {
            long[] tableau = new long[longueur];
            tableau[0] = 1;
            for (int i = 1; i < longueur; i++) {
                int caseavant = i - 1;
                tableau[i] = pascal[i] + pascal[caseavant];
            }

            pascal = tableau;
            tour++;
            printArray(pascal);
        }
    }
}
