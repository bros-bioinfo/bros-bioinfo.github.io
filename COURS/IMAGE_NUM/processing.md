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
