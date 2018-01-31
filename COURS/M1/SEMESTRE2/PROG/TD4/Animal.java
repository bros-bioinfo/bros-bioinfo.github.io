
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
    private boolean vivant;

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

    public Animal(String nom, int val, boolean boule) {
        id = nom;
        age = val;
        vivant = boule;
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
    public boolean getStatus() {
        return vivant;
    }
    public void affiche() {
        System.out.println("id: " + id);
        System.out.println("Age: " + age + " mois");
        System.out.println("Encore en vie: " + vivant+"\n"); 
    }


    public String toString() {
        String chaine = "id: " + id + "\nAge: " + age + " mois"+"\nEncore en vie: "+vivant+"\n\n";
        return chaine;
    }


    public void save(BufferedWriter buff) throws IOException{
        buff.write(getId());
        buff.write(";");
        buff.write((new Integer(age)).toString());
        buff.write(";");
        if (getStatus()) buff.write("true");
        else
            buff.write("false");
        
        buff.write(";");          
        buff.newLine();
    }

}

