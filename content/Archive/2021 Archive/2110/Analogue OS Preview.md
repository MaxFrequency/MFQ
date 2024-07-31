---
Published: 2021-10-21
URL: https://maxfrequency.net/2021/10/21/analogue-os-preview-pocket/
permalink: 2021/10/21/analogue-os-preview-pocket/
tags:
  - Analogue/OS
  - Analogue/Pocket
  - MLiG
  - MiSTer
---
Last weekend on October 16, 2021, Analogue revealed a new product. Actually, Analogue has revealed something on October 16 for the past 4 years ([2017 – Super NT](https://twitter.com/analogue/status/919941034934546432), [2018 – Mega SG](https://twitter.com/analogue/status/1052212620705509376), [2019 – Pocket](https://twitter.com/analogue/status/1184484202772926466), [2020 – Duo](https://twitter.com/analogue/status/1317118116678094860)). Time to put that in my calendar for next year. For the fifth annual announcement, Analogue revealed not hardware, but software dubbed Analogue OS.

Being an operating system, I think Analogue OS is the company’s first truly unique offering. Other companies offer playing old game cartridges on modern displays, albeit technically poor, like a Retron console. Open-source platforms like [[MiSTer FPGA Thoughts and Impressions – My Tool for Researching the Past|MiSTer]] provide the same, if not better, level of FPGA-based emulation for multiple consoles, instead of one like the [[My Journey to Playing with Super Power – Thoughts on the Super NT|Super NT]] and Mega SG. Just like macOS is tailor-made for Mac computers or Android is made for Google’s Pixel, Analogue OS appears to be the software backbone of Analogue’s hardware going forward.

Analogue dumped a lot of screenshots and information about what the OS can and will be able to do. It will launch first on the [[Analogue Pocket Preview|Pocket]], which is (hopefully) no later than 71 days away as of this writing based off the most recent delay. While far more difficult to fully gauge from words and images than actually using the OS, I wanted to dig in to the announcement and promise of Analogue OS. So, let’s start with Analogue’s previous software offerings and what they have previously shown off on the Pocket.

# The Old OS

Previous consoles has had a barebones User Interface (UI). Simple pixelated text with menus, submenus, toggles, and scales to adjust the console’s settings. Pretty standard stuff. My Life in Gaming goes through these menus in their reviews, like this [Super NT video](https://youtube.com/watch?v=d_OW_t9RXEM&t=617). These interfaces have always been straightforward and functional; nothing to write home about (yet, here I am, writing about it). And since its announcement in October 2019, the Pocket has been shown off with a similar-looking UI.

I briefly explored the menus in my own [[Analogue Pocket Preview|Pocket Preview last year]]:

> “There isn’t too much I can talk about on the software front without actually seeing or using it. It’s a safe bet it will be in line with the Super NT and the Mega SG, both having robust video settings for users to tinker with. In some of the promotional imagery, you can see the software menu which appears to offer video, audio, system, and about menus. There is also a Save/Restore option, which I hope means that I can dump, store, and back up my portable game saves without needing to wait for ‘jailbroken’ software or some other adapter. *Pokémon* fans rejoice!”

The original concepts were in line with expectations previously set. Having an official save/restore feature built-in was great to see, considering the same feature was behind the unofficially official jailbreak for their other consoles. With the expectations set at this bar – functional only – there was an opportunity to turn an OS into a product announcement of its own.

# The Analogue OS Pitch

I figure the best way to go through the announcement is to just scroll through the product page in order, as well as the announcement Twitter thread.

> “Analogue OS is the start of something big. At its heart, Analogue OS is purpose built for exploring and celebrating all of video game history. Designed to be the definitive, scholarly operating system for playing and experiencing the entire medium.”

We get this equally dense and fluffy introduction to the OS above [[211018_aos_main-menu.jpeg|a screenshot of what appears to be the main menu]]. The key phrase here is “purpose built for exploring and celebrating all of video game history.” Personally, I could scratch out the “celebration” part. Being designed, programmed, and implemented specifically for Pocket (and future hardware) implies a rock-solid, responsive OS: At least, I’d expect that standard considering we get those types of experiences with other products when hardware and software are designed in tandem.

I really don’t know what “scholarly” means in this context outside of sounding pretentious and implying advanced search/filter options. Each game [[211018_aos_mega-man-ii.jpeg|seems to include]] the year of release, the developer, etc. Does this mean Apple Music (RIP iTunes) is scholarly?

As for the actual menu contents, we see six options:

- Play Cartridge
- Library
- Memory
- Controllers
- Tools
- Settings
- Bonus – a small battery percentage indicator in the lower right-hand corner

I feel like these are all self-explanatory, except for “Memory.” The name “Library” alone reminds me of my favorite feature in [OpenEMU](https://openemu.org/) and [[Delta 1.3 Thoughts & Impressions]], which is [[211018_aos_openemu-box-art.jpg|a digital display of my game collection with their box art]]. This is (I assume) quiet common in software-based emulators. Based off what Analogue shows down the page, I won’t be disappointed.

# Holy Packed Capacitors Batman!

The next paragraph gives a summary of the whole OS. We’ll go over all of that soon enough. But, Analogue does reveal the [[211018_pocket-pcb.jpg|Pocket’s PCB]] (Printed Circuit Board). It looks clean and custom. The MiSTer has custom-options, especially in the add-on market, but the DE-10 Nano FPGA board is not custom made for playing old games. I’m extremely curious how the Pocket handles heat and power. I may be wrong on the whole, but this is certainly the first truly custom board for a FPGA-based console I have seen. New HD mods (i.e. [[Pixel FX Announced along with N64Digital|PixelFX’s N64Digital]]) and external scalers (i.e. the [RetroTINK-5X Pro](https://www.retrotink.com/product-page/5x-pro)) have adopted FPGAs to power their scaling engines, but I am not aware of a custom board for a console, let alone one with two FPGAs onboard (👀).

Speaking of those chips, I read [a tweet from sentient 6](https://twitter.com/sentientsixp/status/1449463889414995970) that claims that Analogue OS runs on the smaller FPGA, Intel’s Altera Cyclone 10, and interacts with the main FPGA, an Altera Cyclone V. I could not find confirmation from Analogue. Previously, the company has only referred to the “second core” as being dedicated for developers to create and port their own cores. I am personally curious about the division between components and software. Either way, it hopefully all runs seamless for users.

# No Need for a Library Card

> “Library is a reference level database to play, explore and share. A scholarly cataloging of the entirety of video game history. Search and explore through it’s full breadth: system by system, game by game, region by region, developer by developer, publisher by publisher, revision by revision. All of it.”

Visually speaking, the library is a list of your games as names or images. Analogue showcases images going through the menus, which [[211018_aos_box-art.gif|I turned into a GIF]]. Users can filter through pertinent information to find the one game they are looking for. While there are some folks with massive Game Boy collections (and other supported systems), I can’t imagine most owners of the Pocket have a ton of cartridges they’d need to filter though. As for digital copies of those cartridges, I’ll touch on those down below.

What about this “database” though? Where is it? Who built it? There are databases around the Internet. For example, the [[GB Operator Thoughts and Impressions|GB Operator grabs game descriptions and box art from somewhere]], but it clearly is not complete based off my testing. How robust is Analogue’s database? How accurate? How often will it be updated and maintained? Can other’s access it outside of Analogue OS?

In an [interview with Polygon](https://www.polygon.com/22728859/analogue-pocket-save-states-playlists-library-fpga), CEO and Founder Christopher Taber ever so slightly expands:

> “It is being carefully curated by experts and researchers in conjunction with collectors with access to complete game sets. The ultimate goal of Library is to be the end-all scholarly database for all of video game history.”

I would love to know who is on this panel and how they are compiling all this information. It’d also be wonderful to have this database be accessible outside of Pocket and future hardware. If the aim is to be the “end-all scholarly database for all video game history” then it should be accessible outside of hardware.

A footnote claims that the Library will launch with Game Boy, Game Boy Color, Game Boy Advance, and Sega Game Gear titles. The Neo Geo Pocket Color, Neo Geo Pocket, Turbografx-16, and Atari Lynx support will come alongside their respective cartridge adapters. I have plenty of questions surrounding this tentpole feature and can’t wait to try it myself to learn more.

Another library-centric feature is playlists. This clearly taps into Analogue’s love of music by allowing users to make game playlists. These can be shared with others by copying the file off the SD card, but I’m not sure how useful this can be, at least at face value. Since the Pocket (currently) only supports cartridge-based play, how useful can a list of game names and info be to someone without the same collection as me? It’s an interesting idea, especially in the social-sense, but I am not personally jazzed for this feature.

# MODERN MEMORY

> “Memories. Save States. Screenshots. Save and capture whenever you want, even at the same time. Capture (or load) a save state in an instant, live while playing any game cartridge.”

Another software emulation-inspired feature comes to Analogue OS with save states. Instantly saving an instance of a game that can be reloaded at anytime. If you take Analogue’s marketing about playing off the cartridge at face value, this is fascinating. Here’s Taber again, from the Polygon interview:

> “It is more than just being complex but dually difficult to do this reliably, let alone on physical cartridges. As far as I know we’re the first to ever develop the technology to capture and load save states instantly during gameplay on physical cartridges.”

This next bit is purely conjecture on my part, but let’s be honest about how these games are being played. The Pocket is ripping a copy off the cart and playing it, using the cart as a key to keep the emulation active. Pull the cartridge out, the emulation stops.

I do not know how else a feature like this could work. Possibly, save states flash the instance of the game and save it as a file on the SD card (I assume this is how it works regardless of the next step). Maybe instead of a traditional save state file (OpenEMU uses .oesavestate, for example), Analogue OS is taking that dump and loading it like a GameShark would load cheats? Pulling data from the cart, through the cheat engine, and spitting out the game’s new code. I am technically out of my depth here, but if I were to place a bet, I’d wager it’s just running a dump of the ROM behind the lock of a physical cartridge.

Screenshots are *much* easier to wrap my head around. I assume you simply map a button and press it to snap a screenshot. Offload them from the SD card when you’d like to share them.

> “Remember where you were, and where you are going. Analogue OS provides tools that allow you to look back on key statistics across gameplay — across all systems. Tools that allow you to look forward and track gameplay as it happens.”

Dubbed “Tools,” these are the time tracking options/features currently being shown off.

- Play Chart
- This Month
- Calendar
- Clock
- Storage

“[[211021_aos_play-chart.png|Play Chart]]” appears to be a recap of what you played and for how long on a given day, while “This Month” is [[211021_aos_tools_paragraph.png|a paragraph summary]] of your play time/usage. Calendar, clock, and storage are self-explanatory. The time tracking is a nice modern-console quality of life feature. I love seeing my own playtime and to have that for classic games is a nice touch.

# (C)ollecting (R)emaining (T)idbits

The remaining tidbits on the page add up. Since the Pocket has its own screen and can be connected to HD TVs or CRT TVs, Analogue OS has been designed for those types of displays in mind. I’m most curious to see it on the Pocket itself and my CRT. Analogue reiterated the Bluetooth and 2.4 GHz controller support with fully custom button mappings per core and per controller. [[When did I get so many Controllers?|As someone with a lot of controllers]], this makes me very happy.

> “Analogue is dedicated to highlighting each video game systems distinct hardware quirks and attributes with reverence. Pocket features original display modes that recreate, with stunning accuracy, on a subpixel level, the identical look and feel of an original DMG display, Game Boy Color display, Game Gear display and more.”

I had to dig into this one. Actually, I already have:

> “I wonder how far this kind of feature can and will go. The Pocket will support Game Boy and Game Gear (I think, but more on that in a bit) right away. Could features like mimicking Atari Lynx or Sega Game Gear screens become a reality? What about just the diverse screen types within the Game Boy line itself? Could I chose between a regular GBA, a frontlit GBA SP, a backlit GBA SP, and a Game Boy Micro? What about the DS screen? There is plenty of potential for this kind of feature and I wonder how far Analogue will take it.”

Well, Analogue has gone ahead and announced a Game Gear Display Mode. This gives me the expectations that, just like Library support, relevant Display Modes will accompany cartridge adapters upon their release. I hope these can and will be expanded upon within the supported hardware’s own revision lines (i.e. all those different Game Boy screens). Could Analogue take [a cue from the GBA Consolizer’s shaders](https://youtube.com/watch?v=6NcMl9JvMHE&t=1122) one step further and offer filters for non-supported systems (i.e. Nintendo DS, PlayStation Portable). I also wonder if users can create and share their own; how tight of a grip will Analogue hold on this feature?

As the snazzy screenshots and marketing text begins to wrap up, I notice three other elements to Analogue OS. Both [Nanoloop 2](https://www.nanoloop.com/two/index.html), the music synthesizer built for Game Boy consoles and built-in to Pocket, and [GB Studio](https://www.gbstudio.dev/), a drag-and-drop style game maker for Game Boy titles, have special splash screens. Lastly, we see support for rotating the screen however the user would like. While the debut page for Analogue OS has ended, there’s a bit more to glean from the footnotes and that interview. I want to look at the footnotes first.

# Analogue OS 1.0 Versus 1.1

> “Library, Memories, & Tracking will not be available on Analogue OS 1.0. These features will be available on Analogue OS 1.1 and beyond.”

Yes. The exciting and prominent features of Analogue OS will not be there (presumably) on day one. Who knows, maybe Analogue will push out 1.1 for the Pocket launch. I doubt it. Also, all artwork for the Library must be provided by the user. I’m used to this, but it’d be nice if this scholarly database included box art.

Analogue was also sure to emphasize two important legal bits. [Pocket does not play copyrighted ROM files](https://twitter.com/analogue/status/1449389844325613574). The only way to play is through the cartridge slot. Obviously, Analogue cannot and will not promote a jailbroken OS that can run ROM files off the SD card. They have never done so for their other systems, as far as I can tell, but the option has always been available to users that are patient. I’d assume and hope the same will occur for Pocket.

The other bit of legal-ese focuses on BIOSes (Basic Input/Output Systems). The gist is that game systems, like the Game Boy, have a BIOS. For example, when running the Game Boy Advance core on MiSTer, you need to supply your own BIOS, which can be extracted from real hardware. I got mine from my Game Boy Player. This is designed by the manufacturer, as I understand it, to bring the game data in and process it out correctly with the given hardware. Analogue has designed their own. I would not be surprised to see the Analogue logo before a game boots instead of the Game Boy logo.

Which leads me to the one chunk from the Polygon interview that was not actively promoted with the announcement of Analogue OS: the use of third-party FPGA cores on Pocket; AKA getting those sweet MiSTer cores on Pocket; AKA getting Apple II games running on my Pocket in my pocket.

> “Pocket has been purpose built with the optimal hardware to make development and porting pre-existing (FPGA) cores a breeze. Off-the-shelf dev boards are naturally not built for this exact purpose; they’re pricey, require tons of add-ons, difficult technical setup for most users and limitations that cannot be ideally solved (namely different kinds of RAM) without building something exactly for this purpose from the ground up…You can expect to see pretty much every single third-party FPGA core out there on Pocket.”

Clearly, Taber is referring to the MiSTer and he’s not wrong. MiSTer is a do-it-yourself project using readily available parts combined with custom-developed add-ons and accessories. It’s part of the beauty of MiSTer. The Pocket by itself costs a little more than a starter MiSTer set-up, but lacks external video out. Throw in the dock and the price gap closes in on kitting out a MiSTer with add-on boards. The proof will ultimately be in the Pocket pudding.

> [!tip] Update: 
> User Kitrinx in the MiSTer FPGA Discord pointed out to me that [to actually get started with a MiSTer](https://github.com/MiSTer-devel/Main_MiSTer/wiki/How-to-start-with-MiSTer), costs roughly the same price as the Pocket. The DE-10 Nano is currently $170~, with folks probably upgrading RAM for $20-60~ depending on the amount. I originally thought of my all-in price for the add-on boards, which was roughly $350~, plus a new aluminum case I bought for $70~. That is how I ended up saying Pocket was half the cost of a MiSTer. My apologies!

The best part is at the end of the quote though. Taber is implying/claiming major compatibility between Pocket and MiSTer cores. And the process is equally promising:

> “For the non-dev end user, it is as simple as dropping an FPGA core onto Pocket and it will be served by our Library and Database offering an unparalleled experience.”

Drag-and-drop is the same process over on MiSTer, but the promise of integrating with the Library and Database is the kicker. With Analogue’s control over presentation, the cores can have the same presentation as Analogue’s own. Could we run MiSTer’s GBA core and Analogue’s to compare on one device? I don’t see why not. Giving users the choice makes the Pocket better.

> [!info]
> For transparency, I’ve added the following two paragraphs after publication:

Taber’s claim that we “can expect to see pretty much every single third-party FPGA core out there on Pocket” is just shy of being a lie. The use of “pretty much” provides a thin veil to avoiding the fact that some MiSTer cores fundamentally cannot run on the Pocket. As pointed out to me by sentient6 in the MiSTer Discord, the MiSTer has “more RAM and twice the logic elements.” Cores like the [AO486](https://github.com/MiSTer-devel/ao486_MiSTer), [Sega CD](https://github.com/MiSTer-devel/MegaCD_MiSTer), and the currently in-development cores for Saturn and PSX, fundamentally cannot run off what Pocket is offering.

I’ll admit, I wrongfully assumed that the Sega CD core could work, given that the Mega SG from Analogue supports it. I definitely did not think the PSX core could run on Pocket, and frankly did not think of the others. Taber definitely is enticing customers with the promise of MiSTer by alluding to it. And I have to admit, it does work! Like I said earlier about getting Apple II games running on my Pocket in my pocket, that excites me! But the power demand between *Ski Crazed* and *Spyro the Dragon* is wildly different.

# Closing Thoughts

Analogue OS is a lot like the Pocket itself. A seemingly solid foundation with a bright future through modularity (or rather updates, in the case of the OS). It all looks and sounds exciting on paper, but the real test will be when this makes it into users hands. Pocket has been [[Analogue Pocket Preview|announced]] for over two years with [[Analogue Pocket Sells Out in 10 Minutes|folks that managed to snag]] a pre-order waiting [[Fancy Game Boy Analogue Pocket Pre-Order - The Kotaku Review|over a year]] due to unfortunate, but understandable delays.

It makes me wonder how long Analogue OS has been in development. One could think that this was a project born out of the production delay woes. Personally, I feel like this has been built alongside the Pocket. Taber has said in the past that he has wanted to build Pocket for ten years and that “nearly all of Analogue’s history (has led) up to this product.” You don’t build a product like that and just stop: You think beyond. We see that a bit in the Duo and entering CD-based consoles. As the market expands and the consoles being emulated become more powerful, a robust software experience makes sense. If the Pocket is a turning point for the company, Analogue OS can help guide the future. It’s easy to speculate and talk about this idyllic future. There already was quite a bit of pressure on Analogue with the Pocket and now they’ve increased that pressure. Analogue’s hardware can no longer do all the talking. I am excited to hear just how much Analogue OS will have to say.