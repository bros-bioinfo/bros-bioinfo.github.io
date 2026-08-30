
// var university_path = "http://www.u-bordeaux.fr/formation/2015/PRMABS_121/master-recherche-professionnel-mention-biologie-sante-specialite-bioinformatique/enseignement/";
var university_path = "https://www.u-bordeaux.fr/formation/2016/PRMA_74/bio-informatique/enseignement/";
/**
 * 2016 - 2020
 */

var course_data = {
  "4TBIEVNT": {
    "acronym": "Event",
    "background_color": "#FA5858",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 0,
    "icon": "fa fa-graduation-cap",
    "id": "4TBIEVNT",
    "image": "headinfo.jpg",
    "semester": 11,
    "title": "Event",
    "tracks": "0x00",
    "visibility": "visible"
  },
  "4TBIMEET": {
    "acronym": "Conference",
    "background_color": "#FA5858",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 0,
    "icon": "fa fa-comments",
    "id": "4TBIMEET",
    "image": "headconf.jpg",
    "semester": 11,
    "title": "Conference - Workshop - Meeting",
    "tracks": "0x00",
    "visibility": "visible"
  },
  "4TBIDFNS": {
    "acronym": "Defense",
    "background_color": "#FA5858",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 0,
    "icon": "fa fa-comments",
    "id": "4TBIDFNS",
    "image": "headconf.jpg",
    "semester": 11,
    "title": "Defense - Soutenance",
    "tracks": "0x00",
    "visibility": "visible"
  },
  "4TBI701U": {
    "apogee": "4TBI701U",
    "short": "Image Processing",
    "language": "English",
    "acronym": "IMAJS",
    "coordinators": 'Taveau JC',
    "background_color": "#7FD8BC",
    "contents": {
      "en": {
        "program": `
        <p>First, this course presents an overview of the main image processings and analyses
        completed by tutorials based on the &mdash; very popular in the biological community &mdash; ImageJ software.
        Second, an introduction to the JavaScript programming language is performed in order to automate image processing tasks via ImageJ.</p>
        <ul>
        <li>Definition of a digital image: resolution, dynamic range</li>
        <li>Image Enhancement: Brightness, Contrast, Noise</li>
        <li>Convolution, filters, Fourier Transform</li>
        <li>Analysis: Measurements, Shape descriptors</li>
        </ul>`,
        "objectives": `
        <ul>
        <li>Be familiar with the various concepts and tools for processing and analyzing digital images.</li>
        <li>Understanding the main functions of ImageJ required to execute small scripts written in JavaScript for ImageJ.</li>
        </ul>`,
        "skills": ``
      },
      "fr": {
        "program": `
        <P> Tout d'abord, ce cours présente un aperçu des principaux traitements et analyses d'images numériques
         complété par des travaux dirigés fondés sur le &mdash; très populaire dans la communauté biologique &mdash; logiciel ImageJ.
         Puis, une introduction au langage de programmation JavaScript est effectuée afin d'automatiser les tâches de traitement d'images via ImageJ. </ P>
         <ul>
         <li> Définition d'une image numérique: résolution, plage dynamique </li>
         <li> Amélioration de l'image: luminosité, contraste, bruit </li>
         <li> Convolution, filtres, Transformée de Fourier </li>
          <li>Analyse: Mesures, Descripteurs de forme </li>
         </ul> `,
         "objectives": `
         <ul>
         <li> Se familiariser avec les différents concepts et outils pour le traitement et l'analyse des images numériques. </li>
         <li> Comprendre les principales fonctions d'ImageJ requises pour exécuter de petits scripts écrits en JavaScript pour ImageJ. </li>
         </ul> `,
        "skills": ``
      },
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI701U",
    "image": "ue_imajs.jpg",
    "semester": 7,
    "title": "Initiation \u00e0 l'exploration d'images num\u00e9riques",
    "tracks": "0x0F",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_3586/initiation-a-l-exploration-d-images-numeriques"
  },
  "4TBI702U": {
    "apogee": "4TBI702U",
    "short" : "Algo-Prog-USI",
    "acronym": "APU",
    "language": "English + French",
    "coordinators": 'Beurton-Aimar M',
    "background_color": "#0095FF",
    "contents": {
      "en": "Coming soon.",
      "fr": {
        'program': "<ul><li>Algorithmique de base, structures itératives et prédicats.</li>"+
                "<li>Les tableaux : parcours, recherches séquentielle et dichotomique, tris.</li>"+
                "<li>Complexité : quelques notions à partir d'exemples</li>"+
				"<li>Programmation : "+
                "Mise en application des différents concepts vues en algorithmique : structures de contrôle, "+
                "tests logiques, boucles.</li>"+
				"<li>Traitement des accès fichiers séquentiels : lecture /écriture</li>"+
                "<li>Bases de la modélisation orientée objet : élaboration de classes, utilisation de bibliothèques "+
                "ou de modules prédéfinis.</li></ul>",
        'objectives': "<ul><li>Analyser un problème donné et concevoir l'algorithme correspondant.</li>"+
                "<li>Apprentissage de la programmation au travers de différents langages classiques ou orientés objet.</li>"+
                "<li>Conception de modules de traitement pour les données biologiques.</li>"+
				"</ul>",
		'skills': "<ul><li>Convertir un problème concret en une suite d'instructions programmables.</li>"+
                "<li>Maitrise des concepts essentiels d'un langage de programmation.</li>"+
                "</ul>"
      }
    },
    "ects": 9,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI702U",
    "image": "ue_algoprogusi.jpg",
    "semester": 7,
    "title": "Algorithmique, Programmation et Utilisation des Syst\u00e8mes Informatiques",
    "tracks": "0x0F",
    "visibility": "hidden",
    "html": "FRUAI0333298FCOEN_2942/algorithmique-programmation-et-utilisation-des-systemes-informatiques"
  },
  "4TBI702U-Prog": {
    "acronym": "APU-Prog",
    "short": "Programming",
    "background_color": "#0095FF",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 9,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI702U-Prog",
    "image": "ue_algoprogusi.jpg",
    "semester": 7,
    "title": "Algorithmique, Programmation et Utilisation des Syst\u00e8mes Informatiques",
    "tracks": "0x0F",
    "visibility": "visible"
  },
  "4TBI702U-Algo": {
    "acronym": "APU-Algo",
    "short": "Algorithmics",
    "background_color": "#0095FF",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 9,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI702U-Algo",
    "image": "ue_algoprogusi.jpg",
    "semester": 7,
    "title": "Algorithmique, Programmation et Utilisation des Syst\u00e8mes Informatiques",
    "tracks": "0x0F",
    "visibility": "visible"
  },
  "4TBI702U-USI": {
    "acronym": "APU-USI",
    "short": "Use of Computer Systems",
    "background_color": "#0095FF",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 9,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI702U-USI",
    "image": "ue_algoprogusi.jpg",
    "semester": 7,
    "title": "Algorithmique, Programmation et Utilisation des Syst\u00e8mes Informatiques",
    "tracks": "0x0F",
    "visibility": "visible"
  },
  "4TBI703U": {
    "apogee": "4TBI703U",
    "short": "Omics & Bioinformatics",
    "language": "English",
    "acronym": "OBI",
    "coordinators": 'Taveau JC, Th&eacute;bault P',
    "background_color": "#eef409",
    "contents": {
      "en": {
        'program': `<p>In this course, we will explore the bioinformatician core activities ranging from the data mining using databases
        in molecular biology to the design of bioanalysis while exploiting methods dedicated to alignment sequences or phylogen. </p>
        <p>The Big Data era will also be introduced regarding the massive production of omics data and will be linked to algorithmics
        approaches dedicated to the exploitation of biological data. </p>
        <h4>References</h4>
        <ul><li>Introduction to Bioinformatics - Arthur M. Lesk, by Arthur M. Lesk. Paperback 1st Edition (Sept 2002)
        Oxford University Press; ISBN: 0199251967</li></ul>`,
        "objectives": `<ul>
        <li>Use of classical software packages like EMBOSS (European Molecular Biology Open Software Suite) to develop new analytical pipelines.</li>
        <li>Use and understanding of the main steps for building and analyzing phylogenetic studies.</li>
        <li> The most common algorithms used in bioinformatics will be studied using Python programming language.</li>
        </ul>`,
        "skills": `<ul>
        <li>Write a function in Python to solve a simple bioinformatics problem.</li>
        <li>Knowing the various families of algorithms used in bioinformatics.</li>
        <li>Understanding the various pipelines in phylogenetic projects</li></ul>`
      },
      "fr": {
        "program": `<p> Dans ce cours, nous explorerons les activités principales de la bioinformatique allant de l'exploration de données à l'aide de bases de données
        en biologie moléculaire à la bioanalyse tout en exploitant des méthodes dédiées aux séquences d'alignement ou à la phylogénie. </p>
        <P> L'ère des <em>Big Data</em> sera également présentée dans le cadre de la production massive de données omiques et sera liée aux approches algorithmiques
        dédiées à l'exploitation des données biologiques. </p>
        <h4> Références </h4>
        <ul> <li>Introduction to Bioinformatics - Arthur M. Lesk, by Arthur M. Lesk. Paperback 1st Edition (Sept 2002)
        Oxford University Press; ISBN: 0199251967</li></ul> `,
        "objectives": `<ul>
        <li> Utilisation de logiciels classiques comme EMBOSS (European Molecular Biology Open Software Suite) pour développer de nouveaux pipelines analytiques. </li>
        <li> Utilisation et compréhension des étapes principales pour la construction et l'analyse d'études phylogénétiques. </li>
        <li> Les algorithmes les plus courants utilisés en bioinformatique seront étudiés à l'aide du langage de programmation Python. </li>
        </ul> `,
        "skills": `<ul>
        <li> Savoir écrire en Python une fonction pour résoudre un problème de bioinformatique simple. </li>
        <li> Connaître les grandes familles algorithmiques utilisés en bioinformatique.</li>
        <li> Comprendre les différentes pipelines dans les projets phylogénétiques </li> </ul> `
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI703U",
    "image": "ue_obi.jpg",
    "semester": 7,
    "title": "Omiques et BioInformatique",
    "tracks": "0x0F",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_2289/omiques-et-bioinformatique"
  },
  "4TBI704U": {
    "short": "English",
    "language": "English",
    "acronym": "Anglais",
    "coordinators": "Bernaulte JJ",
    "background_color": "#a4ff80",
    "contents": {
      "fr": {
        'program': "<ul>"+
            "<li>Construire une communication scientifique orale en anglais à partir de l’analyse de documents "+
            "de divers genres scientifiques et répondre en anglais aux questions sur ce travail.</li>"+
            "<li>Prendre la parole et interagir dans des situations diverses.</li>"+
            "<li>Renforcer la compréhension écrite et orale.</li>"+
            "</ul>",
        'objectives': "<ul>"+
            "<li>Développer les compétences de communication scientifique pertinentes aux contextes "+
            "professionnels de la recherche. </li>"+
            "<li>Renforcer les 4 compétences langagières (compréhension "+
            "et production de l’anglais, orale et écrite).</li></ul>",
        'skills': "<ul><li>Compétences langagières en anglais : à partir et en fonction du niveau initial vers "+
            "le niveau B2 et au delà selon les critères du Cadre Européen Commun de Référence.</li>"+
            "<li>Techniques de compréhension de l’anglais scientifique</li>"+
            "<liCommunication scientifique orale et écrite en anglais.</li>"+
            "</ul>"
      },
      "en": {
        'program': "<ul>"+
            "<li> Building an oral scientific communication in English from the analysis of documents "+
             "of various scientific genres and answer in English questions about this work. </li>" +
             "<Li> Speaking and interacting in a variety of situations. </li>" +
             "<Li> Strengthen written and oral comprehension. </li>" +
            "</ul>",
        'objectives': "<ul>"+
            "<li>Developing scientific communication skills relevant to the professional contexts of research.</li>"+
             "<li> Strengthen the four language skills (understanding and production of English, oral and written).</li>" +
             "</ul>",
        'skills': "<ul><li> English language skills: from and depending on the initial level to " +
         "<em>Level B2</em> and beyond according to the criteria of the Common European Framework of Reference. </li>" +
         "<li> Techniques for understanding scientific English </li>" +
         "<li>Oral and written scientific communication in English. </li>" +
         "</ul>"
      }
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI704U",
    "image": "ue_english.jpg",
    "semester": 7,
    "title": "Anglais",
    "tracks": "0x0F",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_2923/anglais"
  },
  "4TEC701U": {
    "apogee": "4TEC701U",
    "short": "BioStatistics",
    "language": "English (tutorials) + French (lectures).",
    "acronym": "TDE",
    "coordinators": 'David V',
    "background_color": "#D0A6FF",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': `<h4>Statistiques Inférentielles</h4>
            <ul>
            <li> Comparaison d'échantillons d'une variable
              <ul>
                <li>Conditions d'application</li>
                <li>Tests paramétriques et non paramétriques: Shapiro-Wilk, Fisher, Student, U.</li>
              </ul>
            </li>
            <li> Comparaison d'échantillons de variables
              <ul>
                <li>Relier une variable qualitative à une variable qualitative</li>
                <li>Utilisation de modèles linéaires: Régressions et Analyses de variance</li>
              </ul>
            </li>
            </ul>
            <h4>Initiation au langage R</h4>
            <ul>
            <li>Installation et Environnement</li>
            <li>Import et Manipulation de Données</li>
            <li>Edition de Graphiques</li>
            </ul>`,
        'objectives': `Savoir choisir, mettre en œuvre et interpréter des analyses numériques en adéquation
        avec les objectifs et les plans d’échantillonnage/expérimentaux adoptés`,
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TEC701U",
    "image": "ue_biostats.jpg",
    "semester": 7,
    "title": "Traitement des donn\u00e9es environnementales",
    "tracks": "0x0F",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_3699/traitement-des-donnees-environnementales"
  },
  "4TBA804U": {
    "short": "Plant Biotechnology",
    "language": "French",
    "acronym": "BBP",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBA804U",
    "image": "ue_plant1.jpg",
    "semester": 8,
    "title": "Biologie et Biotechnologies des Plantes",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBA806U": {
    "short": "Plant Genetics",
    "language": "French",
    "acronym": "Genepi",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBA806U",
    "image": "ue_plant2.jpg",
    "semester": 8,
    "title": "G\u00e9n\u00e9tique, g\u00e9nomique et \u00e9pig\u00e9n\u00e9tique des plantes",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBA903U": {
    "short" : "Population Genetics",
    "language": "English",
    "acronym": "QPG",
    "coordinators": 'Schurdi-Levraud V',
    "background_color": "#0dc623",
    "contents": {
      "en": {
        'program': `
        <h4>Prerequisites</h4>
        <ul>
        <li>First year of Master in Biological science</li>
        <li>Basis Statistics and R, basis genetics and genomics.</li>
        </ul>
        <h4>Description</h4>
        <p>This course is organized via in-class face-to-face, seminars, flipped classroom,
        Data and <em>in silico</em> study, work on dataset and professional seminars. Focus will be put on dataset work.
        <br>Work on dataset will be co-coordinated with statistics and R
            teaching. The project will be conducted on a dataset integrating population
            diversity analysis and population structure, linkage
            disequilibrium estimation and association genetics to detect
            loci involved quantitative traits in crops.
            </p>
        <ul>
        <li>Population genetics and genetic diversity</li>
        <li>Haplotype structure</li>
        <li>Domestication and genetic consequences</li>
        <li>Linkage disequilibrium</li>
        <li>Genetic variance, estimating variance components,
        heritability</li>
        <li>Genetic correlations</li>
        <li>Association genetics, genomic selection</li>
        <li>induced diversity TILLinG, natural diversity ecoTILLinG</li>
        <li>Linking genetics, genomics and bioinformatics : from fine-
        mapping to gene cloning; genotyping by sequencing.</li>
        </ul>
        `,
        'objectives': `
            Students will be able to :<ul>
            <li>calculate and explain genetic diversity estimates, alleles
            frequency</li>
            <li>integrate theoretical and practical knowledge in detecting loci
            involved in quantitative traits</li>
            <li>integrate advanced statistics, bioinformatics, highthrough-put
            phenotyping and genome data</li></ul>
            `,
        'skills':''
      },
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBA903U",
    "image": "ue_pop_genetics.jpg",
    "semester": 9,
    "title": "Quantitative and population genetics and evolution",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBA904U": {
    "short" : "Plant Development",
    "acronym": "PDR",
    'language': "English",
    "background_color": "#ff6a00",
    "contents": {
      "en": {
        'program': `
        <ul><li>Content of the course is related to different aspects of plant
        development, and analysis of the mechanisms that control it.</li>
        <li>The use of state of the art technologies in Molecular Biology,
        (including omics), developmental biology, Cell Imaging
        approaches to address various aspects of plant development,
        reproduction and applications in plant Biotechnologies will be
        highlighted by case studies from the literature.</li></ul>`,
        'objectives': `
        <ul><li>Most recent advances in plant development and reproduction
        with up to date approaches including genetic, reverse genetic
        and NGS based approaches.</li>
        <li>Epigenetic mechanisms in plants and their functions in plant
        development and reproduction.</li>
        <li>Genetic and molecular mechanisms underlying plant
        development control, and possible biotechnological
        applications.</li>
        <li>Case studies using recent article on various plant model to
        analyse mechanisms controlling plant development.</li></ul>`,
        'skills': ``
        },
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBA904U - must be checked",
    "image": "ue_plant_dev.jpg",
    "semester": 9,
    "title": "Plant Development and Reproduction",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBE801U": {
    "short" : "Biodiversity",
    'language': "French",
    "acronym": "BioDiv",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBE801U",
    "image": "ue_biodiversity.jpg",
    "semester": 8,
    "title": "Biodiversit\u00e9",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBE802U": {
    "short" : "Terrestrial Ecosystems",
    'language': "French",
    "acronym": "EcoTerr",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBE802U",
    "image": "ue_terrestrial.jpg",
    "semester": 8,
    "title": "Gestion, conservation et restauration des \u00e9cosyst\u00e8mes terrestres",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBE803U": {
    "short" : "Aquatic Environments",
    'language': "French",
    "acronym": "Aqua",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBE803U",
    "image": "ue_aquatic.jpg",
    "semester": 8,
    "title": "Gestion des milieux aquatiques continentaux",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBE901U": {
    "short" : "BioStatistics 2",
    "language": "French",
    "acronym": "TDE++",
    "background_color": "#D0A6FF",
    "contents": {
      "en": {
        "program": "See French Version",
        "objectives": "Coming soon.",
        "skills": "Coming soon."
      },
      "fr": {
        "program": `
          Cette UE abordera sous forme de cours, TD machines diverses types de statistiques avancées comme
          la classification et les méthodes de <em>clustering</em>.<br>
          Les notions abordées &mdash; entre autres &mdash; sont:
          <ul>
          <li>Analysis of similarities (ANOSIM)</li>
          <li>Permutational multivariate analysis of variance (PERMANOVA)</li>
          <li>Modèle Linéaire Général (GLM)</li>
          <li>Statistiques Spatiales</li>
          <li>Similiarity Profile Analysis (SIMPROF)</li>
          <li>Indicator Value (IndVAL)</li>
          <li>Similarity Percentage (SIMPER)</li>
          </ul>
          <p>Parallèlement, un projet sur les modèles lineaires et les Analyses Multivariées sera réalisé sur deux séances.</p>`,
        "objectives": "Bient&ocirc;t disponible.",
        "skills"    : "Bient&ocirc;t disponible.",
      },
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBE901U",
    "image": "ue_stats.jpg",
    "semester": 9,
    "title": "Traitement des donn\u00e9es environnementales - Perfectionnement",
    "tracks": "0x70",
    "visibility": "visible"
  },
  "4TBE902U": {
    "short": "Evolutionary Ecology",
    "language": "French",
    "acronym": "EvoComm",
    "background_color": "#ff6bff",
    "contents": {
      "en": "Coming soon.",
      "fr": {
        'program': `Une communauté d’organisme est un ensemble d’organismes qui co-existent au même endroit à un même moment…
          <ul><li>co-évoluent-ils ensemble ?</li>
          <li>quelles peuvent en être les conséquences ?</li>
          </ul>
          <p>Les concepts d’écologie et d’évolution :
          <ul><li>co-évolution</li>
          <li>la géographie de la co-évolution</li>
          <li>co-évoluer et évolution rapide chez les organismes longévifs</li>
          <li>évolution rapide et démographie</li>
          <li>co-évolution et interactions directes et indirectes dans les communautés complexes</li>
          </ul></p>
          <p>Les concepts de philosophie des sciences :
          <ul><li>l’histoire de la démarche de rationalité</li>
          <li>la rationalité dans l’étude des systèmes complexes</li>
          </ul></p>
          <p>Des réflexions autour des écosystèmes forestiers et autour du microbiote</p>
          <h4>Organisation</h4>
          Cours + Interventions de professionnels de la recherche
          Construction d’un projet bibliographique (la question est définie à partir d’une réflexion commune partant des contenus suivi de TD d’apprentissage de la recherche bibliographique)`,
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBE902U",
    "image": "ue_ecology.jpg",
    "semester": 9,
    "title": "Ecologie \u00e9volutive des communaut\u00e9s",
    "tracks": "0x60",
    "visibility": "visible"
  },
  "4TBI001U": {
    "acronym": "Stage",
    "short":  "Stage",
    "language": "French or English",
    "background_color": "#7FD8BC",
    "contents": {
      "en": {
        'program': "See french version",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        "program": `
             <ul><li>Stage en laboratoire de recherche ou en entreprise d'une durée de 5 à 6 mois.</li>
            <li>Il repose sur un projet scientifique préalablement rédigé et soumis aux responsables de la spécialité.</li>
            <li>Ce stage peut avoir lieu en France ou à l'étranger.
            <ul><li><b>Parcours recherche</b>: Sujet de stage proposé par le Maître de Stage après validation par la commission pédagogique
            de Master et choisi par l’étudiant en accord avec le responsable du stage.</li>
            <li><b>Parcours professionnel</b>: Sujet de stage défini par le Maître de Stage et l’étudiant en accord avec le responsable pédagogique.</li></ul>
            </li></ul></li></ul>`,
         "objectives": `
            <ul><li>Mise en situation dans un environnement professionnel pour la réalisation d'un projet de recherche
            et/ou développement</li>
            <li>Application des notions fondamentales de gestion d'un projet de recherche et/ou développement:
                <ul><li>Préparation</li>
                <li>Réalisation</li>
                <li>Analyse critique des résultats</li>
                <li>Synthèse et Présentation des résultats</li>
                <li>Applications de \"bonnes pratiques\" et de la \"démarche qualité\".</li>
                </ul>
            </li></ul>`,
         "skills": `
            <ul><li>Compétence dans la gestion d'un projet de recherche et/ou développement.</li>
            <li>Acquérir l'autonomie nécessaire pour mener un projet de recherche et/ou de développement</li>
            <li>Acquérir la notion de travail en équipe projet.</li>
            <li>Compétences , à analyser et critiquer les résultats, à synthétiser des résultats, à présenter à l'écrit
            et à l'oral un projet et les résultats obtenus dans le cadre de ce projet.</li>
            <li>Maîtrise de l’anglais pour les étudiants qui partent à l’étranger.</li>
            </ul>`
        }
    },
    "ects": 30,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI001U",
    "image": "ue_stagem2.jpg",
    "semester": 10,
    "title": "Stage Recherche , Pro ou R&D",
    "tracks": "0x0F",
    "visibility": "visible"
  },
  "4TBC801U" : {
    "short" : "Object Programming",
    "language": "French",
    "acronym": "POO",
    "background_color": "#EEF409",
    "contents": {
      "en": {
        "program": `See French Version`,
        "objectives": 'Coming soon',
        "skills": 'Coming soon'
      },
      "fr": {
        "program": `
          <ul>
            <li>Modélisation objet:
              <ul><li>Héritage simple.</li>
            <li>Héritage complexe.</li>
            <li>Classes abstraites.</li>
          </ul>
          </li>
          <li>Traduction en langages C++, java.</li>
          <li>Gestion dynamique: exceptions</li>
          <li>Modèles de classes templates.</li>
          </ul>`,
        "objectives": `
          <h4>Objectifs pédagogiques</h4>
          <ul><li>Maîtriser les concepts de la programmation objet.</li></ul>`,
        "skills": 'Bientôt disponible'
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBC801U",
    "image": "ue_oop.jpg",
    "semester": 9,
    "title": "Programmation orientée Objet",
    "tracks": "0x10",
    "visibility": "visible"
  },
  "4TBI801U": {
    "apogee": "4TBI801U",
    "short": "Algo-Prog 2",
    "language": "French",
    "acronym": "AlgoPrg2",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI801U",
    "image": "ue_algoprog2.jpg",
    "semester": 8,
    "title": "Algorithmique et Programmation Avanc\u00e9es",
    "tracks": "0x01",
    "visibility": "visible"
  },
  "4TBI802U": {
    "short": "R&D Project",
    "language": "English or French depending of the tutor",
    "acronym": "CPRD",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 9,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI802U",
    "image": "ue_project_s8.jpg",
    "semester": 8,
    "title": "Conception d'un Projet de Recherche et de D\u00e9veloppement",
    "tracks": "0x07",
    "visibility": "visible"
  },
  "4TBI803U": {
    "short": "Databases",
    "language": "French",
    "acronym": "BDD",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI803U",
    "image": "ue_datacenter.jpg",
    "semester": 8,
    "title": "Bases de Donn\u00e9es : fondements et applications",
    "tracks": "0x07",
    "visibility": "visible"
  },
  "4TBI804U": {
    "short": "NGS and Tools",
    "language": "French",
    "acronym": "NGS",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI804U",
    "image": "ue_ngs.jpg",
    "semester": 8,
    "title": "Nouvelles G\u00e9n\u00e9rations de Sequen\u00e7age",
    "tracks": "0x07",
    "visibility": "visible"
  },
  "4TBI805U": {
    "short": "Video & Dynamic Process",
    "language": "English or French depending of the teacher",
    "acronym": "ViMod",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI805U",
    "image": "ue_videos.jpg",
    "semester": 8,
    "title": "Traitement de Vid\u00e9os et Mod\u00e9lisation des Processus Dynamiques",
    "tracks": "0x70",
    "visibility": "visible"
  },
  "4TBC901U" : {
    "short" : "Object Programming 2",
    "language": "French",
    "acronym": "POO++",
    "background_color": "#ff6a00",
    "contents": {
      "en": {
        "program": `See French Version`,
        "objectives": 'Coming soon',
        "skills": 'Coming soon'
      },
      "fr": {
        "program": `
          <h4>Pré-requis</h4>
          <ul>
          <li>Connaissances de la programmation impérative (langage C)</li>
          <li>Connaissance et première utilisation d'un langage de programmation à objet (Java,C++,...)</li>
          </ul>
          <h4>Description</h4>
          <ul>
          <li>Rappels de programmation objet</li>
          <li>Concepts avancés : exceptions, clonage, classes génériques, collections, itérations, classes internes...</li>
          <li>Utilisation de quelques modèles de conception objets : Adaptateur, Décorateur, Observable ...</li>
          <li>Utilisation de la programmation objet dans certains types de développements : IHM, Système ...</li>
          </ul>`,
        "objectives": 'Bientôt disponible',
        "skills": 'Bientôt disponible'
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBC901U",
    "id_other": "4TIN706U &mdash; UF Info",
    "image": "ue_oop2.jpg",
    "semester": 9,
    "title": "Approche Objet",
    "tracks": "0x10",
    "visibility": "visible"
  },
  "4TBI901U": {
    "short": "Structural Bioinformatics",
    "language": "French or English depending of the audience",
    "acronym": "StrubiGL",
    "background_color": "#7FD8BC",
    "contents": {
      "en": {
        "program": `
        <h4>Prerequisites</h4>
        <ul><li>Knowledge of main algorithms used in bioinformatics (e.g. 2D exact alignments: Needleman & Wunsch, Smith & Waterman).</li>
        <li>Programming skill in JavaScript programming language is highly recommended.</li></ul>
        <h4>Protein Structure</h4>
        <ul>
        <li>Exploring the PDB file format.</li>
        <li>Secondary Structures: DSSP.</li>
        <li>3D Alignments</li>
        </ul>
        <h4>Visualization: WebGL 2.x</h4>
        <ul>
        <li>Principles of hardware-accelerated 2D and 3D graphics</li>
        <li>WebGL: Graphics primitives, texture, shaders &mdash; vector and fragment &mdash; , GLSL, </li>
        <li> Via a collaborative programming project, in-depth look to the ins and outs of webgl 2.x</li>
        </ul>
        `,
        'objectives': `<ul><li>Develop his/her own strategies for solving a problem (<em>Learning how to learn</em>).</li>
        <li>Improve your knowledge of low-level aspect of computer science (use of hardware-accelerated graphics).</li>
        </ul>`,
        "skills": ``
      },
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI901U",
    "image": "ue_strubigl.jpg",
    "semester": 9,
    "title": "Bioinformatique Structurale",
    "tracks": "0x61",
    "visibility": "visible"
  },
  "4TBI902U": {
    "short": "Bioinformatics Sector",
    "language": "French",
    "acronym": "FILBI",
    "background_color": "#A4FF80",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI902U",
    "image": "ue_sector.jpg",
    "semester": 9,
    "title": "Fili\u00e8res de la Bioinformatique",
    "tracks": "0x0F",
    "visibility": "visible"
  },
  "4TBI903U": {
    "short": "Software Engineering",
    "language": "French",
    "acronym": "GLog",
    "background_color": "#009558",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI903U",
    "image": "ue_project_dev.jpg",
    "semester": 9,
    "title": "G\u00e9nie Logiciel et Gestion de Projet",
    "tracks": "0x61",
    "visibility": "visible"
  },
  "4TBI904U": {
    "short": "Data Science",
    "language": "French",
    "acronym": "DEA",
    "background_color": "#ffbc00",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI904U",
    "image": "ue_data.jpg",
    "semester": 9,
    "title": "Donn\u00e9es: De l'Entrep\u00f4t \u00e0 l'Analyse",
    "tracks": "0x07",
    "visibility": "visible"
  },
  "4TBI905U": {
    "short": "Research & Dev",
    "language": "French",
    "acronym": "IRD",
    "background_color": "#cef6ce",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI905U",
    "image": "ue_ird.jpg",
    "semester": 9,
    "title": "Initiation \u00e0 la Recherche et au D\u00e9veloppement",
    "tracks": "0x07",
    "visibility": "visible"
  },
  "4TBI906U": {
    "short" : "Modeling Cell",
    "language": "French",
    "acronym": "MOCELL",
    "background_color": "#EEF409",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI906U",
    "image": "ue_mocell.jpg",
    "semester": 9,
    "title": "Mod\u00e9lisation qualitative et quantitative de la cellule",
    "tracks": "0x70",
    "visibility": "visible"
  },
  "4TBIN01U": {
    "acronym": "StgVol",
    "background_color": "#0a0a0a",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBIN01U",
    "image": "headinfo.jpg",
    "semester": 8,
    "title": "Stage volontaire",
    "tracks": "0xF0",
    "visibility": "visible"
  },
  "4TBIPRSS": {
    "acronym": "Press",
    "background_color": "#FA5858",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 0,
    "icon": "fa fa-newspaper-o",
    "id": "4TBIPRSS",
    "image": "headpress.jpg",
    "semester": 11,
    "title": "Press Highlights",
    "tracks": "0x07",
    "visibility": "visible"
  },
  "4TBIVACA": {
    "acronym": "Holidays",
    "background_color": "#FA5858",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 0,
    "icon": "fa fa-bicycle",
    "id": "4TBIVACA",
    "image": "headholidays.jpg",
    "semester": 11,
    "title": "Holidays",
    "tracks": "0x0F",
    "visibility": "visible"
  },
  "4TDE901U": {
    "short": "GIS: Geo. Info. Systems",
    "language": "French",
    "acronym": "SIG",
    "coordinators": "Zaragosi S",
    "background_color": "#ff6bab",
    "contents": {
      "en": {
        "program": `French version available`,
        "objectives": `Coming soon`,
        "skills": `Coming soon`
      },
      "fr": {
              "program": `<p>Cette formation est divisée en deux modules : SIG 1 & SIG 2 (Modules 4TMR003U & 4TMR004U). SIG 1 est en enseignement théorique et SIG 2 pratique basé sur la réalisation de projets SIG. Cet enseignement est organisé en deux semaines.</p>
<ul><li>Présentation du module - Manipulations de base - Géodésie</li>
<li>Les données vectorielles - les requêtes</li>
<li>Création et traitement des rasters</li>
<li>Modélisation hydrologique & Model builder</li>
<li>Les données multi-dimensionnelles</li>
<li>Le géoréférencement & les outils d'édition</li>
<li>Géotraitement & Analyse spatiale</li>
<li>Le système GPS - Levé topographique par GPS</li>
<li>Cartographie nomade</li>
</ul>
<p><a href="http://www.geocean.net/wikisig/doku.php?id=master:start">Plus de détails...</a></p>
<p>La deuxième semaine est constituée par la réalisation d'un projet SIG. Pour les étudiants de l'Ecole doctorale et des Masters recherche ces sujets porteront obligatoirement sur leurs sujets de thèse ou sur leurs stages de Master 2. Pour les étudiants du master pro les sujets seront choisis en fonctions de leurs stages en entreprise ou de leurs projets professionnels.</p>`,
              "objectives": `Au terme de cette formation vous serez en mesure de gérer un projet cartographique depuis <ul><li>l'acquisition des données sur le terrain,</li> <li>la prise en compte des informations géodésiques,</li> <li>le traitement des données via un Système d'Information Géographique (QGIS, ArcGIS), </li><li>le couplage à d'autres informations (photos aériennes, images satellites…) et </li><li>la réalisation de documents cartographiques publiables.</li></ul>`,
              "skills": `Contenu des UEs d'origine <a href="http://www.u-bordeaux.fr/formation/2016/PRMA_25/sciences-de-la-mer/enseignement/FRUAI0333298FCOEN_4820/systemes-d-information-geographique-1"><i class="fa fa-university fa-2x"></i></a> et <a href="http://www.u-bordeaux.fr/formation/2016/PRMA_25/sciences-de-la-mer/enseignement/FRUAI0333298FCOEN_4823/systemes-d-information-geographique-2"><i class="fa fa-university fa-2x"></i></a>`
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TDE901U",
    "id_other": "4TMR003U + 4TMR004U &mdash; UF STE",
    "image": "ue_gis.jpg",
    "semester": 9,
    "title": "Syst\u00e8me d'information G\u00e9ographique",
    "tracks": "0x60",
    "visibility": "visible",
    "html":"FRUAI0333298FCOEN_13214/systeme-d-information-geographique"
  },
  "4TDE902U": {
    "short": "Health Innovation",
    "language": "french",
    "apogee": "4TDE902U",
    "acronym": "IBS",
    "background_color": "#00e6f7",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TDE902U",
    "image": "ue_health.jpg",
    "semester": 9,
    "title": "Innovations Biotechnologies et Sant\u00e9",
    "tracks": "0x60",
    "visibility": "visible"
  },
    "BILBAO_001": {
    "short": "NGS & Methods",
    "language": "English",
    "acronym": "NGS",
    "background_color": "#D0A6FF",
    "contents": {
      "en": {
        "program": `
        <ul>
        <li>Introduction to sequencing technologies, methods and designing and experiment</li>
        <li>Human genomics</li>
        <li>Epigenetics and epigenomics: concepts and bioinformatics approaches</li>
        <li>Bioinformatics strategies for Mendelian and complex diseases (Genotype)</li>
        <li>NGS data analysis: Identification of cancer-causing variants</li>
        <li>Bioinformatics strategies for complex traits and diseases (Transcriptome)</li>
        <li>Networks and Systems Biology</li>
        <li>Bioinformatics tools for the integration of different types of NGS-generated Omics data</li>
        </ul>`,
        "objectives": "Coming soon",
        "skills": "Coming soon"
      },
      "fr": {
        "program": "Voir la version anglaise.",
        "objectives": "Voir la version anglaise.",
        "skills": "Voir la version anglaise."
      }
    },
    "ects": 7.5,
    "icon": "fa fa-graduation-cap",
    "id": "None",
    "image": "ue_ngs.jpg",
    "semester": 8,
    "title": "From Genome to Individual",
    "tracks": "0x0F",
    "visibility": "visible"
  },
    "BILBAO_002": {
    "apogee": "None",
    "short": "Metagenomics",
    "language": "English",
    "acronym": "MetaGen",
    "background_color": "#D0A6FF",
    "contents": {
      "en": {
        "program": `
        <ul>
        <li>Amplicon metagenomics/metabarcoding</li>
        <li>Metagenomics/Metatranscriptomics</li>
        <li>Pangenomes</li>
        <li>Metagenomics in human diseases</li>
        <li>Introduction to scientific communication</li>
        </ul>`,
        "objectives": "Coming soon.",
        "skills": "Coming soon."
      },
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 4.5,
    "icon": "fa fa-graduation-cap",
    "id": "None",
    "image": "ue_soft_omics.jpg",
    "semester": 8,
    "title": "From Genomes to Communities",
    "tracks": "0x0F",
    "visibility": "visible"
  },
    "BILBAO_003": {
    "apogee": "None",
    "short": "Population Genomics",
    "language": "English",
    "acronym": "PopGen",
    "background_color": "#D0A6FF",
    "contents": {
      "en": {
        "program": `
        <ul>
        <li>Population Genomics In-model organism (human)</li>
        <li>Population Genomics In non-model organisms. Reduced genome sequencing: - SNP discovery in the transcriptome</li>
        <li>Population Genomics In non-model organisms. Reduced genome sequencing: - Genotyping by Sequencing and Landscape Genetics</li>
        <li>Applications of Phylogenetic Analysis
        </ul>`,
        "objectives": "Coming soon.",
        "skills": "Coming soon."
      },
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 4,
    "icon": "fa fa-graduation-cap",
    "id": "None",
    "image": "ue_ngs_method.jpg",
    "semester": 8,
    "title": "From Genomes to Populations",
    "tracks": "0x0F",
    "visibility": "visible"
  },
    "BILBAO_004": {
    "apogee": "None",
    "short": "Internship",
    "language": "English",
    "acronym": "Internship",
    "background_color": "#D0A6FF",
    "contents": {
     "en": {
        "program": "Coming soon.",
        "objectives": "Coming soon.",
        "skills": "Coming soon."
      },
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 14,
    "icon": "fa fa-graduation-cap",
    "id": "None",
    "image": "ue_internship.jpg",
    "semester": 8,
    "title": "Internship",
    "tracks": "0x0F",
    "visibility": "visible"
  }
};


/**********************************************
 *
 * 2011 - 2015
 *
 **********************************************/

var course_data_2015 = {


    'CONFERENCE' : {
        'acronym'           : "Conf",
        'title'             : "Conference",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : '#FA5858',
        'icon'              : 'fa fa-comments',
        'image'             : 'headconf.jpg'

    },
    'HOLIDAYS' : {
        'acronym'   : "Holidays",
        'title'     : "Jours Fériés, Vacances | Bank Holidays, Holidays",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : '#FA5858',
        'icon'              : 'fa fa-bicycle',
        'image'             : 'headholidays.jpg'

    },
    'PRESS' : {
        'acronym'   : "Press",
        'title'             : "Press Highlights",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : '#FA5858',
        'icon'              : 'fa fa-newspaper-o',
        'image'             : 'headpress.jpg'


    },

/**********************************************
Semester 7:
Anglais	                                                3   30h
Projet tutoré : réalisation logicielle	                3   27h
Approches expérimentales en biologie	                6	26h 28h
Biomodélisation et simulation de processus biologiques	9	27h
Algorithmique et Programmation                          9	27h
**********************************************/

    'B1BS7M06' : {
        'id'        : "B1BS7M06",
        'acronym'   : "Anglais",
        'ects'      : 3,
        'semester'  : 7, // semester 7 and 8 = M1, 9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        "block"     : {
            "c++bio": "Fondements de la Bioinformatique",
            "geneco": "Fondements de la Bioinformatique",
            "bao"   : "Fundamentals of Bioinformatics"
        },
        "tracks"    : "0x7",
        'visibility': 'visible', // <visible|hidden>
        'title'     : "Anglais",
        'contents'  : {
            'fr':
                "<ul>"+
                "<li>Construire une communication scientifique orale en anglais à partir de l’analyse de documents "+
                "de divers genres scientifiques et répondre en anglais aux questions sur ce travail.</li>"+
                "<li>Prendre la parole et interagir dans des situations diverses.</li>"+
                "<li>Renforcer la compréhension écrite et orale.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul>"+
                "<li>développer les compétences de communication scientifique pertinentes aux contextes "+
                "professionnels de la recherche. Renforcer les quatre compétences langagières (compréhension "+
                "et production de l’anglais, orale et écrite).</li></ul>"+
                "<h3>Compétences acquises</span></h3>"+
                "<ul><li>Compétences langagières en anglais : à partir et en fonction du niveau initial vers "+
                "le niveau B2 et au delà selon les critères du Cadre Européen Commun de Référence.</li>"+
                "<li>Techniques de compréhension de l’anglais scientifique</li>"+
                "<liCommunication scientifique orale et écrite en anglais.</li>"+
                "</ul>",
            'en':
                "",
        },
        'html'      : "ENB1BS7M06_01/anglais",
    },

    'F1BS7201' : {
    	"id": "F1BS7201",
        "acronym"   : "GLog",
        "title"     : "Projet tutoré: réalisation logicielle",
        "ects"      : 3,
        "semester"  : 7,
        "students"  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        "block"     : {
            "c++bio": "Fondements de la Bioinformatique",
            "geneco": "Fondements de la Bioinformatique",
            "bao"   : "Fundamentals of Bioinformatics"
        },
        "tracks"    : "0x7",
        "visibility": 'visible', // <visible|hidden>
        "contents": {
            'fr':
                "<ul><li>Mise à niveau notions et principes de base."+
                "<ul>"+
                "<li>Le système d'exploitation."+
                "</li>"+
				"<li>Les interpréteurs de commandes.</li>"+
                "</ul>"+
                "</li>"+
				"<li>Réseau et archivage</li>"+
				"<li>la veille "+
                "scientifique: utilisation de mots-clefs, méta-analyse des banques de données d’informations et "+
                "des brevets.</li>"+
				"<li>élaboration d'un projet scientifique: de l'idée à la formalisation du projet.</li>"+
                "</ul>",
            'en': ""
        },
        'html'      : "ENF1BS7201_01/projet-tutore-realisation-logicielle",
    },


    'F6BS7M02' : {
        'id'        : "F6BS7M02", // F6BS7M02 ou KM1BS10U
        'acronym'   : "AEB",
        'ects'      : 6,
        'semester'  : 7, // semester 7 and 8 = M1  9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        "block"     : {
            "c++bio": "Fondements de la Bioinformatique",
            "geneco": "Fondements de la Bioinformatique",
            "bao"   : "Fundamentals of Bioinformatics"
        },
        "tracks"    : "0x7",
        'visibility': 'hidden', // <visible|hidden>
        'background_color': '#eef409',
        'title'     : "Approches Expérimentales en Biologie",
        'contents'  : {
            'fr':
                "<h2>Programme</h2>"+
                "<h3>Les Omics (30 h)</h3>"+
                "<ul>"+
                "<li>Génome: Approche de sequençage haut débit et exploitation des données</li>"+
                "<li>Transcriptome: Étude des transcriptomes : les différentes technologies d’exploration "+
                "(méthode SAGE, Puces à ADN) et les méthodes d’analyse des données.</li>"+
                "<li>Protéome: Étude des protéomes: séparation (chromatographie, électrophorèse monodimensionnelle, "+
                "bidimensionnelle, Blue Native SDS-PAGE) et identification des protéines (séquençage d’Edman, "+
                "spectrométrie de masse, puces protéines).</li>"+
                "<li>Métabolome: Etude du métabolome en 6 points : design expérimental, méthodes d’extractions, "+
                "variétés et complémentarité des méthodes analytiques, traitement des données, outils de visualisation "+
                "pour l’exploitation des données, intégration des données.</li>"+
                "</ul>"+
                "<h3>Statistiques pour la biologie (14 h)</h3>"+
                "<ul>"+
                "<li>Evaluation des connaissances pré-requises: maîtrise du langage statistique (fréquence, "+
                "effectif, variable, diagramme de dispersion…), les méthodes univariées (tests d’hypothèse paramétriques), "+
                "la construction et la gestion de grands tableaux de données.</li>"+
                "<li>Analyse multidimensionnelle des données: régression linéaire, analyse de variance, analyse des "+
                "variables quantitatives en composantes principales (ACP), la classification.</li>"+
                "<li>La formation est faite en reprenant les notions de théorie indispensable à la compréhension et en "+
                "s’appuyant sur des exemples pédagogiques réels. Les deux tiers des enseignements seront réalisés sous "+
                "forme de travaux dirigés et pratiques dans une salle équipée du logiciel libre R et autres logiciels "+
                "accessibles en ligne.</li>"+
                "</ul>"+
                "<h3>Exploitation des bases de données (16 h)</h3>"+
                "<ul>"+
                "<li>Contenu des bases de données en biologie. Méthodes bioinformatiques.</li>"+
                "<li>Comparaison et analyse des séquences biologiques.</li>"+
                "<li>Prédictions de structure et de fonction (y compris structure 3D).</li>"+
                "</ul>",
            'en':
                "<h2>Omics (30 h)</h2>"+
                "<ul>"+
                "<li>Genomics: High throughput sequencing and data analysis.</li>"+
                "<li>Transcriptomics</li>"+
                "<li>Proteomics</li>"+
                "<li>Metabolomics</li>"+
                "</ul>"+
                "<h2>Statistics in biology (14 h)</h2>"+
                "<ul>li>Evaluation des connaissances pré-requises: maîtrise du langage statistique (fréquence, "+
                "effectif, variable, diagramme de dispersion…), les méthodes univariées (tests d’hypothèse paramétriques), "+
                "la construction et la gestion de grands tableaux de données.</li>"+
                "<li>Multidimensional analysis  of data: linear regression, variance analysis, analysis des "+
                "variables quantitatives en principal components (PCA), classification.</li>"+
                "<li>La formation est faite en reprenant les notions de théorie indispensable à la compréhension et en "+
                "s’appuyant sur des exemples pédagogiques réels. Les deux tiers des enseignements seront réalisés sous "+
                "forme de travaux dirigés et pratiques dans une classroom equipped du logiciel libre R et other softwares "+
                "available on-line.</li></ul>"+
                "<h2>Exploitation of databases (16 h)</h2>"+
                "<ul><li>Contenu des bases de données en biologie. Méthodes bioinformatiques.</li>"+
                "<li>Comparaison et analyse des séquences biologiques.</li>"+
                "<li>Prédictions de structure et de fonction (y compris structure 3D).</li></ul>",
        },
        'html'      : "ENF6BS7M02_01/approches-experimentales-en-biologie",
    },
    'F6BS7M02-Omics' : {
        'id'                : "F6BS7M02-Omics",
        'acronym'           : "AEB-Omics",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : '#eef409',
        'color'             : "#fff",
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Stats' : {
        'id'                : "F6BS7M02-Stats",
        'acronym'           : "AEB-Stats",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : '#eef409',
        'color'             : "#fff",
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Info' : {
        'id'                : "F6BS7M02-Info",
        'acronym'           : "AEB-Info",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : '#eef409',
        'color'             : "#fff",
        'link'              : "F6BS7M02"
    },

    'J1BS7M01' : {
        'id'        : "J1BS7M01",
        'acronym'   : "BioMod",
        'ects'      : 9,
        'semester'  : 7, // semester 7 and 8 = M1 			"<li>9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        "block"     : {
            "c++bio": "Fondements de la Bioinformatique",
            "geneco": "Fondements de la Bioinformatique",
            "bao"   : "Fundamentals of Bioinformatics"
        },
        "tracks"    : "0x7",
        'visibility': 'hidden', // <visible|hidden>
        'title'     : "Biomodélisation, simulation de processus biologiques",
        'contents'  : {
            'fr': "<h2>Programme</h2>"+
                "<h3>Statistiques</h3>"+
                "<ul>"+
			    "<li>Mise en œuvre d'une analyse statistique – utilisation d’un logiciel tel que R et élaboration de programme.</li>"+
			    "<li>Analyse descriptive : analyse des fréquences, des moyennes, analyse de "+
			    "variance, régression linéaire et corrélations, tests non paramétriques, analyse multi-variée.</li>"+
                "</ul>"+
			    "<h3>Programmation</h3>"+
                "<ul>"+
			    "<li>Développement de programmes en langage Python.</li></ul>"+
                "<h3>Imagerie</h3>"+
                "<ul><li>Partie théorique</li>"+
        			"<ul>"+
        			"<li>Image numérique. Formats d'images. Espaces de couleurs.</li>"+
        			"<li>Amélioration d'images et de traitements (filtrations en espace réel, en espace fréquentiel).</li>"+
        			"<li>Analyse des images: Mesures, Reconnaissance de formes.</li>"+
        			"<li>Notion de programmation en vue de l'automatisation de tâches pour le traitement et l'analyse de vidéos.</li>"+
        			"</ul>"+
                "<li>Partie pratique"+
                    "<ul>"+
        			"<li>Application à des images de microscopie optique et électronique et des vidéos.</li>"+
			        "<li>Utilisation d'ImageJ, installation de greffons (plugins).</li>"+
			        "<li>Programmation de Macros/Scripts.</li></ul>"+
			     "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<span style=\"font-weight: bold;\">Objectifs pédagogiques</span>"+
                "<ul><li>Donner les éléments nécessaires pour l'analyse et le traitement de données biologiques dans les domaines de:</li>"+
			        "<ul>"+
			            "<li>biostatistiques</li>"+
			            "<li>réalisation de programme de traitement de données.</li>"+
			            "<li>traitement et analyse d'images scientifiques.</li>"+
			        "</ul>"+
			     "</ul>"+
                "<span style=\"font-weight: bold;\">Compétences acquises</span>"+
			    "<ul><li>Modélisation: Elaborer un modèle pour les données biologiques et sa mise en oeuvre informatique.</li>"+
			    "<li>Programmation: Maitrise du langage Python.</li>"+
			    "<li>Imagerie: Appréhender les divers moyens d'amélioration des images scientifiques dans les "+
			    "domaines des microscopies (optique et électronique) en vue de leur analyse.</li>"+
                "<li>Imagerie: Savoir utiliser une librairie de traitement d'images.</li>"+
                "</ul>",
            'en': ""
        },
        'html'      : "ENJ1BS7M01_01/biomodelisation-et-simulation-de-processus-biologiques",

    },
     'J1BS7M01-Prog' : {
        'id'                : "J1BS7M01-Prog",
        'acronym'           : "BioMod-Prog",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Imag' : {
        'id'                : "J1BS7M01-Imag",
        'acronym'           : "BioMod-Imag",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Stats' : {
        'id'                : "J1BS7M01-Stats",
        'acronym'           : "BioMod-Stats",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",
        'link'              : "J1BS7M01"
    },

    "J1BS7202" : {
        "id": "J1BS7202",
        "acronym": "AlgoProg",
        "title": "Algorithmique et Programmation",
        "ects": 9,
        "semester": 7,
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[required]',
        "block"     : {
            "c++bio": "Fondements de la Bioinformatique",
            "geneco": "Fondements de la Bioinformatique",
            "bao"   : "Fundamentals of Bioinformatics"
        },
        "tracks"    : "0x7",
        'visibility': 'visible', // <visible|hidden>
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Algorithmique de base, structures itératives et prédicats.</li>"+
                "<li>Les tableaux : parcours, recherches séquentielle et dichotomique, tris.</li>"+
                "<li>Complexité : quelques notions à partir d'exemples</li>"+
				"<li>Programmation : "+
                "Mise en application des différents concepts vues en algorithmique : structures de contrôle, "+
                "tests logiques, boucles.</li>"+
				"<li>Traitement des accès fichiers séquentiels : lecture /écriture</li>"+
                "<li>Bases de la modélisation orientée objet : élaboration de classes, utilisation de bibliothèques "+
                "ou de modules prédéfinis.</li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>"+
                "<h3>Objectifs pédagogiques</h3></li>"+
                "<li>Analyser un problème donné et concevoir l'algorithme correspondant.</li>"+
                "<li>Apprentissage de la programmation au travers de différents langages classiques ou orientés objet.</li>"+
                "<li>Conception de modules de traitement pour les données biologiques.</li>"+
				"<li>"+
                "<h3>Compétences acquises</h3></li>"+
                "<li>Convertir un problème concret en une suite d'instructions programmables.</li>"+
                "<li>Maitrise des concepts essentiels d'un langage de programmation.</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENJ1BS7202_01/algorithmique-et-programmation"
    },


/**********************************************
Semester 8:

Enseignements obligatoires                                                  ECTS	CM	TD	TP
Initiation à la Recherche et/ou Développement	 F1BS8201                   12		45h
Méthodes et outils pour la biologie des systèmes	J1BS8203                9	27h

Choix 1 UE de 9 ECTS                                                        ECTS	CM	TD	TP
Informatique appliquée à la biologie: modélisation et ima	C0BS8M01  KM2BS04U      9	10h	5h
Programmation orienté objet                             	                9	27h

**********************************************/

    "F1BS8201" : {
        "id": "F1BS8201",
        "acronym": "InitR&D",
        "title": "Initiation à la Recherche et/ou Développement",
        "ects": 12,
        "semester": 8,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "block"     : {
            "c++bio": "Systèmes de gestion de données et Applications",
            "geneco": "Systèmes de gestion de données et Applications",
            "bao"   : "Databases and Applications"
        },
        "tracks"    : "0x7",
        "visibility": "visible",
        "contents": {
            "fr": "<h2>Programme</h2>"+
                "<p>Ce module - réalisé sous la supervision d'un maître de stage - consiste en une réalisation informatique "+
                "d'un logiciel de taille importante.</p>"+
                "<p>Elle sera suivie d'un rapport écrit et d'une soutenance.</p>",
            "en": ""
        },
        "html": "ENF1BS8201_01/initiation-a-la-recherche-et-ou-developpement"
    },

    "J1BS8203" : {
        "id": "J1BS8203",
        "acronym": "MOBioS",
        "title": "Méthodes et outils pour la biologie des systèmes",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "block"     : {
            "c++bio": "Systèmes de gestion de données et Applications",
            "geneco": "Systèmes de gestion de données et Applications",
            "bao"   : "Databases and Applications"
        },
        "tracks"    : "0x7",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul>"+
                "<li>Récursivité, structures linéaires, structures arborescentes.</li>"+
                "<li>Arbre binaire, arbre binaire de recherche, tas, graphes: algorithme de parcours.</li>"+
                "<li>Approfondissements des notions statistiques vues dans l'UE <b>Approches expérimentales en biologie</b></li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Nécessaire:</h3>"+
                "<p>Avoir acquis les concepts de base des UE programmation et algorithmique du semestre 1</p>",
            "en": ""
        },
        "html": "ENJ1BS8203_01/methodes-et-outils-pour-la-biologie-des-systemes"
    },

    "C0BS8M01" : {
        "id": "C0BS8M01",
        "acronym": "InfoApp",
        "title": "Informatique appliquée à la biologie: modélisation et imagerie",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "block"     : {
            "c++bio": "Liste à choix d'UE obligatoires 1 UE de 9 ECTS",
            "geneco": "Liste à choix d'UE obligatoires 1 UE de 9 ECTS",
            "bao"   : "Elective Courses - 1 unit of 9 ECTS"
        },
        "visibility": "hidden",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<h3>Modélisation</h3>"+
                "<ul>"+
                "<li>Introduction générales sur les neurosciences computationnelles : modélisation, intérêt et principes de base en neurosciences</li"+
                "<li>Principes et modélisation des systèmes dynamiques, applications aux neurosciences</li>"+
                "<li>Dynamique des réseaux corticaux</li>"+
				"<li>Codage et décodage du signal neuronal</li>"+
                "<li>Modélisation de l’excitabilité neuronale (modèles ioniques, modèle de Hodgkin-Huxley, modèles cinétiques)</li>"+
                "<li>Les modèles \"integrate and fire\" et apparentés et les modèles de grands réseaux</li>"+
                "<li>Des données expérimentales à la construction d’un modèle : préparer l’un pour l’autre.</li>"+
                "<li>Modifications des propriétés intrinsèques et synaptiques : modéliser la plasticité</li>"+
                "<li>Interaction synaptiques au sein de réseaux simples</li>"+
                "<li>Neuro-ingénierie (interfaces cerveau-machine, Neuro-électronique, Neuro-prothèses)</li>"+
                "<li>Implémentation d'un miniprojet de modélisation (contrôle continu)</li>"+
                "<li>Synthèse sur un article de recherche en neurosciences computationnelles (examen)</li>"+
                "</ul>"+
                "<h3>Imagerie</h3>"+
                "<h4>Partie théorique</h4>"+
                "<ul><li>Image numérique. Vidéos.</li>"+
                "<li>Amélioration d'images et de traitements (débruitage, correction luminosité/contraste et défaut d'illumination).</li>"+
                "<li>Analyse des images: Mesures, Reconnaissance de formes. Suivi de formes.</li>"+
                "<li>Notion de programmation en vue de l'automatisation de tâches pour le traitement et l'analyse de vidéos.</li>"+
                "</ul>"+
                "<h4>Partie pratique:</h4>"+
                "<ul><li>Application à des vidéos (suivi du chemin d'une souris dans un labyrinthe, "+
                "croissance d'un neurone en vidéomicroscopie à fluorescence,etc.).</li>"+
                "<li>Utilisation d'ImageJ, installation de greffons (plugins).</li>"+
                "<li>Programmation de Macros/Scripts.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<h4>Modélisation</h4>"+
                "<ul><li>Comprendre et savoir mettre en œuvre les principes et outils logiciels utilisés pour modéliser la biologie du "+
                "système nerveux, de l'échelle de la cellule à celle du réseau</li>"+
				"<li>Acquérir les bases des sciences théoriques appliquées "+
                "à la compréhension de la dynamique du système nerveux</li></ul>"+
                "<h4>Imagerie</h4>"+
                "<ul><li>Donner les éléments nécessaires du point de vue des outils informatiques</li></ul>"+
                "<h3>Compétences acquises</h3>"+
                "<h4>Modélisation</h4>"+
                "<ul><li>Compréhension des méthodes et principes de base de la modélisation en biologie</li>"+
                "<li>Maîtrise des outils et logiciels dédiés à la modélisation en neuroscience</li>"+
                "<li>Compréhension des méthodes en Neurosciences Théoriques et Computationnelles</li>"+
                "<li>Connaissance de l’apport des Neurosciences Théoriques en Neurosciences Fondamentales "+
                "et dans le domaine de la Neuro-ingénierie.</li>"+
                "</ul>"+
                "<h4>Imagerie</h4>"+
                "<ul><li>Appréhender les divers moyens d'amélioration des images scientifiques en vue de leur analyse.</li>"+
                "<li>Savoir utiliser des fonctions simples de programmation (scripting) pour traiter des vidéos.</li>"+
                "<li>Utilisation du logiciel ImageJ.</li></ul>",
        "en": ""
        },
        "html": "ENC0BS8M01_01/informatique-appliquee-a-la-biologie-modelisation-et-ima"
    },

    'C0BS8M01-Model' : {
        'id'                : "C0BS8M01-Model",
        'acronym'           : "InfoApp-Model",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : "#7FD8BC",
        'color'             : "#fff",
        'link'              : "C0BS8M01"
    },
    'C0BS8M01-Imag' : {
        'id'                : "C0BS8M01-Imag",
        'acronym'           : "InfoApp-Imag",
        'visibility'        : 'visible', // visible or hidden
        'background_color'  : "#7FD8BC",
        'color'             : "#fff",
        'link'              : "C0BS8M01"
    },

    "J1BS8202" : {
        "id": "J1BS8202",
        "acronym": "POO",
        "title": "Programmation orientée objet",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "block"     : {
            "c++bio": "Liste à choix d'UE obligatoires 1 UE de 9 ECTS",
            "geneco": "Liste à choix d'UE obligatoires 1 UE de 9 ECTS",
            "bao"   : "Elective Courses - 1 unit of 9 ECTS"
        },
        "visibility": "visible",
        'background_color': '#a4ff80',
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                    "<ul>"+
                    "<li>Modélisation objet:"+
                    "<ul><li>Héritage simple.</li>"+
                    "<li>Héritage complexe.</li>"+
                    "<li>Classes abstraites.</li>"+
                    "</ul>"+
                "</li>"+
                "<li>Traduction en langages C++, java.</li>"+
                "<li>Gestion dynamique: exceptions</li>"+
                "<li>Modèles de classes templates.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>Maîtriser les concepts de la programmation objet.</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>Développer une application en langage objet.</li></ul>",
            "en": ""
        },
        "html": "ENJ1BS8202_01/programmation-oriente-objet"
    },

/**********************************************
Semester 9:
Enseignements obligatoires                                                  ECTS	CM	TD	TP
Modélisation des systèmes biologiques	                                    3		15h
Communication et conception d'un projet de recherche et/ou développement	9
Connaissance de l'entreprise	                                            3		15h
Visualisation de la Structure de Proteines	                                3
Classification des données issues des banques de données biologiques	    3		15h

Choix 1 UE de 3 ECTS                                                        ECTS	CM	TD	TP
Anglais	                                                                    3		60h
Architecture du génome	                                                    3	10h	10h
Génétique Humaine	                                                        3	10h	10h
Division et cycle cellulaire	                                            3	10h	10h
Algorithmique pour la bio-informatique et graphe	                        3		15h
http://www.u-bordeaux.fr/formation/2015/PRMASB_171/master-biologie-sante-specialite-bioimagerie/enseignement/ENJ1SB9700_01/visualisation-et-exploration-de-donnees-3d

Choix 1 UE de 6 ECTS                                                        ECTS	CM	TD	TP
Programmation Objet Avancée	                                                6		30h
Approche objet	                                                            6	28h	30h
Outils d'indexation et de classification de l'information	                6		24h
Systemes Autonomes	                                                        6		24h
**********************************************/

    "J1BS9204" : {
        "id": "J1BS9204",
        "acronym": "ClassData",
        "title": "Classification des données issues des banques de données biologiques",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "tracks"    : "0x7",
        'background_color': '#ff9100',
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Data mining : introduction du concept d'extraction de connaissances à partir de données brutes.</li>"+
                "<li>Algorithmes de classification (bayesienne et par arbres de décision) et étude des problèmes de regroupement (clustering).</li>"+
                "<li>Algorithmique des mots et des arbres : applications aux structures macromoléculaires.Présentation des méthodes et algorithmes "+
                "de base pour le traitement algorithmique des mots et des arbres, et leurs applications dans les problèmes de comparaison et "+
                "d'alignement de séquences, de repliement de séquences (structures secondaires).</li>"+
                "<li>Traitement des graphes et visualisation des grands jeux de données.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<p>Apprentissage des techniques avancées de traitement de données biologiques de la génomique à la métabolomique.</p>"+
                "<h3>Compétences acquises</h3>"+
                "<ul>"+
                "<li>Méthode de fouille de données</li>"+
                "<li>Méthodes de classification</li>"+
                "<li>Recherche de motifs</li>"+
                "<li>Etiquetage</li>"+
                "<li>Analyse de séquences à grande échelle</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENJ1BS9204_01/classification-des-donnees-issues-des-banques-de-donnees-b"
    },

    "F1BS9201" : {
        "id": "F1BS9201",
        "acronym": "CommPR&D",
        "title": "Communication et conception d'un projet de recherche et/ou développement",
        "ects": 9,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "tracks"    : "0x7",
        'background_color': '#a4ff80',
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<p>Programme des enseignements théoriques</p>"+
                "<ul><li>Méthodes d'analyse et de conception des systèmes informatiques:</li>"+
                "<li>UML</li>"+
                "<li>Design Patterns</li>"+
                "<li>Etude de la mise en oeuvre d'un cahier des charges, de la définition des besoins, de techniques de gestion de configuration.</li>"+
                "<li>Formalisation de connaissances, outils de structuration de données langage de type XML pour la biologie.</li>"+
                "</ul>"+
                "<p>Programme des enseignements dirigés</p>"+
                "<p>Les étudiants appliqueront les techniques de génie logiciel dans le cadre d'un projet comportant la conception "+
                "et la mise en oeuvre d'une application informatique.</p>"+
                "<p>Contenu générique pour cette UE commune</p>"+
                "<ul>"+
                "<li>Présentation des principales phases du processus dans un projet scientifique et/ou de développement (définition "+
                "stratégique, opérationnelle, réalisation et suivi, évaluation)</li>"+
                "<li>Présentation des liaisons vertueuses \"Méthodologie du projet et démarche qualité\" avec une introduction à l'assurance "+
                "qualité au laboratoire, en système de production, cahiers de laboratoire, bonnes pratiques de laboratoire, etc.</li>"+
                "<li>Introduction aux brevets et régimes juridiques associés</li>"+
                "<li>Projet tutoré de veille technologique et/ou d'analyse bibliographique ciblées sur des sujets d'actualité (rapport écrit "+
                "et oral).</li>"+
                "<li>Mise en place d'une formation pratique sur la valorisation et le transfert technologique</li>"+
                "<li>Utilisation d'un ensemble d'outils informatiques (logiciels, bases de données, réseau WEB, progiciel, etc.) pour élaborer un "+
                "rapport, une veille technologique</li>"+
                "<li>Suivi d'une série de conférences organisées avec des chercheurs, des professionnels du secteur des biotechnologies</li>"+
                "<li>Rencontre de professionnels porteurs de projets pour illustrer et documenter la création d'entreprises à partir d'un concept, "+
                "d'une idée scientifique (notion de jeunes pousses)</li>"+
                "<li>Visite d'entreprises, de laboratoires d'excellences ou de plateformes technologiques</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENF1BS9201_01/communication-et-conception-d-un-projet-de-recherche-et-ou-developpement"
    },

    "F6BS9202" : {
        "id": "F6BS9202",
        "acronym": "Entreprise",
        "title": "Connaissance de l'entreprise",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "tracks"    : "0x7",
        "background_color" : "#FA5858",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<p>Découverte du secteur et les métiers de la bioinformatique industrielle.</p>"+
                "<p>Programme détaillé</p>"+
                "<ul><li>L'enseignement théorique comprend d'une part des cours présentant les principes de la conduite de projet en "+
                "milieu industriel et une série de conférences au cours desquelles des industriels viendront présenter leurs entreprises "+
                "et métiers et répondre aux questions des étudiants concernant les perspectives de carrière offertes.</li>"+
                "<li>L'enseignement dirigé se fait sous forme de projets réalisés individuellement ou en groupe. </li>"+
                "<li>Les projets individuels comportent :"+
                    "<ul>"+
                        "<li>la recherche d'information sur une entreprise de bioinformatique "+
                        "et débouche sur la remise d'un rapport et la présentation d'un exposé ;</li>"+
                        "<li>la recherche d'une offre d'emploi conduisant à la simulation d'une procédure de recrutement "+
                        "(écriture d'un CV, d'une lettre de motivation et entretien).</li>"+
                        "<li>Les projets de groupe portent sur l'installation et l'évaluation d'un logiciel de bioinformatique commercial "+
                        "et se font en collaboration avec les entreprises (qui sont sollicitées pour mettre à disposition une licence "+
                        "gratuite du logiciel). Ces débouchent également sur l'écriture d'un rapport (remis aux entreprises partenaires "+
                        "si elles le souhaitent) et la présentation d'un exposé.</li>"+
                    "</ul>"+
                "</li></ul>"+
                "<p>Des intervenants issus du secteur industriel seront invités dans cette UE comme par exemple des utilisateurs "+
                "d'outils bioinformatiques (Sanofi Aventis, Biomérieux, etc.) et des producteurs de logiciels (GenoMining, Biomax "+
                "Informatics AG, etc.).</p>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Pré-requis</h3>"+
                "<ul><li>Connaître les banques de données et logiciels de bioinformatique. Etre capable d'installer et configurer un "+
                "logiciel dans un environnement UNIX ou WIndows.</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENF6BS9202_01/connaissance-de-l-entreprise"
    },

    "C1BS9205" : {
        "id": "C1BS9205",
        "acronym": "ModSysBio",
        "title": "Modélisation des systèmes biologiques",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "tracks"    : "0x7",
        'background_color': '#ffffff',
        "image"   : "headSysBio.jpg",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<h3>Programme des enseignements théoriques</h3>"+
                "<ul><li>Aperçu du métabolisme cellulaire</li>"+
                "<li>Structure des réseaux métaboliques. Matrice de stoechiométrie. Modes élémentaires</li>"+
                "<li>Théorie du contrôle du métabolisme.</li>"+
				"<li>Les réseaux de régulation.</li>"+
                "<li>Modélisation du métabolisme et des réseaux de régulation.</li>"+
                "<li>Les outils de modélisation (Equations différentielles, Réseaux de Petri, Systèmes multi-agents,...)</li>"+
                "</ul>"+
                "<h3>Programme des enseignements dirigés et pratiques.</h3>"+
                "<ul>"+
                "<li>Sous forme d'analyse approfondie d'articles</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul>"+
                "<li>Acquisition de la maitrise des outils d'appréhension des réseaux métaboliques</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul>"+
                "<li>Capacité à réaliser une analyse de réseaux biologiques depuis les données expérimentales "+
                "jusqu'à la modélisation</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENC1BS9205_01/modelisation-des-systemes-biologiques"
    },

    "J1BS9203" : {
        "id": "J1BS9203",
        "acronym" : "Prot3D",
        "title"   : "Visualisation de la Structure de Protéines",
        "ects"    : 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "tracks"    : "0x61",
        "block"     : {
            "c++bio": "Liste d'UE obligatoires",
            "geneco": "Liste à choix d'UE obligatoires - choisir 1 UE de 6 ECTS",
            "bao"   : "Elective Courses - select 1 course of 6 ECTS"
        },
        'background_color': '#eef409',
        "image"   : 'headprot.jpg',
        "visibility": "visible",
        "contents": {
            "fr":
            "<h2>Programme</h2>"+
            "<p>Initier les étudiants à la visualisation et à l'exploration des structures 3D.</p"+
            "><p>Programme des enseignements théoriques</p><ul><li>Organisation structurale des macromolécules biologiques.</li>"+
            "<li>Banques de données structurales (Protein Data Bank, SCOP,etc.).</li>"+
            "<li>Format de fichier PDB (Protein Data Bank)</li>"+
            "<li>Principes de la représentation graphique d'un objet 3D avec OpenGL.</li>"+
            "<li>Algorithmes utilisés pour les divers types de représentation graphique.</li>"+
            "</ul><p>Programme des enseignements dirigés et pratiques</p>"+
            "<ul><li>Les enseignements pratiques et dirigés seront tous dispensés devant ordinateur.</li>"+
            "<li>Extraction des informations structurales à partir des banques de données.</li>"+
            "<li>Initiation à l'utilisation de la librairie OpenGL versions 3.x et supérieures pour la visualisation des structures protéiques 3D au format PDB.</li>"+
            "</ul>"+
            "<h2>Objectifs et compétences</h2>"+
            "<h3>Pré-requis</h3>"+
            "<p>Notion de programmation acquises en master 1 de bioinformatique</p>",
            "en": ""
        },
        "html": "ENJ1BS9203_01/visualisation-de-la-structure-de-proteines"
    },

    "B0BS9319" : {
        "id": "B0BS9319",
        "acronym": "AnglaisM2",
        "title": "Anglais",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x70",
        'background_color': '#0095ff',
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Conférences scientifiques et débats par des scientifiques anglophones. Analyses d'articles scientifiques "+
                "ou de rapport en anglais</li>"+
                "<li>Initiation a la rédaction de productions scientifiques en anglais</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENB0BS9319_01/anglais"
    },

    "C6SB9M02" : {
        "id"        : "C6SB9M02",
        "acronym"   : "ArchiGen",
        "title"     : "Architecture du génome",
        "ects"      : 3,
        "semester"  : 9,
        "students"  : "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x70",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Architecture du génome : centromère, télomère et topologie de la chromatine</li>"+
                "<li>Organisation des génomes : séquences répétées, familles multigéniques et domaines répétés</li>"+
                "<li>Plasticité des génomes eucaryotes, éléments transposables</li>"+
                "<li>Architecture nucléaire : domaines nucléaires spécialisés (nucléole, corps de Cajal), territoires chromosomiques</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>L'objectif est de décrire l'architecture nucléaire et l'organisation des génomes eucaryotes et d'évoquer certains "+
                "éléments impliqués dans l'évolution des génomes.</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>Connaissances relatives à l'architecture nucléaire, l'architecture des génomes et leur évolution</li></ul>",
            "en": ""
        },
        "html": "ENC6SB9M02_01/architecture-du-genome"
    },

    "C6SB9M03" : {
        "id": "C6SB9M03",
        "acronym": "GenHuman",
        "title": "Génétique Humaine",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Génome humain </li>"+
                "<li>Génétique médicale et conseil génétique</li>"+
                "<li>Neurogénétique</li>"+
                "<li>Oncogénétique</li>"+
                "<li>Maladies mitochondriales</li>"+
                "<li>Génétique du développement</li>"+
                "<li>Approches thérapeutiques</li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<p>Du génome humain à la physiopathologie et aux applications en génétique médicale.</p>"+
                "<h3>Compétences acquises</h3>"+
                "<p>Connaissances et savoir en génétique humaine ; aspects physiopathologiques.</p>",
            "en": ""
        },
        "html": "ENC6SB9M03_01/genetique-humaine"
    },

    "C6SB9M04" : {
        "id": "C6SB9M04",
        "acronym": "DivCell",
        "title": "Division et cycle cellulaire",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Machinerie du cycle cellulaire et check points. </li>"+
                "<li>Le contrôle du cycle cellulaire chez les eucaryotes. </li>"+
                "<li>Les points de contrôle en phase G1, G2 et à la sortie de mitose. </li>"+
                "<li>Le contrôle de séparation des chromosomes. </li>"+
                "<li>Les modèles KO des cyclines et des kinases cycline dépendantes chez la souris. </li>"+
                "<li>Le cycle cellulaire chez les plantes.</li>"+
                "<li>L'influence des voies de signalisation sur la régulation du cycle cellulaire.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>Approfondir les connaissances sur le cycle cellulaire chez les eucaryotes inférieurs et supérieurs.</li></ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>La régulation du cycle cellulaire. Les molécules qui interviennent dans cette régulation et les liens entre "+
                "les fonctions de ces molécules et le développement de maladies néoplastiques.</li></ul>",
            "en": ""
        },
        "html": "ENC6SB9M04_01/division-et-cycle-cellulaire"
    },

    "J1BS9207" : {
        "id": "J1BS9207",
        "acronym": "AlgoBioGraph",
        "title": "Algorithmique pour la bio-informatique et graphe",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "visibility": "visible",
        "background_color" : "#CEF6CE",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Traitement automatique et analyse d'objets biologiques arborescents (structures secondaires d'ARNs, "+
                "architecture de plantes, etc.): "+
                "<ul><li>comparaison d'arborescences, </li>"+
                "<li>distance d'édition (opérations structurelles élémentaires, opérations d'édition).</li>"+
                "</ul></li>"+
                "<li> Formulation en termes de problème d'optimisation, "+
                "<ul><li>algorithmes efficaces en temps et en espace, </li>"+
                "<li>solutions incrémentales, </li>"+
                "<li>programmation dynamique. </li></ul>"+
                "</li>"+
				"<li>Réseaux d'interactions et métaboliques, voies métaboliques. </li>"+
				"<li>Exploration des relations du type \"guilt by association\", recherche de chemins et sous-graphes indiquant des voies de signalisation, "+
				"recherche de modes élémentaires.</li></ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Objectifs pédagogiques</h3>"+
				"<p>Présenter les méthodes informatiques d'exploitation de grandes masses de données, dont la bioinformatique est l'un des domaines "+
				"d'application. On présentera en particulier les algorithmes sur les mots et sur les arbres pour traiter des données biologiques.</p>"+
				"<h3>Compétences acquises</h3>"+
				"<ul><li>Modéliser un problème bio-informatique en termes de structures de données (mots, arbres, graphes). </li>"+
				"<li>Utilisation des principaux algorithmes, méthodes et heuristiques développées en bio-informatique ou dans des domaines "+
				"de l'informatique fondamentale et pertinent pour la bio-informatique. </li>"+
				"<li>Mesurer le potentiel applicatif des méthodes et outils développés en bio-informatique pour d'autres champs "+
				"applicatifs tels les sciences sociales. </li>"+
				"<li>Avoir une vue sur l'ensemble des outils et implémentations mis à disposition par la communauté de recherche.</li></ul>",
            "en": ""
        },
        "html": "ENJ1BS9207_01/algorithmique-pour-la-bio-informatique-et-graphe"
    },

    "J1SB9700" : {
        "id": "J1SB9700",
        "acronym": "Visu3D",
        "title": "Visualisation et Exploration de Données 3D",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Traitement automatique et analyse d'objets biologiques arborescents (structures secondaires d'ARNs, "+
                "architecture de plantes, etc.): "+
                "<ul><li>comparaison d'arborescences, </li>"+
                "<li>distance d'édition (opérations structurelles élémentaires, opérations d'édition).</li>"+
                "</ul></li>"+
                "<li> Formulation en termes de problème d'optimisation, "+
                "<ul><li>algorithmes efficaces en temps et en espace, </li>"+
                "<li>solutions incrémentales, </li>"+
                "<li>programmation dynamique. </li></ul>"+
                "</li>"+
				"<li>Réseaux d'interactions et métaboliques, voies métaboliques. </li>"+
				"<li>Exploration des relations du type \"guilt by association\", recherche de chemins et sous-graphes indiquant des voies de signalisation, "+
				"recherche de modes élémentaires.</li></ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Objectifs pédagogiques</h3>"+
				"<p>Présenter les méthodes informatiques d'exploitation de grandes masses de données, dont la bioinformatique est l'un des domaines "+
				"d'application. On présentera en particulier les algorithmes sur les mots et sur les arbres pour traiter des données biologiques.</p>"+
				"<h3>Compétences acquises</h3>"+
				"<ul><li>Modéliser un problème bio-informatique en termes de structures de données (mots, arbres, graphes). </li>"+
				"<li>Utilisation des principaux algorithmes, méthodes et heuristiques développées en bio-informatique ou dans des domaines "+
				"de l'informatique fondamentale et pertinent pour la bio-informatique. </li>"+
				"<li>Mesurer le potentiel applicatif des méthodes et outils développés en bio-informatique pour d'autres champs "+
				"applicatifs tels les sciences sociales. </li>"+
				"<li>Avoir une vue sur l'ensemble des outils et implémentations mis à disposition par la communauté de recherche.</li></ul>",
            "en": ""
        },
        "path": "http://www.u-bordeaux.fr/formation/2015/PRMASB_171/master-biologie-sante-specialite-bioimagerie/enseignement",
        "html": "ENJ1SB9700_01/visualisation-et-exploration-de-donnees-3d"
    },


    "J1BS9206" : {
        "id": "J1BS9206",
        "acronym": "POA",
        "title": "Programmation Objet Avancée",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        'background_color': '#e8e8e8',
        "visibility": "visible",
        "contents": {
            "fr": "",
            "en": ""
        },
        "html": "ENJ1BS9206_01/programmation-objet-avancee"
    },

    "J1INAW12" : {
        "id": "J1INAW12",
        "acronym": "AppObj",
        "title": "Approche objet",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Rappels de programmation objet</li>"+
				"<li>Concepts avancés : exceptions, clonage, classes génériques, collections, itérations, classes internes...</li>"+
				"<li>Utilisation de quelques modèles de conception objets : Adaptateur, Décorateur, Observable ...</li>"+
				"<li>Utilisation de la programmation objet dans certains types de développements : IHM, Système ...</li>"+
				"</ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Pré-requis</h3>"+
				"<ul><li>Connaissances de la programmation impérative (langage C)</li>"+
				"<li>Connaissance et première utilisation d'un langage de programmation à objet (Java,C++,...)</li></ul>",
            "en": ""
        },
        "html": "ENJ1INAW12_01/approche-objet"
    },

    "J1IN9413" : {
        "id": "J1IN9413",
        "acronym": "OICI",
        "title": "Outils d'indexation et de classification de l'information",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        "visibility": "visible",
        "background_color": "#0af9f9",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<p>Analyse de données</p>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Pré-requis</h3>"+
                "<p>Informatique : Algorithmique, Structures de Données et Programmation (niveau L3)</p>",
            "en": ""
        },
        "html": "ENJ1IN9413_01/outils-d-indexation-et-de-classification-de-l-information"
    },

    "J1IN9523" : {
        "id": "J1IN9523",
        "acronym": "SysAuto",
        "title": "Systémes Autonomes",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "tracks"    : "0x7",
        'background_color': '#ffa6fa',
        "visibility": "visible",
        "contents": {
            "fr":
                "<h2>Programme</h2><p>Le programme comprend en particulier les points suivants:</p>"+
                "<h3>Configurations et plates-formes :</h3>"+
                "<p>Les systèmes actuels les plus pertinents seront étudiés:</p>"+
                "<ol><li>drones aériens</li>"+
				"<li>robots terrestres</li>"+
				"<li>capteurs</li>"+
				"<li>drones sous-marins</li></ol>"+
				"<p>L'accent sera mis en particulier sur l'autonomie et les environnements systèmes et logiciels associés, "+
				"indispensables à la réalisation d'une mission l'envergure. En effet, le contrôle temps réel par un opérateur "+
				"extérieur n'étant pas toujours possible, un certain nombre de décisions doivent donc être prises de manière autonome "+
				"par le système embarqué. Néanmoins, de par la réglementation et pour des raisons opérationnelles, des informations "+
				"doivent être ramenées vers un environnement logiciel de contrôle, qui lui, est à la disposition d'un opérateur, "+
				"auquel il présente un certain nombre d'informations (signes vitaux - position, altitude, etc. - par exemple -). "+
				"Cette chaine logicielle est une clef de voute de ces systèmes complexes qu'il est important de maîtriser.</p>"+
				"<h3>Ecosystème :</h3>"+
				"<p>Les domaines d'application sont nombreux et cette filière s'est structurée localement et nationalement, "+
				"avec des interactions internationales fortes. Mais ce potentiel fort ne doit pas laisser croire que 'tout est "+
				"permis', et il est donc crucial d'avoir une bonne connaissance des réglementations en cours.</p>"+
				"<ol><li>domaines d'applications et cas concrets</li>"+
				"<li>structuration du domaine, régionale/nationale/internationale</li>"+
				"<li>règlementation</li></ol>"+
				"<h3>Problématiques de recherche :</h3>"+
				"<p>Ces systèmes offrent de nouvelles voies de développement mais soulèvent un certain nombre de problèmes théorique "+
				"ou plus applicatifs qui relèvent d'activités de recherche. Par exemple :</p>"+
				"<ol><li>la structuration en essaims (swarming) ou flotte d'appareils</li>"+
				"<li>la mobilité, les graphes de communication sous-jacents, la dynamique du système, les modèles associés</li>"+
				"<li>les techniques de type sense and avoid, la localisation en in-door et out-door</li>"+
				"<li>les technologies associées, les problématiques applicatives tracking video, traitement d'images, radio, etc.</li></ol>"+
				"<h3>Mise en oeuvre</h3>"+
				"<p>Enfin, il est important que les étudiants qui choisissent cette UE puissent être opérationnels immédiatement. "+
				"C'est pourquoi, ils seront formés aux bases de l'aéronautique et suivront une formation d'opérateur drone, indispensable "+
				"aujourd'hui pour pouvoir faire voler un tel appareil.</p>"+
				"<ol><li>Bases d'aéronautique</li>"+
				"<li>Formation opérateur (pour l'essentiel an auto-apprentissage) + examen final</li></ol>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Pré-requis<br></h3>"+
				"<p>UEs Réseaux, Administration Réseaux et Systèmes d'exploitation de M1</p>",
            "en": ""
        },
        "html": "ENJ1IN9523_01/systemes-autonomes"
    },

