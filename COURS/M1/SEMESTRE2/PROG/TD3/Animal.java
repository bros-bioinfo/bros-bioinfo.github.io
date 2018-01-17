
/**
 * animal
 * 
 * @author Pierre Master Bioinfo
 * 
 */
import java.io.*;

public class Animal {
    private String id;
    private int age;

    public void setId(String nom) {
        id = nom;
    }

    public void setAge(int val) {
        age = val;
    }

    public Animal(String nom) {
        id = nom;
    }

    public Animal(String nom, int val) {
        id = nom;
        age = val;
    }

    public Animal() {
        id = "default";
        age = 0;
    }

    public String getId() {
        return id;
    }

    public int getAge() {
        return age;
    }

    public void affiche() {
        System.out.println("Je suis un animal");
        System.out.println("Mon id est: " + id);
        System.out.println("J'ai: " + age + " mois");
    }
}
