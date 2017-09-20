# IMAGE PROCESSING : DIGITAL IMAGE

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

- Example #1: -32767

  - +3276710 = 01111111 11111111~2~
  - inversion : 10000000 00000000~2~
  - addition + 1 : 10000000 00000001~2~ = -3276710

- Example #2: -1

  - 110 = 00000000 00000001~2~
  - inversion : 11111111 11111110~2~
  - addition + 1 : 11111111 11111111~2~= -1

Thus, **signed 16-bit** numbers are comprised in the range of **[-32767;+32767]** whereas **unsigned 16-bit** numbers between **[0;65535]**.

#### 2- Consequences for gray-level images

Now, we've seen the theory, what about gray-level images ?

If you import an image with the wrong 'sign', you get image with inverted areas as shown (right panel).

![difference](https://4.bp.blogspot.com/-UEztIjD9U2Y/UFmxp-KgfuI/AAAAAAAAAbY/3G4uNvGoGP4/s1600/importSignedUnsigned.png)

Let's go further. Create an 16-bit image 512x50 with a ramp background as shown. If you look at the pixel values by hovering the image, values are comprised between 0 and 65535 (ImageJ always creates unsigned 16-bit image).

![ramp image unsigned](https://1.bp.blogspot.com/-LztwNc2NOTs/UFxOOz0RawI/AAAAAAAAAdI/CGcQa52fF_c/s400/importRampUnsigned.png)

If you save this ramp as a raw (16-bit unsigned, by default) image and import it as a '16-bit signed', you'll get the image following :

![ramp image inverted](https://3.bp.blogspot.com/-6TfPC48TAdc/UFxGpQ49cQI/AAAAAAAAAcw/DqqG9diyr1o/s320/importRampSigned.png)

Now, if we compare the encoding of the signed and unsigned numbers, they are identical from 0 to +32767, but from +32768 to + 65535, depending of the encoding, they appear as negative (or positive) numbers (e.g. signed -110 has the same encoding as the unsigned 6553510). That explains the strange pattern of the ramp. The left part (medium gray to white) corresponds to the range **[0;+32767]** whereas the right part corresponds to negative numbers **[-32767;-1]**.

Just look at some key numbers in the ramp image...

- In unsigned 16-bit,

  - 00000000 00000000~2~ = 010
  - . . . . . .
  - 01111111 11111111~2 = 3276710
  - 10000000 000000002~ = 3276810
  - 10000000 00000001~2~ = 3276910
  - . . . . . .
  - 11111111 11111111~2~ = 6553510

- In signed 16-bit,

  - 00000000 00000000~2~ = 010
  - . . . . . .
  - 01111111 11111111~2~ = +3276710
  - 10000000 00000001~2~ = -3276710
  - . . . . . .
  - 11111111 11111111~2~ = -110

#### 3 - What about signed or unsigned 8-bit image?

In ImageJ, the only option called '8-bit' corresponds to **unsigned 8-bit numbers** (from 0 to 255) and there is no way to import a signed 8-bit image (-127 to +127).

### Endianness

In this series of posts dedicated to image file, the endianness is one of the parameters available in the Import dialog box. What is this strange 'little-endian byte order'?

#### 1- Little- and Big-endian? What does it mean?

In a file, the numbers are stored as **bytes**, thus, a 16-bit or 32-bit number must be splitted in **2 of 4 bytes** before being put in the file. There is two different ways to do this job. The first family of computers (e.g. ARM processors used by the smartphones) stores the bytes of a number from **left to right** as shown in the example of with the hexadecimal number 0807B7A016\. This is called **Big Endian** because the first byte (byte 0 in Fig) is the most significant.

![Big endian](https://2.bp.blogspot.com/-iEa3SFvui20/UFGrUW66PHI/AAAAAAAAAYo/9hxQodVOsfM/s1600/ImportLittleEndian.png)

... whereas in the other family (x86 processor in every PC computers), the storage is done from **right to left** (Fig). This is called **Little Endian** and the first byte is now the least significant.

![Little endian](https://2.bp.blogspot.com/-xwX4uuzkORs/UFGrVDM_u9I/AAAAAAAAAYs/9zmTPAO5FwQ/s1600/importBigEndian.png)

> **Note**: ImageJ runs on top of a virtual processor called 'Java Virtual Machine' and as indicated by its name acts as a virtual computer with its own virtual processor which belongs to the family of the 'Big Endian'.

#### 3- When I import an unknown image file, how do I know if I add a problem of endianness?

First, keep in mind that **ImageJ is a big-endian program** and by default, import the raw file using a big endian byte order. Thus, if you know which computer (processor family) and which program was used to save your image, you can determine the byte order and decide to (un)check the 'litte-endian byte order' in the import dialog box.

Example #1: The computer belongs to the x86 family (e.g. an AMD or Intel processor) and the program was written in language C/C++, thus, your image is saved with a little-endian byte order.

Example #2: The computer belongs to the x86 family but the program is written in Java and consequently runs on top of a big endian Java Virtual Machine. Thus, the image will be saved as a big endian file...

Second, you have no clue about the computer and/or the used program, you have to check both options. In most cases, when you use the wrong byte order, the image appears **noisy** and it is very difficult to recognize some features in the displayed image (Fig).

![Good import (big) / Wrong import (little)](https://2.bp.blogspot.com/-JkrS9du9CA8/UFwajQu1UjI/AAAAAAAAAbs/2YzmtWchsxo/s320/importLenaEndian.png)

### RGB file: Packed or Planar?

Save RGB color images requires specific strategies - compared to the gray-level images - to store the three red, green, and blue values defining a pixel. Two main strategies exist: **Packed and Planar**.

#### 1- Planar format

If a color image is saved in the planar file format, the three red, green, and blue channels composing the pixels are **stored separately** in the file.

![Planar format](https://3.bp.blogspot.com/-9UMAPckQkbo/UFcnQL7XTGI/AAAAAAAAAZ0/LlrH-fA5GmI/s1600/import_rgb_planar.png)

It is like a **stack of three slices** containing the red, green, and blue values for each pixel. Here is an example of planar file format (Fig).

![Planar RGB image](https://4.bp.blogspot.com/-UMXQRxtkJFw/UFciM9a2qJI/AAAAAAAAAZY/D8mLmeTG-yM/s1600/import_rgbplanar_clown.png)

#### 2- Packed format

By default, ImageJ doesn't use the planar format to save color images, it uses the **packed format**. In Fig, the clown is visible, however he appears stretched in the horizontal direction.

![Clown](https://1.bp.blogspot.com/-O6HpUI6pi-E/UFcdiWeYKZI/AAAAAAAAAZE/LsuL1_mneNY/s640/import_rgb_clown.png)

This pattern is typical of a packed RGB format. Indeed, the red, green, and blue channels are **interleaved** in the file. Thus, the file contains a succession of red, green, and blue values corresponding to each pixel. Each value is stored as a **8-bit number**. Example of storage of two pixels in a packed format :

![Two pixels](https://1.bp.blogspot.com/-x2D8YNOJjrA/UFcm-aDIdtI/AAAAAAAAAZs/IKK-ee6fyXc/s1600/import_rgb_packed.png)

#### 3- Other formats

ImageJ can directly import the packed 24-RGB and the planar 24-RGB formats. Other formats are available like the packed **24-BGR** (blue value, first and then, green, and finally red). Two other file formats can be read: **32-bit ARGB and 32-bit ABGR**, they are packed formats but the image contains a fourth 8-bit channel named **'alpha'** (A) dedicated to **opacity**. As transparency is not supported by ImageJ, this channel is skipped during the import.
