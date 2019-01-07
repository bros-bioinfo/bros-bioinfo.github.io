public class Animal {
    private String nom;
    private int age;
    private boolean vivant;

    public Animal() {
        nom = "Absent";
        age = 0;
        vivant = true;
    }

    public Animal(String nom, int age) {
        this.nom = nom;
        this.age = age;
        vivant = true;
    }

    public Animal(String nom) {
        this.nom = nom;
        this.age = 0;
        vivant = true;
    }

    public void affiche() {
        System.out.println("Je m'apelle " + this.nom);
        System.out.println("J'ai " + this.age + " ans!");
    }

}