/**
 * Salles saisies a la main
 *
 * Les fichiers ICS ne donnent une salle que pour une minorite des cours: cette table
 * permet d'en ajouter, et de corriger celles qui sont fausses car elle a la priorite
 * sur les ICS.
 *
 * Syntaxe d'une salle: <campus>::<batiment>@<Salle|Amphi>_<nom>
 * Ex: "Talence::A28@Salle_205", "Talence::A29@Amphi_C", "A21/Salle Informatique A"
 *
 * Syntaxe des cles, de la plus precise a la plus generale (la plus precise l'emporte):
 * "<UE> YYYY-MM-DD HH:MM" - une seance. La date et l'heure sont celles affichees
 *                           dans l'agenda. Ex: "S9_IA 2026-09-15 14:00"
 * "<UE> YYYY-MM-DD"       - toutes les seances d'un jour. Ex: "S9_POO 2026-09-14"
 * "<UE> <type> <groupe>"  - Ex: "S7_PYTHON Cours+TD G1"
 * "<UE> <type>"           - Ex: "S7_PYTHON TD machine"
 * "<UE>"                  - toute l'UE. Ex: "S9_IA"
 *
 * <UE> est le nom du fichier ICS, sans son extension (champ `source` de calDB.courses):
 * S7_PYTHON, S8_NGS, S9_IA, MS_EVENTS...
 * <type> vaut Cours, Cours+TD, TD, TD machine, Examen... (cf. calDB.types)
 * <groupe> vaut G1, G2 ou All
 */
var room_overrides = {
    //General S9
    "S9_STRUBIGL" : "Talence::A21_/_Salle_Info A",
    "S9_MOCELL" : "Talence::A21_/_Salle_Info A",
    "S9_FILBI" : "Talence::A21_/_Salle_Info A",
    "S9_GLOG": "CREMI::A28_/_Salle_205",
    "S9_DEA": "Talence::A21_/_Salle_Info A",

    //Specifique S9
    "S9_GLOG 2026-09-07": "CREMI::A28_/_Salle_207",
    "S9_FILBI 2026-09-11": "CREMI::A28_/_Salle_203",

    "S9_MOCELL 2026-09-30" : "Talence::PAS DE SALLE", //VERIF CELCAT

    "S9_FILBI 2026-10-01": "CREMI::A28_/_Salle_204",
    "S9_DEA 2026-10-02": "Talence::A21_/_Salle_Info A",
    "S9_FILBI 2026-10-08": "Talence::A21_/_Salle_Info B",

    "S9_GLOG 2026-10-19": "Talence::PAS DE SALLE", // VERIF CELCAT

    "S9_GLOG 2026-11-02": "CREMI::A28_/_Salle_105",
    "S9_FILBI 2026-11-05": "Talence::B16_/_Salle_05",
    "S9_GLOG 2026-11-09": "CREMI::A28_/_Salle_105",
    "S9_DEA 2026-11-13": "Talence::A21_/_Salle_Info C",
    "S9_GLOG 2026-11-16": "CREMI::A28_/_Salle_105",
    "S9_GLOG 2026-11-23": "CREMI::A28_/_Salle_201",
    "S9_GLOG 2026-11-30": "CREMI::A28_/_Salle_201",
    "S9_DEA 2026-12-04": "CREMI::A28_/_Salle_008",
    "S9_GLOG 2026-12-07": "CREMI::A28_/_Salle_201",
    "S9_GLOG 2026-12-14": "CREMI::A28_/_Salle_201",

  // Exemples:
  // "S9_IA": "Talence::A28@Salle_205",
  // "S7_PYTHON Cours+TD G1": "Talence::A21@Salle_Informatique A",
  // "S9_POO 2026-09-14": "Talence::A29@Amphi_C",
  // "S9_IA 2026-09-15 14:00": "Talence::A30@Salle_178",
};
