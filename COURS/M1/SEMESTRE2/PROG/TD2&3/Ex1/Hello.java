import sun.security.util.;

/**
 * Hello
 * 
 * @author Pierre Master Bioinfo
 * 
 */

public class Hello {
    public static void main(String[] arg) {
        System.out.print("Coucou ");
        for (int i = 0; i < arg.length; i++) {
            System.out.print(arg[i]+" ");
        }
    }
}