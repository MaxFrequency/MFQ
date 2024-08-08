---
Published: 2023-08-21
URL: https://maxfrequency.net/2023/08/21/hot-fresh-homebrewed-consoles/
permalink: 2023/08/21/hot-fresh-homebrewed-consoles/
tags:
  - Homebrew
  - Nintendo/WiiU
  - PlayStation/Vita
  - MiSTer
  - Nintendo/DS
---
# Hot, Fresh Homebrewed Consoles

I don’t know if you’ve [[Back to my Mac|heard]], but I moved recently.[^1] A big component of that has been setting up my new office/studio/game room.[^2] While a proper tour of the space is needed, I wanted to write about all the console upgrading I have been up to as a part of plugging in all the consoles.

I have all of my consoles plugged in and ready to go at a moment’s notice.[^3] It’s been a dream for many years. A handful of these consoles have been modified with homebrew software. I’ve done this to [[Preserving and Rediscovering My Game Collection|digitize physical games]], unlock [[Preserving the Vita – Upgrading My Vita TV|better visuals]], and play games in new ways. While setting everything up and powering on these consoles, I figured it would be time to upgrade/update them. This turned into quite the homebrewing adventure.

The consoles on deck are my PS TV and my Wii U. My Wii also has homebrew software, but I haven’t ventured down the digitized library route there yet. ~~My GameCube is up next and [[Building My Dream GameCube|I’ll be modding that this Thursday]]~~.[^4] Back to the Wii U and PS TV…
# Wii U and Tiramisu

Last March or so, when Logan and I picked *Pokémon* to be [[S6 - Pokémon|Season 6 of Chapter Select]], I started researching how to best capture those DS only titles for the show. That took me down the Wii U homebrew rabbit hole, so I could load my own Nintendo DS ROMs onto the Wii U and tap into Nintendo’s official emulator. Turns out that A) *Pokémon* games don’t run too well on Wii U and B) that a new method of homebrew installation has hit the scene since then. Dubbed “Tiramisu,” this is the hotness on the Wii U. I figured I would go ahead and modernize my console.

