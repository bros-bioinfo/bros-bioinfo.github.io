def hamming(seq1, seq2):
    """
    Calculate the hamming distance between two sequences passed in arguments
    """
    hamming_distance = 0
    # If sequences have not the same size, the calcul of hammind distance is impossible
    if len(seq1) != len(seq2):
        print("Error : Length of the two sequences are not the same.\n")
    # Convertion of the two sequence string to lists
    seq1_list = list(seq1)
    seq2_list = list(seq2)
    # For each nucleotides, verification of the equality between the two sequences
    for i in range(len(seq1)):
    # If no equality, put +1 to the hamming distance
    if seq1_list[i] != seq2_list[i]:
        hamming_distance += 1
    return hamming_distance