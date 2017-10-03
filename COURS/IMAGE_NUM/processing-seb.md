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

### Noise

Image noise is random (not present in the object imaged) **variation of brightness or color information** in images, and is usually an aspect of electronic noise. It can be produced by the sensor and circuitry of a scanner or digital camera. Image noise can also originate in film grain and in the unavoidable shot noise of an ideal photon detector. Image noise is an undesirable by-product of image capture that adds spurious and extraneous information.

#### Different type of noise

##### 1 Gaussian noise

Gaussian noise is statistical noise having a **probability density function (PDF)** equal to that of the normal distribution, which is also known as the **Gaussian distribution**. In other words, the values that the noise can take on are Gaussian-distributed.
Principal sources of Gaussian noise in digital images arise **during acquisition** e.g. sensor noise caused by poor illumination and/or high temperature, and/or transmission

In digital image processing Gaussian noise can be reduced using a **spatial filter**, though when smoothing an image, an undesirable outcome may result in the blurring of fine-scaled image edges and details because they also correspond to blocked high frequencies. **Conventional spatial filtering techniques** for noise removal include: mean (convolution) filtering, median filtering and Gaussian smoothing.

![512x512-No-Noise](https://i.imgur.com/14HHjSv.jpg)
![512x512-Gaussian-Noise](https://i.imgur.com/tYdtmxk.jpg)
> By Me - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10114819

##### 2 Salt and Pepper

Salt-and-pepper noise is a form of noise sometimes seen on images. It is also known as **impulse noise**. This noise can be caused by sharp and sudden disturbances in the image signal. An image containing salt-and-pepper noise will have **dark pixels** in bright regions and **bright pixels** in dark regions. This type of noise can be caused by analog-to-digital converter errors, bit errors in transmission, etc. It can be mostly eliminated by using dark frame subtraction, median filtering and interpolating around dark/bright pixels.

Dead pixels in an LCD monitor produce a similar, but non-random, display.

![Noise_salt_and_pepper](https://i.imgur.com/Hpjn9Il.png)
> By User Markome on en.wikipedia, Public Domain, https://commons.wikimedia.org/w/index.php?curid=1352731

[More noise in Wiki](https://en.wikipedia.org/wiki/Image_noise)

> **Note for each type** : In either case, the noise at different pixels can be either correlated or uncorrelated; in many cases, noise values at different pixels are modeled as being independent and identically distributed, and hence uncorrelated.

#### Noise reduction

Noise reduction is the process of **removing noise** from a signal.
All recording devices, both analog and digital, have traits that make them susceptible to noise. Noise can be random or white noise with no coherence, or coherent noise introduced by the **device's mechanism or processing algorithms**.

Images taken with both digital cameras and conventional film cameras will pick up noise from a variety of sources. Further use of these images will often require that the noise be (partially) removed – for aesthetic purposes as in artistic work or marketing, or for practical purposes such as computer vision.

##### 1 Removal
###### 1.1 Tradeoffs

In selecting a noise reduction algorithm, one must weigh several factors:

+ the available **computer power and time available**: a digital camera must apply noise reduction in a fraction of a second using a tiny onboard CPU, while a desktop computer has much more power and time
+ whether **sacrificing some real detail** is acceptable if it allows more noise to be removed (how aggressively to decide whether variations in the image are noise or not)
+ the **characteristics** of the noise and the detail in the image, to better make those decisions

##### 1.2 Chroma and luminance noise separation

In real-world photographs, the highest spatial-frequency detail consists mostly of variations in **brightness** ("luminance detail") rather than variations in **hue** ("chroma detail"). Since any noise reduction algorithm should attempt to remove noise without sacrificing real detail from the scene photographed, one risks a **greater loss** of detail from luminance noise reduction than chroma noise reduction simply because most scenes have little high frequency chroma detail to begin with.

Most dedicated noise-reduction computer software allows the user to control chroma and luminance noise reduction separately.

##### 1.3 Linear smoothing filters
One method to remove noise is by **convolving** the original image with a **mask** that represents a low-pass filter or smoothing operation.

**{**
**Convolution**

In mathematics (and, in particular, functional analysis) convolution is a mathematical operation on **two functions** (f and g); it **produces a third function**, that is typically viewed as a modified version of one of the original functions, giving the integral of the pointwise multiplication of the two functions as a **function of the amount** that one of the original functions is translated. Convolution is similar to cross-correlation. It has applications that include probability, statistics, computer vision, natural language processing, **image and signal processing**, engineering, and differential equations.

![Convolution_of_box_signal_with_itself2](https://i.imgur.com/Q00Uhfn.gif)
> By Convolution_of_box_signal_with_itself.gif: Brian Ambergderivative work: Tinos (talk) - Convolution_of_box_signal_with_itself.gif, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=11003835

**}**

For example, the **Gaussian mask** comprises elements determined by a Gaussian function. This convolution brings the value of each pixel into closer harmony with the values of its neighbors. In general, a smoothing filter sets each pixel to the **average value**, or a weighted average, of itself and its nearby neighbors; the Gaussian filter is just one possible set of weights.

Smoothing filters tend to **blur** an image, because pixel intensity values that are significantly higher or lower than the surrounding neighborhood would **"smear"**(salir) across the area. Because of this blurring, linear filters are seldom (rarement) used in practice for noise reduction; they are, however, often used as the basis for **nonlinear noise reduction filters**.

##### 1.4 Nonlinear filters

A **median filter** is an example of a non-linear filter and, if properly designed, is very good at preserving image detail. To run a median filter:

+ consider each pixel in the image
+ sort the neighbouring pixels into order based upon their intensities
+ replace the original value of the pixel with the median value from the list

A median filter is a **rank-selection (RS) filter**, a particularly harsh member of the family of rank-conditioned rank-selection (RCRS) filters; a much milder member of that family, for example one that selects the closest of the neighboring values when a pixel's value is external in its neighborhood, and leaves it unchanged otherwise, is sometimes preferred, especially in photographic applications.

Median and other RCRS filters are good at removing salt and pepper noise from an image, and also cause relatively **little blurring of edges**, and hence are often used in computer vision applications.

![Median_filter_example](https://i.imgur.com/vJQtNJi.jpg)
> By Debivort at en.wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=17001283

##### 1.5 Anisotropic diffusion

In image processing and computer vision, anisotropic diffusion, also called **Perona–Malik diffusion**, is a technique aiming at reducing image noise without removing significant parts of the image content, typically edges, lines or other details that are important for the interpretation of the image. Anisotropic diffusion resembles the process that creates a **scale space**, where an image generates a parameterized family of successively more and more blurred images based on a diffusion process. Each of the resulting images in this family are given as a **convolution** between the image and a 2D isotropic Gaussian filter, where the width of the filter increases with the parameter. This diffusion process is a **linear and space-invariant** transformation of the original image. Anisotropic diffusion is a generalization of this diffusion process: it produces a **family of parameterized images**, but each resulting image is a combination between the original image and a filter that depends on the local content of the original image. As a consequence, anisotropic diffusion is a **non-linear and space-variant** transformation of the original image

##### 1.6 Non-local means

Non-local means is an algorithm in image processing for image denoising. Unlike "local mean" filters, which take the mean value of a group of pixels surrounding a target pixel to smooth the image, non-local means filtering takes a **mean of all pixels in the image**, weighted by how similar these pixels are to the target pixel. This results in much greater post-filtering clarity, and less loss of detail in the image compared with local mean algorithms.

[Références](https://en.wikipedia.org/wiki/Noise_reduction#In_images)


### Fourier transform

**Common Names:** Fourier Transform, Spectral Analysis, Frequency Analysis

The Fourier Transform is an important image processing tool which is used to **decompose** an image into its **sine and cosine components**. The output of the transformation represents the image in the Fourier or **frequency domain**, while the input image is the **spatial domain** equivalent. In the Fourier domain image, each point represents a particular frequency contained in the spatial domain image.

The Fourier Transform is used in a wide range of applications, such as image analysis, image filtering, image reconstruction and image compression.

[See more](https://homepages.inf.ed.ac.uk/rbf/HIPR2/fourier.htm)

#### Pass-filter
##### 1 High-pass filter

A high-pass filter (HPF) is an **electronic filter** that passes signals with a frequency **higher** than a certain cutoff frequency and attenuates signals with frequencies **lower** than the cutoff frequency. The amount of attenuation for each frequency depends on the filter design. A high-pass filter is usually modeled as a **linear time-invariant system**. It is sometimes called a low-cut filter or bass-cut filter. High-pass filters have many uses, such as blocking DC from circuitry sensitive to non-zero average voltages or radio frequency devices.

##### 2 Low-pass filter

A low-pass filter (LPF) is a filter that passes signals with a frequency **lower** than a certain cutoff frequency and attenuates signals with frequencies **higher** than the cutoff frequency. The exact frequency response of the filter depends on the filter design. The filter is sometimes called a high-cut filter, or treble-cut filter in audio applications. A low-pass filter is the complement of a high-pass filter.

Filter designers will often use the low-pass form as a **prototype filter**. That is, a filter with unity **bandwidth and impedance**. The desired filter is obtained from the prototype by scaling for the desired bandwidth and impedance and transforming into the desired bandform (that is low-pass, high-pass, band-pass or band-stop).

##### 3 Band-pass filter

A band-pass filter (also spelled bandpass) (BPF) is a device that passes frequencies within a certain range and rejects **(attenuates)** frequencies **outside that range**.

#### The Point Spread Function (PSF)

The point spread function (PSF) describes the **response of an imaging system** to a **point source** or point object. A more general term for the PSF is a **system's impulse response**, the PSF being the impulse response of a focused optical system. The PSF in many contexts can be thought of as the extended blob in an image that represents an **unresolved object**. In functional terms it is the spatial domain version of the optical transfer function of the imaging system.

It is a useful concept in **Fourier optics**, astronomical imaging, medical imaging, electron microscopy and other imaging techniques such as 3D microscopy (like in confocal laser scanning microscopy) and fluorescence microscopy. The **degree of spreading** (blurring) of the point object is a measure for the **quality** of an imaging system.

In non-coherent imaging systems such as fluorescent microscopes, telescopes or optical microscopes, the image formation process is linear in power and described by linear system theory. This means that when two objects A and B are imaged simultaneously, the result is equal to the **sum of the independently imaged objects**. In other words: the imaging of A is unaffected by the imaging of B and vice versa, owing to the non-interacting property of photons.

The image of a complex object can then be seen as a convolution of the true object and the PSF. However, when the detected light is coherent, image formation is linear in the complex field. Recording the intensity image then can lead to cancellations or other non-linear effects.

![Convolution_Illustrated_eng](https://i.imgur.com/HdsPYCy.png)
> By Default007 - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=877065

## Image segmentation

In computer vision, image segmentation is the process of **partitioning** a digital image into multiple segments (sets of pixels, also known as super-pixels). The goal of segmentation is to simplify and/or change the representation of an image into something that is more meaningful and easier to analyze. Image segmentation is typically used to **locate objects and boundaries** (lines, curves, etc.) in images. More precisely, image segmentation is the process of **assigning a label** to every pixel in an image such that pixels with the same label share certain characteristics.



The result of image segmentation is a **set of segments** that collectively cover the entire image, or a set of contours extracted from the image (see edge detection). Each of the pixels in a region are similar with respect to some characteristic or computed property, such as color, intensity, or texture. Adjacent regions are significantly different with respect to the same characteristic(s). When applied to a stack of images, typical in medical imaging, the resulting contours after image segmentation can be used to create 3D reconstructions with the help of interpolation algorithms like Marching cubes.

![Model_of_a_segmented_femur_-_journal.pone.0079004.g005](https://i.imgur.com/jurqp9m.png)
> By Newe A, Ganslandt T - Newe A, Ganslandt T (2013) Simplified Generation of Biomedical 3D Surface Model Data for Embedding into 3D Portable Document Format (PDF) Files for Publication and Education. PLoS ONE 8(11): e79004. doi:10.1371/journal.pone.0079004, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=30052549


### Threshold

The simplest method of image segmentation is called the **thresholding method**. This method is based on a clip-level (or a threshold value) to turn a **gray-scale image into a binary image**. There is also a balanced histogram thresholding.

The key of this method is to select the threshold value (or values when multiple-levels are selected). Several popular methods are used in industry including the maximum entropy method, Otsu's method (maximum variance), and **k-means clustering**.

### Clustering methods

The K-means algorithm is an iterative technique that is used to partition an image into **K clusters**. The basic algorithm is :

+ Pick K cluster centers, either randomly or based on some heuristic method, for example K-means++
+ Assign each pixel in the image to the cluster that minimizes the distance between the pixel and the cluster center
+ Re-compute the cluster centers by averaging all of the pixels in the cluster
+ Repeat steps 2 and 3 until convergence is attained (i.e. no pixels change clusters)

![Polarlicht_2](https://i.imgur.com/kvEYf31.jpg)
Source
![Polarlicht_2_kmeans_16_large](https://i.imgur.com/3id4C1r.png)
Image after running k-means with k = 16.
> By Senior Airman Joshua Strang, derivative work by King of Hearts - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=22790024

In this case, **distance** is the squared or absolute difference between a **pixel and a cluster center**. The difference is typically based on pixel color, intensity, texture, and location, or a weighted combination of these factors. K can be selected manually, randomly, or by a heuristic. This algorithm is guaranteed to **converge**, but it may not return the optimal solution. The quality of the solution depends on the initial set of clusters and the value of K.

### Histogram-based methods

Histogram-based methods are **very efficient** compared to other image segmentation methods because they typically require only **one pass** through the pixels. In this technique, a histogram is computed from all of the pixels in the image, and the **peaks and valleys** in the histogram are used to **locate the clusters** in the image. Color or intensity can be used as the measure.

A refinement of this technique is to **recursively** apply the **histogram-seeking method** to clusters in the image in order to divide them into smaller clusters. This operation is repeated with smaller and smaller clusters until no more clusters are formed.

**One disadvantage** of the histogram-seeking method is that it may be difficult to identify significant peaks and valleys in the image.

Histogram-based approaches can also be quickly adapted to apply to **multiple frames**, while maintaining their single pass efficiency. The histogram can be done in multiple fashions when multiple frames are considered. The same approach that is taken with **one frame** can be **applied to multiple**, and after the results are **merged**, peaks and valleys that were previously difficult to identify are more likely to be distinguishable. The histogram can also be applied on a **per-pixel basis** where the resulting information is used to determine the **most frequent color** for the pixel location. This approach segments based on active objects and a static environment, resulting in a different type of segmentation useful in video tracking.

### Edge detection

**Edge detection** includes a variety of mathematical methods that aim at **identifying points** in a digital image at which the **image brightness** changes sharply or, more formally, has **discontinuities**. The points at which image brightness changes sharply are typically organized into a set of curved line segments termed **edges**. The same problem of finding discontinuities in one-dimensional signals is known as **step detection** and the problem of finding signal discontinuities over time is known as **change detection**. Edge detection is a fundamental tool in image processing, machine vision and computer vision, particularly in the areas of feature detection and feature extraction.

The purpose of detecting sharp changes in image brightness is to capture important events and changes in properties of the world. It can be shown that under rather general assumptions for an image formation model, discontinuities in image brightness are likely to correspond to:

+ discontinuities in depth,
+ discontinuities in surface orientation,
+ changes in material properties and
+ variations in scene illumination.

![Ääretuvastuse_näide](https://i.imgur.com/bIDU1hL.png)
Canny edge detection applied to a photograph
> By JonMcLoone at English Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=44894482

Sources:(https://fr.wikipedia.org/)

http://crazybiocomputing.blogspot.fr/2011/10/mathematical-morphology.html
+ Continuer 
