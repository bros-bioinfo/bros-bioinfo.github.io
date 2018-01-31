import java.io.*;

class chat extends Animal {
    public chat(String nom) {
        super(nom);
    }

    public chat(String nom, int age) {
        super(nom, age);
    }
    
    public chat(String nom, int age, boolean boule) {
        super(nom, age, boule);
    }


    public chat() {
        super();
    }

    public void affiche() {
        System.out.println("\nMiaouuuu");
        super.affiche();
    }

    public void save(BufferedWriter buff) throws IOException{
        buff.write("CHAT");
        buff.write(";");
        super.save(buff);
    }
}