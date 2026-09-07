/** MAJ Calendrier 2026-2027, copie du site master-bioinfo-bordeaux.github.io**/

/*
 *  calendarmgr: Calendar Manager for the Master of Sciences in BioInformatics, Bordeaux, France Web Site
 *  Copyright (C) 2015-2017  Jean-Christophe Taveau.
 *
 *  This file is part of calendarmgr
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with calendarmgr.  If not, see <http://www.gnu.org/licenses/>.
 *
 *../node_modules/.bin/babel tool_ics.js -o tool_ics_j5.js
 *
 * Authors:
 * Jean-Christophe Taveau
 */


// var university_path = "http://www.u-bordeaux.fr/formation/2015/PRMABS_121/master-recherche-professionnel-mention-biologie-sante-specialite-bioinformatique/enseignement/";
var u_path = "https://www.u-bordeaux.fr/formation/";
var master_path = "/PRMA_74/bio-informatique/enseignement/";
var u_year = "2020";
var university_path = u_path + u_year + master_path;


/**
 * 2016 - 2020
 */

var course_data = {
  "4TBIEVNT": {
    "acronym": "Event",
    "background_color": "#FC9272",
    "contents": {
      "en": "Coming soon.",
      "fr": "Bient&ocirc;t disponible."
    },
    "ects": 0,
    "icon": "fa fa-graduation-cap",
    "id": "4TBIEVNT",
    "image": "headconf.jpg",
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

/********************************
  S E M E S T R E  7
 ********************************/
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
    "coordinators": 'Karkar S.',
    "background_color": "#eef409",
    "contents": {
      "en": {
        'program': `<p>In this course, we will explore the bioinformatician core activities ranging from the data mining using databases 
        in molecular biology to the design of bioanalysis while exploiting methods dedicated to sequence alignments. </p>
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
        en biologie moléculaire à la bioanalyse tout en exploitant des méthodes dédiées aux séquences d'alignement. </p>
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
  "4TBI705U": {
    "apogee": "4TBI705U",
    "short": "BioStatistics",
    "language": "English (tutorials) + French (lectures).",
    "acronym": "BSTATS",
    "coordinators": 'Nogues X',
    "background_color": "#D0A6FF",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': `<ul>
          <li>Consolider la capacité à mettre en œuvre les outils statistiques pour la conception de plans d'expériences et l'analyse de donnée en biologie.</li>
          <li>Approfondir l'utilisation de certaines méthodes normalement déjà connues telles que l'analyse de variance, la régression linéaire notamment par l'initiation aux analyses de variances à 2 facteurs, la régression linéaire multiple,etc.</li>
          <li>Initier aux analyses multivariées.</li>
          <li>Permettre la mise en œuvre de ces analyses avec le logiciel R et former à l'interprétation des résultats.</li></ul>`,
        'objectives': `Les objectifs principaux sont:<ul> <li>(i) de pouvoir réaliser une analyse des données correctement et en routine,</li> 
                        et <li>(ii) d'élargir le spectre des outils maîtrisés.</li></ul>`,
        'skills': "Bient&ocirc;t disponible."
      },
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI705U",
    "image": "ue_biostats.jpg",
    "semester": 7,
    "title": "Biostatistiques",
    "tracks": "0x0F",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_146310/biostatistiques"
  },
  "4TBI706U": {
    "apogee": "4TBI706U",
    "short" : "Init-Python",
    "acronym": "INITPYTHON",
    "language": "English + French",
    "coordinators": 'Beurton-Aimar M',
    "background_color": "#0095FF",
    "contents": {
      "en": "Coming soon.",
      "fr": {
        'program': "<ul><li>Apprentissage des bases d\'un langage de programmation à travers l\'exemple du langage Python</li>"+
                "<li>Variables, Types,</li>"+
                "<li>Conditionnelles, Boucles</li>"+
                "<li>Fonctions</li>"+
                "</ul>"
      }
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI706U",
    "image": "ue_python.jpg",
    "semester": 7,
    "title": "Initiation à Python",
    "tracks": "0x0F",
    "visibility": "hidden",
    "html": "test"
  },
  "4TBI707U": {
    "apogee": "4TBI707U",
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
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI707U",
    "image": "ue_algoprogusi.jpg",
    "semester": 7,
    "title": "Algorithmique, Programmation et Utilisation des Syst\u00e8mes Informatiques",
    "tracks": "0x0F",
    "visibility": "hidden",
    "html": "FRUAI0333298FCOEN_2942/algorithmique-programmation-et-utilisation-des-systemes-informatiques"
  },


/********************************
  S E M E S T R E  8
    #1a9850 4TBA804U
    #006837 4TBA806U
    #9e0142 4TBE801U
    #d53e4f 4TBE802U
    #f46d43 4TBE803U
    #fdae61 4TBC801U
    #fee08b 4TBI801U
    #ffffbf 4TBI802U
    #e6f598 4TBI803U
    #abdda4 4TBI804U
    #66c2a5 4TBI806U
    #3288bd 4TBI809U
    #5e4fa2
 ********************************/
  "4TBA804U": {
    "apogee": "4TBA804U",
    "short": "Plant Biotechnology",
    "language": "French",
    "acronym": "BBP",
    "background_color": "#1a9850",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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
    "apogee": "4TBA806U",
    "short": "Plant Genetics",
    "language": "French",
    "acronym": "Genepi",
    "background_color": "#de77ae",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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
  "4TBE801U": {
    "apogee": "4TBE801U",
    "short" : "Biodiversity",
    'language': "French",
    "acronym": "BioDiv",
    "background_color": "#a4ff80",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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
    "apogee": "4TBE802U",
    "short" : "Terrestrial Ecosystems",
    'language': "French",
    "acronym": "EcoTerr",
    "background_color": "#d53e4f",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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
    "apogee": "4TBE803U",
    "short" : "Aquatic Environments",
    'language': "French",
    "acronym": "Aqua",
    "background_color": "#f46d43",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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
  "4TBC801U" : {
    "apogee": "4TBC801U",
    "short" : "Object Programming",
    "language": "French",
    "acronym": "POO",
    "background_color": "#fdae61",
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
    "background_color": "#fee08b",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI801U",
    "image": "ue_algoprog2.jpg",
    "semester": 8,
    "title": "Algorithmique et Programmation Avanc\u00e9es",
    "tracks": "0x01",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_3601/algorithmique-et-programmation-avancees"
  },
  "4TBI802U": {
    "apogee": "4TBI802U",
    "short": "R&D Project",
    "language": "English or French depending of the tutor",
    "acronym": "CPRD",
    "background_color": "#ffffbf",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': `<p>Ce module - réalisé sous la supervision d'un maître de stage - consiste 
          en une réalisation informatique d'un logiciel de taille importante.</p> 
          <p>Elle sera suivie d'un rapport écrit et d'une soutenance.</p>`,
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 9,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI802U",
    "image": "ue_project_s8.jpg",
    "semester": 8,
    "title": "Conception d'un Projet de Recherche et de D\u00e9veloppement",
    "tracks": "0x07",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_3594/conception-d-un-projet-de-recherche-et-de-developpement"
  },
  "4TBI803U": {
    "apogee": "4TBI803U",
    "short": "Databases",
    "language": "French",
    "acronym": "BDD",
    "background_color": "#e6f598",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI803U",
    "image": "ue_datacenter.jpg",
    "semester": 8,
    "title": "Bases de Donn\u00e9es : fondements et applications",
    "tracks": "0x01",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_3593/bases-de-donnees-fondements-et-applications"
  },
  "4TBI804U": {
    "apogee": "4TBI804U",
    "short": "NGS and Tools",
    "language": "French",
    "acronym": "NGS",
    "background_color": "#00b7ff",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI804U",
    "image": "ue_ngs.jpg",
    "semester": 8,
    "title": "Nouvelles G\u00e9n\u00e9rations de Sequen\u00e7age",
    "tracks": "0x07",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_2631/nouvelles-generations-de-sequencage"
  },
  "4TBC802U": {
    "apogee": "4TBC802U",
    "short": "Web Tech",
    "language": "English or French depending of the teacher",
    "acronym": "Web",
    "background_color": "#66c2a5",
    "contents": {
      "en": {

        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },

      "fr": {
        'program': "Comprendre et maîtriser les bases des technologies HTML, CSS et JavaScript",
        'objectives': "",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBC802U",
    "image": "ue_videos.jpg",
    "semester": 8,
    "title": "Technologies Web",
    "tracks": "0x70",

    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_13196/traitement-de-videos-et-modelisation-des-processus-dynamiques"
  },
  "4TBI810U": {
    "apogee": "4TBI810U",
    "short": "Blended Intensive Programme",
    "language": "English",
    "acronym": "BIP",
    "background_color": "#3288bd",
    "contents": {
      "en": {

        'program': "European Course about Artificial Intelligence in Forestry Remote Sensing",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },

      "fr": {
        'program': "Le cours est entièrement en anglais, voir le descriptif en anglais",
        'objectives': "",
        'skills': ""
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI810U",
    "image": "ue_bip.jpg",
    "semester": 8,
    "title": "Blended Intensive Programme",
    "tracks": "0x70",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_13196/traitement-de-videos-et-modelisation-des-processus-dynamiques"
  },
  "4TDE801U": {
    "apogee": "4TDE801U",
    "short": "OBI 2",
    "language": "English",
    "acronym": "OBI2",
    "background_color": "#eef409",
    "contents": {
      "en": {
        'program': "Coming soon",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Suite de l\'UE de 1er semestre avec une présentation des méthodes de phylogénie.",
        'objectives': "",
        'skills': ""
      }
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TDE801U",
    "image": "ue_obi.jpg",
    "semester": 8,
    "title": "Omiques et Bioinformatique 2",
    "tracks": "0x70",
    "visibility": "visible",
    "html": ""
  },
  "4TDE802U": {
    "apogee": "4TDE802U",
    "short": "Python DataSci.",
    "language": "English",
    "acronym": "PyDS",
    "background_color": "#D0A6FF", // "#3288bd", "#fee08b",
    "contents": {
      "en": {
        'program': "Coming Soon",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Le cours est constitué de deux parties: (i) Python avancé (ii) Machine Learning",
        'objectives': "",
        'skills': ""
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TDE802U",
    "image": "ue_datascience.jpg",
    "semester": 8,
    "title": "Python et Science des Données",
    "tracks": "0x70",
    "visibility": "visible",
    "html": ""
  },
  "4TBIN01U": {
    "apogee": "4TBIN01U",
    "acronym": "StgVol",
    "background_color": "#009558",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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

/*************************
   S E M E S T R E   9
 *************************/

  "4TBA903U": {
    "apogee": "4TBA903U",
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
    "apogee": "4TBA904U",
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
  "4TBE901U": {
    "apogee": "4TBE901U",
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
    "apogee": "4TBE902U",
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
  "4TBC901U" : {
    "apogee": "4TBC901U",
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
    "visibility": "visible",
    "html": "PRMA_68/informatique/enseignement/FRUAI0333298FCOEN_2464/approche-objet"
  },
  "4TBI901U": {
    "apogee": "4TBI901U",
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
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_5228/bioinformatique-structurale"
  },
  "4TBI902U": {
    "apogee": "4TBI902U",
    "short": "Bioinformatics Sector",
    "language": "French",
    "acronym": "FILBI",
    "background_color": "#A4FF80",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 3,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI902U",
    "image": "ue_sector.jpg",
    "semester": 9,
    "title": "Fili\u00e8res de la Bioinformatique",
    "tracks": "0x0F",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_5226/filieres-de-la-bioinformatique"
  },
  "4TBI903U": {
    "apogee": "4TBI903U",
    "short": "Software Engineering",
    "language": "French",
    "acronym": "GLog",
    "background_color": "#009558",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI903U",
    "image": "ue_project_dev.jpg",
    "semester": 9,
    "title": "G\u00e9nie Logiciel et Gestion de Projet",
    "tracks": "0x61",
    "visibility": "visible",
    "html": "FRUAI0333298FCOEN_5219/genie-logiciel-et-gestion-de-projet"
  },
  "4TBI904U": {
    "apogee": "4TBI904U",
    "short": "Data Science",
    "language": "French",
    "acronym": "DEA",
    "background_color": "#ffbc00",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI904U",
    "image": "ue_data.jpg",
    "semester": 9,
    "title": "Donn\u00e9es: De l'Entrep\u00f4t \u00e0 l'Analyse",
    "tracks": "0x07",
    "visibility": "visible",
    "html":"FRUAI0333298FCOEN_3607/donnees-de-l-entrepot-a-l-analyse"
  },
  "4TBI905U": {
    "apogee": "4TBI905U",
    "short": "Research & Dev",
    "language": "French",
    "acronym": "IRD",
    "background_color": "#cef6ce",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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
    "apogee": "4TBI906U",
    "short" : "Modeling Cell",
    "language": "French",
    "acronym": "MOCELL",
    "background_color": "#EEF409",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Bient&ocirc;t disponible.",
        'objectives': "Bient&ocirc;t disponible.",
        'skills': "Bient&ocirc;t disponible."
      }
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
  "4TBI907U": {
    "apogee": "4TBI907U",
    "short" : "Données et IA",
    "language": "French",
    "acronym": "IA",
    "background_color": "#807dba",
    "contents": {
      "en": {
        'program': "See French Version. English version coming soon.",
        'objectives': "Coming soon.",
        'skills': "Coming soon."
      },
      "fr": {
        'program': "Cette UE est enseignée dans le cadre du master informatique 2ème année MIAGE",
        'objectives': `Ce cours a pour objectif l'acquisition des aspects suivants:
          - Régression linéaire simple et multiple : approche empirique et probabiliste.
          - Analyse en composantes principales.
          - Classification hiérarchique ascendante et regroupement par la méthode des centres mobiles.
          - Analyse de variance et mise en place de groupes homogènes éventuels.
          - Etude de liaison entre deux variables qualitatives : test du chi deux d'indépendance.
          - Analyse factorielle des correspondances.`,
        'skills': `- Maîtriser l'expression écrite et orale de la langue française et ses techniques d'expression
          - Etre en capacité de stocker, gérer, extraire et indexer de l'information
          - Mise en lien des connaissances pour la prise de décisions d'ordre technique, stratégique, commercial et financière`
      }
    },
    "ects": 6,
    "icon": "fa fa-graduation-cap",
    "id": "4TBI907U",
    "image": "ue_mocell.jpg",
    "semester": 9,
    "title": "Données et Intelligence Artificielle",
    "tracks": "0x70",
    "visibility": "visible",
    "html":"PRMA_64/methodes-informatiques-appliquees-a-la-gestion-des-entreprises-miage/enseignement/FRUAI0333298FCOEN_6621/donnees-et-intelligence-artificielle"
  },
  "4TDE901U": {
    "apogee": "4TDE901U",
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
              "skills": `Contenu des UEs d'origine <a href="http://www.u-bordeaux.fr/formation/2020/PRMA_25/sciences-de-la-mer/enseignement/FRUAI0333298FCOEN_4820/systemes-d-information-geographique-1"><i class="fa fa-university fa-2x"></i></a> et <a href="http://www.u-bordeaux.fr/formation/2020/PRMA_25/sciences-de-la-mer/enseignement/FRUAI0333298FCOEN_4823/systemes-d-information-geographique-2"><i class="fa fa-university fa-2x"></i></a>`
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
  "4TBI001U": {
    "apogee": "4TBI001U",
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
  "BILBAO_001": {
    "short": "NGS & Methods",
    "language": "English",
    "acronym": "NGS",
    "background_color": "#00b7ff", /*#D0A6FF", */
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
  "4TBIALTR": {
    "acronym": "Alternance",

    "background_color": "#FA5858",
    "contents": {
      "en": "Coming soon.",
      "fr": "Semaine d'alternance en entreprise"
    },
    "ects": 0,
    "icon": "fa fa-bicycle",

    "id": "4TBIALTR",
    "image": "ue_internship.jpg",
    "semester": 11,
    "title": "Alternance",

    "tracks": "0x0F",
    "visibility": "visible"
  }
};

/************************************
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
/*
 *  calendarmgr: Calendar Manager for the Master of Sciences in BioInformatics, Bordeaux, France Web Site
 *  Copyright (C) 2015-2017  Jean-Christophe Taveau.
 *
 *  This file is part of calendarmgr
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with calendarmgr.  If not, see <http://www.gnu.org/licenses/>.
 *
 *../node_modules/.bin/babel tool_ics.js -o tool_ics_j5.js
 *
 * Authors:
 * Jean-Christophe Taveau
 */

const calDB = {
  "days": [
    "--",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ],
  "hours": [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "00"
  ],
  "locations": [
    "None::None",
    "Peixotto::A9",
    "Peixotto::A21-OMEGA",
    "Peixotto::A22",
    "Peixotto::A28-CREMI",
    "Peixotto::A29",
    "Peixotto::A30-LaBRI",
    "Peixotto::A33",
    "Bordes::B5",
    "Bordes::B6",
    "Bordes::B7",
    "Bordes::B18",
    "Carreire::Amphi",
    "Carreire::ED"
  ],
  "minutes": [
    "00",
    "10",
    "20",
    "30",
    "40",
    "50"
  ],
  "months": [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],
  "people": [
    "------",
    "Baldacci F",
    "Beauvoit B",
    "Benois-Pineau J",
    "Benot ML",
    "Bernaulte JJ",
    "Beurton-Aimar M",
    "Beven L",
    "Bonnafous P",
    "Bouffier L",
    "Bourqui R",
    "Boussicault A",
    "Boutillier X",
    "Bujan S",
    "Carrere M",
    "Chaumette S",
    "Cl&eacute;ment L",
    "Cochard D",
    "Colombi&eacute; S",
    "de Daruvar A",
    "David V",
    "Delmas O",
    "Desbarats P",
    "Dieuaide M",
    "Domenger JP",
    "Drouineau H",
    "Dubois S",
    "Fi&eacute;vet V",
    "Garenne A",
    "Giot R",
    "Grelard A",
    "Gr&eacute;mare A",
    "Hanquiez V",
    "Hernould M",
    "Heric&eacute; C",
    "H&eacute;ric&eacute; C",
    "Karkar S",
    "Lubac B",
    "Master",
    "Melan&ccedil;on G",
    "Noelke N",
    "Nogu&egrave;s X",
    "Normandin C",
    "Occala C",
    "Pinaud B",
    "Schurdi-Levraud V",
    "S&eacute;n&eacute;chal N",
    "Sirand-Pugnet P",
    "Taveau JC",
    "Th&eacute;bault P",
    "Uricaru R",
    "Valdenegro Toro M",
    "Zaragosi S"
  ],

  "status" : [
    "--",
    "Mr",
    "Ms",
    "Dr",
    "Pr"
  ],
  tracks : [
    {
        "key"  : 0,
        "value": "None"
    },
    {
        "key"  : 1,
        "value": "C++BIO[required]"
    },
    {
        "key"  : 2,
        "value": "GenOrg[required]"
    },
    {
        "key"  : 4,
        "value": "OrgEco[required]"
    },
    {
        "key"  : 8,
        "value": "BSC[required]"
    },
    {
        "key"  : 16,
        "value": "C++BIO[elective]"
    },
    {
        "key"  : 32,
        "value": "GenOrg[elective]"
    },
    {
        "key"  : 64,
        "value": "OrgEco[elective]"
    },
    {
        "key"  : 128,
        "value": "BSC[elective]"
    }
  ],

/*
  0x01: Biocomp mandatory (A1)
  0x02: SDBE mandatory (A2)
  0x03: Biocomp + SDBE mandatory
  0x04: Bioprod mandatory
  0x07: Biocomp + SDBE + BioProd mandatory
  0x08: Formation continue?
  0x0F: All tracks - BC + DS + BP + FC mandatory
  0x10: BioComp elective
  0x20: SDBE elective
  0x40: BioProd elective (A2)
  0x60: SDBE + BioProd elective
  0x61: BioComp mandatory + SDBE elective
  0x70:


*/
  "courses" : {
  // Semester 7
      "4TBI701U": {
        semester: "S07",
        source: "S7_IMAJS",
        acronym: "S07::IMAJS",
        apogee: "4TBI701U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI703U": {
        semester: "S07",
        source:"S7_OBI",
        acronym: "S07::OBI",
        apogee: "4TBI703U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI704U": {
        semester: "S07",
        source:"S7_ANGLAIS",
        acronym: "S07::Anglais",
        apogee: "4TBI704U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI705U": {
        semester: "S07",
        source:"S7_BSTATS",
        acronym: "S07::BSTATS",
        apogee: "4TBI705U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI706U": {
        semester: "S07",
        source:"S7_PYTHON",
        acronym: "S07::INITPYTHON",
        apogee: "4TBI706U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI707U": {
        semester: "S07",
        source:"S7_APU",
        acronym: "S07::APU",
        apogee: "4TBI707U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },

  // Semester 8
      "4TBA804U": {
        semester: "S08",
        source: "S8_BBP",
        acronym: "S08::BBP",
        apogee: "4TBA804U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBA806U": {
        semester: "S08",
        source: "S8_GENEPI",
        acronym: "S08::Genepi",
        apogee: "4TBA806U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBC801U": {
        semester: "S08",
        source: "S8_POO2",
        acronym: "S08::POO",
        apogee: "4TBC801U",
        isCourse: true,
        tracks: "0x10",
        year: 1
      },
      "4TBE801U": {
        semester: "S08",
        source: "S8_BIODIV",
        acronym: "S08::BioDiv",
        apogee: "4TBE801U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBE802U": {
        semester: "S08",
        source: "S8_ECOTERR",
        acronym: "S08::EcoTerr",
        apogee: "4TBE802U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBE803U": {
        semester: "S08",
        source: "S8_ECOAQUA",
        acronym: "S08::EcoAqua",
        apogee: "4TBE803U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBI801U": {
        semester: "S08",
        source: "S8_ALGOPRG2",
        acronym: "S08::AlgoPrg2",
        apogee: "4TBI801U",
        isCourse: true,
        tracks: "0x01",
        year: 1
      },
      "4TBI802U": {
        semester: "S08",
        source: "S8_CPRD",
        acronym: "S08::CPRD",
        apogee: "4TBI802U",
        tracks: "0x07",
        year: 1
      },
      "4TBI803U": {
        semester: "S08",
        source: "S8_BDD",
        acronym: "S08::BDD",
        apogee: "4TBI803U",
        isCourse: true,
        tracks: "0x01",
        year: 1
      },
      "4TBI804U": {
        semester: "S08",
        source: "S8_NGS",
        acronym: "S08::NGS",
        apogee: "4TBI804U",
        isCourse: true,
        tracks: "0x03",
        year: 1
      },
      "4TBC802U": {
        semester: "S08",
        source: "S8_WEBMOD",
        acronym: "S08::Web",
        apogee: "4TBC802U",
        isCourse: true,
        tracks: "0x70",
        year: 1
      },
      "4TBI810U": {
        semester: "S08",
        source: "S8_BIP",
        acronym: "S08::BIP",
        apogee: "4TBI810U",
        isCourse: true,
        tracks: "0x70",
        year: 1
      },
      "4TDE801U": {
        semester: "S08",
        source: "S8_OBI2",
        acronym: "S08::OBI2",
        apogee: "4TDE801U",
        isCourse: true,
        tracks: "0x02",
        year: 1
      },
      "4TDE802U": {
        semester: "S08",
        source: "S8_DS",
        acronym: "S08::DS",
        apogee: "4TDE802U",
        isCourse: true,
        tracks: "0x02",
        year: 1
      },
  // Semester 9
      "4TBI901U": {
        semester: "S09",
        source: "S9_STRUBIGL",
        acronym: "S09::StrubiGL",
        apogee: "4TBI901U",
        isCourse: true,
        tracks: "0x61",
        year: 2
      },
      "4TBI902U": {
        semester: "S09",
        source: "S9_FILBI",
        acronym: "S09::FILBI",
        apogee: "4TBI902U",
        isCourse: true,
        tracks: "0x0F",
        year: 2
      },
      "4TBI903U": {
        semester: "S09",
        source: "S9_GLOG",
        acronym: "S09::GLog",
        apogee: "4TBI903U",
        isCourse: true,
        tracks: "0x61",
        year: 2
      },
      "4TBI904U": {
        semester: "S09",
        source: "S9_DEA",
        acronym: "S09::DEA",
        apogee: "4TBI904U",
        isCourse: true,
        tracks: "0x07",
        year: 2
      },
      "4TBI905U": {
        semester: "S09",
        source: "S9_IRD",
        acronym: "S09::IRD",
        apogee: "4TBI905U",
        isCourse: true,
        tracks: "0x07",
        year: 2
      },
      "4TBI906U": {
        semester: "S09",
        source: "S9_MOCELL",
        acronym: "S09::MOCELL",
        apogee: "4TBI906U",
        isCourse: true,
        tracks: "0x70",
        year: 2
      },
      "4TBI907U": {
        semester: "S09",
        source: "S9_IA",
        acronym: "S09::IA",
        apogee: "4TBI907U",
        isCourse: true,
        tracks: "0x70",
        year: 2
      },
      "4TBC901U": {
        semester: "S09",
        source: "S9_POO",
        acronym: "S09::POO++",
        apogee: "4TBC901U",
        isCourse: true,
        tracks: "0x10",
        year: 2
      },
      "4TBA903U": {
        semester: "S09",
        source: "S9_QPG",
        acronym: "S09::QPG",
        apogee: "4TBA903U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TBA904U": {
        semester: "S09",
        source: "S9_PDR",
        acronym: "S09::PDR",
        apogee: "4TBA904U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TBIN01U": {
        semester: "S09",
        source: "S9_STGVOL",
        acronym: "S08::StgVol",
        apogee: "4TBIN01U",
        isCourse: true,
        tracks: "0xF0",
        year: 2
      },
      "4TBE901U": {
        semester: "S09",
        source: "S9_TDE2",
        acronym: "S09::TDE++",
        apogee: "4TBE901U",
        isCourse: true,
        tracks: "0x70",
        year: 2
      },
      "4TBE902U": {
        semester: "S09",
        source: "S9_EVOCOMM",
        acronym: "S09::EvoComm",
        apogee: "4TBE902U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TDE901U": {
        semester: "S09",
        source: "S9_SIG",
        acronym: "S09::SIG",
        apogee: "4TDE901U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TDE902U": {
        semester: "S09",
        source: "S9_IBS",
        acronym: "S09::IBS",
        apogee: "4TDE902U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },

  // Semester 10
      "4TBI001U": {
        semester: "S10",
        source: "S10_STAGE",
        acronym: "S10::Stage",
        apogee: "4TBI001U",
        isCourse: true,
        tracks: "0x0F",
        year: 2
      },

  // MS Events
      "4TBIEVNT": {
        semester: "MS",
        acronym: "Evt::Event",
        source: "MS_EVENTS",
        apogee: "4TBIEVNT",
        isCourse: false,
        tracks: "0x07",
        year: 3
      },
      "4TBIMEET": {
        acronym: "Evt::Conference",
        apogee: "4TBIMEET",
        isCourse: false,
        tracks: "0x00",
        year: 3
      },
      "4TBIPRSS": {
        acronym: "Evt::Press",
        apogee: "4TBIPRSS",
        isCourse: false,
        tracks: "0x07",
        year: 3
      },
      "4TBIVACA": {
        semester: "MS",
        source: "MS_VACANCES",
        acronym: "Evt::Holidays",
        apogee: "4TBIVACA",
        isCourse: false,
        tracks: "0x07",
        year: 3
      },
      "4TBIDFNS": {
        acronym: "Evt::Defense",
        apogee: "4TBIDFNS",
        isCourse: false,
        tracks: "0x0F",
        year: 3
      }
  },

  "events" : {
      "4TBIEVNT": {
        acronym: "Evt::Event",
        apogee: "4TBIEVNT",
        tracks: "0x00"
      },
      "4TBIMEET": {
        acronym: "Evt::Conference",
        apogee: "4TBIMEET",
        tracks: "0x00"
      },
      "4TBIPRSS": {
        acronym: "Evt::Press",
        apogee: "4TBIPRSS",
        tracks: "0x07"
      },
      "4TBIVACA": {
        acronym: "Evt::Holidays",
        apogee: "4TBIVACA",
        tracks: "0x0F"
      },
      "4TBIDFNS": {
        acronym: "Evt::Defense",
        apogee: "4TBIDFNS",
        tracks: "0x0F"
      },
      "Event": {
        acronym: "Evt::Event",
        apogee: "4TBIEVNT",
        tracks: "0x00"
      },
      "Conference": {
        acronym: "Evt::Conference",
        apogee: "4TBIMEET",
        tracks: "0x00"
      },
      "RevuePresse": {
        acronym: "Evt::Press",
        apogee: "4TBIPRSS",
        tracks: "0x07"
      },
      "Vacances": {
        acronym: "Evt::Holidays",
        apogee: "4TBIVACA",
        tracks: "0x0F"
      },
      "Alternance": {
        acronym: "Evt::Alternance",
        apogee: "4TBIALTR",
        tracks: "0x0F"
      },
      "Soutenance": {
        acronym: "Evt::Defense",
        apogee: "4TBIDFNS",
        tracks: "0x0F"
      }

  },
  "eventTypes" : {
      "Alternance"   : "4TBIALTR",
      "Conference"   : "4TBIMEET",
      "RevuePresse"  : "4TBIPRSS",
      "Event"        : "4TBIEVNT",
      "Vacances"     : "4TBIVACA",
      "Presentation" : "4TBIWRKG",
      "Soutenance"   : "4TBIDFNS"
  },

  "semesters": [
    "--",
    "S7",
    "S8",
    "S9",
    "S10"
  ],
  "students": [
    "All",
    "A",
    "B",
    "A1",
    "B1",
    "A2",
    "B2"
  ],
  "types": {
    "?": "Unknown",
    ALTERNANCE: "Alternance",
    CONFERENCE: "Conference",
    CONF: "Conference",
    CI: "Cours+TD",
    COURS: "Cours",
    DISTANCIEL:"Online",
    ELEARN:"E-learning",
    MOOC:"E-learning",
    EVENT:"Evenement",
    EXAM:"Examen",
    PRESENTATION:"Presentation",
    PROJET:"Projet",
    PRESS:"RevuePresse",
    RENTREE:"Rentrée",
    SOUTENANCE:"Soutenance",
    STAGE:"Stage",
    TD:"TD",
    TDM:"TD machine",
    TM:"TD machine",
    TP:"TP",
    VACANCES:"Vacances"
  },
  "years": [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027"
  ]
} // End of calDB


/*
 *  calendarmgr: Calendar Manager for the Master of Sciences in BioInformatics, Bordeaux, France Web Site
 *  Copyright (C) 2015-2017  Jean-Christophe Taveau.
 *
 *  This file is part of calendarmgr
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with calendarmgr.  If not, see <http://www.gnu.org/licenses/>.
 *
 *../node_modules/.bin/babel tool_ics.js -o tool_ics_j5.js
 *
 * Authors:
 * Jean-Christophe Taveau
 */


/***************** F U N C T I O N S  *****************/


const capitalize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase();

const getCourseType = (type) => calDB.types[type.toUpperCase()] || 'Cours + TD';


function getLecturer(name = "------") {
  for (let i in calDB.people) {
    let upeople = calDB.people[i].toUpperCase().replace(/&[E].*;/,'E').replace(/&[C].*;/,'C');
    if (upeople.indexOf(name) !== -1) {
      return calDB.people[i];
    }
  }
  return name;
}


/**
 * Buildings with a well-known nickname and campus of the buildings (A: Peixotto, B: Bordes)
 */
const BUILDINGS = {A21: 'A21-OMEGA', A28: 'A28-CREMI', A30: 'A30-LaBRI'};

/**
 * Campus written in the ICS files (Talence is the city, not a campus, but it is widely used)
 */
const CAMPUS = {
  peixotto: 'Peixotto',
  bordes: 'Bordes',
  carreire: 'Carreire',
  talence: 'Talence',
  tallence: 'Talence', // Typo found in some ICS
};

/**
 * General Syntax: <campus>::<building>@<Room|Amphi>_<name>
 * The ICS are filled by hand, so a lot of variants must be accepted:
 * <campus>::<building>@<Room|Amphi>_<name> - The reference syntax. Ex: `Talence::A28@Salle_005`
 * <building>@<Room|Amphi>_<name> - The campus (Peixotto | Bordes) is deduced from the building's name
 * The separators `@`, `/`, `_` are interchangeable and the blanks around them are ignored.
 * Ex: `A21/Salle Informatique A`, `Talence::A21@Salle 153`, `A13/ Salle 9`
 * The building may be buried in free text. Ex: `Talence::CREMI - Bât. A28@Salle_205`
 * The room's name may contain blanks. Ex: `Salle_Informatique A`
 * A remote course is detected with keywords. Ex: `Talence::DISTANCIEL@Salle_2`, `DISTANCIEL 3`
 * @<name> - Without specific building, it is assigned `CREMI (A28|A21)` with a `Room` whose name is <name>
 * @ - Returns an object with default props { campus: 'Peixotto', building: 'CREMI (A28|A21)', type: 'Room', name: '???' }
 * <nothing> | `PAS DE SALLE` - Returns an "empty" object with props { campus: '-', building: '-', type: '-', name: '-' }
 *           - The unknown fields are not shown (mainly for events like holidays)
 */
function getLocation(loc) {

  const unknown = {index: -1, campus: '-', building: '-', type: '-', name: '-', loc: loc};

  if (typeof loc !== 'string') {
    return unknown;
  }

  // Drop the CR of the ICS and the duplicated blanks
  const raw = loc.replace(/\r/g,'').replace(/\s+/g,' ').trim();
  if (raw === '' || raw === '-' || /^\(?(pas de salle|sans salle|no room|non sp[ée]cifi[ée]e?)\)?$/i.test(raw)) {
    return Object.assign(unknown,{loc: raw});
  }

  // Legacy short syntax: `@` alone or `@<name>` means a room of the CREMI
  const shorthand = raw.match(/^@([A-Za-z0-9?]*)$/);
  if (shorthand !== null) {
    return {
      index: 1,
      campus: 'Peixotto',
      building: 'CREMI (A28|A21)',
      type: 'Room',
      name: shorthand[1] || '???',
      loc: raw
    };
  }

  const location = Object.assign({},unknown,{loc: raw});

  // Split `<campus>::<the rest>`. The campus is optional
  const parts = raw.split('::');
  let tail = parts.pop().trim();
  let campus = parts.join('::').trim();

  // The building may be prefixed by free text like `CREMI - Bât.` and followed by its
  // nickname like `A28-CREMI`
  const building = tail.match(/\b([AB]) ?[-–]? ?([0-9]{1,2})(?: ?[-–] ?(?!salle|room|amphi|td|tp)[A-Za-zÀ-ÿ]+)?\b/i);
  if (building !== null) {
    const id = building[1].toUpperCase() + building[2];
    location.building = BUILDINGS[id] || id;
    // The campus deduced from the building is more accurate than the one written in the ICS
    location.campus = (id[0] === 'A') ? 'Peixotto' : 'Bordes';
    tail = tail.slice(building.index + building[0].length);
  }
  else if (/distanciel|visio|en ligne|remote/i.test(tail)) {
    location.building = 'Distanciel';
    tail = tail.replace(/^.*?(distanciel|visio|en ligne|remote)/i,'');
  }
  else if (campus === '' && CAMPUS[tail.toLowerCase()] !== undefined) {
    // Only a campus was given. Ex: `Talence`
    campus = tail;
    tail = '';
  }

  // Remove the separators sitting between the building and the room
  tail = tail.replace(/^[\s@/_.,;:-]+/,'').trim();

  // The kind of room, when given, is followed by a separator. Ex: `Salle_005`, `Amphi C`
  const kind = tail.match(/^(salle|room|amphi(?:th[eé]?[aâ]tre)?|td|tp)s?(?=$|[\s@/_.,;:-])[\s@/_.,;:-]*/i);
  if (kind !== null) {
    const word = kind[1].toLowerCase();
    location.type = (word === 'td' || word === 'tp') ? word.toUpperCase()
      : (word.startsWith('amphi')) ? 'Amphi' : 'Salle';
    tail = tail.slice(kind[0].length);
  }

  // Whatever remains is the room's name, blanks included. Ex: `Informatique A`
  const name = tail.replace(/_+/g,' ').replace(/\s+/g,' ').trim();
  if (name !== '') {
    location.name = name;
    if (location.type === '-') {
      location.type = 'Salle';
    }
  }

  if (location.campus === '-' && campus !== '') {
    location.campus = CAMPUS[campus.toLowerCase()] || capitalize(campus);
  }

  // Nothing was recognized: the location is not displayed
  if (location.building === '-' && location.name === '-' && location.campus === '-') {
    return Object.assign(unknown,{loc: raw});
  }

  location.index = 4;

  return location;
}

/**
 * One-line version of a location. Ex: `A28-CREMI - Salle 205`
 * Returns an empty string when nothing is known about the location
 */
function formatLocation(location) {
  if (location === undefined || location === null) {
    return '';
  }
  if (typeof location === 'string') {
    return location;
  }
  const words = [];
  if (location.building !== '-') {
    words.push(location.building);
  }
  if (location.name !== '-') {
    words.push(location.type + ' ' + location.name);
  }
  return words.join(' - ');
}

/**
 * Room of an event written by hand in `rooms.js`, `undefined` if there is none.
 * The keys are tried from the most specific to the most general:
 * `<source> YYYY-MM-DD HH:MM` - one course. Ex: `S9_IA 2026-09-15 14:00`
 * `<source> YYYY-MM-DD`       - one day.    Ex: `S9_POO 2026-09-14`
 * `<source> <type> <group>`   - Ex: `S7_PYTHON Cours+TD G1`
 * `<source> <type>`           - Ex: `S7_PYTHON TD machine`
 * `<source>`                  - the whole UE. Ex: `S9_IA`
 */
function getRoom(ueID,ev) {
  if (typeof room_overrides === 'undefined') {
    return undefined;
  }
  const day = `${ev.start.year}-${ev.start.month.toString().padStart(2,'0')}-${ev.start.day.toString().padStart(2,'0')}`;
  const keys = [
    `${ueID} ${day} ${ev.start.time}`,
    `${ueID} ${day}`,
    `${ueID} ${ev.type} ${ev.group}`,
    `${ueID} ${ev.type}`,
    `${ueID}`
  ];
  // The keys are compared without their case, to forgive `g1` instead of `G1`
  const table = Object.entries(room_overrides).reduce( (accu,[k,v]) => {
    accu[k.toLowerCase().replace(/\s+/g,' ').trim()] = v;
    return accu;
  },{});
  const key = keys.map( k => k.toLowerCase()).find( k => table[k] !== undefined);

  return (key !== undefined) ? table[key] : undefined;
}

/**
 * Room written in the `Lieu:` of a description copied from ADE, `undefined` if there is none.
 * The rows of the ICS are folded (RFC 5545): the description continues on the next rows
 * as long as they begin with a blank
 *
 * @param rows - All the rows of the ICS
 * @param index - Row of the `DESCRIPTION`
 */
function getPlace(rows,index) {
  let description = rows[index];
  for (let i = index + 1; i < rows.length && /^[ \t]/.test(rows[i]); i++) {
    description += rows[i].substr(1);
  }
  const place = description.match(/Lieu ?: ?([^\\]*)/);

  return (place !== null) ? place[1] : undefined;
}

function yyyymmdd(date) {
  return `${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2,'0')}${date.getDate().toString().padStart(2,'0')}`;
}

function getDate(datetime) {
  // Format with TimeZone ID= DTSTART;TZID=Europe/Paris:20170908T140000
  // Format with GMT = DTSTART:20170908T140000
  // HACK: console.log(datetime);
  const yyyy = parseInt(datetime.substr(0,4));
  const mm = parseInt(datetime.substr(4,2))-1; // Month from 0 to 11
  const dd = parseInt(datetime.substr(6,2));
  const HH = (datetime.length > 8) ? parseInt(datetime.substr(9,2)) : 0;
  const MM = (datetime.length > 8) ? parseInt(datetime.substr(11,2)) : 0;

  // UTC Time
  // Timezone forced to Europe/Paris
  const date = (datetime.indexOf('Z') !== -1) ? new Date( Date.UTC(yyyy,mm,dd,HH,MM)) : new Date(yyyy,mm,dd,HH,MM);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    time: `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`,
    date: date
  }
}

function getDescription(title = "None") {
  return title;
}

function createCalendarID(e) {
  let login = 'import';
  let id = 'None@import';
  if (e.acronym) {
    let timestamp = new Date().toISOString().replace(/[-:.Z]/g,'');
    timestamp = timestamp.substr(0,timestamp.length -3) + (++EVENT_COUNT).toString().padStart(3,'0');
    id = ( (e.isCourse) ? "C" : "E") + e.year + e.tracks + timestamp + "@" + login;
  }
  return id;
}

/**
 * Create event for Master Agenda
 *
 * The syntax is the following for the event/course description:
 * - Course: <Acronym>**<Lecturer>**<Type>**<Group>
 * - Event : <Acronym>**<Description>**<Lecturer>
 *
 * For the location, the syntax is:
 * <campus>::<building>@<[Room|Amphi]_<number_or_name>
 * Ex: Talence::A28-CREMI@Room_999
 *
 */
function createEvent(ueID,e) {

  let ev = {};
  ev.date_start  = `${e.start.year}-${e.start.month.toString().padStart(2,'0')}-${e.start.day.toString().padStart(2,'0')}T`;
  ev.date_end    = `${e.end.year}-${e.end.month.toString().padStart(2,'0')}-${e.end.day.toString().padStart(2,'0')}T`;
  ev.date_start += e.start.time;
  ev.date_end   += e.end.time;

  ev.start = e.start;
  ev.end = e.end;

  const course = Object.values(calDB.courses).filter(c => c.source === ueID)[0];
  // HACK console.log(course);
  // HACK console.log(e);

  ev.apogee = course.apogee;
  ev.acronym = course.acronym;

  let words = e.content.split('**');

  ev.isCourse = calDB.courses[ev.apogee].isCourse;
  ev.year = calDB.courses[ev.apogee].year;
  ev.tracks = calDB.courses[ev.apogee].tracks.substr(2,2);

  ev.allDay = e.allDay;
  if (words.length > 1) {
  ev.lecturer = getLecturer(words[1]);
  ev.type = getCourseType(words[2]);
  ev.group = capitalize(words[3]) || "All";
  } else {
   ev.lecturer = "TBD";
  ev.type = "Cours";
  ev.group =  "All";
  }
  // Rooms in order of priority: the ones written by hand in `rooms.js`, the ICS' LOCATION
  // and, at last, the `Lieu:` of its description. The first one really usable wins
  ev.location = [getRoom(ueID,ev), e.location, e.place]
    .map(getLocation)
    .find( loc => loc.index !== -1) || getLocation('');
  ev.title = e.title;
  ev.description = e.description; // Sometimes used by Events
  ev.ID = createCalendarID(ev);

  return ev;
}

/**
 * Parse ics file
 *
 * @author: Jean-Christophe Taveau
 */
function parse_ics(ueID,data) {
  var all_events = {};
  var ev;
  const rows = data.split(/\r?\n/);
  for (let i = 0; i < rows.length;i++) {
    var str = rows[i];
    if (str.indexOf('BEGIN:VEVENT') !== -1) {
      // New event
      ev = {sequence:0};
    }
    else if (str.indexOf('UID') !== -1) {
      console.log('Process Event ',str);
    }
    else if (str.indexOf('DTSTART') !== -1 && ev !== undefined) {
      const words = str.split(/[;:]+/);
      // Check if event is all the day
      ev.allDay =  (words.length === 3 && words[1] === 'VALUE=DATE') ? true : false;
      // HACK console.log(words);
      ev.start = getDate(words[words.length - 1]);
      console.info(ev);
    }
    else if (str.indexOf('DTEND') !== -1) {
      const words = str.split(/[;:]+/);
      // HACK console.log(words);
      ev.end = getDate(words[words.length - 1]);
    }
    else if (str.indexOf('SUMMARY') !== -1) {
      ev.content = str.substr(str.indexOf(':')+1);
    }
    else if (str.indexOf('LOCATION') !== -1 && ev !== undefined) {
      ev.location = str.substr(str.indexOf('TION:')+5);
    }
    else if (str.indexOf('DESCRIPTION') !== -1) {
      // The descriptions copied from ADE contain a `Lieu:` used as a fallback room
      ev.place = getPlace(rows,i);
      if (ueID.includes('MS_')) {
        // Multiple Lines is possible
        const matches = data.match(/DESCRIPTION:.*?\'\'\'([\s\S]*?)\'\'\'/);
        if (Array.isArray(matches) && matches.length > 1) {
          const cleaned = matches[1].split(/[\n\r]\ /).join('').replaceAll('\r','');
          console.info('MULTILINE',cleaned);
          const splits = cleaned.trim().split(']');
          ev.title = splits[0].slice(1);
          ev.description = splits[1];
        }
        else {
          ev.title = str.substr(str.indexOf(':')+1);
          ev.description = '';
        }
      }
      // For course only
      else {
        ev.title = str.substr(str.indexOf(':')+1);
        ev.description = '';
      }

    }
    else if (str.indexOf('EXDATE') !== -1) {
      // Exception dates for periodicity (RRULE)
      const words = str.split(/[;:]+/).filter( w => /^[0-9T]+$/.test(w) );
      console.log('EXDATES',words);
      if (ev.exdates) {
        ev.exdates.push(words[0].split('T')[0]);
      }
      else {
        ev.exdates = [words[0].split('T')[0]];
      }
    }
    else if (str.indexOf('RRULE') !== -1) {
      // TODO
      const params = str
        .match(/RRULE:(.*)/)[1]
        .split(';')
        .reduce( (result,pair) => {
          const kv = pair.split('=');
          result[kv[0].trim().toLowerCase()] = kv[1].trim();
          return result;
        },{});
      ev.periodic = true;
      if (!ev.exdates) {
        ev.exdates = [];
      }
      ev = {...ev,...params};
      console.log('PERIODIC',ev);
    }
    else if (str.indexOf('END:VEVENT') !== -1) {
      if (ev.periodic && ev.freq === 'WEEKLY') {
        // Duplicate the event in function of periodicity
        const today = {
          y: ev.start.date.getFullYear(),
          m: ev.start.date.getMonth(),
          d: ev.start.date.getDate(),
        };
        for (let i=0; i < +ev.count;i++) {
          let days = 7 * i;
          let nextDate = new Date(today.y, today.m, today.d+days);
          // Check if exceptions
          if (!ev.exdates.includes(yyyymmdd(nextDate))) {
            //console.log(ev.start.date,nextDate, `${yyyymmdd(nextDate)}`);
            // Create copy of original event
            let evi = {...ev};
            // Update start and end dates
            evi.start.year = nextDate.getFullYear();
            evi.start.month = nextDate.getMonth() + 1;
            evi.start.day = nextDate.getDate();
            evi.start.date = nextDate;
            evi.end.year = nextDate.getFullYear();
            evi.end.month = nextDate.getMonth() + 1;
            evi.end.day = nextDate.getDate();
            evi.end.date = nextDate;
            // Create object
            let obj = createEvent(ueID,evi);
            all_events[obj.ID] = obj;
          }
        }

      }
      else if (ev.periodic && ev.freq === 'DAILY') {
        // Duplicate the event in function of periodicity
        const today = {
          y: ev.start.date.getFullYear(),
          m: ev.start.date.getMonth(),
          d: ev.start.date.getDate(),
        };
        console.log('DAILY',ev.count);
        for (let i=0; i < +ev.count;i++) {
          let days = i;
          let nextDate = new Date(today.y, today.m, today.d+days);
          // Check if exceptions
          if (!ev.exdates.includes(yyyymmdd(nextDate))) {
            //console.log(ev.start.date,nextDate, `${yyyymmdd(nextDate)}`);
            // Create copy of original event
            let evi = {...ev};
            // Update start and end dates
            evi.start.year = nextDate.getFullYear();
            evi.start.month = nextDate.getMonth() + 1;
            evi.start.day = nextDate.getDate();
            evi.start.date = nextDate;
            evi.end.year = nextDate.getFullYear();
            evi.end.month = nextDate.getMonth() + 1;
            evi.end.day = nextDate.getDate();
            evi.end.date = nextDate;
            // Create object
            let obj = createEvent(ueID,evi);
            all_events[obj.ID] = obj;
          }
        }

      }

      else {
        let obj = createEvent(ueID,ev);
        all_events[obj.ID] = obj;
      }

    }
  } // End of for each row
  return all_events;
}

/*
Example #1: Periodic (Daily) the whole day
----------------------------------------------
BEGIN:VEVENT
DTSTART;VALUE=DATE:20220221
DTEND;VALUE=DATE:20220222
RRULE:FREQ=DAILY;UNTIL=20220225
DTSTAMP:20220211T090705Z
UID:01t0itj2fm76mqkuqg97i9gdds@google.com
CREATED:20220211T090538Z
DESCRIPTION:
LAST-MODIFIED:20220211T090638Z
LOCATION:
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:Vacances Hiver
TRANSP:TRANSPARENT
END:VEVENT


Example #2: Periodic (Weekly) at a given time
-----------------------------------------------
BEGIN:VEVENT
DTSTART;TZID=Europe/Paris:20220906T080000
DTEND;TZID=Europe/Paris:20220906T100000
RRULE:FREQ=WEEKLY;WKST=MO;UNTIL=20221101T225959Z;BYDAY=TU
DTSTAMP:20220211T090357Z
UID:27dv9lqhhqdgodcapjcoq8m1ia@google.com
CREATED:20220211T090303Z
DESCRIPTION:
LAST-MODIFIED:20220211T090303Z
LOCATION:
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:OBI**TEST
TRANSP:OPAQUE
END:VEVENT

*/

/*
 *  calendarmgr: Calendar Manager for the Master of Sciences in BioInformatics, Bordeaux, France Web Site
 *  Copyright (C) 2015-2017  Jean-Christophe Taveau.
 *
 *  This file is part of calendarmgr
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with calendarmgr.  If not, see <http://www.gnu.org/licenses/>.
 *
 *../node_modules/.bin/babel tool_ics.js -o tool_ics_j5.js
 *
 * Authors:
 * Jean-Christophe Taveau
 */


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


function parseIcal(txt) {
  let json = [];
  // Parse ical


  return json;
}

/******************************************************
 *
 * C A L E N D A R
 *
 ******************************************************/


var calendar_data = {};
var table = new TableCal();
let EVENT_COUNT = 0;

initCalendar();

/**
 *
 * Constructor
 *
 **/

function initCalendar() {
    const now = new Date();

    let cal = document.getElementById("calendar");
    cal.dataset.year  = now.getFullYear();
    cal.dataset.month = now.getMonth();
    cal.dataset.day   = now.getDate();

    // Check Spring of Fall Semesters
    console.log('Month',cal.dataset.month);
    let semesters = (cal.dataset.month < 7) ? ['S08', 'S10'] : ['S07','S09'];
    if (cal.dataset.month >= 11) {
      semesters = ['S07','S08', 'S09']
    }
    console.log(semesters);

    // Load M1 + M2 events
    const ues = Object.values(calDB.courses).filter( c => semesters.includes(c.semester) );
    console.log(ues);
    for (let ue of ues) {
      loadCalendarICS(ue.source);
    }

    // Load M2 events
    loadCalendarICS('MS_VACANCES');
    loadCalendarICS('MS_EVENTS');

    updateCalendar();
}

// Les ICS arrivent de facon asynchrone, bien apres le premier updateCalendar()
// de initCalendar(). On redessine a chaque arrivee, en groupant les reponses
// pour ne pas relancer un rendu complet 23 fois de suite.
var calendarRefreshTimer = null;

function scheduleCalendarRefresh() {
    clearTimeout(calendarRefreshTimer);
    calendarRefreshTimer = setTimeout(updateCalendar,50);
}

function loadCalendarICS(ueID) {
    // HACK console.log('LOAD ' + ueID);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // HACK: console.info('Try to load...',ueID,xhr.readyState,xhr.status);
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            let data = parse_ics(ueID,xhr.responseText);
            // Merge events...
            Object.assign(calendar_data,data);
            scheduleCalendarRefresh();
        }
    };
    const path = "https://master-bioinfo-bordeaux.github.io/data/";
    // HACK: console.info(`Load ${path}${ueID}.ics`)
    xhr.open("GET", `${path}${ueID}.ics`, true);
    xhr.send(null);
}

function loadCalendarData(filename) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            let data = JSON.parse(xhr.responseText); // Données textuelles récupérées
            // Merge events...
            Object.assign(calendar_data,data); // ECMAScript 2015
            updateCalendar();
        }
    };
    xhr.open("GET", "https://master-bioinfo-bordeaux.github.io/data/"+ filename, true);
    xhr.send(null);

}


function updateCalendar() {

    // HACK: console.log(calendar_data);
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

// Core function doing the job

function updateCalendarBody(y,m,d) {
  const masterYear  = parseInt(localStorage.masterYear) || 1; // Default M1
  const masterTrack = parseInt(localStorage.masterTrack) || 1; // Default track: C++Bio=1; GenEco=2

  console.log('ALL DATA',calendar_data);

  var today = new Date(y,m,d);
  var weekdays = [];
  weekdays[0] = {events:[],boxes:[]}; // MON
  weekdays[1] = {events:[],boxes:[]}; // TUE
  weekdays[2] = {events:[],boxes:[]}; // WED
  weekdays[3] = {events:[],boxes:[]}; // THU
  weekdays[4] = {events:[],boxes:[]}; // FRI

  // Search events occuring during this week

  for (let index in calendar_data) {
    const element = calendar_data[index];
    console.log(element);
    element.MSYear  = parseInt(element.ID[1]);
    element.MSTrack = parseInt(element.ID.substr(2,2),16);
    // Special cases of MS_EVENTS
    if (element.apogee === '4TBIEVNT' && element.lecturer === "MASTER1") {
      element.MSYear = 1;
    }
    else if (element.apogee === '4TBIEVNT' && element.lecturer === "MASTER2") {
      element.MSYear = 2;
    }
    // Special cases of groups; A1 = biocomp. A2 = SDBE+BioProd; All = No change
    if (element.group.toUpperCase() === 'A1') {
      element.MSTrack = element.MSTrack & 0x01 || element.MSTrack & 0x10;
    }
    else if (element.group.toUpperCase() === 'A2') {
      element.MSTrack = element.MSTrack & 0x02 || element.MSTrack & 0x20;
    }
    if (element.apogee === "4TBI804U" || element.acronym === "S08::NGS") {
      console.log('TTTTRACK',element.apogee,element.MSTrack,masterTrack);
    }

    element.weekdayIndex = -1;
    // HACK: console.log(element);
    if (  (element.MSYear == masterYear || element.MSYear === 3)
      && ((element.MSTrack & masterTrack) === masterTrack || (element.MSTrack & masterTrack*16) === masterTrack*16 ) ) {
      const startDate = new Date(
        element.start.year, element.start.month - 1, element.start.day,
        element.start.hour,element.start.minute
      );
      const endDate = new Date(element.end.year, element.end.month - 1, element.end.day,element.end.hour,element.end.minute);

      // HACK: console.log('START ' + element.allDay);

      // Gather events by weekdays from MON to FRI
      for (let i = 1; i < 6; i++) {
        const day = new Date(y,m,d - today.getDay() + i);
        const dayD       = day.toCalString().substr(0,10);  // Days number since UTC
        const startDateD = element.date_start.substr(0,10); // Days number since UTC
        const endDateD   = element.date_end.substr(0,10);   // Days number since UTC
        // HACK: console.log('DAYS',dayD,startDateD,endDateD,day, day.toCalString(),startDate,endDate);
        if ( dayD >= startDateD && dayD <= endDateD ) { // HACK: What about multi-days event ?
          // HACK: console.log(day + ' creates an event with ' + element.ID + ' ' +  element.apogee + ' at ' + startDate);
          const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
          element.startDate = startDate;
          element.endDate   = endDate;
          element.overlap   = false;

          // Round to the nearest half hour (in minutes)
          element.duration  = Math.round(timeDiff / (1000 * 60 * 60) * 2 ) * 30;
          if (element.weekdayIndex == -1) {
            element.weekdayIndex = i;
            weekdays[i-1].events.push(element);
          }
          else {
            // HACK console.log('MULTIDAY',element);
            // Already exists aka multiday event
            // Copy element
            var elementClone = element.constructor();
            for (let attr in element) {
                if (element.hasOwnProperty(attr)) elementClone[attr] = element[attr];
            }
            elementClone.weekdayIndex = i;
            weekdays[i-1].events.push(elementClone);
          }
        } // if
      } // for
    } // if
  } // for

  // HACK: console.log('WEEKDAYS',weekdays);

  // Clean up daily events for every weekday MON(0) to THU(4)
  for (let i = 0; i < 5; i++) {
    let a_day = weekdays[i];
    // 1- Sort events by time from 0800 to 1900
    a_day.events.sort(function sort(a,b) {
      a_time = a.start.hour + a.start.minute / 60;
      b_time = b.start.hour + b.start.minute / 60;
      if (a_time > b_time ) {
          return 1;
      }
      else if (a_time < b_time ) {
          return -1;
      }
      else {
          return 0;
      }
    });

    // 2- Check Overlap(s)
    for (let j = 0; j < a_day.events.length; j++) {
      if (!a_day.events[j].allDay && !a_day.events[j].overlap) {
        var box = {
          startDate: a_day.events[j].startDate,
          endDate  : a_day.events[j].endDate,
          weekdayIndex : a_day.events[j].weekdayIndex,
          children: []
        };
        box.children.push(a_day.events[j]);
        a_day.boxes.push(box);
        var start = box.startDate.getTime();
        var end   = box.endDate.getTime();
        for (let k = j + 1; k < a_day.events.length; k++) {
          console.log('OVERLAP ',k,start,end,box.startDate,Date.parse(box.startDate),
            a_day.events[k].acronym,
            a_day.events[k].startDate.getTime(),a_day.events[k].endDate.getTime()
          );
          if (start <= a_day.events[k].endDate.getTime() && end > a_day.events[k].startDate.getTime() && !a_day.events[k].allDay) {
            a_day.events[k].overlap = true;
            box.startDate = new Date(Math.min(box.startDate,a_day.events[k].startDate) );
            box.endDate   = new Date(Math.max(box.endDate, a_day.events[k].endDate) );
            box.children.push(a_day.events[k]);
            start = box.startDate.getTime();
            end   = box.endDate.getTime();
          }
        }
        var timeDiff = Math.abs(box.endDate.getTime() - box.startDate.getTime());
        box.duration  = Math.round(timeDiff / (1000 * 60 * 60) * 2 ) * 30; // Round to the nearest half hour (in minutes)
      }
    }

      /*
      console.log('BOX ' +i+':');
      if (weekdays[i].boxes[0] !== undefined) {
          console.log(weekdays[i].boxes[0].startDate.toString() + ' - ' +  weekdays[i].boxes[0].endDate.toString());
           console.log(weekdays[i].boxes[0]);
      }
      */
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

    // HACK  console.log(weekdays) ;
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
  const date = new Date(y,m,d);
  // Create a copy of this date object
  const target  = new Date(y,m,d);

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
    var image = the_course.image  || 'headinfo.jpg';
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
    console.log('EVENT',calendar_data[ID]);
    const html = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">${the_event.title} <span class="pull-right"><i class="${the_event.icon}"> </i>&nbsp;&nbsp;&nbsp;&nbsp;</span></h4>
        </div>
        <div class="modal-body">
          <p><img class="img-responsive" src="img/${the_event.image}" alt=""></p>
          <h2>${calendar_data[ID].title}</h2>
          ${calendar_data[ID].description} 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div> 
    </div>`;

    return html;
}

function createEventCells(days) {
    //console.log("EVENTS OF THIS WEEK");
    // HACK: console.log(days);
    console.log('DAYS');
    console.log(days);

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
            if (table.cells[i][column] === 0) {
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
    for (let i = 0; i < events.length; i++) {
        // round to the nearest half hour (in minutes)
        var startMin = Math.round((events[i].startDate.getHours() + events[i].startDate.getMinutes()/60.0) * 2 ) * 30;
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
            // HACK: console.log('Overlapping ',found.children);
            html+= '<a title="Overlapping Events"><i class="fa fa-2x fa-object-ungroup"></i></a>';
            for (let i=0; i < found.children.length; i++) {
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
        for (let t=0; t < found.duration / 30; t++) {
            // HACK: console.log(max_duration + ' ' + 'table.cells[' + ( (start - 480 )/30 + t) +']['+col+']');
            // HACK: console.log(t,start,(start - 480 )/30 + t,col);
            table.cells[(start - 480 )/30 + t][col]++;
        }

    }



    return html;
}
//function findEvent(events,start,col) {
//    var day = col + 1 // col#0 = MONDAY = day#1
//    var html='';
//    var stack = [];
//    var max_duration = 0;
//    var found = {is_found: false,children: []};
//
//    console.log(events);
//    i = 0;
//    while (!found.is_found && i < events.length) {
//      // round to the nearest half hour (in minutes) - BUG ?
//      var startMin = events[i].startDate.getHours() * 60 + Math.round((events[i].startDate.getMinutes()/60.0) * 2 ) * 30;
//      var startMax = startMin + events[i].duration;
//      var startDay = events[i].weekdayIndex;
//
//      // TODO: Take into account the overlapping events !!!!!!!!!!!!!!!!!!!!!!
//      // Event #1: 14:00-18:00
//      // Event #2: 15:00-16:30
//      // if (startMin >= start && startDay == day) { <<<<<<<<<<<<< DOES NOT WORK
//      if (startMin == start && startDay == day) {
//        console.log('findEvent ' + startMin +' ' + start + ' ' + events[i].startDate + ' ' + events[i].children.length);
//        found.day = day;
//        found.index = i;
//        found.children.push(events[i]);
//        found.start_min = startMin;
//        found.start_max = startMax;
//        max_duration = Math.max(events[i].duration, max_duration);
//        found.duration = max_duration;
//        // Check if any overlapping events
//        found = findOverlap(found,events);
//        found.is_found = true;
//      }
//      i++;
//    }
//
//    console.log('FOUND');
//    console.log(found);
//
//    if (found.is_found) {
//        // Choose the duration max
//        // <td> with gray
//        var background_color = (found.children.length > 1) ? '#eee' : course_data[found.children[0].apogee].background_color;
//        html += '<td rowspan="'+ (found.duration / 60 * 2) +'" style="background-color: ' + background_color+';">';
//        if (found.children.length > 1) {
//            // HACK: console.log('Overlapping ',found.children);
//            html+= '<a title="Overlapping Events"><i class="fa fa-2x fa-object-ungroup"></i></a>';
//            for (let i=0; i < found.children.length; i++) {
//                // Add each colliding event
//                html += createEventCell(found.children[i]);
//            }
//        }
//        else {
//            html += createEventCell(found.children[0]);
//        }

//        // </td>
//        html += '</td>';
//
//        // Update cells
//        for (let t=0; t < found.duration / 30; t++) {
//            // HACK: console.log(max_duration + ' ' + 'table.cells[' + ( (start - 480 )/30 + t) +']['+col+']');
//            // HACK: console.log(t,start,(start - 480 )/30 + t,col);
//            table.cells[(start - 480 )/30 + t][col]++;
//        }
//
//    }
//


//    return html;
//}

// Added in 2025/01/07
// JC Taveau
function findOverlap(selected,all_events) {
  for (let i = 0; i < all_events.length; i++) {
    // round to the nearest half hour (in minutes)
    let mins_from = all_events[i].startDate.getHours() * 60 + Math.round((all_events[i].startDate.getMinutes()/60.0) * 2 ) * 30;
    let mins_upto = mins_from + all_events[i].duration;
    let startDay = all_events[i].weekdayIndex;

    if (selected.index != i && selected.day == startDay && selected.start_min <= mins_from && mins_from < selected.start_max) {
      // Add overlapping event
      selected.children.push(all_events[i]);
      // Update
      selected.start_max = (selected.start_max < mins_upto) ? mins_upto : selected.start_max;
      selected.duration = selected.start_max - selected.start_min;
    }
  }
  return selected;
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
        var masterTrack = parseInt(localStorage.masterTrack) || 1; // Default track: C++Bio=1; SDBE=2,BioProd=4;FC=8
        // HACK: console.log('TRACK ' + masterTrack + ' ' + the_course.tracks + '='+parseInt(the_course.tracks,16) + ' '
        // +((parseInt(the_course.tracks,16) & masterTrack)) );
        let course_tracks = parseInt(the_course.tracks,16);
        if (cal_event.lecturer.toUpperCase() == 'MASTER1') {
          course_tracks = 15; // 0x0F
        }
        else if (cal_event.lecturer.toUpperCase() == 'MASTER2') {
          course_tracks = 240; // 0xF0
        }
        html += '<div class="course" style="background-color: '+the_course.background_color+';">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a data-toggle="modal" ';
        html += 'href="javascript:void(0)" ';
        if (ID[0] === 'C' && (course_tracks & masterTrack) === masterTrack) {
            html += 'class="btn btn-danger btn-xs" '; // Color is Red: 'required course' btn-danger
        }
        else if (ID[0] === 'C' && (course_tracks & masterTrack*16) === masterTrack*16) {
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
        html += `<li class=" hidden-sm hidden-xs">${cal_event.lecturer}<span class="pull-right">${cal_event.type}</span></li>`;
        html += '<li">Grp: '+ cal_event.group+'</li>';

        // Location: Campus::Bldg@[Room\Amphi]_name
        if (cal_event.location.index !== -1) {
            let campus = cal_event.location.campus;
            let bldg = cal_event.location.building;
            let room = cal_event.location.type;
            let room_name = cal_event.location.name;
            if (campus !== '-') {
              html += '<li class="hidden-sm hidden-xs">Campus: '+ campus+'</li>';
            }
            if (bldg !== '-') {
              html += '<li class="hidden-sm hidden-xs">Bldg: '+ bldg  +'</li>';
              html += '<li class="hidden-lg hidden-md">'+ bldg  +'</li>';
            }
            if (room_name !== '-') {
              html += '<li>'+room +': '+ room_name  +'</li>';
            }
          }
        else {
          console.warn('No location',cal_event);
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
        html += '<li>'+ formatLocation(cal_event.location) +'</li>';
        html += '</ul>';
        html += '</div>';
    }
    return html;
}


// displayNews(1);

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
