import Utils.IO;

public class Chat extends Animal implements Mammifere{
    public Chat(String nom, int age, boolean vivant) {
        super(nom, age, vivant);
    }

    @Override
    public void affiche() {
        super.affiche();
        IO.print("Je suis un chat ! ");
    }


}
