---
Published: 2023-12-05
URL: https://maxfrequency.net/2023/12/05/the-retrotink-4k-is-almost-here/
permalink: 2023/12/05/the-retrotink-4k-is-almost-here/
tags:
  - RetroTINK
  - MLiG
  - DigitalFoundry
---
# The RetroTINK-4K is Almost Here

The [RetroTINK-4K](https://www.retrotink.com/product-page/retrotink-4k) is going on sale this weekend.[^1] It's had a very open development from Mike Chi and the incredible slate of talent he's tapped to make the RT4K as robust as possible at launch. The 1.0 firmware appears to be mature from all the hands-on I've been soaking up.

In the interest of the hottest new scaler around, I thought I'd round up all the resources and wildly cool tidbits I've come across in regards to the TINK-4K. I can't speak to the device yet, so I'll let the pros do the talking. 
# The Specs

There's no better pro than the developer himself, Mike Chi. A few weeks ago, Mike pulled back the 🤡 curtain on the internals of the RT4K and [laid all to bare](https://x.com/retrotink2/status/1725591510471843971?s=20). I won't pretend to understand all these specs, but I do find it neat nonetheless. 

> The heart of the RT4K is a very powerful Altera Cyclone V 5CEBA7-series FPGA with 149.5k LEs and 7.696 Mbits of BRAM. To put in perspective, this is about 20x bigger than the RT5X...

Right now on [Digikey](https://www.digikey.com/en/products/detail/intel/5CEBA7F23C7N/3879486), the Alera Cyclone V[^2] Mike is using costs a cool $262.94. That alone is 35% of the TINK's MSRP of $750.

> The RT4K uses three SDRAM chips in parallel for a massive boost in bandwidth.

For some reason, the use of parallel SDRAM reminds me of the [PS5](https://youtu.be/ph8LyNIT9sg?si=5V0ikN-GfTen7M5M&t=758). 

> The RT4K has dual on-board video ADCs: one for RGB/YPbPr signals and a secondary one composite and S-Video decoding. There also might be some cool things that can be done by combining the two...

Fun fact; ADC is Analog-to-Digital Converter—aka the inverse of a [[Analogue DAC Thoughts and Impressions|DAC]][^3]. It's interesting that he opted for two separate ADCs for those ranges of analog signals. What's more interesting is the tease about combining them. I wonder what the implications are there.

> The HDMI (TM) transmitter is a 2.0 part capable of up to 600 MHz pixel clocks. The RT4K supports custom modelines so you can program it to output custom resolutions in addition to standard built in modes (i.e. 1440p, 1080p, 480p, etc.).

Not to leave the HDMI port out in the dust, I figured I'd include this tidbit here. I have no clue what 600 MHz gives us as the end user. 
# It Can Do What?

The earliest example of RT4K dopeness that I saw was [John Linneman](https://twitter.com/dark1x/status/1686843392917954560) matching his OLED with Black Frame Insertion (BFI) and scanlines with his CRT through the power of HDR. This thing gives you control of HDR down to the nits themselves! 

> Retrotink 4K "Auto-Crop" feature is quite useful and will save you time especially with retro games that have overscan garbage or a low vertical pixel count.

[Wobbling Pixels showed off](https://x.com/WobblingP/status/1724369889719136609?s=20) the auto-crop feature. It's like the TINK is taking the guess work out of retro gaming. And speaking of guesswork...

> Working on Automatic Detection of Console and Resolution! RT4K detects SoTN as it switches between 256, 320 and 384 pixel modes!!! Still have a lot of stuff to prep before launch -- so this will be one of the things I'll be working on later on.

Like, [what](https://x.com/retrotink2/status/1715815482287395298?s=20)? This is witchcraft and wizardry. You can see it in action from [FirebrandX](https://youtu.be/4t_jkd5Cu4k?si=ZmdZaytKS5lZAkeA) too. This auto detection is also going to [allow automatic profile switching](https://x.com/FBXGargoyle/status/1718973019413189066?s=20) within a single console. It makes games like *Castlevania: Symphony of the Night* perfectly scaleable at all its resolutions.

Behold some of the majesty that this sucker produces. By some, I just mean [this](https://drive.google.com/file/d/1TsUmuSAKlhyiPBaCwAlYRVlfrQgJ-efs/view?pli=1) 13X scale of *Metroid Fusion* to 4K courteous of FirebrandX. The pixels are so sharp, my eyes are bleeding.
# The Videos

The best showcases for the RetroTINK-4K are videos of it in action. One of the earliest videos was My Life in Gaming's [livestream with Mike Chi](https://www.youtube.com/live/tB8OSyfTGFw). It's a fun, very casual deep dive with the man behind the scaler. I've been chipping away at it over the months and have been enjoying it.

<div class=iframe-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tB8OSyfTGFw?si=hpGrmwHmBcrdC5oB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The man of the people, Bob Neal of RetroRGB.com, has the quintessential [introduction video](https://youtube.com/watch?v=E3ep6sw0c8Y) for the RT4K. If you want to get down to brass tacks, this is the video for you.

<div class=iframe-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/E3ep6sw0c8Y?si=wZApadF_Fa2iDJhq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

About two months ago, Game Sack put up [their video](https://youtube.com/watch?v=DXsAXSOy5HI). It's a robust dive that is shot, written, and edited well. This was my first real exposure to Game Sack. I've become very into Joe's work since this video.

<div class=iframe-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DXsAXSOy5HI?si=ntNtEkRiWDTvEc5S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

8-bit Esquire put up a video pitting the RT4K [against](https://youtube.com/watch?v=3ZmPkozY6Cg) CRTs. It's a wonderful look at how close a scaler like this can get to recreating that authentic analog experience.

<div class=iframe-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3ZmPkozY6Cg?si=t1QjFR9VxzhvPE51" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

And of course, the video I had been waiting for all along—[My Life in Gaming's take](https://youtube.com/watch?v=SMkimgEwWXs) on the device. Turns out, [[MFP30 - “Born to Test This Stuff” with Marc “Try4ce” Duddleson|Try went buckwild]] with the HDMI input on the TINK-4K. I love this video so much. The [[How Many HDMI Cables does Try have in his Setup|amount of HDMI cables]] it took is awe inspiring.

<div class=iframe-container>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SMkimgEwWXs?si=rVUdbur8-zMs69kh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

After everything I've seen, the RetroTINK-4K is worth my $750. I know that's a lot of money. My wife's jaw dropped when I told her how much I had been saving up. This is a part of my hobby I am passionate about and I sold a lot of stuff to afford a scaler like this. Thankfully, the RetroTINK-5X is still an option at a much more affordable $325. For 4K, the PixelFX Morph could be a suitable scaler for those focused on HDMI inputs for a much lower price of $400. I'd wait until the Morph is in more hands outside of PixelFX and to see its performance out in the wild though. 

Either way, the 4K scaler revolution is here. What a wonderful time to be a retro game enthusiast. 

---
[^1]: 25 minutes before my flight home is supposed to take off. 😬
[^2]: The Cyclone V line of FPGA chips is also what [Analogue uses in](https://maxfrequency.net/2020/04/22/analogue-pocket-preview/) the Super NT, Mega SG, and as one of the Pocket's chips. I don't know if it is the exact same model, but they are definitely all rocking a version of the Cyclone V.
[^3]: Which the RetroTINK-4K now has [Analogue DAC spoofing](https://youtu.be/SMkimgEwWXs?si=r3wMrgKB6SPw297W&t=1941), letting you force the Analogue consoles to spit out the 240p digital signal into the RT4K.