/**********************************************
Semester 10:
Réalisation d'un projet de recherche et/ou développement
**********************************************/

    "F1BS0201" : {
        "id": "F1BS0201",
        "acronym": "StageM2",
        "title": "Réalisation d'un projet de recherche et/ou développement",
        "ects": 30,
        "semester": 10,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "tracks"    : "0x7",
        'background_color': '#ffa6fa',
        "visibility": "visible",
        "contents": {
            "fr": "<h2>Programme</h2>"+
            "<ul><li>Stage en laboratoire de recherche ou en entreprise d'une durée de 5 à 6 mois.</li>"+
            "<li>Il repose sur un projet scientifique préalablement rédigé et soumis aux responsables de la spécialité.</li>"+
            "<li>Ce stage peut avoir lieu en France ou à l'étranger."+
                "<ul><li>Parcours recherche:"+
                "<ul><li>Sujet de stage proposé par le Maître de Stage après validation par la commission pédagogique "+
                "de Master et choisi par l’étudiant en accord avec le responsable du stage.</li>"+
                "</ul>"+
                "</li>"+
                "<li>Parcours professionnel:"+
                "<ul><li>Sujet de stage défini par le Maître de Stage et l’étudiant en accord avec le responsable pédagogique.</li></ul>"+
                "</li></ul></li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>Objectifs pédagogiques"+
                "<ul><li>Mise en situation dans un environnement professionnel pour la réalisation d'un projet de recherche "+
                "et/ou développement en appliquant les notions fondamentales de gestion d'un projet de recherche et/ou développement:"+
                "<ul><li>préparation</li>"+
                "<li>réalisation</li>"+
                "<li>analyse critique des résultats</li>"+
                "<li>synthèse et présentation des résultats</li>"+
                "<li>Applications de \"bonnes pratiques\" et de la \"démarche qualité\".</li>"+
                "</ul></li>"+
                "</ul></li>"+
                "<li>Compétences acquises"+
                "<ul><li>Compétence dans la gestion d'un projet de recherche et/ou développement.</li>"+
                "<li>Acquérir l'autonomie nécessaire pour mener un projet de recherche et/ou de développement</li>"+
                "<li>Acquérir la notion de travail en équipe projet.</li>"+
                "<li>Compétences , à analyser et critiquer les résultats, à synthétiser des résultats, à présenter à l'écrit "+
                "et à l'oral un projet et les résultats obtenus dans le cadre de ce projet.</li>"+
                "<li>Maîtrise de l’anglais pour les étudiants qui partent à l’étranger.</li>"+
                "</ul>"+
                "</li></ul>",
            "en": ""
        },
        "html": "ENF1BS0201_01/realisation-d-un-projet-de-recherche-et-ou-developpement"
    }

}
;/************************************
 * Jean-Christophe Taveau
 * Calendar
 * 2015
 ************************************/

 function TableCal() {
    this.cells = new Array(TableCal.NROWS);
    for (var row = 0; row < TableCal.NROWS; row++) {
        this.cells[row] = new Array(5);
    }
    this.reset();
}

