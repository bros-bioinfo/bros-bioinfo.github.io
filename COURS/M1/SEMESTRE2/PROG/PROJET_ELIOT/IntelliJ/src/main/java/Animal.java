import Utils.IO;

import java.io.BufferedWriter;
import java.io.IOException;

abstract class Animal {
    private String nom = "Inconnu";
    private int age = 0;
    private boolean vivant = true;

    protected Animal(String nom, int age, boolean vivant) {
        this.nom = nom;
        this.age = age;
        this.vivant = vivant;
    }

    String getNom() {
        return nom;
    }

    int getAge() {
        return age;
    }

    public boolean isVivant() {
        return vivant;
    }

    void setOlder() {
        age++;
    }

    public void affiche() {
        IO.print("");
        System.out.println("Je m'apelle " + this.nom);
        System.out.println("J'ai " + this.age + " ans!");
        if (!vivant) {
            IO.print("Et je suis mort!");
        }
    }

    void die() {
        if (vivant) {
            vivant = false;
        } else {
            IO.print("You cannot kill the dead ones !");
        }
    }

    void save(BufferedWriter buff) throws IOException {
        buff.write(this.getClass().getName());
        buff.newLine();
        buff.write(nom);
        buff.newLine();
        buff.write(Integer.toString(age));
        buff.newLine();
        if (vivant) {
            buff.write("vivant");
        } else {
            buff.write("mort");
        }
        buff.newLine();
        buff.newLine();
    }

}