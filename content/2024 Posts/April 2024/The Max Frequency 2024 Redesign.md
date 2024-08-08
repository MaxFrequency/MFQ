---
Published: 2024-04-11
URL: 
permalink: 2024-redesign
tags:
  - Design
  - Blog
  - Wordpress
description: Max Frequency has ditched Wordpress. Say hello to the new blog.
---
Welcome to the new site design. Gone is the...well, a lot of stuff is gone. The biggest change is for the first time in a [[Celebrating 10 Years of Writing|decade]] I am not using Wordpress. Let's break it all down.
# Breaking Up with Wordpress

> Currently, Max Frequency is hosted on WordPress. I’ve used it for nearly a decade for various projects, including my first blog *Go Left Gaming*. I was growing tired of WordPress this year though, due to some backend editor changes and imagining the grass was greener on the other side.

The [[The Journey to Redesign Max Frequency|last time]] I redesigned the site was in November 2021. I tried leaving Wordpress then, but the only solution I felt capable of using was Squarespace. It didn't go well. So I stuck with the status quo that defined my blogging since my earliest days.

Since that redesign, I my frustration with Wordpress only grew. I wrote this in a note dubbed "I Despise Wordpress" back in December 2022:

> Their editor gets worse all the time. I understand this is the .COM part of Wordpress, not the .ORG. I need to get away from this snare. My issue is my lack of programming know how to build a site and run a server. I don’t want to be using Wordpress much longer though. I’ll figure out something to port it all over to some other service.

I was stuck in a relationship with Wordpress and its owner Automattic. 

In 2023, I set out to move the site off Wordpress. That Spring I reached out in the Relay FM Discord to see if I could hire someone. I knew what I wanted – some sort of hosting from a service like Linode or something. My issue was my web programming knowledge capped off at the basics of HTML and CSS. I knew the destination, I just didn't know how to get there.

Some folks recommended static site generators[^1], but those felt one step too far from my technical know how. I've never used GitHub. I was writing in [Craft](https://www.craft.do) at the time and had only flirted with the likes of Markdown before. 

If we zoom out, the root of my problems become apparent. I was using software and services that controlled the way I wrote and presented myself online. They were in charge and I had to grit my teeth. Wordpress would alter my stat tracking tools out of the blue, force an app change on me, and was changing its backend more times than I could count. Posts would be padded with Wordpress-specific tags like 

```
<!-- wp:paragraph -->
```

and these tags would get out of hand. For example;[^2]

```html
<!-- /wp:paragraph --><!-- wp:audio --><!-- /wp:separator -->
<p>&nbsp;</p>
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><em>Pok&eacute;mon Black 2 and White 2</em></h3>
<!-- /wp:heading --><!-- wp:list -->
<ul><!-- wp:list-item -->
```

I wanted clean writing—both in the code and in the presentation—that wasn't bogged down with cruft from companies I didn't care for or knew well. I couldn't easily implement my own ideas, despite paying for plug-in support. And those ideas back in 2021 have remained almost the same.

