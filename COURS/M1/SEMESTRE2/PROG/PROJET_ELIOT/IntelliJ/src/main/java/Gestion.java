import Utils.IO;

import java.io.*;
import java.util.Vector;


class Gestion{
    private static final Vector<Animalerie> animaleries = new Vector<>();

    public static void main(String[] args) {
        menu();
    }


    private static void menu() {
    int a = 9;
    IO.print(a + 6);
        while (true) {
            IO.print("\nQue voulez vous faire ?\n");
            IO.print("1. Ajouter une animalerie");
            IO.print("2. Gérer une animalerie");
            IO.print("3. Sauvegarder animaleries");
            IO.print("4. Charger animaleries");
            IO.print("5. Transférer animal");
            IO.print("6. Exit");

            switch (IO.intInput()) {
                case 1:
                    animaleries.add(new Animalerie(IO.input("Nom de l'animalerie : \n")));
                    break;

                case 2:
                    IO.print("\nQuelle animalerie souhaitez vous gérer ?");
                    selectAnimalerie().menu();
                    break;

                case 3:
                    save();
                    break;

                case 4:
                    load();
                    break;

                case 5:
                    IO.print("\nDans quel animalerie se trouve l'animal à transférer ?");
                    Animalerie animalerie = selectAnimalerie();
                    IO.print("\nQuelle animal souhaitez vous transférer ?");
                    Animal animal = animalerie.search();
                    animalerie.remove(animal);
                    IO.print("\nDans quel animalerie voulez transférer " + animal.getNom() + " ?");
                    selectAnimalerie().add(animal);
                    break;

                default:
                    System.exit(0);
                    break;
            }
        }
    }

//    private static void saveJSON() {
//
//        ObjectMapper mapper = new ObjectMapper();
//
////Object to JSON in file
//        try {
//            mapper.writeValue(new File("Animalerie.json"), animaleries);
//        } catch (IOException io) {
//            io.printStackTrace();
//        }
//    }


    private static void save() {
        try {
            BufferedWriter buff = new BufferedWriter(new FileWriter("Animaleries.txt"));
            for (Animalerie animalerie : animaleries) {
                buff.write("<New Animalerie>\n");
                animalerie.save(buff);
            }
            IO.print("Animaleries sauvegardées");
            buff.close();
        } catch (IOException error) {
            IO.print("Erreur");
        }
    }

    private static void load() {

        try {
            animaleries.removeAllElements();
            BufferedReader buff = new BufferedReader(new FileReader("Animaleries.txt"));
            String line;
            while ((line = buff.readLine()) != null) {

                switch (line) {
                    case "<New Animalerie>":
                        animaleries.add(new Animalerie(buff.readLine()));
                        break;

                    case "Canary":
                        animaleries.lastElement().add(
                                new Canary(buff.readLine(),
                                        Integer.valueOf(buff.readLine()),
                                        buff.readLine().equals("vivant")));
                        break;

                    case "Chat":
                        animaleries.lastElement().add(
                                new Chat(buff.readLine(),
                                        Integer.valueOf(buff.readLine()),
                                        buff.readLine().equals("vivant")));
                        break;

                    case "Chien":
                        animaleries.lastElement().add(
                                new Chien(buff.readLine(),
                                        Integer.valueOf(buff.readLine()),
                                        buff.readLine().equals("vivant")));
                        break;

                }
            }

            buff.close();
            IO.print("Animaleries chargées");

        } catch (IOException e) {
            IO.print("Le fichier n'existe pas");
        }
    }

    private static Animalerie selectAnimalerie() {
        int i = 0;
        for (Animalerie animalerie : animaleries) {
            i++;
            IO.print(i + ". " + animalerie.getName());
        }
        return animaleries.get(IO.intInput() - 1);
    }
}