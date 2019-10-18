# Omiques et Bioinformatique 
*password* : obi2018 *Book*: Bio Informatique Dunod

*Cf Diapo Lecture 1 Moodle*
## Introduction : 
Crossroad of : 
* Biology
* Computer Science (Programming/Algorithmics)
* Mathematics (Stat)

From Primary data, produce new data (secondary)
1. Comparative method: Cross, compare data in order to extract similarities 
2. Stastical method : Statistical analysis in order to extract rules and constraints
3. Study objects via construction of mathematical model 

### Bioinformatics & Office softwares ? 
Amount of data is too large : (can't use Excel)
* Office softwares are inappropriate 
* Solution : 
    - Bioinformatics Tools 
    - Programmin language 

### Bioinfo & Programming language 
* Better understanding the logic behind a bioinformatics program 
* Useful for automatically combining several bioinformatics tools (pipeline)
* Automating a repetitive task 
* Write a small program that does not exist elsewhere 
>Example : Extract useful information from big data 
>- Get all the articles of your protein of interest 
>- Automatically search in the texte, pH values 
>- Add simple statistics 

### Data & Formats : DataBanks 
1552 Databases : 2016 

Generalist Banks :
* GenBank ENA 
* UniProtKB 
Specialzed DataBanks of a given : 
* Species : FlyBase 
* Scientific field : OMIM
* Technology : Ex: SWISS-2DPAGE
* Molecular type Ex: structure 3D-PDB


**Databanks store information as *flat files***
* Text File
* A specific format by columns 
* Each sequence is contained in an *entry* defined by a unique *key*
* Entry contains general information, annotaions + sequence 
* Information : 
    - Sequence Description (type,length,organism,phylogeny,etc)
    - Functions 
    - Cross references with other databanks 
    - *Features* Annotations ...
* Sequence at the end of the entry 

* Text file is different of Word Processing file 
* Flat file use ASCII Characters 
>!"#$%&'()*+,-./
0123456789:;<=>?
@ABCDEFGHIJKLMNO
PQRSTUVWXYZ[\]^_
`abcdefghijklmno
pqrstuvwxyz{|}~


**Databanks store information as flat file :**
- Organisation line by line : Field/Descriptor + Content 
- Give meaning to the text (semantics)

 **Data & Formats : Sequences**
 * Sequence using the single-letter format 
 * Nucleic Alphabet A,C,G,T (no U)
 * Protein alphabet : 20 letters + B + Z + X 
 * The most widely used format FASTA : Title (>TEXT)+sequence line 
 * other formats : 
    - Multi FASTA 
    - FASTQ

 <http://www.ncbi.nlm.nih.gov/gquery>

 Entrez : NCBI Bioinformatics platform offering databanks and tools (BLAST)
 Query in two steps : 
 * Choose the good/appropriate databank 
 * Write your request by combining : 
    * Field/Descriptor 
    * Keywords
    * Logical operators 

*Cf Diapo Lecture 2 Moodle*

## Phylogenetics 
### Comparison & Alignments 
Small reminder about sequence alignment 

**%Identities :** Measure the number of identities between 2 sequences 

|     |  A  |  C  |  G  |  T  |
| :---: | :---: | :---: | :---: | :---: |
| A   | 1   | 0   | 0   | 0   |
| C   | 0   | 1   | 0   | 0   |
| G   | 0   | 0   | 1   | 0   |
| T   | 0   | 0   | 0   | 1   |



**Quantification of similarity between 2 sequences :**
* Scores computed from a score matrix (substitution matrices based on evolution)

**Hamming Distance**
* From 2 seqs of same length, measure the differences between these 2 sequences 
**Edit Distance or Distance of Lenvensthtein**
* Measure the number operations in terms of insertions, deletions, substitutions, required to transform sequence s1 into s2

**Dynamic Programming: Optimization of comparison**
* Management of indels via gaps (-)
* Penalties of gab at the creation (+10) and extension (+1)
* Exact algorithms 
    - Algorithm of Needleman & Wunsch 
    - Algorithm of Smith & Waterman
**Algorithm of words (k-tuples)**
    - FASTA et BLAST : Algorithms with heuristics 

    