> I had some aspirations like building an archive, incorporating Light/Dark mode support and some [fancy footnotes](http://www.bigfootjs.com/) (I could have used a footnote here, sniff).

I found a plug-in for footnotes, but the preview of said footnote never rendered in an RSS reader. I could never figure out light mode vs dark mode, so I just force dark mode on everyone. I did build an archive though. And that archive was the impetus for me to own my work and not trust it in the hands of corporations.
# Flirting with Markdown

If you hang around Apple enthusiast and news circles long enough, it won't take long for you to learn about [Markdown](https://en.wikipedia.org/wiki/Markdown). And when you learn about Markdown, it doesn't take long to learn about [Obsidian](https://obsidian.md).

I have had quite the courtship with both of these tools. It's hard to track when I first tried learning Markdown. It was probably one of those "This sounds simple. Let me give it a shot," type experiments. After all, the initial pitch from [John Gruber](https://daringfireball.net/projects/markdown/) was for readability.

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

What I do remember about those early days was getting bogged down in all the syntax that has been stacked on top of Markdown in the intervening years. It was a lot to take in at once. But the allure never went away.

When I made the switch to Craft, that was in part a desire to have access to a Markdown output, while still be able to use a richer text editor.[^3] The catch with Craft though was that I was painting myself in a proprietary corner of a different name. And this one had an annual subscription fee. 

In my final few months of working at Walt Disney World, our team was looking to make the switch from Adobe FrameMaker 2019 to something different. FrameMaker was a beast to wrangle with, especially when onboarding folks. I saw Markdown as a possibility of escaping the confines of rigid corporate software. I began building out a sample manual in Markdown, ironically with Obsidian. I'd finish my initial test, but left the company before I could pitch it to my boss. I did build out the onboarding documentation the same way though and said as much to hopefully inspire the team to look into it further. 

One day, my dad asked me for a recommendation for a way to interconnect documentation and the like for his own company. I threw out Obsidian and said it might just be what he was looking for. It was and it sent him down the vortex that Obsidian can become at first.

It was my dad's deep dive that ended up encouraging me to try the pitch again at my last employer. A project I was on required the use of MadCap Flare, but it was winding down, so I once again saw the opportunity to build out a pitch in Markdown with Obsidian. I used David Spark's [Obsidian Field Guide](https://learn.macsparky.com/p/obsidianfg-plus) to learn the ropes of this software I had danced around for so long. Along the way, I built a solid foundation with both the app and Markdown itself. While building out corporate documentation and falling in love with Obsidian, I thought to myself "Why don't I use this instead of Craft?" My subscription was up in a month or two, so I began the process of moving from Craft into Obsidian in late Summer/early Fall 2023.

I saw the immediate value of interlinking my writing, thoughts, notes, and podcasts. It took no time at all for me to want *all* of my writing online in Obsidian; to connect over a decade of writing and have access to it. I [[An Update – November 2023 Edition – Where's the Writing|started that process]] in November 2023.

I never finished that second work pitch either. I was let go from that job one month prior in October 2023. I ended up at my dad's company. Now I use Obsidian and Markdown every day, both personally and professionally. 

There's was just one more (big) problem: I was still taking what I wrote in Obsidian and just copying it to Wordpress.[^4] Edits would fall out of sync, the link formatting was different. It was the same as with Craft or Scrivener. I needed to get out of Wordpress and find a way to use my Markdown files as the backbone of my site.
# Sayonara Wordpress

The last straw with Wordpress was this news story from 404 Media—[Tumblr and WordPress to Sell Users’ Data to Train AI Tools](https://www.404media.co/tumblr-and-wordpress-to-sell-users-data-to-train-ai-tools/). The headline says it all, but you should still read the article. Wordpress' owner Automattic would make a [statement](https://automattic.com/2024/02/27/protecting-user-choice/) saying that the sharing of content would be opt-out-able. I know that my writing has been crawled and studied by these AI models, at least a tiny bit, that wasn't my beef. It stuck in my craw that this company was going to sell my writing to train a [LLM](https://en.wikipedia.org/wiki/Large_language_model) to help that company make money, all while I make zilch. I was signing away my voice for free with no real say about it otherwise.

That article came out at the end of February 2024. I checked my Wordpress annual renewal date–April 2024. I had two months. I got to work.
# Problems and Solutions

To make the switch I needed to ask a lot of questions and solve problems those questions raised. Things like
- How do I host the site? Who hosts the site?
- How do I keep existing URLs/redirect them?
- How do I host all my images, videos, and PDFs?
- What about my analytics?
- How do I visually design my site?
- What am I giving up? 
- What am I gaining?

Here's how I learned and solved those.
## Hosting

One thing that stuck with me in David Spark's Field Guide was that early on in using Obsidian, people can sometimes get so amped that they want Obsidian to do *everything*. I was aware this could happen to me and tried to ward off the siren's song. This caused me to struggle with using Obsidian Publish as my host. I wanted to avoid putting all my eggs in this purple basket.

But as I dug into these other questions and learned about potential solutions, I came to realize two things:

1. I could solve most of these with Obsidian Publish.
2. Publish was *right* at my current nerdy technical threshold. It was a system I could manage and handle on my own. 

With only two months to make a real decision and a fat stack of articles to still archive, I made the call to lean into Publish. Know this was going to be my home base, I was free to make other decisions in a swift manner.
## Redirects

This was my biggest fear. I dropped the ball with my original blog *Go Left Gaming*. I imported all the articles and shuttered the site. I should have redirected instead of closing the doors. I lost years of hyperlinks and any search prominence I built up. I couldn't do that with Max Frequency.

After much searching and fretting, I decided to ask an IT friend if they could tell me what to do in plain English. They offered to help, but while I was waiting for them to have a chunk of time, I remembered a tool that could tell me in plain English—ChatGPT.[^5] This wasn't [[How ChatGPT Came to My Rescue|my first rodeo]] with ChatGPT and solving a technical problem. This time, ChatGPT nailed [explaining](https://chat.openai.com/share/12fa2d0c-362e-486c-bbfa-a678ae3c43b2) to me the systems in place for a 301 redirect and actually made me realize I *don't need one*. 

When I informed the bot that the domain was staying the same, it said something that caught my attention:

> Automatic redirects: Since you're keeping the same domain, you don't need to set up individual redirects. However, you should verify with Obsidian Publish if they have any automatic redirection mechanisms in place to handle any potential changes in URL structure or permalink formats between WordPress.com and Obsidian Publish.

It reminded me of the [Permalink](https://help.obsidian.md/Obsidian+Publish/Publish+and+unpublish+notes#Permalinks) options in Publish. I didn't have to redirect all the old URLs to new ones. I just had to make sure that each page, article, and file were mapped the same way. I was 7 out of 10 years into the archival process, but I knew this was the way. So I incorporated a permalink property into the templates and began matching URLs. I'd go back and fix the other seven years at the end.

And it worked. 🙏🏻 Sometimes you have to do the [[GMTK did the Hard Thing|hard, tedious thing]] to make things right. 
## File Hosting

Publish allows for hosting up to 4 GBs. The Wordpress site health says I used 2.4 GBs. I was concerned to say the least. 

As of this writing, Max Frequency takes up 458 MBs. 

The only files on my site really are/were images, PDFs, the audio version of [[Chasing the Stick – The History of Naughty Dog|Chasing the Stick]], and a tiny, tiny set of videos. During the archival process, I pulled in each image and organized them. This got rid of duplicates I may have had and pulled in the .webm format which is tiny. That was a light load. 

As for the audiobook files for Chasing the Stick, I did have to migrate those to a new podcast host. I ended up going to [Spotify for Podcasters](https://podcasters.spotify.com). It's not ideal, but the price of free means keeping that version accessible without incurring more monthly fees from Libsyn for a retired feed. I did learn that I can FTP into my Libsyn account though and host files that way in an unlisted manner. I threw up the full audiobook there and used that URL to embed the default audio player instead of using Spotify's embedded player (more on embeds later).

Those two were the bulk of my storage usage. PDF transcripts aren't that big and I could make them text files for them to be even smaller. I think I kept one video file? The rest can be hosted on the free video host YouTube. I'm not comfortable with only 4 GBs and hope Obsidian offers a way to scale up, but if not, I can find some file hosting platform. I'm not worried.
## Analytics

I have a love hate relationship with analytics. I value the data and insight, but sometimes I check the numbers too often. I knew I’d want an analytics solution, if only for my annual reviews. 

But I knew I didn’t want something invasive. I dislike web trackers and aggressive marketing as a reader, so why would I force that upon my readers? Automattic’s analytics platform Jetpack felt covered in sticky, goopy slime. I knew Google analytics was not the answer.

I landed on [Plausible](https://plausible.io/). I had heard of the service before and bought into it with Craig Mod’s [usage](https://craigmod.com/essays/memberships_year_five/#tech-stack--running-costs) with the note of “privacy friendly web stats.” That was all the endorsement I needed.

Setting up them is straightforward when you use a custom domain. I found this [forum post](https://forum.obsidian.md/t/enable-plausible-analytics-on-an-obsidian-publish-site/34661) and it worked in under a minute. Pretty snappy. I will say I am disappointed there is no way to import my stats from Jetpack or a .csv file into Plausible. I hope that's something that can be addressed someday.
## Visual Design

The visual design aspect I wasn't super worried about. Max Frequency is text and images. No crazy layouts or slick elements. I like the look and feel of Obsidian's default theme, so I knew I'd like the baseline of Publish too. 

But visual design isn't some large sweeping, singular decision. It's full of tiny choices that make up the whole. I really learned that with the choices of colors. The 2021 design was black (#191919), while the accent color for links and the like was the red from my iMac (#df3b3f). With the ability for a true light and dark mode, I wanted to try my hand and picking more intentional colors.

I have a bigger idea for an Obsidian theme, but I just needed something to get the site off the ground. My choice is overall related to my theme idea, so maybe you can figure out the scope of it. 🤔

For the dark mode, I went with...the default scheme from Obsidian. 😅 I prefer dark mode and could not quite nail the colors I envisioned, so in the interest of moving forward, I stuck with the defaults of a slightly lighter black (#1e1e1e) and a slightly slightly lighter black (#262626) for the background and panels. The font is a shade of gray (#d2d4d4) from very specific video game console—the GameCube—and even more specifically the faceplate of the GameCube. The accent color is in the vein of the iconic Indigo GameCube. 

For light mode, I'm rocking a lighter variant (#e1dedf) of the faceplate and the panels are colored after the X/Y bean buttons (#d0d0d0). The font is modeled after my dear Jet Black GameCube (#242327) with that Indigo pop for the accent color (#6c5cb2).

The lesson in just the color choice alone is that making colors compliment each other is a lot trickier than picking them on a palette and implementing them. There is a lot more feel behind the decision. I like where I'm starting out here, but I do hope to hone the feeling in more down the road. 

![[240411_MF Colors.png]]

Besides color feel, I had a few other UI elements I needed to crack. For a long time I fought the urge to directly embed YouTube videos in my site in an attempt to be a "pure" blogger. I gave in though because I want them there and I still provide direct links beneath the embeds. So when going through the archival process, I made the call to embed videos where it made sense. I did choose YouTube's "Enable privacy-enhanced mode." toggle when copying the embed code, in a small attempt to limit the tracking Google does on you. The difference seems to be adding ```-nocookie.com``` to the video's URL. I hope that helps.

The primary UI element I wanted carry over was the use of your browser's default audio player for my [[podcasts]]. The default player is fast and you are use to it. There's no need to load some other audio player and bog down the site/user experience. At first I did not know how to do this.

You can't use third-party Obsidian plugins on Publish sites, so I sort of wrote off being able to use the default player at first. I started using Libsyn's custom player, but then an idea occurred to me as I was copying in their code. Both Libsyn and all those YouTube videos were using ```<iframe>``` tags. Was there just a tag for loading the default audio player?

Yes there was. I was so delighted that this worked. 

```
<audio controls>
  <source src="audio url">
</audio>
```

I just had to put in the direct URL to the podcast .mp3 file and the player would load right away. It was *exactly* what I wanted. The code is clean to read, making those YouTube embeds the most complicated thing inside my writing. I can totally live with that.

The last bit of the visuals are the snazzy [callouts](https://help.obsidian.md/Editing+and+formatting/Callouts) that Obsidian supports. These are as described and...callout text for the reader. 😬 I knew I could use these for Super Chapter Select callouts on the season pages. The neat thing is that these are just custom CSS, so I was able to use the plugin Admonition to create my own callouts and then export them as CSS. I just integrated that code into the publish.css file and bam, I have my own callouts. 

Overall, I am happy with the look and feel of Max Frequency's 2024 design. It's a solid foundation for this new backend. I'm still feeling out some of the custom Publish options, like horizontal stacking of pages on desktop, but I feel good about where I'm starting.
# What am I losing?

This transition is not without its losses. The two biggest are the RSS feed and members-only page for Super Chapter Select.

As far as I can tell, Publish has no RSS feed support. Maybe I am wrong or the feature will come down the line, but here at launch, I am operating under the assumption that my RSS feed is bust. I don't have any data on RSS subscribers or the sort, so I'm not actually sure how many people are missing new posts because of this. It's more a matter of principle and giving readers the option. Heck, I read my own site in an RSS reader after publication.

Sort of in tandem with the RSS feed is that the "endless" blog-style feed is gone. This I *could* recreate[^6], but decided not to. I like the articles being organized by year and month in the navigation bar. At the bottom of the homepage is a simple list of the 10 most recent, new pages/articles. I feel like this is a good compromise between the "endless" feed and no feed.

The other big one is a password-protected page for Super Chapter Select member content. I can't have password-protect pages, only entire sites. And since Super Chapter Select is still sitting at one subscriber (a friend), I made the call to abandon the page at the start and deal with handing out subscriber content manually until I come up with a solution. Since the *actual* impact is so small, I sided with it instead of the *theoretical* impact.

There are a couple smaller things, like needing to link the transcripts to the podcast feed since the file hosting URL is different now. Like I mentioned above, I had to migrate the audiobook version of Chasing the Stick to [Spotify for Podcasters](https://podcasters.spotify.com). I don't like letting Spotify be in charge of my feed, but free is a hard price to beat for a retired feed.
# What am I gaining? 

Moving everything to Markdown and Publish has given me something I've never had in all my years of writing online. 

Flexibility. Freedom.

I have the flexibility to make my site look the way I (currently) want, without the need of a $300 tier to access Wordpress plugins. I have the flexibility to write and publish how I want. I have the flexibility to use the tools I want—and ignore the tools I don't. 

I have the freedom to leave Publish at any time without losing my articles, links, or data. I have the freedom to not worry about mega-corporate owners selling my work from under me. I have the freedom to write and publish what I want, when I want. 

These are all worth the price of a handful of features.
# Entering a New Era

The header says it all. It's time for a new era in my life of writing and publishing online. I'm free from the shackles of Wordpress and it feels good. Like the new [[Home|homepage]] says, "feel free to explore, wander, and get lost." This place is my home on the Internet. These are my words, thoughts, impressions, and opinions. 

I hope you enjoy.

[^1]: I remember [Jekyll](https://jekyllrb.com) being one for example.
[^2]: This is an egregious example from copying over show notes for [[Chapter Select]] to my podcast host Libsyn. I always hated that this Wordpress code was mucking up my podcast feed/files. I tried manually cleaning it up in the beginning, but it became too tedious. 
[^3]: Plus I wanted to shake things up from Scrivener and I have a crippling desire to try new software. 
[^4]: I know there is a Wordpress plugin for Obsidian, but I didn't love the idea. Probably because deep down I knew I wanted to leave Wordpress.
[^5]: Yes it is ironic that I used a LLM to help solve my problem that was spurred by a desire to not have my writing sold indirectly to said LLM.
[^6]: Maybe I will as a lone page just as an exercise in using dataview queries. 🤔