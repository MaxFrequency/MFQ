---
Published: 2023-11-27
URL: https://maxfrequency.net/2023/11/27/uncharted-4-and-the-case-of-the-missing-mips/
permalink: 2023/11/27/uncharted-4-and-the-case-of-the-missing-mips/
tags:
  - NaughtyDog/Uncharted
  - NaughtyDog/TLOU
---
> For U4 disc space was at such a premium, we wrote a program to record over many playthrus, which textures never showed their highest mips and just deleted them from disc.

I came across this *Uncharted 4* development anecdote that was [shared](https://x.com/kurtmargenau/status/1728858789422694746) by Kurt Margenau on Twitter.

A brief definition on mips, thanks to the [Unity user manual](https://docs.unity3d.com/Manual/texture-mipmaps-introduction.html#:~:text=A%20mip%20is%20effectively%20a,on%20the%20already%20downsampled%20version.):

> A mip is effectively a cached, downsampled version of the original texture.

So, *Uncharted 4* was crammed full of this high resolution textures that ate into the Blu-Ray disc limit of 50GB. To help alleviate this mountain of data, Naughty Dog just wrote software that looked at playthroughs of the game and flagged which textures never loaded all the way.

It makes me wonder if and how the team handled this for *The Last of Us Part II* given it went to a two-disc package, effectively doubling the height of their ceiling. A few quick searches peg the launch version of *A Thief's End* at 55~ GBs[^1], *Uncharted: The Lost Legacy* at 45~ GBs and *The Last of Us Part II* at roughly 78 GBs. On the PS5, the *Lost Legacy Collection* is pegged at 90~ GBs, but that's two games. It's be interesting to know the breakdown of the file sizes given the PS5 game doesn't have multiplayer, but it has higher quality assets. Feels like something that'd be covered in a GDC talk about bringing games to new hardware. 

Like @TheDrencrom [asked](https://x.com/TheDrencrom/status/1728866921859482075), I wonder (and assume), these full (or fuller) textures would have been added back to the PS5/PC version of the game, especially considering the PS5 SSD would/should remove the need for redundant textures, since it can load so quickly.

What a neat tidbit that reveals more about the process behind maximizing the PlayStation consoles. 

---
[^1]: 50 or so GBs on the disc and then a 5GB day one patch.