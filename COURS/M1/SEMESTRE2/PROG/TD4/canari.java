class canari extends Animal {
    public canari(String nom) {
        super(nom);
    }

    public canari(String nom, int age) {
        super(nom, age);
    }

    public canari(String nom, int age, boolean boule) {
        super(nom, age, boule);
    }


    public canari() {
        super();
    }

    public void affiche() {
        System.out.println("\nCuiCUIIIIII");
        super.affiche();
    }
}