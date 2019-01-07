public class Animal {
    private String nom;
    private int age;
    private boolean vivant;
    private static int n = 1;

    public static Animal newInstance(String nom, int age, boolean vivant) {
        Gestion.print(n);
        return new Animal(nom, age, vivant);
    }

    public static Animal newInstance(String nom, int age) {
        return newInstance(nom, age, true);
    }

    public static Animal newInstance(String nom) {
        return newInstance(nom, 0, true);
    }

    public static Animal newInstance() {
        return newInstance("Inconnu", 0, true);
    }

    private Animal(String nom, int age, boolean vivant) {
        this.nom = nom;
        this.age = age;
        this.vivant = vivant;
        n++;
    }

    public void affiche() {
        System.out.println("Je m'apelle " + this.nom);
        System.out.println("J'ai " + this.age + " ans!");
    }

}