TableCal.NROWS = 22;
TableCal.NCOLS = 5;

TableCal.prototype.reset = function() {
    for (var i=0; i < TableCal.NROWS; i++) {
        for (var j = 0; j < TableCal.NCOLS; j++) {
            this.cells[i][j] = 0;
        }
    }
}
;
/************************************
 * Jean-Christophe Taveau
 * Calendar
 * 2015-2017
 ************************************/


// Polyfill
if ( !Date.prototype.toCalString ) {
  ( function() {

    function pad(number) {
      if ( number < 10 ) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toCalString = function() {
      return this.getFullYear() +
        '-' + pad( this.getMonth() + 1 ) +
        '-' + pad( this.getDate() ) +
        'T' + pad( this.getHours() ) +
        ':' + pad( this.getMinutes() ) +
        ':' + pad( this.getSeconds() ) +
        '.' + (this.getMilliseconds() / 1000).toFixed(3).slice(2, 5);
    };

  }() );
}

/******************************************************
 *
 * E V E N T S
 *
 ******************************************************/

function setMasterOptions(extension) {
    if (typeof localStorage != undefined) {
        var e = document.getElementById('masterYear' + extension) || 1;
        var l = document.getElementById('masterTrack'+ extension) || 1;
        localStorage.masterYear  = e.options[e.selectedIndex].value;
        localStorage.masterTrack = l.options[l.selectedIndex].value;
    } else {
        alert("html5:: localStorage not supported");
    }
    updateCalendar();
}


function previousWeek() {
    var cal = document.getElementById("calendar");
    var y = parseInt(cal.dataset.year);
    var m = parseInt(cal.dataset.month);
    var d = parseInt(cal.dataset.day);
    var date = new Date(y,m,d-7);
    cal.dataset.year  = date.getFullYear();
    cal.dataset.month = date.getMonth();
    cal.dataset.day   = date.getDate();

    updateCalendar();
}

function nextWeek() {
    var cal = document.getElementById("calendar");
    var y = parseInt(cal.dataset.year);
    var m = parseInt(cal.dataset.month);
    var d = parseInt(cal.dataset.day);
    var date = new Date(y,m,d+7);
    cal.dataset.year  = date.getFullYear();
    cal.dataset.month = date.getMonth();
    cal.dataset.day   = date.getDate();

    updateCalendar();
}


/******************************************************
 *
 * C A L E N D A R
 *
 ******************************************************/

var calendar_data = {};
var table = new TableCal();

initCalendar();

/**
 *
 * Constructor
 *
 **/

function initCalendar() {
    var now = new Date();

    var cal = document.getElementById("calendar");
    cal.dataset.year  = now.getFullYear();
    cal.dataset.month = now.getMonth();
    cal.dataset.day   = now.getDate();

    // Load M1 events
    loadCalendarData('calendar_m1.json');
    // Load M2 events
    loadCalendarData('calendar_m2.json');
    // Load not-course events
    loadCalendarData('calendar_event.json');

}

function loadCalendarData(filename) {
    console.log('LOAD ' + filename);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            let data = JSON.parse(xhr.responseText); // Données textuelles récupérées
            Object.assign(calendar_data,data); // ECMAScript 2015
            updateCalendar();
        }
    };
    xhr.open("GET", "https://master-bioinfo-bordeaux.github.io/data/"+ filename, true);
    xhr.send(null);

}


