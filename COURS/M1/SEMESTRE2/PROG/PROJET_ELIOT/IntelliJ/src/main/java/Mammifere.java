import Utils.IO;

public interface Mammifere {
    default void milking(){
        IO.print("Les produit laitiers sont nos amis pour la vie");
    }

    default void growHairs(){
        IO.print("Mes poils poussent !!!");
    }
}
