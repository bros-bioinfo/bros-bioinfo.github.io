# IMAGE PROCESSING

## 1\. DIGITAL IMAGE

In image processing softwares like ImageJ, what's a digital image? how the grays, colors are encoded? how these data are stored in a file? ImageJ is a software wich is :

- Free
- Open source
- Based on Java
- Composed by addon

There are different type of images :

- **2D** : photo, Optical microscopy, Electron microscopy
- **2,5D** : Stereoscopy, Scan electron microscopy (like an actual 3D movie)
- **3D** : COnfocal microscopy

  > 2,5D = pair of 2D images 3D = several 2D images

**Digital image :** it's an array of pixels (= picture+element) composed by width and height.

An image is defined by :

- **Resolution** : pixels number per unit of length (or dpi : dots per inch)
- Range of gray levels or color, wich define the **dynamic range**. The dynamic range is a **value** (1 bit, 8 bit, RGB, etc ...)

### A. Binary images

Binary images (black and white) are everywhere in ImageJ. In a binary image, the pixels are in two states: ON or OFF. Better than saying ON and OFF, the TRUE and FALSE keywords are used.

#### What are TRUE and FALSE in a computer ?

In programming languages, a condition returns TRUE or FALSE but behind these two keywords, there are numbers where **TRUE equal to 1** (one) and **FALSE to 0** (zero) as shown in this small IJ macro/script:

```java
print( (1==1) ); // Display 1 (TRUE)
print( (1==2) ); // Display 0 (FALSE)
```

#### Now, what about the binary images?

In ImageJ, a binary image is an **8-bit image** where FALSE corresponds to a pixel value of 0 (in terms of "color", this is **black**) and TRUE to a value of 255 (equivalent to **white**). Thus, a binary image is black and white.

### B. Gray-level images

#### Introduction

Gray-level images - unlike the binary contain **shades of gray** from black to white as shown :

![Gray-level images](https://1.bp.blogspot.com/-c7y1UD3OkRk/VHwp5H4zQjI/AAAAAAAABx4/GyKlKlFYj9g/s1600/grayLevelImages.png)

#### Bits per pixel and Dynamic range

In photography, the **dynamic range** corresponds to the luminance of the scene and is captured/converted by the digital camera. The limits of luminance range - that is the number of shades available in the digital image - is directly related to the number of bits allocated per pixel: **8, 16, and 32 bits**.

Just take the example of the 8-bit image where each pixel is defined by **one byte ( 8 bits)**. Thus, the minimum value is ...

**00000000 = 0**

... and the maximum is ...

11111111 = **1x2⁷+1x2⁶+1x2⁵+1x2⁴+1x2³+1x2²+1x2¹+1x2⁰** = 2⁸-1 = 255

In this case, we have a **maximum of 256** (from 0 to 255) different shades in a 8-bit image . For a scientific image, this is rather **limited** because most of the CCD or CMOS camera work with 12- or 16-bits precision. Thus, in a scientific project, we are working with **16-bits images** with 65536 (216 from 0 to 65535) shades of gray.

### C. Color images

After the binary and gray-level images, the color images represent the last (and the most sophisticated) family of images used in image processing softwares. Colors are obtained by the **combination of three primary colors**. The latter may be different depending of the device displaying/printing the image. In ImageJ, the most usual color images are encoded with the **RGB color space**.

RGB (for **Red,Green, Blue**) is the most common color space used by computers. It belongs to the **additive color space family**. That means that you **start from the black color** and by **adding** various quantities of red, green, and/or blue, you obtain all the color shades as shown:

![RGB](https://4.bp.blogspot.com/-tvHluGHTfc8/TrvPQJXhkxI/AAAAAAAAAFU/t-ytZROYZOE/s1600/color_RGB.png)

#### How can we observe the three color channels?

**Three 8-bit** images are created corresponding respectively to the red, green, and blue channels. This means that a color image is a **24-bit image** (equal to three channels of 8-bit). This type of RGB is also called **RGB-24 or RGB-888**. Now, what about the colors? For example, the clown's red nose appears as a combination of light gray in the red channel and dark gray in the two others (green and blue) leading to the color red (corresponding roughly to red > 200; green ≈ 0; blue ≈ 0).

![Clown's red nose](https://1.bp.blogspot.com/-Yws8VlUNZ_w/Truh3CCFDjI/AAAAAAAAAE8/hTatfqILzdM/s1600/color_split_channels.png)

#### CMY(K) color image

CMY (or its variant CMYK) color space uses as primary colors: **cyan, magenta, and yellow**. This color space used by printers is interesting because, this is an example of a **subtractive color model**. When you **add color(s), you converge towards black color**.

##### CMY color space

In this color space, **(0,0,0)CMY is white and (255,255,255)CMY is black**. As shown, the primary colors cyan, magenta, and yellow have respectively the values (255,0,0)CMY, (0,255,0)CMY, and (0,0,255)CMY. For example, green is equal to (255,0,255)CMY corresponding to the complementary color in RGB (0,255,0)RGB.

![CMY](https://2.bp.blogspot.com/-f1G2TbTobWo/TvmOEMFUb_I/AAAAAAAAAJs/aq5zFhz1sQk/s1600/color_CMY.png)

## 2\. IMAGE FILE

### Signed, Unsigned pixel values

Among the various image types proposed to import a **gray-level image**, even though you know the dynamic range of your image, you have to choose **'signed' or 'unsigned'**...

#### 1- A 'bit' of theory

**Java** (the programming language of ImageJ and its virtual processor, the JVM) encodes signed numbers with the method called "two's complement". **The last bit** (the most significant) is used for the **sign** (a value of **0 for positive** and **1 for negative**). For positive 16-bit numbers, no extra process are done, the bits #0 to #15 are used allowing the encoding of numbers from 0 (00000000 000000002) to +32767 (01111111 111111112). For negative numbers, a small calculation is done consisting of a **bits inversion and an addition of +1** as shown in the following example ...

```
Example #1: -32767
+3276710 = 01111111 11111111~2~
inversion : 10000000 00000000~2~
addition + 1 : 10000000 00000001~2~ = -3276710

Example #1: -1
110 = 00000000 00000001~2~
11111111 11111110~2~
11111111 11111111~2~= -1
```

Thus, **signed 16-bit** numbers are comprised in the range of **[-32767;+32767]** whereas **unsigned 16-bit** numbers between **[0;65535]**.

#### 2- Consequences for gray-level images

Now, we've seen the theory, what about gray-level images ?

If you import an image with the wrong 'sign', you get image with inverted areas as shown (right panel).

![difference](https://4.bp.blogspot.com/-UEztIjD9U2Y/UFmxp-KgfuI/AAAAAAAAAbY/3G4uNvGoGP4/s1600/importSignedUnsigned.png)
