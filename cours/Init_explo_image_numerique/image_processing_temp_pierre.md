
![Clown's red nose](https://1.bp.blogspot.com/-Yws8VlUNZ_w/Truh3CCFDjI/AAAAAAAAAE8/hTatfqILzdM/s1600/color_split_channels.png)

2.  Image Ehancement
3.  Analysis
4.  Using JavaScript in ImageJ - ImageJ API

# Storage of images
## Storage of gray-level images

**Dynamic range** = number of bits per pixel = BPP
In ImageJ there is no 32bits images;

Informatons (à compléter):
2D: w
BPP: 16bits
With negative integers, in 1 bit the minimum value is **-127** and the maximum value is **+127** and we can convert this value with a formula.

There is two main methods of stocking numbers in processor:

- **Endianness**:  Integers numbers are stored in many bytes, and the order in wich these bytes are organized in memory is called endianness.
  - big endian: left -> right counting, first byte is the most significant;
  - little endian: right -> left counting

## Storage of color images
- Knowledge of colorspace(RGB, YUV, CMYK)

We have the **Planar format** (plan of each color) vs **Packed format** (most common - all on one line)
