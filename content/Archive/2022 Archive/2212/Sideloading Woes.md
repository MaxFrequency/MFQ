---
Published: 2022-12-07
URL: https://maxfrequency.net/2022/12/07/sideloading-woes/
permalink: 2022/12/07/sideloading-woes/
tags:
  - Google/Pixel
---
“Come to Android,” they said. “We have sideloding!”

[This](https://youtu.be/LZP6Vw6vPUo) Google Pixel Feature Drop video popped up in my feed yesterday. I clicked in hopes that the one update I desired would be included: Speaker Labels. The [demo](https://youtube.com/watch?v=2NGjNQVbydc&t=1537) at the Pixel event was stellar. It was one reason why [[I Bought a Pixel 7]] in the first place.

This December “Feature Drop” did include the new Recorder app feature! Now…how do I get it? I haven’t had to update my Pixel before. What’s the procedure?

My first thought was System Settings. That was the right direction. I found a security update waiting for me, so I triggered that process. It took roughly 45 minutes or so. When the phone rebooted, I was greeted with a series of splash pages showcasing the new features. Speaker Labels was there in all its promotional glory.

Then I go to test the app and bupkis.

No speaker label settings were to be found in the Recorder app. No prompts while the recording was going on.

After some googling (which is ironic when you are using Google’s search engine to solve problems with their software), I landed on [a 9to5Google article](https://9to5google.com/2022/12/01/pixel-recorder-speaker-labels/) from five days prior. Recorder version 4.2 was out and had support for speaker labels. When checking the Play Store, the most recent version was 4.0 from October 2022. How is Android’s newest Feature Drop promoting functionality[^1] when the latest version of the app isn’t even accessible on the Play Store?

Rather than wait for Google’s servers to update, I thought this would be a prime opportunity to try sideloading. This is the promise of Android after all. Installing an official Google app should be a cinch.

Not the case.

Linked in the 9to5Google article was APKMirror page for [Recorder 4.2.490635119](https://www.apkmirror.com/apk/google-inc/google-recorder/google-recorder-4-2-490635119-release/). There were two APK packages I could download. The only notable differences I could parse were DPI ranges and an extra known valid signature. I downloaded both to my iMac, plopped them in my Google Drive, and then downloaded them on my Pixel 7.

I then thought (perhaps naively) that I could just tap the APK and it would prompt me to install. Turns out you need an installer and wouldn’t you know, APKMirror has just that. I searched the Play Store and found [APKMirror Installer](https://play.google.com/store/apps/details?id=com.apkmirror.helper.prod&hl=en_US&gl=US).

There’s a level of Android jank to the app’s appearance: I don’t know what else to call it. Thankfully, it is clear to navigate. I browsed for the files, waited to install[^2], only to be met with an error citing invalid verification. There was no actionable information provided.

I tried both APK files. No luck. I went to settings to give the app permission to install. No dice. I entered developer mode, but that didn’t seem to have any indicator to my issue. I uninstalled Recorder, but that didn’t appear to help. 9to5Google even had an article from February 2021 titled “[Here’s how to bypass verification when sideloading Google Camera or Recorder](https://9to5google.com/2021/02/08/how-to-bypass-verification-sideload-google-camera/),” but that did nothing for me.

Then this morning I tried the whole uninstall Recorder and install from APKMirror Installer and it just worked?

What a cumbersome and vague process. If Apple is forced to offer sideloading, I pray it is more clear than this. I am glad the capability was there though, since Google itself seems to be flipping the server side switches very slowly.

---
[^1]: Promoting on device!
[^2]: You have to wait for 10 seconds to install anything unless you are a premium subscriber.