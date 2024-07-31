---
Published: 2021-03-27
URL: https://maxfrequency.net/2021/03/27/mister-review/
permalink: 2021/03/27/mister-review/
tags:
  - MiSTer
  - Review
---
I have been writing about [Analogue](https://www.analogue.co/) since [[My Journey to Playing with Super Power – Thoughts on the Super NT|the start of Max Frequency a year ago]]. For those unfamiliar with the company, Analogue makes specialized HD retro consoles that use chips called [Field-Programmable Gate Arrays (FPGAs)](https://en.wikipedia.org/wiki/Field-programmable_gate_array). The gist is that FPGAs allow for hardware-level, cycle accurate emulation opposed to software-based emulation. These chips can be reprogrammed to emulate a plethora of game systems. They have rapidly become essential in the retro gaming space as a means to play and preserve games and their hardware. You can really see the lengths the community goes to in [[Analog Frontiers – Part 3 - Preservation and Replication – My Life in Gaming|Part 3 of My Life In Gaming’s docuseries Analog Frontiers – Preservation and Replication]].

Analogue is far from the only FPGA-based console manufacturer. I only mention them because I have been familiar with them and their work for the longest. Posts I’ve written about them are often [[Max Frequency 2020 In Review (Year One)|my most engaged articles]]. The [[Analogue Pocket Sells Out in 10 Minutes|demand]] for their products is high and the relative [[Analogue Talks Pocket, Bots, Shipping, and Definitions|scarcity]] of them only amplifies that.

Other contenders are things like the [AVS](https://www.retrousb.com/index.php?cPath=36), which plays NES and Famicom games in HD. Plenty of HD mods for consoles use FPGAs as well like the GBA Consolizer, [[PS1Digital Review, HDMI for PlayStation 1 – Digital Foundry|PS1Digital]], and both the upcoming [[Pixel FX Announced along with N64Digital|N64Digital]] and [Retrotink5x Pro](https://twitter.com/retrotink2/status/1371966641437773828). While those are not emulating the hardware, it shows both how diverse FPGA application is and how essential they have become in bringing retro hardware to the modern era.

There is one other name in the FPGA scene that stands tall, often stacked against Analogue products—[the MiSTer](https://github.com/MiSTer-devel/Main_MiSTer/wiki).

MiSTer is an open-source, DIY FPGA computer. Based off a readily available FPGA board (the [DE-10](https://www.digikey.com/en/products/detail/terasic-inc./P0496/6817231)), folks can buy components and assemble their own or even buy fully assembled kits from vendors like [MiSTer Addons](https://misteraddons.com/). The key differentiating factor is that MiSTer is not limited to one console like most Analogue products. Being open-source, there are countless people working together and developing numerous consoles, known as “cores,” for the platform. It can play NES, Sega CD, GBA, Atari Lynx, Galaga, Capcom’s CPS2 arcade board, and so much more. It is the swiss-army knife of FPGA retro gaming. And I bought/assembled one.

I’ve been aware of MiSTer for a couple years. Once you dive down the rabbit hole that is FPGA-based emulation, it won’t take long to stumble across the project. I never bought in before for two primary reasons:

- I do prefer using carts/discs when possible. There is something about the tangibility of media that makes it feel more real. I know this has been embedded in my brain by growing up in the final, physical-only years of gaming, but I can’t shake it.
- The cost. The MiSTer is not cheap when you spec it out with the highly recommended upgrades like RAM and the I/O Board. All-in-all, I spent just over $300 to buy the components and assemble my own MiSTer.

I changed my tune recently thanks to [[Preserving and Rediscovering My Game Collection|my journey to digitize and preserve my own game collection]]. Specifically, having my entire SNES and GBA collections–save data and all–available at my fingertips has bridged the physical-first mentality I have had my entire life. With enough searching, you could find any game online, whether you own it or not. That’s been a fact of life for a long, long time. But digitizing my copies of my games has tricked my brain into being happy with that. I’m not out here downloading any and everything; I am keeping the access at my disposal focused.

But those are games I have modern ways to play. I can play GBA games on my GameCube via GBI, plus [[Analogue Pocket Sells Out in 10 Minutes|my Pocket]] is coming soon. My SNES collection is fully playable on [[My Journey to Playing with Super Power – Thoughts on the Super NT|my Super NT]]. I do own some games that I have no way to play or play on original hardware.

Last year, I bought a copy of Naughty Dog’s third game, *Dream Zone* (yes, *Math Jam* counts). This game came out for the Apple IIGS, the Amiga, and the Atari ST. A few weeks ago I reached out to an Apple hardware collector to try and find a way to collaborate on [[Chasing the Stick - The Book – Here I Go Again|my Naughty Dog book]]. He has the hardware, I have the software. This person is quite busy and understandably and politely declined. One sentence in their email did hit me with a dose of reality though:

> …and my IIGS didn’t power on last time I tried it.  :(

I own none of those early computers and buying them individually, per PC game/platform, is financially unfeasible for me. When factoring in that some of these machines are also 35+ years old and that I don’t have the skills to repair and upkeep these devices, it doesn’t make sense to invest in them for one or two games specifically. Time is not on my side.

But with MiSTer, I have access to incredibly accurate hardware emulated cores for the [Apple II](https://github.com/MiSTer-devel/Apple-II_MiSTer) (*Ski Crazed*), the [Amiga](https://github.com/MiSTer-devel/Minimig-AGA_MiSTer) and the [Atari ST](https://github.com/MiSTer-devel/AtariST_MiSTer) (*Dream Zone* and *Keef the Thief*). Plus, the Genesis (*Rings of Power*). There is even ongoing work on a PS1 core! Maybe the 3DO (Way of the Warrior) can magically run on MiSTer someday, if the community and hardware power is there; I’m not sure of the technically capabilities or not. The MiSTer gives me an ability to accurately capture these games at high resolution! I can actually experience these games and help visually preserve them for my book. This gives me value far beyond a new way to play Game Boy games. The MiSTer becomes a tool for my own research.

Assembling and setting up my own MiSTer was relatively simple. I used two key tutorials for the set up process and turned to the [MiSTer Discord](https://discord.gg/4xKVg4XVYn) for help with some odds and ends. I do have a couple suggestions, if you are setting up your own and need some help.

- [MiSTer FPGA Hardware Guide and Setup Tutorial – Initial Setup and Quick Start Guide](https://youtu.be/pZEpusjC6QA) by Video Game Esoterica
- [MiSTer FPGA – How to build & configure, demo, cost, and pros/cons (Winter 2020 / 2021)](https://youtu.be/-IP0k3GatHE) by Retrobits
- There is a .ini file on the SD when you set it up. This needs to be renamed to “mister.ini” and can be used to adjust settings like 1920×1080 resolution on an HD TV and YPbPr analog output to a CRT.
- Get the [update all script](https://github.com/theypsilon/Update_All_MiSTer). This help keep your MiSTer up to date with the latest public cores.
- Using FTP makes managing files much simpler. Highly recommend it.

When it is all set up, the MiSTer is slick beyond belief. [I can run simultaneous output to my monitor and CRT](https://twitter.com/MaxRoberts143/status/1373598304718716929), with [a capture card](https://twitter.com/MaxRoberts143/status/1373821777869168641) in between. Thanks to my wide assortment of controllers, I can use USB-C cables and play SNES/GBA games with actual SNES controllers. I even bought the [8BitDo Arcade Stick](https://www.8bitdo.com/arcade-stick/) for sweet, sweet arcade games and tate supported games ([both on MiSTer and Switch](https://twitter.com/MaxRoberts143/status/1371257339228082179)).

I have had my eye on MiSTer for some time and finally found enough justification beyond “I want that” to bite the bullet. It’s a powerful retro-focused system and tool with insanely talented people behind its development. I am simply reaping the benefits. I cannot wait to see it side-by-side with the Pocket, which promises multiple core support in your hands with a technically impressive screen. MiSTer has a solid foundation and a bright future. It is actively breathing new life into old games and making them more accessible than ever before.