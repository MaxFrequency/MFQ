---
Published: 2021-08-18
URL: https://maxfrequency.net/2021/08/18/delta-ios-review/
permalink: 2021/08/18/delta-ios-review/
tags:
  - Nintendo/DS
  - Emulation
  - Apple/iOS
  - Nintendo/GBA
  - Nintendo/NES
---
# Delta 1.3 Thoughts & Impressions

I’ve been on a bit of a journey with my game collection over the past year or so. Kickstarted by my [[My Journey to Playing with Super Power – Thoughts on the Super NT|Super NT]], I’ve been chasing after [[Preserving and Rediscovering My Game Collection|preserving and digitizing my physical game collection]]. From the Game Boy to the Wii, I’ve found solutions for backing tons of my games up. A natural side effect of all this has been finding new ways to play my games.

Personally, I have been and am a proponent of real hardware, followed by hardware emulation, and then software emulation. Through all this archiving, my monkey brain has come around on emulation on the whole. With my save data and my digitized copy of a game, I am wholeheartedly accepting of emulation now.

So on [Connected 357: I Need My Hands, Especially in the Summer](https://overcast.fm/+FXx6QxLiE/31:45) when [Federico Vitcci](https://twitter.com/viticci) talked about his journey to play the Metroid games before Dread, he landed on using Delta on iOS.

Delta is a game emulator from Riley Testut for iOS that can be installed on iPhones through Riley’s alternative app store, aptly titled [AltStore](https://altstore.io/).

I had installed AltStore before. [[Playing GameCube and Wii Games on iOS|I used it to run Dolphin on my iPhone, thanks to Snazzy Labs]]. I never kept up with it. Now that my collection is backed up, I thought it’d be fun to see what Delta offered. I reinstalled AltStore and Delta this past week and have been delighted by [Riley](https://twitter.com/rileytestut)’s work.

The very first element I noticed was how Delta feels. This has a beautiful design that employs plenty of native iOS features. Riley has implemented [[delta_gba_peek.png|Peek & Pop]], haptic feedback for the on-screen buttons, shortcuts, and more. I’m not sure how much, if any, of the code is Swift or SwiftUI, but Delta has that native iOS feel that is polished, and what I would consider essential.

The set-up was simple, but did have some hiccups along the way. Delta created a folder in my iCloud drive. It actually created six; Delta, then Delta 2-6. The data lives in “Delta 3,” but I’m worried the app will be confused if I delete the other five folders and just drop the “3” from the folder name. I migrated all of my game ROMs into the folder and then began importing.

Delta automatically categorized the ROMs by platform. It even found art for some of the games. Most however, [[delta_nes_no-art.png|did not have any art]]. Thankfully, this is easily remedied with a Force Touch (or long press) on the game and selecting “Change Artwork.” I picked “[[delta_nes_game-catelog.png|Game Database]]” and picked the art I preferred. I do wish Delta was better at finding the art to begin with, but I am super happy I can use whatever art I’d like for the games.

Importing save data is just as easy with a Force Touch and selecting "[[delta_gba_peek.png|Import Save Data]]" then you navigate to the data in Files and import. You can also sync your ROMs and save data. I hooked up Dropbox and Delta began syncing the data right away. This easily allows me to manage the save between Delta, my MiSTer, and the physical cartridge.

Actually playing the games is simple. Just tap and go. A [[delta_leafgrean.png|beautiful controller skin pops up with the game above]], when the iPhone is in a vertical orientation. Flipping the device sideways displays a transparent layout over the game. For touch-based controls, they work quite well. Riley has implemented wonderful haptic feedback to help simulate a real button press. The buttons are spaced well and I don’t find myself making many accidental presses. The down sides revealed themselves when I needed to press more than 3 or 4 buttons at once. Like in *Metroid: Zero Mission*, if I want to run to the right, aim up or down on the diagonal and shoot missiles, that is a 4 button combo and my two thumbs can’t pull it off. The loss of proper shoulder buttons, etc. is heavy.

Thankfully, bluetooth controllers can be synced up! This really helps with NES through GBA games. [I was even able to connect a real N64 controller to my phone and play with it](https://twitter.com/MaxRoberts143/status/1426222845764505600)! I did have some issues getting some buttons to work. I am not sure if this is Delta, the iOS 15 beta, or the 8bitDo SN30 Pro itself. For example, the “Start” button would not work with “pause” or “start” , which is kind of the standard. This resulted in up on the D-Pad being “start” for *Super Mario 64*.

Now for the real reason to install Delta — to play games! From the NES up through the GBA, the games look and run nicely. I’m not sure at what scale they are running at; there are no settings to adjust output. But on an iPhone Xs Max in my hands, I’m not sure that matters. The OLED screen is brighter and clearer than any official GameBoy screen. Pixels are sharp and the emulation appears to run accurately, at least to my eye.

I am excited to compare it to the Analogue Pocket later this year, since they are both handheld devices, and the Pocket’s resolution is close to my iPhone Xs Max with a superior pixel density. I also wish there were some filters that we could use – gridlines, CRTs, etc.

The best system to emulate in Delta has to be the Nintendo DS. With touch being an integral part of the DS, the iPhone makes for a perfect emulation device. The DS screens are close and [[delta_ds_pm_pink.png|look wonderful]] on an iPhone with the gorgeous layout designed by Riley. Touch just makes sense.

Now, the DS was designed with a stylus in mind, not pudgy fingers, and that can be felt in Delta. *Elite Beat Agents* is tougher with my index finger tapping along instead of the tiny stylus every DS came with. This could be mitigated with a capacitive stylus – or even the Apple Pencil when iPad support comes to Delta someday.

The DS emulation also runs into similar “too many buttons and too few fingers” problems. This is more situational though. *Metroid Prime Hunters*? That seems to be quite playable since touch was essentially take up one hand at all times. *Phantom Hourglass*? Very doable. Even the slower-paced *Pokémon* games are easy to control. *Super Mario 64 DS* on the other hand, is a bit more finicky. I haven’t figured out how to “close” the DS, which is essential in some games, like *Phantom Hourglass*. I’d assume there is a way, I just haven’t found it yet (Update: [Found it](https://twitter.com/altstoreio/status/1384991626745966592)! Simply sleep & wake the phone itself, very slick).

This is, by far, the easiest way to play DS games today, outside of real hardware. Even using homebrew on the 3DS to keep my collection accessible digitally is a far more involved process. The same goes for playing my games on the Wii U, where you have to use a PC to package the game up in a special format. I can’t see myself wanting to pick up and play a DS game any other way.

Delta is a wonderful app. I have been completely won over and it has earned a spot right on my home screen. I can’t think of higher praise when it comes to an iOS app; I’m pretty picky. If you’d like your collection in your pocket, there’s no better app.