---
title: Back to Basics
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

```html
<header class="header">

   <img src="images/logo.png"/>
   <nav>
     <ul class="nav">
       <li><a href="#" class="active">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">The Dogs</a></li>
       <li><a href="#">Contact</a></li>
     </ul>
   </nav>
 </header>
 ```

 **Fr - the magic unit**

 We set the header to display grid, then use ‘get-template-columns’ to set 2 columns in the header. We use the fr unit here which is a fractional unit, 1fr would equal the available space in the container.  In this instance we are giving the navigation a slightly smaller area to fill. 

```css
.header {
 display:grid;
 grid-template-columns: 1.5fr 1fr;
 align-items: center;
}
```

**Site Navigation**

Now we target the list of menu items, again we turn the <ul> into a grid container and tell the items inside to auto fit into columns. Here we use minmax to ensure the columns can never be smaller than 100px but if the space is larger they can share the space as 1fr each.

```css
.nav {
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(100px , 1fr));
 grid-gap:10px;
 align-items: center;
}
```
**Hero Block**

The next part of the page is the main hero block. Traditionally vertically centering text in a container required all sorts of work arounds. Using grid or flex this is really simple:

```html
<article>
     <section class="hero">
       <h1></h1>
       <p></p>
       <a href=""></a>
     </section>
   </article>
```
