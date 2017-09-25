# Omics and Bioinformatics

*UE; 4TBI703U*

*password: ob2017*



## Introduction

### Definition

- Better understanding the logic behin bioinformatics program.

- Useful for automatically combining several bioinformatics tools (pipeline)

- Automating a repetitive task


### Data & Formats: DataBanks

**Generalist Banks:**

- GenBank, ENA

- UniProtKB

**Specialized DataBanks**

- species

- scientific field (Exemple: OMIM)

- technology

- molecular type

Databanks store informations as flat files. The organization is line by line: **(Field/Descriptor + Content)** and give meaning to the texts.

Text file is different of Word Processing file. Flats file use **ASCII** characters. European databanks use a two letter descriptor while american databanks use longer letters descriptor.

The most widely used format: **FASTA**: *Title* (>text) + *sequence* line(s). The length of the line is not important.

There is two variations of the FASTA format:

- Multi-FASTA (philogeny)

- FASTQ

  ​


```PDB
PDB:	SEQRES 1 A	5 GLY ARG GLU ALA THR
```

```FASTA
FASTA:	> Protein sequence
		GREAT
```



### Tools:

**NCBI GQUERY**

- (Field / Descriptor: Keywords(s)) + Logical_op + (Field / Descriptor: Keywords(s))...
- **Keywords** : Date(year, month, day)  / Organism ...
- **Logical operators** : AND	OR	BUTNOT
- **Query**:

```
(Author: taveau jc) AND (Title:hemoglobin) OR (Title: hemocyanin)
```

**Emboss**

*emboss.sourceforge.net/*

**Python + BioPython**





## Phylogenetics

Foundation of cladistics: Willi Hennig (1913-1976)

It's a series of logical rules for searching relationships (parent/child) without using fossils. The purpose is the reconstruction of evolutionary history of species by comparing gene (or protein) sequences of various species. There is two types of data (organism and molecular data).

In a classical study there is 4 steps:

- Data selection
- Sequence Alignment
- Construction of one (or several) trees
- Determination of robustness of trees



### Data selection:

It consists of choosing a good molecular marker related to the studied taxonomic group.

### Sequence Alignment

Quantification of similarity between 2 sequences.

​	**Comparions & Aligments:**

​	***Hamming Distance***: From 2 seqs of same legnth, measure the differences between these 2 seqs.

​	***Edit Distance or Distance of Levenshtein***: Measure the number of operations in terms of insertions, deletions & substitutions required to transform the sequence S1 into S2.

Managements of indels via gaps (-) and penalties of gap at the creation (+10) and extension (+1).

We have exacts algorithms:
- Needleman & Wunsch
- Smith & Waterman

and algorythm of words (k-tuples):
- FASTA & BLAST: heuristics

#### Needleman & Wunsch
- S(i,j) = max \ of:
  1) se(i,j) + S(i-1, j-1) for \ diagonal
  2) S(i-1,j) + P
  3) S(i,j-1) + P

|     |     | C    | A   | V   | A   | L    | E    |
| --- | --- | ---- | --- | --- | --- | ---- | ---- |
|     | 0   | -2   | -4  | -6  | -8  | -10  | -12  |
| C   | -2  | ↖ 9  | ← 7 | ← 5 | ← 3 | ← 1  | ← -1 |
| H   | -4  | ↑ 7  | ← 7 | ↖ 5 | ↖ 3 | ↖ 2  | ← 1  |
| E   | -6  | ↑ 5  | ↖ 6 | ↖ 4 | ↖ 4 | ← 2  | ↖ 8  |
| V   | -8  | ↑ 3  | ↖ 5 | ↖ 3 | ↖ 4 | ↖ 5  | ↑ 6  |
| A   | -10 | ↑ 1  | ↑ 8 | ← 6 | ← 8 | ← -6 | ↑ 4  |
| L   | -12 | ↑ -1 | ↑ 6 | ↖ 9 | ← 7 | ↖ 12 | ← 10 |
| E   | -14 | ↑ -3 | ↑ 4 | ↑ 7 | ↖ 8 | ↑ 10 | ↖ 18 |

1. Find the optimal pathway

18 : the start and the final score 0 top left : the end of the reading

Result :

- C--AVALE
- CHE-VALE

# Multiple Sequence Alignements (MSA)

## Simultaneous Alignement of several sequences

- Dynamic programming

  - Alignement of N sequences in a space of N dimensions
  - Memory for 5 sequences of 100 aas = 10Gb of ..... ....

## Progressive Algorithms : ClustalW

- Pairwise Alignements for all the combinations of sequences
- Groups of pairs strating from the closest

  - Hierarchical Ascendant CLassification
  - Tree of scores

- Multiple Alignement of progressive type (greedy algorithm)

  ### Progressive Algorithms : Center Star Method

- Step 1 : Pairwise Alignement

  - Multi FASTA

- Step 2 : ....

- Step 3 : Aggregate ALignements

  - Add gap in column, shift others

    ### CLustalW :

- Step 1 : Pairwise Alignements for all the combination of sequences

- Step 2 : Guide Tree

  - Calcul distance :
    -  1-y/x ; x = number of non gap position ; y = identical position
  - Build the guide tree using :

    - UPGMA
    - Neighbor-Joining

  - Use to build the phylogenic tree

- Step 3 : Aggregating the alignements

  - Follow the tress :

    - Start from the closest pairs
    - Compute at each node an alignement using dynamic Programming

  - Three possible cases :

    - Seq vs Seq
    - Seq vs Partial ALignement
    - .....

- Or aggregating - Computing the scores with Sum of Pairs (SOPs)

- COns : non re evaluation of the alignements during greedy period Iterative Algorithm : MUSCLE

- Optimization of global scores by iterations

## Multiple sequence alignement programs

Newest version of clustal : Clustal O (Clustal omega) Best :

- Clustal W, O
- MUSCLE
- T-Coffee
(Work in progress)
