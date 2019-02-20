import Utils.IO;

import java.io.BufferedWriter;
import java.io.IOException;
import java.util.Iterator;
import java.util.Vector;

import Exception.NameException;


class Animalerie extends Vector<Animal> {

    private final String name;

    public Animalerie(String name) {
        this.name = name;
    }

    String getName() {
        return name;
    }

    void menu() {
        while (true) {
            IO.print("\nBienvenu à " + name + ", que voulez-vous faire ?");
            IO.print("1 : Ajouter de nouveaux animal(ux)");
            IO.print("2 : Afficher tous les animaux");
            IO.print("3 : Afficher un animal selon son nom");
            IO.print("4 : Afficher la moyenne des âges");
            IO.print("5 : Faire vieillir tous les animaux");
            IO.print("6 : Tuer un animal");
            IO.print("7 : Exit");

            int in = IO.intInput();

            switch (in) {
                case 1:
                    add(IO.intInput("Combien d'animaux voulez-vous ajouter ?"));
                    break;

                case 2:
                    presentation();
                    break;

                case 3:
                    try {
                        search(IO.input("Quel est le nom de l'animal ?")).affiche();
                    } catch (NameException e) {
                        IO.print(e.getMessage());
                    }
                    break;

                case 4:
                    IO.print(Float.toString(calcMeanAge()));
                    break;

                case 5:
                    setAllOlder();
                    break;

                case 6:
                    kill();
                    break;

                case 7:
                    return;

                default:
                    IO.print("Entrée non valide");
                    break;
            }
        }
    }

    private void add(int howMany) {
        for (int i = 0; i < howMany; i++) {

            int type = IO.intInput("1. Canary\n2. Chat\n3. Chien\n");

            String name = IO.input("Nom de l'animal");
            int age = IO.intInput("Age de l'animal");

            switch (type) {
                case 1:
                    super.add(new Canary(name, age, true));
                    break;
                case 2:
                    super.add(new Chat(name, age, true));
                    break;
                case 3:
                    super.add(new Chien(name, age, true));
                    break;
                default:
                    IO.print("Entrée non valide !");
                    break;
            }

        }
    }

    private Animal search(String nom) throws NameException {
        for (Animal animal : this) {
            if (animal.getNom().equalsIgnoreCase(nom)) {
                return animal;
            }
        }
        throw new NameException("Il n'éxiste pas d'animal de ce nom");
    }

    Animal search() {
        int i = 0;
        for (Animal animal : this) {
            i++;
            IO.print(i + ". " + animal.getNom());
        }
        return get(IO.intInput() - 1);
    }

    private float calcMeanAge() {
        float sum = 0;
        for (Animal animal : this) {
            sum += animal.getAge();
        }
        return sum / this.size();
    }

    private void setAllOlder() {
        for (Animal animal : this) {
            animal.setOlder();
        }
    }

    private void kill() {
        IO.print("Qui voulez-vous tuer ?");
        search().die();
    }

    private void presentation() {
        for (Iterator<Animal> it = this.iterator(); it.hasNext(); ) {
            Animal animal = it.next();
            animal.affiche();
        }
    }

    void save(BufferedWriter buff) throws IOException {
        buff.write(name);
        buff.newLine();
        buff.newLine();
        for (Animal animal : this) {
            animal.save(buff);
        }
        buff.flush();
    }

}
