public class Canary extends Animal {
    public Canary(String nom, int age, boolean vivant) {
        super(nom, age, vivant);
    }

    @Override
    public void affiche() {
        Gestion.print("Je suis un canary ! ");
        super.affiche();
    }
}
