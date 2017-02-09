---
layout: tutorial
title: Exporting Applications
thumbnail: /tutorials/processing/images/exporting-applications-5.png
tagline: Share your programs with other people.
sort-key: 1700
meta-title: Exporting Applications
meta-description: Share your programs with other people.
meta-image: /tutorials/processing/images/exporting-applications-6.png
tags: [tutorial, processing, basic]
---

So far our programs have only worked locally (on our own computer), but by now you probably want to share your programs with other people.

To allow other people to run one of our programs, we have to include all of the files it needs to run on a particular operating system. Windows needs different files than Linux, for example. To create this OS-specific bundle, we can export our sketch as an application.

## Exporting Applications

You can use the Processing editor to bundle your sketch into an application that can be run on a particular operating system. Go to `File` -> `Export Application`, which brings up this window:

![export options dialog](/tutorials/processing/images/exporting-applications-1.png)

This dialog allows you to specify options for your application:

- **Platforms:** These checkboxes decide which operating systems an application should be created for. Note that you need a different application for each operating system. Also note that you can only create a Mac OS X application from a Mac OS X computer.

- **Full Screen:** Whether you want your application to be full-screen or not.

- **Embed Java:** Processing is built on top of Java, so it requires Java to work. If you know for sure that the computer running your application has Java, then you can uncheck this box. Otherwise you should check it. This includes Java with your application, which increases it in size by 100 MB but guarantees that it'll run even on systems that don't have Java.

Then click the `Export` button. After a few seconds, your sketch folder should pop up, and it should contain directories for each system that you chose in the export options.

![exported directories](/tutorials/processing/images/exporting-applications-2.png)

Each directory contains an executable file that works on the corresponding operating system. **Note:** the executable file needs the entire directory to work! So you have to copy the whole directory over, not just the `.exe` file inside it. For example, if my friend has a Windows laptop, I would send them the `application.windows64` directory (I could rename the directory before I send it). Then they would open that directory and run the `MySketch.exe` file inside of it. It won't work if you just send the `.exe` file without the rest of the directory!

To make it easier to send an entire directory, you can create a `.zip` file that collects the directory into a single file. I use [7-Zip](http://www.7-zip.org/) for this, but you could just use whatever archive tool comes with your computer. For example, on Windows 10 you can right-click a directory, then click `Send to`, then click `Compressed (zipped) folder`.

![creating a zip file](/tutorials/processing/images/exporting-applications-3.png)

You probably want to create a `.zip` file for each system you're targetting:

![zip files](/tutorials/processing/images/exporting-applications-4.png)

Again, you don't have to keep the default names. You should probably rename them to `MySketch-Windows.zip` or something. But now that you have those `.zip` files, you can send them to people! There are a few ways you can do that:

- By emailing them as attachments. This is the simplest option, but probably not what you came here to do.
- By uploading them to sites like [Game Jolt](https://gamejolt.com/) and [itch.io](https://itch.io/).
- By creating your own portfolio website that links to them. If you're not sure how to do that, check out the [HTML tutorials](/tutorials/html)!

Now a user can download the `.zip` file for their operating system, then unzip that file and run the executable application inside the directory!

## Homework

- Upload your applications and post a link on [the forum](http://forum.HappyCoding.io)!
