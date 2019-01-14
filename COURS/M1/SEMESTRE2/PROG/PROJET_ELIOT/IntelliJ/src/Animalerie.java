import java.util.ArrayList;
import java.util.List;


public class Animalerie {
    //    Animal[] tableau = new Animal[3];


    private static ArrayList<Animal> animaux = new ArrayList<>();

    public static void addAnimal(int howMany) {
        for (int i = 0; i < howMany; i++) {

            String name = Gestion.input("Nom de l'animal");
            int age = Gestion.intInput("Age de l'animal");
        }
    }

    public static Animal search(String nom) throws NameException {
        for (Animal animal : animaux) {
            if (animal.getNom().equals(nom)) {
                return animal;
            }
        }
        throw new NameException("Il n'éxiste pas d'animal de ce nom");
    }

    public static float calcMeanAge() {
        float sum = 0;
        for (Animal animal : animaux) {
            sum += animal.getAge();
        }
        return sum / animaux.size();
    }

    public static void setAllOlder() {
        for (Animal animal : animaux) {
            animal.setOlder();
        }
    }

    public static void killByNumber(int id) {
        for (Animal animal : animaux) {
            if (animal.getNum() == id) {
                animal.die();
            }
        }
    }

    public static void presentation() {
        for (Animal bete : animaux) {
            bete.affiche();
        }
    }
}
