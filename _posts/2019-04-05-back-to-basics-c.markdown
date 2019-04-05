---
title: 'Back to Basics: C'
date: 2019-04-05 13:39:00 Z
---

### Revisit the building blocks of websites and learn how you can create responsive layouts using modern layout techniques.

The last 2-3 years has seen layout move forward in leaps and bounds. Now that these modern techniques have such a consistent result in modern browsers you really can be using them for your production code. This tutorial will show you just how simple it is to create a standard blog style layout using css Grid and Flexbox.

First though let’s have a quick recap over the basics of html and why is is really good to try and write semantic code.

### It’s more than just desktop and mobile

Have you noticed the reader mode on Safari and Firefox? It is an icon in the address bar that looks a bit like lined paper. This will render your webpage in a distraction free bare bones mode and is rather like devices such as the apple watch use. With the “internet of things” more and more devices are accessing and displaying web content, possibly the biggest hit of Christmas was interactive speakers like the Amazon echo.

With these in mind and of course the need for your site to work on screen readers and the like, the structure of your page is super important. If you just use <div> for all your containers and even buttons then the devices rendering your code do not know what the context is and so cannot use any of the native functionality or features.

### **Laying out our Page**

We are going to build a basic web page to include a header with navigation, a hero block, main article, featured article blocks and a footer. The idea here is to see just how fluid we can make the layout without using media queries or any assistive javascript.

You can see that the html of the page is split into distinct sections using html5 tags. We also add classes to them as older browsers will not know what they are and render them as a div. Let’s start at the top of the page and work our way through.

**The Site Header**

The header of the site contains a logo and an unordered list for the navigation. We don’t actually need to add any wrappers or containers to lay this out with the logo to the left and the navigation to the right in a single line.

``` <header class="header">

<img src="images/logo.png"/>
<nav>
<ul class="nav">
<li><a href="#" class="active">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">The Dogs</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>
</header>```