function updateCalendar() {

    table.reset();

    var y = parseInt(document.getElementById("calendar").dataset.year);
    var m = parseInt(document.getElementById("calendar").dataset.month);
    var d = parseInt(document.getElementById("calendar").dataset.day);

    updateCalendarHeader(y,m,d);
    updateCalendarBody(y,m,d);
}

function updateCalendarHeader(y,m,d) {

    // Update table header thead
    var days = getWeekDays(y, m, d);
    var element = document.getElementById('calendar-lg-head');
    var html = '<tr><th class="hidden-xs">Hour</th>';
    for (var i = 0; i < days.length;i++) {
        html +='<th class="centered">'+days[i]+'</th>';
    }
    html +='</tr>';
    element.innerHTML = html;

    // Update Week Number
    document.getElementById('weeknum').innerHTML = 'Week ' + getISOWeekNum(y,m,d);
    document.getElementById('weeknum-small').innerHTML = getISOWeekNum(y,m,d);
}

function updateCalendarBody(y,m,d) {
    var masterYear  = parseInt(localStorage.masterYear) || 1; // Default M1
    var masterTrack = parseInt(localStorage.masterTrack) || 1; // Default track: C++Bio=1; GenEco=2,BAO=4;BSC=8

    // console.log(calendar_data);
    var today = new Date(y,m,d);
    var weekdays = [];
    weekdays[0] = {events:[],boxes:[]}; // MON
    weekdays[1] = {events:[],boxes:[]}; // TUE
    weekdays[2] = {events:[],boxes:[]}; // WED
    weekdays[3] = {events:[],boxes:[]}; // THU
    weekdays[4] = {events:[],boxes:[]}; // FRI


    // Search events occuring during this week

    for (var index in calendar_data) {
        var element = calendar_data[index];
        element.MSYear  = parseInt(element.ID[1]);
        element.MSTrack = parseInt(element.ID.substr(2,2),16);
        element.weekdayIndex = -1;
        // HACK: console.log(element);
        if (   (element.MSYear == masterYear || element.MSYear === 3)
            && ((element.MSTrack & masterTrack) === masterTrack || (element.MSTrack & masterTrack*16) === masterTrack*16 ) ) {
            var startDate = new Date(
                parseInt(element.date_start.substr(0,4)),
                parseInt(element.date_start.substr(5,2)) - 1,
                parseInt(element.date_start.substr(8,2)),
                parseInt(element.date_start.substr(11,2)),
                parseInt(element.date_start.substr(14,2))
            );
            var endDate   = new Date(
                parseInt(element.date_end.substr(0,4)),
                parseInt(element.date_end.substr(5,2)) - 1,
                parseInt(element.date_end.substr(8,2)),
                parseInt(element.date_end.substr(11,2)),
                parseInt(element.date_end.substr(14,2))
            );

            if (parseInt(element.date_start.substr(11,2)) == 0) {
                element.allDay = true;
            }
            else {
                element.allDay = false;
            }
            // HACK: console.log('START ' + startDate);

            // From MON to FRI
            for (var i = 1; i < 6; i++) {
                var day = new Date(y,m,d - today.getDay() + i);
                var dayD       = day.toCalString().substr(0,10);  // Days number since UTC
                var startDateD = element.date_start.substr(0,10); // Days number since UTC
                var endDateD   = element.date_end.substr(0,10);   // Days number since UTC
                // HACK: console.log(dayD,startDateD,endDateD,day, day.toCalString());
                if ( dayD >= startDateD && dayD <= endDateD ) { // HACK: What about multi-days event ?
                    // HACK: console.log(day + ' creates an event with ' + element.ID + ' ' +  element.apogee);
                    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                    element.startDate = startDate;
                    element.endDate   = endDate;
                    element.overlap   = false;
                    // element.duration  = Math.ceil(timeDiff / (1000 * 60)); // ms -> min
                    element.duration  = Math.round(timeDiff / (1000 * 60 * 60) * 2 ) * 30; // round to the nearest half hour (in minutes)
                    if (element.weekdayIndex == -1) {
                        element.weekdayIndex = i;
                        weekdays[i-1].events.push(element);
                    }
                    else {
                        // Already exists aka multiday event
                        // Copy element
                        var elementClone = element.constructor();
                        for (var attr in element) {
                            if (element.hasOwnProperty(attr)) elementClone[attr] = element[attr];
                        }
                        elementClone.weekdayIndex = i;
                        weekdays[i-1].events.push(elementClone);
                    }
                }
            }
        }
    }

    // Clean up daily events
    for (var i = 0; i < 5; i++) {
        // 1- Check Overlap(s)
        a_day = weekdays[i];
        for (var j = 0; j < a_day.events.length; j++) {
            if (!a_day.events[j].allDay && !a_day.events[j].overlap) {
                var box = {
                    startDate: a_day.events[j].startDate,
                    endDate  : a_day.events[j].endDate,
                    weekdayIndex : a_day.events[j].weekdayIndex,
                    children: []
                };
                box.children.push(a_day.events[j]);
                a_day.boxes.push(box);
                var start = a_day.events[j].startDate.getTime();
                var end   = a_day.events[j].endDate.getTime();
                for (var k = j + 1; k < a_day.events.length; k++) {
                    if (start < a_day.events[k].endDate.getTime() && end > a_day.events[k].startDate.getTime() && !a_day.events[k].allDay) {
                        a_day.events[k].overlap = true;
                        box.startDate = new Date(Math.min(box.startDate,a_day.events[k].startDate) );
                        box.endDate   = new Date(Math.max(box.endDate, a_day.events[k].endDate) );
                        box.children.push(a_day.events[k]);
                    }
                }
                var timeDiff = Math.abs(box.endDate.getTime() - box.startDate.getTime());
                box.duration  = Math.round(timeDiff / (1000 * 60 * 60) * 2 ) * 30; // round to the nearest half hour (in minutes)

            }
        }
        /*
        console.log('BOX ' +i+':');
        if (weekdays[i].boxes[0] !== undefined) {
            console.log(weekdays[i].boxes[0].startDate.toString() + ' - ' +  weekdays[i].boxes[0].endDate.toString());
             console.log(weekdays[i].boxes[0]);
        }
        */

        // 2- Sort events by time from 0800 to 1900
        weekdays[i].boxes.sort(function sort(a,b) {
            if (a.startDate.getTime() > b.startDate.getTime() ) {
                return 1;
            }
            else if (a.startDate.getTime() < b.startDate.getTime() ) {
                return -1;
            }
            else {
                return 0;
            }
        });
    }

    createEventCells(weekdays);
}


