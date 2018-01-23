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
}