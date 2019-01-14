public class Chat extends Animal {
    public Chat(String nom, int age, boolean vivant) {
        super(nom, age, vivant);
    }

    @Override
    public void affiche() {
        Gestion.print("Je suis un chat ! ");
        super.affiche();
    }
}
