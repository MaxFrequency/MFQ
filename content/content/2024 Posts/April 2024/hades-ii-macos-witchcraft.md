---
Published: 2024-04-20
URL: 
permalink: hades-ii-macos-witchcraft
tags:
  - Hades
  - Supergiant
  - PC
  - Apple_Mac
  - Emulation
description: 
image: 
---
A few days ago, Supergiant Games announced that *Hades II* was having a [Technical Test](https://www.supergiantgames.com/blog/hades2-tech-test-sign-up) soon. This was going to be a slice of Early Access to iron out any kinks before ironing out the rest of the game in said Early Access. I thought of it as early, early access.

Sign ups were free and open to everyone on the game's [Steam Page](https://store.steampowered.com/app/1145350/Hades_II/), emails would follow to those selected to play. I darted for the system requirements, in the hopes that there would be support for macOS. Given how popular *Hades* was/is, I thought maybe this go around with all the Early Access, the Mac would be supported too. No such luck.

> - OS: Windows 10 64-bit (or Steam Deck) 
> - Processor: Dual Core 2.4 Ghz 
> - Memory: 4GB RAM Graphics: 2GB VRAM / DirectX 12 (Feature Level 12_0)

Bummed, but not surprised. Yet, I clicked the sign up button anyway. 

Then I got an email three days later saying I was in, basically at the start of the technical test. 🙃

But I remembered an article and an app from a few months prior that just *might* let me run PC games on my Mac. And after a little technical incantations and favor from the gods...

![[../../../../docs/assets/img/HadeII_Running_iMac.jpg|HadeII_Running_iMac.jpg]]

I was so giddy at just the fact I was able to get a PC game up and running, let alone a very niche early test of early access. I wager I am the only person in the world running this technical test on a Mac? If not the, then certainly one of a handful. Here's how I channeled my inner Melinoë and cast this spell.

The article I remembered was [this gem](https://www.macstories.net/stories/i-tried-to-run-cities-skylines-2-on-my-m2-macbook-air-via-apples-game-porting-toolkit-and-i-discovered-a-great-app-instead/) from Niléane over at MacStories. She was on a mission to get *Cities: Skylines 2* running on her MacBook Air and along the way she discovered an app called [Whisky](https://getwhisky.app/). The whole article is great and a real ride. I encourage you to check it out.

Of course, I tried Whisky back in November. I was able to get Steam up and running, but I ran into an issue where my games would stop downloading right at 99%. After much googling, I chalked up my issue as a bug that'd be ironed out and I haven't thought much about Whisky since.

That is until I got [[../../../../docs/assets/img/HadesII_Email.PNG|a certain email]]...

It was time to take a shot at whisky again.[^1]

I did the usual steps when troubleshooting, updated all the apps, redownloaded the Windows version of Steam, and – in the specific case of Whisky – made a new "bottle." Think of bottles as little individual containers to run instances of Windows trickery, from XP to 11. 

I got Steam installed, but ran into that 99% bug. Googling that problem these days did turn up some more fruitful reddit results. The [winning solution](https://www.reddit.com/r/macgaming/comments/17xw1pn/comment/ks4tzg6/) for me was changing the download region when said download got stuck, force quitting everything, waiting, and then relaunching everything. Like I said, technical incantations.

I was living the PC gaming on a Mac dream, but I needed to get a controller working first. And it's not just because I [[../../Archive/2023 Archive/2311/2023/11/27/the-2023-controller-collection-update/|prefer controllers]] in every way to a mouse and keyboard, but *Hades II* recommends a controller. I thought it'd be as simple as plugging in my Xbox controller, but no chance.

Some folks recommended disabling "Steam Input," some recommended "reseting controllers in the control panel," but no one seemed to be offering proper instructions. I found the proper "spell" in a [bug](https://github.com/Whisky-App/Whisky/issues/871) filed against Whisky.

I had to enable Whisky itself input monitoring in my Mac System Settings. Turn it all back on and then my Xbox controller appeared in the Windows Control panel. 

![[../../../../docs/assets/img/HadesII_ControlPanel.jpg|HadesII_ControlPanel.jpg]]

After all of that, I was playing *Hades II* on my M1 iMac with a smooth framerate. The game is shaping up nicely too, with solid changes from the original. The magic system is a sweet addition. I'm digging all the RPG vibes I'm getting from arcana cards and incantations. You get to build out and level up Melinoë in a meaningful way over the course of the game with longterm goals to chase for gameplay benefits. 

The visual design is stellar. I'm loving the purples, greens, and oranges; a real Halloween energy that pops. The Technical Test is limited to the very first area, which is a forest baked in fog and goop.[^2] 

![[../../../../docs/assets/img/HadesII_Spawn_Frog.jpg|HadesII_Spawn_Frog.jpg]]

The story has its hooks up front. Things have happened in the Underworld and above on Mount Olympus. I am curious to see where it all goes when the game is out for real.

Let me circle back to the fact I am running this "PC-only" early early access on my M1 iMac and am playing with an Xbox controller! I cannot believe it.

But it also emphasizes what I dislike about PC gaming. I realize I am in one of the smallest overlaps in the Venn Diagram that is *Hades II* technical testers and doesn't own a Windows machine. Solving this problem was fun, but it just reminds me of the hops that PC gamers can face. Drivers need updating, controllers aren't pairing or not supported, navigating Steam's atrocious interface. These are all things I never face on console. Games and hardware get patches, I pop a disc in, and play. 

I'm a nerd. I like a good technical challenge, especially when the carrot at the end of the stick is something like this, but this is not a constant I want in my life. I am happy this technology exists though. Apple has made some real pushes for gaming on the Mac as of late. The [Game Porting Toolkit](https://www.theverge.com/2023/6/7/23752164/apple-mac-gaming-game-porting-toolkit-windows-games-macos) is a marvel. Developers should be taking advantage of this. More options for play, especially native, local play, is good. 

Until that time comes though, I'll go back to emulating/translating this Technical Test on my iMac! Gosh, I can't believe I can write that sentence. See you all in Hades someday.

Also, please Supergiant Games, make the platinum slightly less RNG dependent. Please.

---

And after I published this, I tried getting a run in and the controller isn’t being recognized by *Hades II*. 🙃 

[^1]: I'm not sorry for that one.
[^2]: It reminds me on one of the opening lines in *The Hoppameleon* by Paul Geraghty, which is a current Eloise staple in the home right now.