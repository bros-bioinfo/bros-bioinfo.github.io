# IMAGE PROCESSING & PIPELINES

## Image Enhancement

Because your scientific images are not perfect and the objects of interest are difficult to see, you have to **enhance** your images. Usually, three main defects can be fixed:

- Brightness and Contrast
- Non uniform illumination
- Noise

### Enhancement: Brightness/Contrast

The brightness and contrast of an image can be enhanced by modifying the **transfer function** or playing with the pixel distribution of the **histogram**. Here is the first part with the transfer function...

#### 1\. Playing with the transfer function

The transfer function in ImageJ is defined by a straight line whose formula is:

> **y = Ax + B** with A is the slope and B is the y-intercept

Thus, two factors can be modified:

- The slope A
- The y-intercept B

Let's see the influence of these two parameters on the image :

![Ramp image](https://2.bp.blogspot.com/--LsNzKZCaxo/VIG0xZ9s09I/AAAAAAAABzE/Jy0WOSArc4U/s1600/lut.jpg)

##### 1.1 The y-intercept

If we modify the Y-intercept, the transfer function is now ...

y = x - 50

![Transfer function](https://3.bp.blogspot.com/-wR2rPMh-K10/VIG1HTYz_qI/AAAAAAAABzU/6p-iVxYBJtI/s1600/transferFunction_B.png)

In this case, a pixel value of 50 in the input image is displayed as a **black (value = 0) pixel** in the output. Consequently, the LUT is now darker than the original as shown and the input pixel value 255 now is **equal to 200** (a light gray but not a white).

![Output image](https://3.bp.blogspot.com/-zUbMzPBOPnI/VIG4tZQQo0I/AAAAAAAABzs/1NwkXf9Stuw/s1600/lut_B.jpg)

##### 1.2\. The slope

In this case, the **slope is equal to 3.5** leading to a variation of grays (gradient) from black to white restrained in the range of [60;130].

y = 3.5x - 210

![Transfer function](https://2.bp.blogspot.com/-zPrYhek2C94/VIG1FIi9XeI/AAAAAAAABzM/wQrswA6LYwI/s1600/transferFunction_A.png)

.. and the LUT appears as ...

![Output](https://1.bp.blogspot.com/-A4qAHE-vJuE/VIG23YbzCAI/AAAAAAAABzg/mwcvDAZe1pk/s1600/lut_A.jpg)

In conclusion, the **brightness** corresponds to the y-intercept and the **contrast** to the slope of the transfer function. The brightness is the amount of light, and the contrast, the speed necessary to go from 0 to 255;

There are multiple others transfer functions possible:

- Y = log(X)
- Y = \sqrt(X)
- Y = exp(X)

#### 2\. Playing with the histogram

The previous method based on the transfer function is powerful but you have to manually define the slope and the y-intercept of the transfer function. It is faster to directly **modify the histogram**.

Here is our test image...

![Clown](https://2.bp.blogspot.com/-C9FEiMRgGIY/VIGrSjDPj0I/AAAAAAAAByM/MY8Q_k10rx8/s1600/clownBright_contrast.png)

![Histogram](https://1.bp.blogspot.com/-Y31cAf4R7-s/VIGtdbV-Z6I/AAAAAAAAByg/BhoqtuXf-P0/s1600/clown_histogram.jpg)

##### 2.1\. Normalization of the histogram

In the histogram, there is no pixel value in the range of [0-50] and of [178-255]. It can be interesting to **use all the pixel values** available in a 8-bit image and thus to stretch the histogram between its extreme values (0 and 255) by **interpolating** all the values between 0 and 255\. This operation is called the **normalization** of the histogram.

##### 2.2\. Equalization of the histogram

An ideal transfer function based on the **cumulative histogram**.

### Enhancement: Non uniform illumination

In the Image Enhancement series, the **non uniform illumination** is the second main defect that you must correct in your images.

#### 1\. With a reference image

If you are using a scientific device like a microscope (optical or electron), all the environmental parameters are well known (no clouds, fog, sun,etc.). In this case, you can record a blank image at the beginning of your session of images collection. A **blank image** or reference image is an image **without samples**. Thus, if there is a problem of illumination, this image **contains the defect**.

> **Note**: With this technique, we assume that the defect is constant during the session.

#### 2\. Without a reference image

Unfortunately, the reference image is outdated or you didn't backup this image or you didn't know where this image is located in the hard disk. So, the result is: **You have no reference image!**

All the techniques available tried to model the background image and then to subtract it to the images.

- Use filters like the 'Rolling Ball' or the 'Top Hat' filters.
- Model the background with a polynomial function.
- Use of Mathematical Morphology method.
- Removal of low frequencies in frequency - Fourier - space.

In ImageJ, only the 'Rolling Ball' filter is implemented to subtract the background.

### Denoising

#### What is noise ?

Noise is what is interfering with the signal. Noise corresponds to a defect in the image where the pixel value is not correct.

#### What are the different types of noise ?

##### Additive noise
SOit une image non bruitée R et la même imafge avec un bruit additif A, chaque pixel j: Ij=Aj+Rj où Aj est une variable aléatoire de moyenne égale à 0.

##### Multiplicative

Soit une image non bruitée R et I la même image avec un bruit multiplicattif B : Ij=Bj*Rj où Bj est une variable aléatoire de moyenne égale à 1.

###DIfferent types

- Gaussian noise : noise following a gaussian distribution defines by a standard deviation.
- Impulsive noise : (salt and pepper) corresponds to pixels with extreme values (0 and 255 for a 8 bit image).

#### Origin of noise

##### 1. Intrinsic noises due to the sensor

ELectronic circuits of scanning system, lens triggering, background noise, distorsions etc ...

##### 2. External noise

- Dust
- "Moves" of sensor or of the object of interest.
- Perturbations atmospheric parameters (clouds, humidity, fog...)
- Perturbation electromagnetic (influence le capteur directement)

##### 3. Noise due to digital processing

- Producing artefacts
- Increasing image processing

You have to balance the enhancement

For denoising :

- Collect several small movies [...]

### FIlters

- Filters in frequency space (reciprocal space, FOurier space )
- FIlters in real space (or spatial domain)


#### FIlters in real space (or spatial domain)

- Linear filters  (old one)
- Non linear filters

Principle of convolution :
- Convolution is mathematical operation on two functions producing a third function
- A convulotion mask ("kernel") is superimposed to a sample image A to create a new image B reconstructed pixel by pixel
- The operator, called a filter, computes each pixels value.

Convolution mask : (search for process)

#### Mean filters

A kernel of size n\*n (3\*3, 5\*5, 7\*7) gives for each pixel, the average of the neighboring pixels in the n*n area.
This filter attenuates the neighboring pixel values.

Advantaged : easy to compute and very fast. Important noise reduction specially for great kernels.
Disavantages : important blur ("flou") for great size of kernel.

Blur reduction by weighting the average calculation
Ex : kernel 5*5

| 1   | 2   | 3   | 2   | 1   |
| --- | --- | --- | --- | --- |
| 2   | 7   | 11  | 7   | 2   |
| 3   | 11  | 17  | 11  | 3   |
| 2   | 7   | 11  | 7   | 2   |
| 1   | 2   | 3   | 2   | 1   |

#### Implementations

**Edge management**:
- Smaller resulting image
- Edges of the image identical to those of the original image
- Extra area containing black pixels (value=0)
- Other possibilities:
  - Filters ignore the areas outside the image
  - Mirror relfexion of the orignal image
  - Image with a "tore" shape

### Non linear filters

- Rank filters
- Adaptative filters

#### Rank filters

Based on the histogram calculated for the value of the kernel.
- Sorting of the various pixel values located under the convolution mask of size [...]

#### APlication of the median filters

Impulse nosie : This filter allow to replace an extreme value due to salt and pepper noise by a value close to those of the neighbors

Gaussian noise : 2 advantage
- Non reduction of brightness levels
- No shift of contours

#### Other filters

Filters removing noise while preserving the edges (contours).

- Bilateral FIlter (extension of gaussian filter)
- Filtre à fiddusion anisotropique (based on partial differential equations)
  - Perona Malik

### In frequency domain

#### Fourier transform

Fourier series : DEcompsition of a periodic function [...] (wiki)

The Fourier transform is an analogue of the theory of Fourier Series for non periodic functions, and allow to associate a frequency spectrum. (wiki)

Definition :
- Low pass filter/ High pass filter / Band pass filters (wiki)

One application of the Fourier : correction of Point Spread Function (PSF).(wiki)

## Segmentation

Definition : refers to the process of patitioning a digital image into multiple regions.
Goal : Simplify and/or change the representation of an image into something that is more meaningful and easier to analyze.
Use : LOcate objects and boundaries (lines, curvesn etc..) in images.
Result :
- Set of regionsd that collesctively cover the entire image
- SEt of contours extracted from the image (see edge detection )

Each of the ....

### Threshold

Technique based on the histogram (wiki/crazybio)

### Automatic Segmentation
Algo based on histogram : "mixture modeling". Separation of the histogram in two parts modelised by two gaussian.

### Segmentation by contours

Pixels belonging to  contours (or edges) are delineating regions.

### Segmentation by regions

Algo des **K-mean** : Iterative technique for partitioning an image in K clusters. K is a number of population, the softaware is computing this population.
