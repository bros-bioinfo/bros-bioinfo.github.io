import Utils.IO;

public class Chien extends Animal {
    public Chien(String nom, int age, boolean vivant) {
        super(nom, age, vivant);
    }

    @Override
    public void affiche() {
        super.affiche();
        IO.print("Je suis un chien ! ");
    }
}
