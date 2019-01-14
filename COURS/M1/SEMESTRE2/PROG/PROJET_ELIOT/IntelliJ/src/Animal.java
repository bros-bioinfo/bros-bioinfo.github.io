public class Animal {
    private String nom = "Inconnu";
    private int age = 0;
    private boolean vivant = true;
    private int num;
    private static int n = 1;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isVivant() {
        return vivant;
    }

    public void setVivant(boolean vivant) {
        this.vivant = vivant;
    }

    public int getNum() {
        return num;
    }

    public void setOlder() {
        age++;
    }


   public Animal(String nom, int age, boolean vivant) {
       this.nom = nom;
       this.age = age;
       this.vivant = vivant;
       n++;
       this.num = n;
   }

    public Animal() {
        n++;
        this.num = n;
    }

    public void affiche() {
        Gestion.print("");
        System.out.println("Je m'apelle " + this.nom);
        System.out.println("J'ai " + this.age + " ans!");
        if (!vivant) {
            Gestion.print("Et je suis mort!");
        }
        Gestion.print("");
    }

    public void die() {
        if (vivant) {
            vivant = false;
        } else {
            Gestion.print("You cannot kill the dead ones !");
        }
    }

}