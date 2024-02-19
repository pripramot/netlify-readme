# ยังไม่เเก้ไข

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/dcwjok3nu/image/upload/v1707833096/LogoBuddhism/Buddhism_light_wx0vb8.svg">
  <img alt="Wiki.js" src="https://res.cloudinary.com/dcwjok3nu/image/upload/v1707833096/LogoBuddhism/Buddhism_dark_x8rwba.svg" width="256">
</picture>

[![Release](https://img.shields.io/github/release/Requarks/wiki.svg?style=flat&maxAge=3600)](https://github.com/Requarks/wiki/releases)
[![License](https://img.shields.io/badge/license-AGPLv3-blue.svg?style=flat)](https://github.com/requarks/wiki/blob/master/LICENSE)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat&logo=javascript&logoColor=white)](http://standardjs.com/)
[![Downloads](https://img.shields.io/github/downloads/Requarks/wiki/total.svg?style=flat&logo=github)](https://github.com/Requarks/wiki/releases)
[![Docker Pulls](https://img.shields.io/docker/pulls/requarks/wiki.svg?logo=docker&logoColor=white)](https://hub.docker.com/r/requarks/wiki/)<br>
[![Build + Publish](https://github.com/Requarks/wiki/actions/workflows/build.yml/badge.svg)](https://github.com/Requarks/wiki/actions/workflows/build.yml)
[![Huntr](https://img.shields.io/badge/security%20bounty-disclose-brightgreen.svg?style=flat&logo=cachet&logoColor=white)](https://huntr.dev/bounties/disclose)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/ngpixel?logo=github&color=ea4aaa)](https://github.com/users/NGPixel/sponsorship)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/wikijs?label=backers&color=218bff&logo=opencollective&logoColor=white)](https://opencollective.com/wikijs)

[![Follow on Twitter](https://img.shields.io/badge/twitter-%40requarks-blue.svg?style=flat&logo=twitter&logoColor=white)](https://twitter.com/requarks)
[![Follow on Telegram](https://img.shields.io/badge/telegram-%40wiki__js-blue.svg?style=flat&logo=telegram)](https://t.me/)
[![Chat on Discord](https://img.shields.io/badge/discord-join-8D96F6.svg?style=flat&logo=discord&logoColor=white)](https://discord.gg/id)

##### A modern, lightweight and powerful wiki app built on NodeJS

</div>

- **[Official Website](myapp)**
- **[Documentation](https://docs.ai-jiraphinya.io/)**
- [Changelog](https://github.com/id/repo/releases)
- [Chat with us on Slack](https://wiki.requarks.io/slack)
- [Translations](https://docs.ai-jiraphinya.io/dev/translations) _(We need your help!)_
- [E2E Testing Results](https://dashboard.cypress.io/projects/r7qxah/runs)
- [Special Thanks](#special-thanks)
- [Contribute](#contributors)

<!-- [Follow our Twitter feed](https://twitter.com/) to learn about upcoming updates and new releases!

<h2 align="center">Donate</h2>

<div align="center">

Wiki.js is an open source project that has been made possible due to the generous contributions by community [backers](#). If you are interested in supporting this project, please consider [becoming a sponsor](https://github.com/ai-jiraphinya), [becoming a patron](https://www.patreon.com/requarks), donating to our [OpenCollective](https://opencollective.com/wikijs), via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FLV5X255Z9CJU&source=url) or via Ethereum (`0xe1d55c19ae86f6bcbfb17e7f06ace96bdbb22cb5`).

[![Become a Sponsor](https://img.shields.io/badge/donate-github-ea4aaa.svg?style=popout&logo=github)](https://github.com/users/NGPixel/sponsorship)
[![Become a Patron](https://img.shields.io/badge/donate-patreon-orange.svg?style=popout&logo=patreon)](https://www.patreon.com/)
[![Donate on OpenCollective](https://img.shields.io/badge/donate-open%20collective-blue.svg?style=popout&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxnPjxwYXRoIGQ9Ik0yMDkuNzY1MTQ0LDEyOC4xNDk5NzkgQzIwOS43NjUxNDQsMTQ0LjE2MzMgMjA0Ljg2NDM4MSwxNTkuNDg5ODkgMTk2LjQ5ODc0NywxNzIuNzI1MDcyIEwyMjkuOTQ1Njc1LDIwNi4xNzE5OTkgQzI0Ni42ODIxMDUsMTgzLjg1Njc1OSAyNTUuNzI5MzA3LDE1Ni43MTUxNTIgMjU1LjcyOTMwNywxMjguODIxMTAyIEMyNTUuNzI5MzA3LDk5LjU1Njk5MTcgMjQ1Ljk3NDYwMyw3My4wNzEwMjA3IDIyOS4yNTg5NDQsNTEuNDg1ODEyOCBMMTk2LjQ4MzE0LDg0LjIxNDc5NCBDMjA1LjEyMjU2MSw5Ny4yMjI0NjgzIDIwOS43MzY5MDcsMTEyLjQ4NzgxIDIwOS43NDk1MzcsMTI4LjEwMzE1NiBMMjA5Ljc2NTE0NCwxMjguMTQ5OTc5IFoiIGZpbGw9IiNCOEQzRjQiPjwvcGF0aD48cGF0aCBkPSJNMTI3LjUxMzQ4NCwyMTAuMzU0ODE2IEM4Mi4xNDYwODcyLDIxMC4yNjg5NTggNDUuMzg3NTA5NCwxNzMuNTE3MzU4IDQ1LjI5MzAzOTMsMTI4LjE0OTk3OSBDNDUuMzYxNzUwMiw4Mi43NjQzMTM4IDgyLjEyNzg0ODcsNDUuOTg0MjU3IDEyNy41MTM0ODQsNDUuODk4MzE4NiBDMTQ0LjI0NDc1Miw0NS44OTgzMTg2IDE1OS41NzEzNDIsNTAuNzk5MDgxNyAxNzIuMTE5NzkyLDU5LjE2NDcxNTQgTDIwNC44NjQzODEsMjYuMzg4OTExNiBDMTgyLjU0MzY1LDkuNjY2NjUxMjkgMTU1LjQwMzQyOSwwLjYzMDg2MzI5OCAxMjcuNTEzNDg0LDAuNjM2NDk0NDAzIEM1Ny4xMjM1NDM3LDAuNjM2NDk0NDAzIDAsNTcuNzYwMDM4MSAwLDEyOC4xNDk5NzkgQzAsMTk4LjUwODcwNCA1Ny4xMjM1NDM3LDI1NS42NjM0NjMgMTI3LjUxMzQ4NCwyNTUuNjYzNDYzIEMxNTUuNTM3MzUyLDI1NS43NDA4NzYgMTgyLjc3NTk4OSwyNDYuNDA4NTEgMjA0Ljg2NDM4MSwyMjkuMTYxODg0IEwxNzEuNDE3NDU0LDE5NS43MzA1NjQgQzE1OS41NTU3MzQsMjA1LjQ4NTI2OCAxNDQuMjYwMzU5LDIxMC4zNTQ4MTYgMTI3LjUxMzQ4NCwyMTAuMzU0ODE2IEwxMjcuNTEzNDg0LDIxMC4zNTQ4MTYgWiIgZmlsbD0iIzdGQURGMiI+PC9wYXRoPjwvZz48L3N2Zz4=)](#)
[![Donate via Paypal](https://img.shields.io/badge/donate-paypal-blue.svg?style=popout&logo=paypal)](https://www.paypal.com/หมายเลขเพลพาวน์)
 [![Donate via Ethereum](https://img.shields.io/badge/donate-ethereum-999.svg?style=popout&logo=ethereum&logoColor=CCC)](https://etherscan.io/address/ที่อยู่กระเป๋าบิทคอยน์)
[![Donate via Bitcoin](https://img.shields.io/badge/donate-bitcoin-ff9900.svg?style=popout&logo=bitcoin&logoColor=CCC)](https://checkout.opennode.com/p/2553c612-f863-4407-82b3-1a7685268747)
[![Buy a T-Shirt](https://img.shields.io/badge/buy-t--shirts-teal.svg?style=popout&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzFhYmM5YyI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNOTYsMGMtMTUuMjE4NzUsMCAtMjQuNjg3NSwzLjY1NjI1IC0yNS41LDRsLTIyLjUsNy4yNWMtMTAuNDA2MjUsMy4xODc1IC0xOS4wOTM3NSw5LjQzNzUgLTI1LjUsMTguMjVsLTIyLjUsNDIuNWwyNy4yNSwxNi43NWwxMi43NSwtMjR2MTE5LjI1YzAsNC40MDYyNSAyNS4wNjI1LDggNTYsOGMzMC45Mzc1LDAgNTYsLTMuNTkzNzUgNTYsLTh2LTExOS4yNWwxMi43NSwyNGwyNy4yNSwtMTYuNzVsLTIyLjUsLTQyLjVjLTYuNDA2MjUsLTguODEyNSAtMTUuMTU2MjUsLTE1LjA2MjUgLTI0Ljc1LC0xOC4yNWwtMjIuMjUsLTcuMjVjLTAuMTg3NSwwIC0xLjAzMTI1LDEuMzEyNSAtMiwyLjc1bDEuMjUsLTIuNWMwLDAgLTkuODQzNzUsLTQuMjUgLTI1Ljc1LC00LjI1ek05Niw4YzExLjQwNjI1LDAgMTguNDM3NSwyLjI1IDIxLDMuMjVjLTQuNDY4NzUsNS43NSAtMTEuNDA2MjUsMTIuNzUgLTIxLDEyLjc1Yy05LjQwNjI1LDAgLTE2LjQwNjI1LC03LjA2MjUgLTIwLjc1LC0xMi43NWMyLjg3NSwtMS4wNjI1IDkuODc1LC0zLjI1IDIwLjc1LC0zLjI1eiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==)](#)

</div> -->

<h2 align="center">Gold Tier Sponsors</h2>

<div align="center">
<table>
  <tbody>
    <tr>
      <td align="center" valign="middle" width="600">
        <a href="#" target="_blank">
          <img src="./assets/images/Phra_aphai_mani.jpg">
        </a>
      </td>
    </tr>
  </tbody>
</table>
</div>

<h2 align="center">GitHub Sponsors</h2>

เทมเพลตโอเพ่นซอร์ส ฟรี สำหรับสร้างเว็บไซต์ของคุณโดยใช้ Astro 4.0+Tailwind CSS. พร้อมสำหรับการเริ่มโครงการใหม่และออกแบบ เรียบง่าย ยึดถือแนวทางปฏิบัติที่ดีที่สุด.! [[Become a sponsor](https://github.com/users/NGPixel/sponsorship)]

<details>
<summary>Phra Aphai Mani 💬 🦋</summary>
<div align="center">
<table>
  <tbody>
    <tr>
      <td align="center" valign="middle" width="600">
        <a href="https://github.com/My-HackathonEducation-Th/mint" target="_blank">
          <img src="./assets/images/Phra_aphai_mani.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>
</div>
</details>
<div align="center">
<table>
  <tbody>
    <tr>
      <td align="center" valign="middle" width="200">
        <a href="https://acceleanation.com/" target="_blank">
          <img src="/assets/images/500px/30.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://github.com/alexksso" target="_blank">
          <img src="/assets/images/500px/26.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://github.com/broxen" target="_blank">
          <img src="/assets/images/500px/21.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://github.com/xDacon" target="_blank">
          <img src="/assets/images/500px/20.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://github.com/GigabiteLabs" target="_blank">
          <img src="/assets/images/500px/10.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://www.hostwiki.com/" target="_blank">
          <img src="/assets/images/500px/15.png">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle" width="200">
        <a href="https://github.com/JayDaley" target="_blank">
          <img src="/assets/images/500px/28.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://github.com/idokka" target="_blank">
          <img src="/assets/images/500px/27.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://www.openhost-network.com/" target="_blank">
          <img src="/assets/images/500px/21.png">
        </a>
      </td>
      <td align="center" valign="middle" width="200">
        <a href="https://www.prevo.ch/" target="_blank">
          <img src="/assets/images/500px/22.png">
        </a>
      </td>
      <td align="center" valign="middle" colspan="200">
        <a href="https://github.com/sponsors/NGPixel" target="_blank">
          <img src="/assets/images/500px/25.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>

<details>
<summary>My Repositories 💬 🦋</summary>
<table><tbody><tr><td>
<img width="441" height="1" />

- Akira Suenami ([@a-suenami](https://github.com/a-suenami))
- Armin Reiter ([@arminreiter](https://github.com/arminreiter))
- Arnaud Marchand ([@snuids](https://github.com/snuids))
- Brian Douglass ([@bhdouglass](https://github.com/bhdouglass))
- Bryon Vandiver ([@asterick](https://github.com/asterick))
- Cameron Steele ([@ATechAdventurer](https://github.com/ATechAdventurer))
- Charlie Schliesser ([@charlie-s](https://github.com/charlie-s))
- Cloud Data Hosting LLC ([@CloudDataHostingLLC](https://github.com/CloudDataHostingLLC))
- Cole Manning ([@RVRX](https://github.com/RVRX))
- CrazyMarvin ([@CrazyMarvin](https://github.com/CrazyMarvin))
- Daniel Horner ([@danhorner](https://github.com/danhorner))
- David Christian Holin ([@SirGibihm](https://github.com/SirGibihm))
- Dragan Espenschied ([@despens](https://github.com/despens))
- Elijah Zobenko ([@he110](https://github.com/he110))
- Emerson-Perna ([@Emerson-Perna](https://github.com/Emerson-Perna))
- Ernie ([@iamernie](https://github.com/iamernie))
- Fabio Ferrari ([@devxops](https://github.com/devxops))
- Finsa S.p.A. ([@finsaspa](https://github.com/finsaspa))
- Florian Moss ([@florianmoss](https://github.com/florianmoss))
- GoodCorporateCitizen ([@GoodCorporateCitizen](https://github.com/GoodCorporateCitizen))
- HeavenBay ([@HeavenBay](https://github.com/heavenbay))
- HikaruEgashira ([@HikaruEgashira](https://github.com/HikaruEgashira))
- Ian Hyzy ([@ianhyzy](https://github.com/ianhyzy))
- Jaimyn Mayer ([@jabelone](https://github.com/jabelone))
- Jay Lee ([@polyglotm](https://github.com/polyglotm))
- Kelly Wardrop ([@dropcoded](https://github.com/dropcoded))
- Loki ([@binaryloki](https://github.com/binaryloki))
- MaFarine ([@MaFarine](https://github.com/MaFarine))
- Marcilio Leite Neto ([@marclneto](https://github.com/marclneto))
- Mattias Johnson ([@mattiasJohnson](https://github.com/mattiasJohnson))
- Max Ricketts-Uy ([@MaxRickettsUy](https://github.com/MaxRickettsUy))

</td><td>
<img width="441" height="1" />

- Mickael Asseline ([@PAPAMICA](https://github.com/PAPAMICA))
- Mitchell Rowton ([@mrowton](https://github.com/mrowton))
- M. Scott Ford ([@mscottford](https://github.com/mscottford))
- Nick Halase ([@nhalase](https://github.com/nhalase))
- Nick Price ([@DominoTree](https://github.com/DominoTree))
- Nina Reynolds ([@cutecycle](https://github.com/cutecycle))
- Noel Cower ([@nilium](https://github.com/nilium))
- Oleksandr Koltsov ([@crambo](https://github.com/crambo))
- Phi Zeroth ([@phizeroth](https://github.com/phizeroth))
- Philipp Schmitt ([@pschmitt](https://github.com/pschmitt))
- Robert Lanzke ([@winkelement](https://github.com/winkelement))
- Ruizhe Li ([@liruizhe1995](https://github.com/liruizhe1995))
- Sam Martin ([@ABitMoreDepth](https://github.com/ABitMoreDepth))
- Sean Coffey ([@seanecoffey](https://github.com/seanecoffey))
- Stephan Kristyn ([@stevek-pro](https://github.com/stevek-pro))
- Theodore Chu ([@TheodoreChu](https://github.com/TheodoreChu))
- Tyler Denman ([@tylerguy](https://github.com/tylerguy))
- Victor Bilgin ([@vbilgin](https://github.com/vbilgin))
- VMO Solutions ([@vmosolutions](https://github.com/vmosolutions))
- Yu Yongwoo ([@uyu423](https://github.com/uyu423))
- ameyrakheja ([@ameyrakheja](https://github.com/ameyrakheja))
- aniketpanjwani ([@aniketpanjwani](https://github.com/aniketpanjwani))
- aytaa ([@aytaa](https://github.com/aytaa))
- cesar ([@cesarnr21](https://github.com/cesarnr21))
- chaee ([@chaee](https://github.com/chaee))
- lwileczek ([@lwileczek](https://github.com/lwileczek))
- magicpotato ([@fortheday](https://github.com/fortheday))
- motoacs ([@motoacs](https://github.com/motoacs))
- muzian666 ([@muzian666](https://github.com/muzian666))
- rburckner ([@rburckner](https://github.com/rburckner))
- scorpion ([@scorpion](https://github.com/scorpion))
- valantien ([@valantien](https://github.com/valantien))

</td></tr></tbody></table>
</div>
</details>
<h2 align="center">OpenCollective Sponsors</h2>

Support this project by becoming a sponsor. Your logo will show up in the Contribute page of all Wiki.js installations as well as here with a link to your website! [[Become a sponsor](https://opencollective.com/wikijs#sponsor)]

<div align="center">
<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/0/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/1/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/2/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/3/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/4/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/4/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/5/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/5/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/6/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/6/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/7/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/7/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/8/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/8/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/9/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/9/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/10/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/10/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/11/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/11/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/12/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/12/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/13/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/13/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/14/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/14/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/15/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/15/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/16/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/16/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/17/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/17/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/18/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/18/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/19/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/19/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/20/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/20/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/21/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/21/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/22/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/22/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/23/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/23/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/24/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/24/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/25/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/25/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/26/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/26/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/27/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/27/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/28/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/28/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/29/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/29/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/30/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/30/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/31/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/31/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/32/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/32/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/33/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/33/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/34/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/34/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/35/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/35/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/36/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/36/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/37/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/37/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/38/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/38/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/39/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/39/avatar.svg"></a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/40/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/40/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/41/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/41/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/42/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/42/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/43/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/43/avatar.svg"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://opencollective.com/wikijs/sponsor/44/website" target="_blank"><img src="https://opencollective.com/wikijs/sponsor/44/avatar.svg"></a>
      </td>
    </tr>
  </tbody>
</table>
</div>
<h2 align="center">Special Thanks</h2>

![Cloudflare](https://js.wiki/legacy/logo_cloudflare.png)  
[Cloudflare](https://www.cloudflare.com/) for providing their great CDN, SSL and advanced networking services.

![Localazy](https://static.requarks.io/logo/localazy-h40.png)  
[Localazy](https://localazy.com/) for providing access to their great localization service.

![MacStadium](https://static.requarks.io/logo/macstadium-h40.png)  
[MacStadium](https://www.macstadium.com) for providing access to their Mac hardware in the cloud.

![Netlify](https://js.wiki/legacy/logo_netlify.png)  
[Netlify](https://www.netlify.com) for providing hosting for our website.

![ngrok](https://static.requarks.io/logo/ngrok-h40.png)  
[ngrok](https://ngrok.com) for providing access to their great HTTP tunneling services.

---
