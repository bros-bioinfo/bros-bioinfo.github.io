#### 2\. Without a reference image

Unfortunately, the reference image is outdated or you didn't backup this image or you didn't know where this image is located in the hard disk. So, the result is: **You have no reference image!**

All the techniques available tried to model the background image and then to subtract it to the images.

- Use filters like the 'Rolling Ball' or the 'Top Hat' filters.
- Model the background with a polynomial function.
- Use of Mathematical Morphology method.
- Removal of low frequencies in frequency - Fourier - space.

In ImageJ, only the 'Rolling Ball' filter is implemented to subtract the background.
<!-- NEW PART HERE-->
<!-- NEW PART HERE-->
<!-- NEW PART HERE-->
## Noise
Noise is what is interfering with the signal.
Noise corresponds to a defect in the image where the pixel value is not correct.

### Additive noise
$I_j= A_j +R_j$

### Bruit multiplicatif
$I_j= B_j.R_j$

### Type of noise
**Gaussian noise**: noise following a gaussian ditribution defined by a standard deviation.

**Impulsive noise** corresponds to pixels with extreme values (0 and 255 for a 8bit image).

### Origin of noise
  1. Intrinsic noises due to the sensor
  - Electronic circuits of scanning system
  - scanning system
  - lens triggering background noise
  - distortions,etc...

  2. External Noise
  - Dust
  - Moves of sensor or of the object of interest
  - Perturbations from atmospheric parameters (clours, humidity, fog)
  - Perturbations from electromagnetic.

  3. Noise due to image processing

### Denoising

Acquisition of several images and calculate an "average" image to filter

## Filters

### Filters in real space

Filters are bases on **convolution**. It's a mathematical operation on two functions producing a third function. A convolution mask ("kernel") is superimposed to a sample image A to create a new image B reconstructed pixel by pixel.
A filter, an "operator", computes each pixel value.


#### Linear filters

#### Non-lineal Filters
- Rank filters
  >Based on the histogram calculated from the values in the kernel.
  >We can sort the various pixel values located under the convolution mask of size $n*n$. Then the central pixel value is chosen from this classification.
- Applications of median filter (best for denoising salt&pepper)
- Gaussian noise
- Anisotropic filters
  - Bilateral Filter
  - Filtre à diffusion anisotropique

#### Fourier Transform


### Filters in frequency space (reciprocal space of Fourier space)


# Segmentation : définition

Segmentation refers to the process of partitioning a digital image into multiple regions.
I simplify and/or change the representation of an image into something that is more meaningful and easier to analyze.


--------

**Binary images** (boolean)
| Img A | Img B | AND | OR  | XoR | NOT(ImgA) |
| ----- | ----- | --- | --- | --- | --------- |
| T     | T     | T   | T   | F   | F         |
| T     | F     | F   | T   | T   | F         |
| F     | T     | F   | T   | T   | T         |
| F     | F     | F   | F   | F   | T         |

**Erosion**: Shrinking the object by one pixel.
**Dilation**: Inflate the object by one pixel.

 Advantages:
 >Fast method
 >Erosion useful for splitting touching objects or removing backgrounds pixel
 >Dilation useful for filling holes
 >Often used in cycles(s) alternating erosion/dilation

Disadvantages:
 > Very sensitive to the kernel shape: The objects are distorted and take the shape of the kernel.

**Opening** is an erosion and a dilation after to remove isolated pixels.
**Closing** is a dilation and a erosion after to fill iner pixels.
**Cycles** is the number of cycles; it's the maximum diameter of the object to remove (or keep intact).
**Skeletonization** is a specific erosion where pixels are removed if and only if they don't split the object in two parts. The result is a medial axis of the object equdistant to the object's boundaries.
**Segmentation by Euclidean distance map and UEPs (Ultimate Eroded Point)**
**Segmenting by Watershed**
