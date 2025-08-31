---
layout: post
title: Intro to the Internet
thumbnail: /tutorials/html/images/internet-1.jpg
tagline: Inter-what?
sort-key: 100
meta-title: Intro to the Internet
meta-description: Inter-what?
meta-image: /tutorials/html/images/internet-1.jpg
tags: [tutorial, html]
previousPost: /tutorials/html/
nextPost: /tutorials/html/html
forumExcerpt: I'm preparing to teach Intro to Web Dev again, and this semester we're starting with a brief history of the internet.
---

The internet is so ubiquitous now, that most people take it for granted. The phone in your pocket gives you access to almost anything you can imagine, any question you can ask, any person you want to connect with. But the internet is still relatively new. This article talks through a brief history of the internet, so you have a better sense of how web development fits into the larger picture.

## From internets to The Internet

The [history of physical computers](/tutorials/interviewing/history) is long and complex, arguably dating back thousands of years from the first abacus, through mechanical calculators, through room-sized computers in the mid 1900s, to the world of cell phones and ubiquitous computers in our society today.

Prior to the 1970s, computers were standalone devices that performed specific tasks. They crunched numbers for universities, business, and the government, including the Department of Defense, but they couldn't talk to each other yet.

In the mid 1970s, several groups began researching the idea of networking computers together, to share information and let people communicate. For two computers to communicate, they both need to agree on how that communication should work, both in terms of hardware and the data itself. Each group had their own approach to that communication, so by the late 1970s, there were a bunch of different interconnected networks, or internets, of computers. Some early examples include [ARPANET](https://en.wikipedia.org/wiki/ARPANET), a network owned by DARPA, and [Usenet](https://en.wikipedia.org/wiki/Usenet), a network designed around message boards.

In the early 1980s, these separate groups began adopting a single communication approach, which was called [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite). As more and more computers became able to connect over this protocol, the Internet was born.

**🤓 Nerdy note:** Technically, an internet (with a lower-case `i`) is any group of computers networked together, and the Internet (with an upper-case `I`) is the vast network of globally interconnected computers. So you could have an internet of a few computers in your home or office that connect to each other but don't connect to the Internet. But most people use the lower-case `i` internet to mean the global Internet. That's what I'll tend to do as well.

## The World Wide Web

At this point, the Internet was growing in popularity, but it didn't look like the internet we have today. People could communicate over email and [bulletin board systems](https://en.wikipedia.org/wiki/Bulletin_board_system), and they could send and receive files, but navigating and finding these resources was difficult.

In 1989, a scientist working at [CERN](https://en.wikipedia.org/wiki/CERN) named [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) wrote a proposal for a system that would make navigating the resources on the Internet easier. He called this system the World Wide Web.

The World Wide Web built on the older idea of [hypertext](https://en.wikipedia.org/wiki/Hypertext), which is a fancy word for documents that link between each other. Tim Berners-Lee proposed that these documents would be written in a new programming language called Hypertext Markup Language (HTML), and that they would each have a unique identifier (called a URL) that could be used to link from one document to another. He and his team built the first browser, which is a computer program that displays HTML documents. He also developed a communication protocol (called Hypertext Transfer Protocol, or HTTP) for browsers to request documents from servers.

The World Wide Web was launched in the early 1990s. It quickly grew in popularity, and the mid 1990s saw a ton of development and [competition between internet companies](https://en.wikipedia.org/wiki/Browser_wars). The [World Wide Web Consortium](https://www.w3.org/) (W3C) was formed to help steer the development of the World Wide Web. Under their guidance, the World Wide Web continued to evolve, growing from static text documents, to include customizable styles and interactivity.

By the late 1990s, many individuals had personal computers with access to the internet and the world wide web- although at this point they were still connecting over dial up! Companies started selling products online, and e-commerce sites like eBay and Amazon were wildly successful. Search engines were also developed, taking the World Wide Web from a chaotic network of websites, to a searchable corpus of information.

**🤓 Nerdy note:** Similar to the Internet vs internet distinction, technically the World Wide Web is built on top of the Internet. But today, most people who say "the internet" really mean the World Wide Web.

All of this excitement around the World Wide Web brought a ton of investment into new internet companies. Most of this investment was in companies that weren't actually profitable, which eventually led to the [dot com bubble burst](https://en.wikipedia.org/wiki/Dot-com_bubble).

## Web 2.0 and Beyond

In the early 2000s, the way people used the internet shifted away from static websites and e-commerce sites, to more personal pages. Blogging (a shortened version of web logging) took off, and sites like MySpace and Facebook let people connect with each other in new ways. This time is often referred to as **Web 2.0**, because it represented a shift in how people used and thought about the internet. In 2006, Time Magazine's Person of the Year was [You](https://en.wikipedia.org/wiki/You_(Time_Person_of_the_Year)), meaning each individual who had contributed content to the internet.

Over the last 20 years or so, the internet has continued to evolve. Social networking sites have grown to include not only posts from your friends, but algorithmically-generated feeds of content designed to keep users engaged. This is controversial to say the least, and leads to many questions about the ethics of tech companies and the future of human connection.

That brings us to today. How has your own relationship with the internet changed over time? What are some of your favorite (and least favorite) websites?

## Web Pages vs Apps

Now that you know the rough history of the internet, think for a minute about how you use the internet in your own life.

You likely visit web pages in a browser like Firefox, Safari, Chrome, or Internet Explorer. You probably also use apps (also called applications) on your phone like Spotify, Instagram, and Tik-Tok. You also likely use other apps on other devices, like the streaming services on your TV.

The line between all of these has become pretty blurry over time. All of these can connect through the internet to show you content and connect you with other people. And many products offer both a website and an app version. (And to make it more complicated, many apps are really just websites contained by a native app launcher, and apps can be set to open when you try to navigate to a web page.) But since you’ll be specifically creating web pages, it’s worth spending a minute defining what that means.

**🤓 Nerdy note:**  The terms "website" and "web page" are often used interchangeably. Some people would argue that a web page is a single document (like the one you're reading now), and that a website is every web page at a particular domain (like all of Happy Coding). But I don't think the difference is super important. (You might also notice that they sometimes have spaces, but sometimes they're `website` and `webpage`- it all comes down to personal preference.)

For our purposes, a web page is a document that you access via a URL in a web browser. This definition does not include phone apps, or apps that you use on your computer, TV, or gaming system.

## URLs

Every web page has a Uniform Resource Locator (aka URL). That might sound complicated, but you’ve seen them many times. Here are some examples:

- `https://happycoding.io/tutorials/html`
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- `https://www.spacejam.com/1996/jam.html`

URLs contains a few parts:

- **Scheme:** The URL part before the `:` colon. This indicates how a computer should connect to the resource.

  - You’ve probably seen the `http` and `https` schemes, but there are others like `ftp` for transferring files and `mailto` for sending emails.

- **Domain:** The URL part after the scheme, but before any slashes. This is often associated with the name of the product or web page, like `happycoding.io`. This can be further broken down:

  - Top-level domain: This is the part of the URL after the dot but before any slashes, like `.com`, `.edu`, `.net`, or `.io`.
  - Second-level domain: This is the part of the URL before the dot, like `happycoding` or `youtube`.
  - Subdomain: This is the part of the URL before the second-level domain. For example, `https://en.wikipedia.org/wiki/Internet` has a subdomain of `en`.

- **Path:** The URL part after the domain, but before any **?** question mark symbols. This usually contains a few **/** slash separated directories, often followed by a filename.

  - For example, `https://happycoding.io/tutorials/html/intro-to-the-internet` has a path of `/tutorials/html/intro-to-the-internet`.

- **Query parameters:** The URL part after the **?** question mark symbol. This provides more information in addition to the path.

  - These are often, but not always, used for tracking. For example, if I share a song from Spotify, I'll get a URL like this: `https://open.spotify.com/track/1k2pQc5i348DCHwbn5KTdc?si=e69bc3b5fca64cfa`.

    The part of the URL before the `?` question mark is the URL of the song, and the part after the `?` question mark is used to identify the person who created the link (in this case me). This lets Spotify keep track of who shares what songs. Many people delete query parameters before sharing a URL to avoid being tracked without consent.

  - However, other products use query parameters as a necessary part of the URL. For example, `https://www.youtube.com/watch?v=dQw4w9WgXcQ` is a YouTube URL, and in this case the query parameter identifies the video and can’t be removed without breaking the link.

- **Fragments:** This is the part of the URL after a `#` hash symbol. This is used to link directly to a specific section on a page.

  - For example, `https://happycoding.io/tutorials/html/intro-to-the-internet#urls` links to this section. Try it out!

Not every URL contains all of these parts. Start looking for them as you navigate the internet and share links!

## Browsers

Now you know what the internet, web pages, and URLs are. Finally, browsers are apps that let you navigate the internet by entering URLs and clicking links. Here are some examples:

- Firefox
- Chrome
- Safari
- Internet Explorer

There are also *embedded browsers* that display web pages from apps without leaving that app. For example, if I click a link in an email in the gmail app on my phone, it opens an embedded browser directly in gmail, rather than opening the link in my browser. The motivation behind apps using embedded browsers is debated, and can range from improving security, to secretly tracking users. Embedded browsers often hide the URL, but behind the scenes they’re still a browser loading a web page.

## The Future

The internet has changed a lot since it was invented, and it’s still changing today. Our society has started asking questions about the power of big tech companies and the future of human connection, and it’ll be up to all of us to answer those questions.

How do you think the internet will change in the future?

## More Info

- [History of the Internet](https://en.wikipedia.org/wiki/History_of_the_Internet)
- [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