function getWeekDays(y,m,d) {
    var months    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var shortdays = ['SUN','MON','TUE','WED','THU','FRI'];
    var weekdays=[];
    var date = new Date(y,m,d);
    for (var i=1; i<=5; i++) {
        var day = new Date(y,m,d - date.getDay() + i);
        weekdays.push(shortdays[day.getDay()] +' <sub>' + day.getDate() + ' ' + months[day.getMonth()] +'</sub>');
    }

    // console.log(weekdays) ;
    return weekdays;
}



function getYYYYMMDD(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() < 10) ? ('0'+ date.getMonth()) : date.getMonth();
    var day   = (date.getDate() < 10) ? ('0'+ date.getDate()) : date.getDate();
    return year + month + day;
}

/**
 * Get the ISO week date week number
 * From http://techblog.procurios.nl/k/n618/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
 * By Taco van den Broek
 */
function getISOWeekNum(y,m,d) {
    var date = new Date(y,m,d);
	// Create a copy of this date object
	var target  = new Date(y,m,d);

	// ISO week date weeks start on monday
	// so correct the day number
	var monday   = (date.getDay() + 6) % 7;

	// ISO 8601 states that week 1 is the week
	// with the first thursday of that year.
	// Set the target date to the thursday in the target week
	target.setDate(target.getDate() - monday + 3);

	// Store the millisecond value of the target date
	var firstThursday = target.valueOf();

	// Set the target to the first thursday of the year
	// First set the target to january first
	target.setMonth(0, 1);
	// Not a thursday? Correct the date to the next thursday
	if (target.getDay() != 4) {
		target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
	}

	// The weeknumber is the number of weeks between the
	// first thursday of the year and the thursday in the target week
	return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000
}


