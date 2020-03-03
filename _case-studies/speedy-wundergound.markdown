---
title: Speedy Wunderground - Making music with the Jamstack
date: 2019-09-02 08:54:36 Z
categories:
- Case Study
thumbnail_image: "/uploads/speedy-wunderground-homepage.png"
thumbnail_article_image1_file: "/uploads/speedy-wunderground-compilations.png"
thumbnail_article_image2_file: "/uploads/speedy-wunderground-montage.png"
thumbnail_article_image3_file: "/uploads/speedy-wunderground-early-concept.png"
thumbnail_article_image4_file: "/uploads/speedy-wunderground-sound-player-f729d1.png"
thumbnail_article_image5_file: "/uploads/speedy-wunderground-ecommerce.png"
thumbnail_article_image6_file: "/uploads/speedy-wunderground-admin-panel.png"
caption_image1: The yearly compilations follow a simple colour based approach
caption_image2: Dan is a big fan of photo montage
caption_image3: An early concept design and animation experiment
caption_image4: A sound player so you can sample the tracks before buying
caption_image5: ecommerce powered by Snipcart, no need to worry about databases
caption_image6: 'Siteleaf offers a really easy to use cms for static sites! '
intro: |-
  Speedy Wunderground is a label which started on February 25th 2013 with the release of “I Go Out” by Steve Mason & Emiliana Torrini. Comprising of Dan Carey, Alexis Smith and Pierre Hall, they have been releasing some amazing tunes over the last 6 years.

  I had the pleasure of building their website way back then and it was most definitely showing its age and lacked any real functionality. A stop gap that lasted too long you might say. Luckily Speedy Wunderground were keen to revisit their site and improve the ecommerce aspect, they also had a few ideas about previewing tracks. Alexis and the team gave me a blank page to define the tech stack and with that in mind I suggested going with an approach that would minimise security issues and future updates.
preamble: "### The Tech Stack\nWe decided to go with Jekyll, a Static Site Generator
  (SSG) using Snip Cart to enable ecommerce and Siteleaf to allow the Speedy Team
  to update new releases themselves. This stack also meant we could host it on Github
  pages allowing easy development updates via Git.\n\nWith the Stack sorted we worked
  together to plan out what the site needed.\n\n* A Basket/Checkout\n* Responsive
  for all devices\n* Shop Categories\n* The website should be simple and easy to use
  bioth for the user and the person using the admin.\n* A music player would be good.
  \n* Focus should still be about the label and each release as we don’t have artists
  signed to us.\n"
list1: |
  ##### Who was involved?
  * Website - <a href="https://www.speedywunderground.com/" target="_blank">Speedy Wunderground</a>
  * Client - Dan, Lex and Pierre


  ##### My Role
  * Design
  * Front-end Development

  ##### Tech Stack
  * Jekyll
  * Siteleaf CMS
  * Github Pages
  * Snipcart
list2: |
  * April 2019 - Initial discovery work - understanding  collating the required functionality, agreeing intended work.

  * May 2019 - Design concepts.

  * July 2019 - Main site build, addition of ecommerce and sound player.

  * September 2019 - Final sign off, launch and training.
layout: case-study
---

### The Concepts and Build

As Speedy Wunderground had already released 3 Compilations it made sense to reference the design elements. The site was planned to launch alongside their Year 4 release, which was using black and white and the use of a 45 degree line was a constant.
 
Dan really wanted to incorporate some grainy photomontage that had also been used in some marketing.

{% include images1_2.html %}

Working with this I came up with a couple of quick Sketch  concepts but got into the browser as quickly as possible so we could work together with a working prototype. This made it incredibly easy to make changes and try out colours and roll overs/animations.

> #### What the client said
> "I cannot speak more highly of Sush Kelly. He has been essential in the development and maintenance of the Speedy Wunderground website. Incredibly efficient and always there to offer useful creative input where needed. His knowledge and design has given us something we are incredibly proud of, that is easy to use and more importantly - looks great! " - Pierre Hall - Marketing Manager"

### Sound Player

One request was a sound player. My first task was to work out how we could do this with a static site. Using Front matter on releases the Speedy Admin could upload a sample mp3 for any tracks and then I looped through the releases to create a playlist. The player is quite a simple affair using a smattering of javascript.

{% include images3_4.html %}

### Ecommerce

Payment and basket functionality is handled by SnipCart. This is a great solution and can be applied to any type of site. The products template contains data attributes that are passed across when you click on the buy button. All the heavy lifting and credit card details are handled by Snipcart, possibly the easiest e-commerce functionality I have implemented! 

The addition of Snipcart means there is load more transparency about the sales the site is making. The easy to use admin means the client can add merch or releases with relative ease.
 
The fact that the site is static means no plugin updates or databases to hack so it is a really low maintenance site that is quick to load.

{% include images5_6.html %}

### Admin for the Client
 
Jekyll is super easy to build and deploy for a developer but what about Pierre updating his releases going forward? Enter Siteleaf - a solution that gives a standard web based admin interface for static sites. 

Setting things up is as simple as connecting to a repo and then Siteleaf can understand Front matter fields to give a slick UI for the administrator.
