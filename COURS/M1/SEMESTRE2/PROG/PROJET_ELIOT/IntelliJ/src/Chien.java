public class Chien extends Animal {
    public Chien(String nom, int age, boolean vivant) {
        super(nom, age, vivant);
    }

    @Override
    public void affiche() {
        Gestion.print("Je suis un chien ! ");
        super.affiche();
    }
}