function displayCalendarModal(eventID) {
    var type = eventID[0];  // C = Course or E = Event
    var html = '';
    // HACK: console.log('event ' + eventID + ' ' + type);
    if (type === 'C') {
        html = createCourseModal(eventID);
    }
    else if (type === 'E') {
        html = createEventModal(eventID);
    }
    else {
        // TODO = Problem ?
    }

    var el = document.getElementById('calendarModal');
    el.innerHTML = html;
    // HACK: console.log(el);

    // el.modal('show');
    $('#calendarModal').modal('show');
}

function createCourseModal(ID) {
    // HACK: console.log(calendar_data[ID]);
    var courseID = calendar_data[ID].apogee;
    var the_course = course_data[courseID];
    var image = the_course.image  || 'headinfo.jpg';
    var lang = /fr/i.test(navigator.language) ? 'fr' : 'en';

    // If the_course is a sub-course (ex: AEB-Info is a sub-part of AEB), then get the parent course for information
    if (the_course.link !== undefined) {
        the_course = course_data[the_course.link];
    }

    var html = '';
    html += '<div class="modal-dialog">';
    html +='<div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+the_course.short;
    html += '<span class="pull-right"><i class="fa fa-graduation-cap"> </i>&nbsp;'+the_course.ects+' ECTS&nbsp;&nbsp;&nbsp;</span>';
    html += '</h4>';
    html += '</div>'; // modal-header
    html += '<div class="modal-body">';
    html += '<div style="width:570px;height:80px;overflow:hidden">';
    html += '<img class="img-responsive" style="margin-top:-100px" src="img/'+image+'" alt="">';
    html += '</div>';
    html += '<h2>'+ the_course.title +'</h2>';
    html += '<ul class="nav nav-tabs">';
    html += '<li class="active"><a href="#en" data-toggle="tab">En</a></li>';
    html += '<li><a href="#fr" data-toggle="tab">Fr</a></li>';
    html += '<li><a href="#id" data-toggle="tab"><i class="fa fa-gears"></i></a></li></ul>';
    html += '<div class="tab-content clearfix">',
    html += '<div class="tab-pane active" id="en">'
    html += '<h3>Content</h3>' + (the_course.contents.en.program || 'Coming soon');
    html += '<h3>Objectives</h3>' + (the_course.contents.en.objectives || 'Coming soon');
    html += '<h3>Skills</h3>' + (the_course.contents.en.skills || 'Coming soon');
    html += '</div>';
    html += '<div class="tab-pane" id="fr">'
    html += '<h3>Programme</h3>' + (the_course.contents.fr.program || 'Bientôt disponible');
    html += '<h3>Objectifs</h3>' + (the_course.contents.fr.objectives || 'Bientôt disponible');
    html += '<h3>Compétences acquises</h3>' + (the_course.contents.fr.skills || 'Bientôt disponible');
    html += "</div>";
    html += '<div class="tab-pane" id="id">'
    html += '<br><dl class="dl-horizontal">';
    html += '<dt>Title:</dt><dd>'+ the_course.title +'</dd>';
    html += '<dt>Short Title:</dt><dd>'+ the_course.short +'</dd>';
    html += '<dt>Acronym:</dt><dd>'+ the_course.acronym +'</dd>';
    html += '<dt>Language:</dt><dd>'+ the_course.language +'</dd>';
    html += '<dt>Credits:</dt><dd>'+ the_course.ects +' ECTS</dd>';
    html += '<dt>Apogee:</dt><dd>'+ the_course.id +'</dd>';
    html += '</dl>';
    html += "</div>";
    html += "</div><hr>";
    html += '<a class="pull-right" href="' + (university_path + the_course.html) + '" target="_blank"> <i class="fa fa-university fa-2x"></i></a>&nbsp;&nbsp;';
    // html += '<button class="pull-right" href="' + (university_path + the_course.html) + '" target="_blank"> Moodle</button>&nbsp;&nbsp;<br>';
    html += '</div>'; // modal-body
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog

/*    var html = '';
    html += '<div class="modal-dialog">';
    html +='<div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+the_course.title;
    html += '<span class="pull-right"><i class="fa fa-graduation-cap"> </i>&nbsp;'+the_course.ects+' ECTS&nbsp;&nbsp;&nbsp;</span>';
    html += '</h4>';
    html += '</div>'; // modal-header
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/'+image+'" alt=""></p>';
    html += '';
    html += the_course.contents[lang];
    html += '<a class="pull-right" href="' + (university_path + the_course.html) + '" target="_blank"> <i class="fa fa-university fa-2x"></i></a>&nbsp;&nbsp;<br>';
    html += '</div>'; // modal-body
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog
*/

    return html;
}

