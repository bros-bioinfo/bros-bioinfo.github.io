# IMAGE PROCESSING
## 1.  Introduction
In image processing softwares like ImageJ, what's a digital image? how the grays, colors are encoded? how these data are stored in a file?
ImageJ is a software wich is :
+   Free
+   Open source
+   Based on Java
+   Composed by addon

There are different type of images :
+   2D : photo, Optical microscopy, Electron microscopy
+   2,5D : Stereoscopy, Scan electron microscopy (like an actual 3D movie)
+   3D : COnfocal microscopy
    > 2,5D = pair of 2D images
    > 3D = several 2D images

**Digital image :** it's an array of pixels (= picture+element) composed by width and height.

An image is defined by :
+   Resolution : pixels number per unit of length (or dpi : dots per inch)
+   Range of gray levels or color, wich define the dynamic range. The dynamic range is a value (1 bit, 8 bit, RGB, etc ...)

#### 1. Binary images
Binary images (black and white) are everywhere in ImageJ.
In a binary image, the pixels are in two states: ON or OFF. Better than saying ON and OFF, the TRUE and FALSE keywords are used.

##### What are TRUE and FALSE in a computer ?

In programming languages, a condition returns TRUE or FALSE but behind these two keywords, there are numbers where TRUE equal to 1 (one) and FALSE to 0 (zero) as shown in this small IJ macro/script:
```java
print( (1==1) ); // Display 1 (TRUE)
print( (1==2) ); // Display 0 (FALSE)
```
##### Now, what about the binary images?

In ImageJ, a binary image is an 8-bit image where FALSE corresponds to a pixel value of 0 (in terms of "color", this is black) and TRUE to a value of 255 (equivalent to white). Thus, a binary image is black and white.

#### 2. Gray-level images
##### Introduction

Gray-level images - unlike the binary contain shades of gray from black to white as shown :

![Gray-level images](https://1.bp.blogspot.com/-c7y1UD3OkRk/VHwp5H4zQjI/AAAAAAAABx4/GyKlKlFYj9g/s1600/grayLevelImages.png)

##### Bits per pixel and Dynamic range

In photography, the dynamic range  corresponds to the luminance of the scene and is captured/converted by the digital camera. The limits of luminance range - that is the number of shades available in the digital image - is directly related to the number of bits allocated per pixel: 8, 16, and 32 bits.

Just take the example of the 8-bit image where each pixel is defined by one byte ( 8 bits). Thus, the minimum value is ...

00000000 = 0

... and the maximum is ...

11111111 = 1x27+1x26+1x25+1x24+1x23+1x22+1x21+1x20 = 28-1 = 255

In this case, we have a maximum of 256 (from 0 to 255) different shades  in a 8-bit image . For a scientific image, this is rather limited because most of the CCD or CMOS camera work with 12- or 16-bits precision. Thus, in a scientific project, we are working with 16-bits images with 65536 (216 from 0 to 65535) shades of gray.

#### 3. Color images
After the binary and gray-level images, the color images represent the last (and the most sophisticated) family of images used in image processing softwares. Colors are obtained by the combination of three primary colors. The latter may be different depending of the device displaying/printing the image.
In ImageJ, the most usual color images are encoded with the RGB color space.


RGB (for Red,Green, Blue) is the most common color space used by computers. It belongs to the additive color space family. That means that you start from the black color and by adding various quantities of red, green, and/or blue, you obtain all the color shades as shown:

![RGB](https://4.bp.blogspot.com/-tvHluGHTfc8/TrvPQJXhkxI/AAAAAAAAAFU/t-ytZROYZOE/s1600/color_RGB.png)

##### How can we observe the three color channels?
Three 8-bit images are created corresponding respectively to the red, green, and blue channels. This means that a color image is a 24-bit image (equal to three channels of 8-bit). This type of RGB is also called RGB-24 or RGB-888.
Now, what about the colors? For example, the clown's red nose appears as a combination of light gray in the red channel and dark gray in the two others (green and blue) leading to the color red (corresponding roughly to red > 200; green ≈ 0; blue  ≈ 0).

![Clown's red nose](https://1.bp.blogspot.com/-Yws8VlUNZ_w/Truh3CCFDjI/AAAAAAAAAE8/hTatfqILzdM/s1600/color_split_channels.png)

2.  Image Ehancement
3.  Analysis
4.  Using JavaScript in ImageJ - ImageJ API
