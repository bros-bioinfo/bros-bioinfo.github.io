#Omics and Bioinformatics

[TOC]

*UE; 4TBI703U*

*password: ob2017*



## Introduction

###Definition

- Better understanding the logic behin bioinformatics program.

- Useful for automatically combining several bioinformatics tools (pipeline)

- Automating a repetitive task


###Data & Formats: DataBanks

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



###Tools:

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





##Phylogenetics

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

Managements of indels via gaps (-) and penalties of gap at the creation (+10) and extension (+1)



