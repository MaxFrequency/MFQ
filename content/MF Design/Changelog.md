---
title: Changelog
draft: 
URL: https://maxfrequency.net/changelog
permalink: changelog
tags: 
description: 
image:
---
Welcome to the Max Frequency changelog. I thought it'd be fun to keep a log of visual design changes here on the site now. I decided to name (date?) the changes with the year and month as the name, i.e. 2024.4.

For very brief historical context, here are some articles about visual refreshes in the past.

- [[The Vlog Page]] dated February 20, 2014
- [[The Journey to Redesign Max Frequency]] dated November 15, 2021
- [[The Max Frequency 2024 Redesign]] dated April 11, 2024

---
> [!log] 2024.5.24
> Some more apparent visual changes to the site with two new efforts as well—Game Notes and Chapter Select Production Status.
> 1. Added light and dark theme variants for certain callouts to improve readability. Check them out by alternating modes on the [[Theme Testing]] page.
> 2. Implemented "Published Date" and tags at the top of posts. It bugged me to not have a public view of the published date. Tags were a bonus because clicking on them reveals all other posts with the same tag. Seemed super helpful and cool. I used this [tutorial](https://minerva.mamansoft.net/📗Obsidian逆引きレシピ/📗Obsidian+Publishのサイトにプロパティ(メタデータ)を表示したい).
> 3. Implemented the font [Poppins](https://fonts.google.com/specimen/Poppins) across the site. It reminds me of Gunar, but free. I had major trouble figuring out custom font, but got help from kepano and sigrunxia. You can check out my issue and solution [here](https://forum.obsidian.md/t/custom-font-not-loading-in-navigation-sidebar-and-safari-is-loading-in-chrome-firefox/81823).
> 4. I changed the function of [[Latest & Greatest]] to now list the ten most recent *changed* notes. This saves me a few steps on the backend and helps surface any article as I may go fix a typo or error. 
> 5. Added a new section to the navigation bar—Game Notes. This will be the home to my mind mapped notes on games I play. You can read more about the idea [[Publishing My Game Notes|here]].
> 6. Removed the local graph and right-hand pane on the site. The right-hand pane is what bugged me the most. It didn't *feel* right. It prevents right-handed scrolling on touch devices like an iPad. It chunked up the visual design too much. I would like to bring back the local graph somehow and hope future iterations of Obsidian Publish will allow users to place the graph at the bottom of the page like [Quartz 4 does](https://quartz.jzhao.xyz).
> 7. Integrated a [[Chapter Select]] Production Status callout to seasons in production. You can read more about the decision behind them in [[May 2024 Design Changes]].

> [!log]- 2024.4.19
> Tweaks to the launch design of Obsidian Publish version of Max Frequency. 
> 1. Added custom CSS to the YouTube iFrame bits, so videos scale appropriately with windows, [[240416_XMen YT Frame Comparison.png|especially on mobile]]. Code found [here](https://www.reddit.com/r/ObsidianMD/comments/oumqda/responsive_youtube_embed_video_in_obsidian/)
> 2. Removed the horizontal stacking feature. This created disparity between the desktop and mobile experiences. Plus, the site seems to load faster? It also did not jive with my mental model. Still debating on the right-hand pane with the local graph and header table of contents, but leaning toward disabling it as well.
> 3. Removed "Powered by Obsidian" from the footer and added "© Max Roberts 2008 - 2024"
> 4. Decided to add [[Theme Testing]] as a public page to be a raw view of assets and design principles. There you can see all possible formats, tidbits, and styles with the current theme, as well as access to the site's CSS file.
> 
> Changed the link color in Dark Mode. The current colors are,
> > [!info]- Dark Mode
> > - Main body - # 1e1e1e
> > - Side panels - # 262626
> > - UI Accent - # 463a8d
> > - Primary Font - # d2d4d4
> > - Navigation Font - # ababab
> > - Lists - # 807e7e
> > - Links - # 38c6c0
> > - Hover Links - # 2a9998
> > - Highlight - (251, 48%, 51%, 50%)
>
> > [!info]- Light Mode
> > - Main body - # e1dedf
> > - Side panels - # d0d0d0
> > - UI Accent - # 6c5cb2
> > - Primary Font - # 242327
> > - Navigation Font - # 42474a
> > - Lists - # 042e47
> > - Links - # 6c5cb2
> > - Hover Links - # 8177c0
> > - Highlight - (251, 48%, 51%, 25%)

> [!log]- 2024.4.9
> Launch design of Obsidian Publish version of Max Frequency. The font is [Inter](https://fonts.google.com/specimen/Inter), which is the Obsidian Publish default. I am looking into how to change fonts. Support for light/dark modes. The base colors are,
> > [!info]- Dark Mode
> > - Main body - # 1e1e1e
> > - Side panels - # 262626
> > - UI Accent - # 463a8d
> > - Primary Font - # d2d4d4
> > - Navigation Font - # ababab
> > - Lists - # 807e7e
> > - Links - # 7667c7
> > - Hover Links - # a8a5e1
> > - Highlight - (251, 48%, 51%, 50%)
>
> > [!info]- Light Mode
> > - Main body - # e1dedf
> > - Side panels - # d0d0d0
> > - UI Accent - # 6c5cb2
> > - Primary Font - # 242327
> > - Navigation Font - # 42474a
> > - Lists - # 042e47
> > - Links - # 6c5cb2
> > - Hover Links - # 8177c0
> > - Highlight - (251, 48%, 51%, 25%)
> 
> All major Obsidian Publish features enabled as a way to give each a fair shake. These are under review and possibly will change shortly after launching this design. This includes,
> - Hover Preview: Displaying pages when hovering over a link.
> - Stack pages: On desktop, pages open horizontally and stack.
> - Show Navigation - A nav bar on the left-hand side for navigating the site with visible folders and notes.
> - Search Bar - For searching folders and articles.
> - Show graph view - Displays the Obsidian local graph on right-hand side.
> - Show ToC - Displays a table of contents for each page on right-hide side, made up of the headers.
> - Show backlinks - List of backlinks at the bottom of each page.