function createEventModal(ID) {
    var the_event = course_data[calendar_data[ID].apogee];

    var html = '';
    html += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+the_event.title +'<span class="pull-right"><i class="' + the_event.icon +'"> </i>&nbsp;&nbsp;&nbsp;&nbsp;</span></h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/' + the_event.image + '" alt=""></p>';
    html += '';
    html += '<h2>' + calendar_data[ID].title + '</h2>';
    html += calendar_data[ID].description;
    html += '</div>';
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog

    return html;
}

function createEventCells(days) {
    //console.log("EVENTS OF THIS WEEK");
    // HACK: console.log(days);

    var html='';
    // ROW 0 = ALL DAY events
    html +='<tr><td  class="hidden-xs">All Day</td>';
    for (var column = 0; column < 5; column++) {
        html +='<td>';
        // AllDay events
        for (var i = 0; i < days[column].events.length; i++) {
            if ( days[column].events[i].weekdayIndex == (column+1) && days[column].events[i].allDay === true) {
                html += createEventCell(days[column].events[i]);
            }
        }
        html +='</td>';
    }
    html +='</tr>';


    // ROW 1 to n = From 08:00 to 19:00 in minutes
    for (var i = 0; i < TableCal.NROWS; i++) {
        var row = i*30 + 480;
        html += '<tr>';
        // HACK: console.log(row);
        if ( (row % 60) == 0) {
            html += '<td class="hidden-xs" rowspan="2">'+ ( (Math.ceil(row/60) < 10) ? ('0'+Math.ceil(row/60) ) : Math.ceil(row/60) )+':00</td>';
        }
        for (var column = 0; column < 5; column++) {
            // Regular events
            var contents = findEvent(days[column].boxes,row,column);
            if (table.cells[i][column] == 0) {
                html += createEmptyCell();
            }
            else {
                html += contents;
            }
        }
        html += '</tr>';
        // HACK: console.log(table);
    }

    // Last ROW = EVENING events
    html +='<tr><td class="hidden-xs">Evening</td><td></td><td></td><td></td><td></td><td></td></tr>';


    document.getElementById('calendar-lg-body').innerHTML=html;

}