Switching over from Haxchi to [Tiramisu](https://wiiu.hacks.guide/#/) wasn’t tough at all. This runs way better, right at boot, without needing to take over (ironically) some DS game.[^5] My problems came from wanting to install DS games to the Wii U Menu.

Previously, I’d use some software called Loadiine to boot my DS games. There was always a level of jank to that approach that I never enjoyed. Homebrew may improve functionality, but that doesn’t always mean it is the prettiest.

To install them directly on the Wii U, I needed to take one of my DS Virtual Console games and bring the files over to my computer. To do that, I needed to copy the games over to an external hard drive. To read the drive, I needed a backup of my Wii U’s NAND.

Getting that backup with Tiramisu proved to be buggy on my particular setup. I actually had to *uninstall* Tiramisu and set up an even older method of homebrew just to backup the NAND. Back on Tiramisu, installing my DS ROMs was straightforward, albeit tedious. The biggest hassle was installing my own DS saves. I had to perform this magic dance of booting the game, powering down the console, then loading homebrew software to swap the saves. This dance stops the console from making an automatic save state. This process took so long that I only swapped a handful of saves. I’ll have to tackle the rest some other time.

Then I read about the [[The RetroTINK-4K is Properly Introduced|RetroTINK 4K]] and [My Life in Gaming’s stream](https://www.youtube.com/live/tB8OSyfTGFw) of the new scaler. I learned about [installing new and better screen layouts for the DS](https://gbatemp.net/threads/add-many-more-screen-layout-options-in-ds-virtual-console-games.574254/). Given the whole drive behind modifying my Wii U, I had to have these layouts.

Given the encrypted nature of the Wii U drive, the only way to swap these files was to FTP into the Wii U. This was rough. My FTP app of choice, [Transmit](https://panic.com/transmit/), kept connecting to the Wii U and maxing out the console’s five client limit. I switched over to Filezilla and had no problem. I did misread the install instructions though. I was deleting the “content” folder on the console and replacing it with the new one. I needed to just merge and overwrite the files instead.

In the end, it worked though! I have the layouts across all my games, important saves where they matter, and a solid setup for Nintendo’s misunderstood darling. I even learned a few new things about the console, like how it only outputs in the limited color range and most of its library renders at 720p. ~~Given this new knowledge, I switched the console’s output to 720p over HD Retrovision component cables and put it into my RetroTINK 5X Pro to upscale to 2160p.~~
# Death to the PS TV, Long Live the PS TV

> I came across two options; something called the SD2Vita and a USB mass storage route. The SD2Vita is an adapter that goes into the game card slot and uses an SD card. Hack the system and voilà, you have extra storage. I’m not a fan of this though since it takes up the game slot, not the memory card slot, thus taking my physical games out of play.This left me with the USB mass storage route, which was both easier and more frustrating than I expected.

Yours truly, [[Preserving the Vita – Upgrading My Vita TV|two years ago]]. Now I have a SD2Vita adapter. How’d I get here?

I was sick and tired of plugging and unplugging my USB drive at the start of every boot to get all my games to work. I also couldn’t sync a controller to the console, since the USB drive was taken. I only have *two* physical Vita games. Going down the route of collecting those now is outrageous, so I switched to the logical choice and went all digital via a SD card. This was not as cumbersome as my Wii U journey.

The first step was to make backups of said two physical Vita games. That way, I could load them onto the new storage and still play them. This may have been the easiest task of them all. I just copied the files over via FTP right to my iMac.

Swapping to using the SD2Vita was also fairly easy. I followed [Blaine Locklair’s tutorial](https://youtu.be/5XkHRF12L8E) and was golden. There was a moment of panic though, when I booted up after swapping storage devices: all my homebrew software was gone. 😬 I rebooted and it all came back.

The biggest struggle was copying over all my games from the USB drive to the new SD card. Both devices couldn’t be mounted at the same time. I tried using FTP, but the games were flagged as hidden files on the USB drive and I couldn’t transfer them that way. I ended up plugging in the SD card and my drive into my iMac. From there I was allowed to copy everything over. The only games that didn’t work this way, were those physical backups. So I FTP’d those and they worked right away.

I can’t describe how good it felt to boot up my PS TV and have it all just work. Right away. No fuss. It’s like the console isn’t modded at all. I love having access to my Vita and PSP library in glorious HD. I run this through the RetroTINK too. PSP games look especially great with the LCD mask. Long live the Vita!
# Cubes Really are the Best Shape

Since writing the above, I did stream [[Building My Dream GameCube|my ultimate GameCube upgrade build process]]. I swapped the shells, upgraded the fan, and (most importantly) swapped a dead disc drive for an optical disc emulator (ODE); the GC Loader.

I had a grand ol’ time taking both GameCube consoles apart. It was filled with the thrill of success, the frustration of defeat, and the fear of possibly needing to replace 22-year-old thermal paste (I didn’t have to). It’s a full blown insight into my mind during problem solving and focusing on a single-ish task. It’s technical writing and journalism disguised as working on my favorite console.

The biggest hurdle was that SanDisk SD cards aren’t playing nice with the new GC Loader. Thankfully, I was prepared with a backup Samsung card. I just had to wait the 35 minutes or so for everything to copy over. I won’t lie. I am bummed that my physical GameCube collection isn’t usable on either one of my GameCube consoles. The Wii is the only option I have for now. It’s really highlighted a question/thought I’ve had while preparing to [[S8 - Castlevania|play Castlevania for Chapter Select]]: what matters more (to me); authenticity or accuracy?

The authentic choice would be having the game cartridge or disc and playing on real hardware. The accurate choice would be to play on the consoles or even use FPGA based hardware, like the [[MiSTer FPGA Thoughts and Impressions – My Tool for Researching the Past|MiSTer]] or an [[My Journey to Playing with Super Power – Thoughts on the Super NT|Analogue]] console.[^6] Then you get into this spiraling rabbit hole of the accuracy of hardware versus software emulation, community or official emulation, etc., etc.

Back when I [[MiSTer FPGA Thoughts and Impressions – My Tool for Researching the Past|first wrote about the MiSTer]], I talked about this same dance.

> I never bought in before for two primary reasons:
> 
> - I do prefer using carts/discs when possible. There is something about the tangibility of media that makes it feel more real. I know this has been embedded in my brain by growing up in the final, physical-only years of gaming, but I can’t shake it…
> 
> …I changed my tune recently thanks to [[Preserving and Rediscovering My Game Collection|my journey to digitize and preserve my own game collection]]. Specifically, having my entire SNES and GBA collections–save data and all–available at my fingertips has bridged the physical-first mentality I have had my entire life. With enough searching, you could find any game online, whether you own it or not. That’s been a fact of life for a long, long time. But digitizing my copies of my games has tricked my brain into being happy with that. I’m not out here downloading any and everything; I am keeping the access at my disposal focused.

Turns out I am still struggling with this notion. It feels emotional with the GameCube. Having time wear down the disc drive, thus removing the ability to play the discs, reminds me of how old I am becoming. Things are changing. The way I’d spend hours upon hours with friends playing *Melee* or how I’d get lost in the fantastical world of *Paper Mario*. The disc themselves just harbor the code for the game. My save data is backed up and safe: The ones and zeroes representing my memories are still here.

I think, in the end, what matters most to me is the feeling. It’s why I opted for a reproduction cartridge of *Legacy of Darkness* as opposed to the real thing or emulating it on my Wii. There’s a feeling popping in a N64 cart and using that three pronged majestic controller. I’ve sort of lost a small part of that with the GameCube. I won’t be handling those cute, unique little discs as often. But I’ll still to watch the perfect boot sequence. I still get to use my favorite controller. And if I really want to pop in a disc, I can use my Wii or buy a third GameCube 👀

---

There is special about homebrew software. The way it unlocks the true potential of a console sparks excitement. It fuels my love to tinker and teaches me new stuff every time I venture down its path. Even though set up can be frustrating or tricky, I thrive off a good technical challenge. It makes me appreciate my consoles and the community more.

---
[^1]: I’m sorry for the constant stating of this fact, but I had no clue how all consuming moving into a home would be. My brain just feels wracked by it.
[^2]: I really need a better name.
[^3]: Just don’t look at my cable management behind it all. 🫣
[^4]: Turns out I didn’t publish this in time. The stream happened. And the GameCube mod was successful!
[^5]: Sorry [Dr. Kawashima](https://nintendo.fandom.com/wiki/Dr._Ryuta_Kawashima_(character)).
[^6]: I understand that FPGA consoles are not 100% accurate, but those differences are far too small for me to care.