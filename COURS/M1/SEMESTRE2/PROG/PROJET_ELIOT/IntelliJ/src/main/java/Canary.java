import Utils.IO;

public class Canary extends Animal {
    public Canary(String nom, int age, boolean vivant) {
        super(nom, age, vivant);
    }

    @Override
    public void affiche() {
        super.affiche();
        IO.print("Je suis un canary ! ");
    }
}