function findEvent(events,start,col) {
    var day = col + 1 // col#0 = MONDAY = day#1
    var html='';
    var stack = [];
    var max_duration = 0;
    var found;
    for (var i = 0; i < events.length; i++) {
        var startMin = Math.round((events[i].startDate.getHours() + events[i].startDate.getMinutes()/60.0) * 2 ) * 30; // round to the nearest half hour (in minutes)
        var startMax = startMin + events[i].duration;
        var startDay = events[i].weekdayIndex;

        // TODO: Take into account the overlapping events !!!!!!!!!!!!!!!!!!!!!!
        // Event #1: 14:00-18:00
        // Event #2: 15:00-16:30
        // if (startMin >= start && startDay == day) { <<<<<<<<<<<<< DOES NOT WORK
        if (startMin == start && startDay == day) {
            // HACK: console.log('findEvent ' + startMin +' ' + start + ' ' + events[i].startDate + ' ' + events[i].children.length);
            found = events[i];
            max_duration = Math.max(events[i].duration, max_duration);

        }
    }

    if (found !== undefined) {
            // Choose the duration max
        // <td> with gray
        var background_color = (found.children.length > 1) ? '#eee' : course_data[found.children[0].apogee].background_color;
        html += '<td rowspan="'+ (found.duration / 60 * 2) +'" style="background-color: ' + background_color+';">';
        if (found.children.length > 1) {
            html+= '<a title="Overlapping Events"><i class="fa fa-2x fa-object-ungroup"></i></a>';
            for (var i=0; i < found.children.length; i++) {
                // Add each colliding event
                html += createEventCell(found.children[i]);
            }
        }
        else {
            html += createEventCell(found.children[0]);
        }

        // </td>
        html += '</td>';

        // Update cells
        for (var t=0; t < found.duration / 30; t++) {
            // HACK: console.log(max_duration + ' ' + 'table.cells[' + ( (start - 480 )/30 + t) +']['+col+']');
            table.cells[(start - 480 )/30 + t][col]++;
        }

    }



    return html;
}

function createEmptyCell() {
    return '<td>&nbsp;</td>';

}


function createEventCell(cal_event) {
    // HACK: console.log(JSON.stringify(cal_event) );
    var ID = cal_event.ID;

    var html = '';
    if (ID[0] === 'C' || ID[0] === 'E') {
        var courseID = calendar_data[ID].apogee;
        var the_course = course_data[courseID];
        var masterTrack = parseInt(localStorage.masterTrack) || 1; // Default track: C++Bio=1; GenEco=2,BAO=4;BSC=8
        // HACK: console.log('TRACK ' + masterTrack + ' ' + the_course.tracks + '='+parseInt(the_course.tracks,16) + ' '
        // +((parseInt(the_course.tracks,16) & masterTrack)) );

        html += '<div class="course" style="background-color: '+the_course.background_color+';">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a data-toggle="modal" ';
        html += 'href="javascript:void(0)" ';
        if (ID[0] === 'C' && (parseInt(the_course.tracks,16) & masterTrack) === masterTrack) {
            html += 'class="btn btn-danger btn-xs" '; // Color is Red: 'required course' btn-danger
        }
        else if (ID[0] === 'C' && (parseInt(the_course.tracks,16) & masterTrack*16) === masterTrack*16) {
            html += 'class="btn btn-primary btn-xs" '; // Color is Green: 'elective' btn-success
        }
        else {
            html += 'class="btn btn-info btn-xs" '; // Color is Light blue for Event
        }
        html += 'onclick="displayCalendarModal(\'' + ID + '\')">';
        html += the_course.acronym + '</a>'; // TODO: &nbsp;[' + cal_event.Nbsession +'] ' Sessions number ??
        // HACK: console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
        var hh = (parseInt(cal_event.startDate.getHours())   < 10) ? ('0'+ cal_event.startDate.getHours())   : cal_event.startDate.getHours();
        var mm = (parseInt(cal_event.startDate.getMinutes()) < 10) ? ('0'+ cal_event.startDate.getMinutes()) : cal_event.startDate.getMinutes();

        if (hh !== "00") {
            var hh_lg = hh;
            var mm_lg = mm;
            html += '<span class="pull-right  hidden-sm hidden-xs" style="font-weight: bold">' + hh_lg + ':' + mm_lg + '-';
            hh_lg = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
            mm_lg = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
            html += hh_lg + ':' + mm_lg + '</span>';
            html += '<li class="hidden-lg hidden-md" style="font-weight: bold">' + hh + ':' + mm + '</li>';
            hh = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
            mm = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
            html += '<li class="hidden-lg hidden-md" style="font-weight: bold">' + hh + ':' + mm + '</li>';

        }
        else {
            html += '<span class="pull-right  hidden-sm hidden-xs" style="font-weight: bold">All Day</span>';
            html += '<li class="hidden-lg hidden-md" style="font-weight: bold">All Day</li>';
        }

        html += '</li>';
        //html += '<li>'+ cal_event.comment +'</li>';
        html += '<li class=" hidden-sm hidden-xs">'+ cal_event.lecturer+'<span class="pull-right">'+cal_event.type+'</span></li>';
        html += '<li">Grp: '+ cal_event.group+'</li>';

        // Location: Campus::Bldg@[Room\Amphi]_name
        var tmp = cal_event.location.match(/(.+)::/);
        var campus = tmp[1];
        if (campus !== "None") {
            tmp = cal_event.location.match(/::(.+)@/);
            var bldg = tmp[1];
            tmp = cal_event.location.match(/@(\w+)/);
            let room = 'Room';
            let room_name = '000';
            [room,room_name] = tmp[1].split('_');
            html += '<li class="hidden-sm hidden-xs">Campus: '+ campus+'</li>';
            html += '<li class="hidden-sm hidden-xs">Bldg: '+ bldg  +'</li>';
            html += '<li class="hidden-lg hidden-md">'+ bldg  +'</li>';
            html += '<li>'+room +': '+ room_name  +'</li>';
        }

        html += '</ul>';
        html += '</div>';

    }
    else {
        html += '<div class="course">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a href="javascript:void(0)" class="btn btn-success btn-xs" '; // Color is Red: 'required event' btn-danger and Blue: 'elective' btn-primary
        html += '>'+ cal_event.summary +'</a>';
        // HACK: console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
        var hh = (parseInt(cal_event.startDate.getHours())   < 10) ? ('0'+ cal_event.startDate.getHours())   : cal_event.startDate.getHours();
        var mm = (parseInt(cal_event.startDate.getMinutes()) < 10) ? ('0'+ cal_event.startDate.getMinutes()) : cal_event.startDate.getMinutes();
        html += '<span class="pull-right" style="font-weight: bold">' + hh + ':' + mm + '-';
        hh = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
        mm = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
        html += hh + ':' + mm + '</span>';
        html += '</li>';
        html += '<li>'+cal_event.location+'</li>';
        html += '</ul>';
        html += '</div>';
    }
    return html;
}

;
displayNews(1);

function NewsReader() {

}

function displayNews(old_index) {
    console.log(old_index +' '+ news_data.length);
    var html = '';
    // Most recent news
    var myDate = formatDate(news_data[0].date);
    var regexp = /(.*)\<!--more-->/;
    var text = news_data[0].contents.match(regexp);


    var el = document.getElementById('top_news');
    html += '<div id="mycarousel" class="carousel slide" data-ride="carousel">';
    html += '<div class="carousel-inner"><div class="item active">';
    html += '<img src="img/news/'+news_data[0].image+'.jpg" alt="" class="img-responsive">';
    html += '<div class="carousel-caption">';
    html += '<h5>'+news_data[0].title+'</h5>';
    html += '</div></div></div>';
    html += '<div class="media-body">';
    html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> '+ myDate +'</h4>';
    html += text[1];
    html += '</div> <!-- media-body -->';
    html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal(0)" class="btn btn-primary btn-sm">Read more</a></div>';

    el.innerHTML = html;

    // Four next news
    var max_news = Math.min(old_index + 4,news_data.length);
    var el = document.getElementById('news_old');
    html = '';
    for (var i=old_index; i < max_news; i++) {
        html += '<!-- NEWS #'+i+'-->';
        html += '<div class="media">';
        html += '<div class="media-left">';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<img class="media-object hidden-xs" src="img/news/'+news_data[i].image+'_thumb.jpg'+'" alt="newsIcon"></a>';
        html += '</div>'; // div media-left
        html += '<div class="media-body">';
        html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> '+ formatDate(news_data[i].date) +' </h4>';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<h5>'+news_data[i].title+'</h5></a>';
        html += '</div>';
        html += '</div>';
    }

    // Older news
    if (max_news <= news_data.length) {
        html += '<!-- NEWS #'+i+'-->';
        html += '<div class="media">';
        html += '<div class="media-left">';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<img class="media-object hidden-xs" src="img/news/misc_archive_thumb.jpg'+'" alt="newsIcon"></a>';
        html += '</div>'; // div media-left
        html += '<div class="media-body">';
        html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> Archive News</h4>';
        if (old_index != 1) {
            html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNews('+(old_index - 4)+')">';
            html += '<h5>Newer Posts</h5></a>';
        }
        if (old_index + 4 < news_data.length ) {
            html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNews('+(old_index + 4)+')">';
            html += '<h5>Older Posts</h5></a>';
        }

        html += '</div>';
        html += '</div>';
    }

   el.innerHTML = html;
}

function displayNewsModal(news_index) {
    var news = news_data[news_index];

    var el = document.getElementById('newsModal');
    var html = '';
    html += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+news.title+'</h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/news/'+news.image+'.jpg" alt=""></p>';
    html += '<h4><i class="fa fa-calendar"></i> '+ formatDate(news.date) +' </h4>';
    html += '<p>'+news.contents+'</p>';
    html += '</div>';
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog
    html += '</div>'; // modal

   el.innerHTML = html;
   console.log(el);

   // el.modal('show');
   $('#newsModal').modal('show');
}

function formatDate(yyyymmdd) {
    var months    = ['None','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var words = yyyymmdd.split('-');
    return months[parseInt(words[1]) ] + ' ' + words[2]+ ', ' + words[0];
}
