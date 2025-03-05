// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  localIcons: true,
  temperature: {
    location: "Sucre, Bolivia",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  timeZone: "America/La_Paz",
  disabled: [],
  fastlink: "https://catppuccin.com/",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "1 - 3",
      background_url: "src/img/banners/bg-1.png",
      categories: [
        {
          name: "1. anime",
          links: [
            {
              name: "AniChart",
              url: "https://anichart.net/",
              icon: "calendar-event",
              icon_color: palette.blue,
            },
            {
              name: "AniDB",
              url: "https://anidb.net/",
              icon: "database",
              icon_color: palette.yellow,
            },
            {
              name: "AniList",
              url: "https://anilist.co/home",
              icon: "list",
              icon_color: palette.blue,
            },
            {
              name: "AnimeBytes",
              url: "https://animebytes.tv/",
              icon: "progress",
              icon_color: palette.red,
            },
            {
              name: "AnimeMusicQuiz",
              url: "https://animemusicquiz.com/",
              icon: "music-question",
              icon_color: palette.red,
            },
            {
              name: "Anime News Network",
              url: "https://www.animenewsnetwork.com/",
              icon: "news",
              icon_color: palette.blue,
            },
            {
              name: "Crunchyroll",
              url: "http://www.crunchyroll.com/",
              icon: "movie",
              icon_color: palette.peach,
            },
            {
              name: "MyAnimeList",
              url: "https://myanimelist.net/",
              icon: "book",
              icon_color: palette.blue,
            },
            {
              name: "Nyaa",
              url: "https://nyaa.si/",
              icon: "download",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "2. art & images",
          links: [
            {
              name: "Danbooru",
              url: "http://danbooru.donmai.us/",
              icon: "photo-square-rounded",
              icon_color: palette.peach,
            },
            {
              name: "Gelbooru",
              url: "https://gelbooru.com/",
              icon: "photo",
              icon_color: palette.blue,
            },
            {
              name: "Pixiv",
              url: "https://www.pixiv.net/",
              icon: "brush",
              icon_color: palette.blue,
            },
            {
              name: "pixivFANBOX",
              url: "https://www.fanbox.cc/",
              icon: "box",
              icon_color: palette.yellow,
            },
            {
              name: "Postimages",
              url: "https://postimages.org/",
              icon: "camera-selfie",
              icon_color: palette.blue,
            },
            {
              name: "Sakugabooru",
              url: "https://sakugabooru.com/",
              icon: "bounce-right",
              icon_color: palette.red,
            },
            {
              name: "Yande.re",
              url: "https://yande.re/post",
              icon: "photo-pentagon",
              icon_color: palette.pink,
            },
            {
              name: "Zerochan",
              url: "https://www.zerochan.net/",
              icon: "photo-hexagon",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "3. college & dev",
          links: [
            {
              name: "E-Campus",
              url: "https://ecampus.usfx.bo/my/",
              icon: "school",
              icon_color: palette.blue,
            },
            {
              name: "GitHub",
              url: "https://github.com/",
              icon: "code",
              icon_color: palette.overlay2,
            },
            {
              name: "GitLab",
              url: "https://gitlab.com/",
              icon: "terminal",
              icon_color: palette.peach,
            },
            {
              name: "Google Classroom",
              url: "https://classroom.google.com/",
              icon: "chalkboard",
              icon_color: palette.green,
            },
            {
              name: "Kaggle",
              url: "https://www.kaggle.com/",
              icon: "chart-line",
              icon_color: palette.sky,
            },
            {
              name: "Postman",
              url: "https://web.postman.co/home",
              icon: "api",
              icon_color: palette.peach,
            },
            {
              name: "Spring Initializr",
              url: "https://start.spring.io/",
              icon: "code-plus",
              icon_color: palette.green,
            },
            {
              name: "Suniver",
              url: "https://si2.usfx.bo/suniver/web/",
              icon: "clipboard-list",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "4 - 6",
      background_url: "src/img/banners/bg-2.png",
      categories: [
        {
          name: "4. language",
          links: [
            {
              name: "DeepL Translate",
              url: "https://www.deepl.com/translator",
              icon: "arrows-exchange",
              icon_color: palette.overlay2,
            },
            {
              name: "Google Translate",
              url: "https://translate.google.com/",
              icon: "language",
              icon_color: palette.blue,
            },
            {
              name: "ichi.moe",
              url: "https://ichi.moe/",
              icon: "language-hiragana",
              icon_color: palette.pink,
            },
            {
              name: "jisho.org",
              url: "https://jisho.org/",
              icon: "language-katakana",
              icon_color: palette.green,
            },
            {
              name: "Lingva Translate",
              url: "https://lingva.ml/",
              icon: "message-language",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "5. music",
          links: [
            {
              name: "AnimeThemes",
              url: "https://animethemes.moe/",
              icon: "microphone-2",
              icon_color: palette.overlay2,
            },
            {
              name: "AniPlaylist",
              url: "https://aniplaylist.com/",
              icon: "playlist",
              icon_color: palette.green,
            },
            {
              name: "Bandcamp",
              url: "https://bandcamp.com/",
              icon: "album",
              icon_color: palette.teal,
            },
            {
              name: "JPopsuki",
              url: "https://jpopsuki.eu/index.php",
              icon: "music-down",
              icon_color: palette.sky,
            },
            {
              name: "Last.fm",
              url: "https://www.last.fm/",
              icon: "radio",
              icon_color: palette.red,
            },
            {
              name: "SoundCloud",
              url: "https://soundcloud.com/",
              icon: "wave-saw-tool",
              icon_color: palette.blue,
            },
            {
              name: "Spotify",
              url: "https://open.spotify.com/",
              icon: "headphones",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "6. organization",
          links: [
            {
              name: "addy.io",
              url: "https://app.addy.io/",
              icon: "lock",
              icon_color: palette.sky,
            },
            {
              name: "Banco Unión",
              url: "https://bancounion.com.bo/",
              icon: "credit-card",
              icon_color: palette.blue,
            },
            {
              name: "Bitwarden",
              url: "https://vault.bitwarden.com/",
              icon: "shield",
              icon_color: palette.blue,
            },
            {
              name: "Icedrive",
              url: "https://icedrive.net/dashboard/",
              icon: "cloud",
              icon_color: palette.blue,
            },
            {
              name: "Raindrop",
              url: "https://app.raindrop.io/",
              icon: "droplet",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "7 - 9",
      background_url: "src/img/banners/bg-3.png",
      categories: [
        {
          name: "7. reference",
          links: [
            {
              name: "Bandori Party",
              url: "https://bandori.party/",
              icon: "piano",
              icon_color: palette.pink,
            },
            {
              name: "Bulbapedia",
              url: "https://bulbapedia.bulbagarden.net/wiki/Main_Page",
              icon: "leaf",
              icon_color: palette.green,
            },
            {
              name: "Cambridge Dict.",
              url: "https://dictionary.cambridge.org/",
              icon: "book-2",
              icon_color: palette.peach,
            },
            {
              name: "DAMER",
              url: "https://www.asale.org/damer/",
              icon: "globe",
              icon_color: palette.maroon,
            },
            {
              name: "DPD",
              url: "https://www.rae.es/dpd/",
              icon: "help-circle",
              icon_color: palette.text,
            },
            {
              name: "Dictionary.com",
              url: "https://www.dictionary.com/",
              icon: "text-recognition",
              icon_color: palette.blue,
            },
            {
              name: "DLE",
              url: "https://dle.rae.es/?w=diccionario",
              icon: "book",
              icon_color: palette.yellow,
            },
            {
              name: "Merriam-Webster Dict.",
              url: "https://www.merriam-webster.com/",
              icon: "vocabulary",
              icon_color: palette.red,
            },
            {
              name: "Sekaipedia",
              url: "https://www.sekaipedia.org/wiki/Main_Page",
              icon: "music",
              icon_color: palette.sky,
            },
            {
              name: "Wikipedia",
              url: "https://en.wikipedia.org/wiki/Main_Page",
              icon: "article",
              icon_color: palette.text,
            },
            {
              name: "Wordnik",
              url: "https://www.wordnik.com/",
              icon: "align-left",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "8. social",
          links: [
            {
              name: "Bluesky",
              url: "https://bsky.app/",
              icon: "butterfly",
              icon_color: palette.blue,
            },
            {
              name: "Gravatar",
              url: "https://en.gravatar.com/",
              icon: "user-circle",
              icon_color: palette.blue,
            },
            {
              name: "Patreon",
              url: "https://www.patreon.com/home",
              icon: "heart-handshake",
              icon_color: palette.peach,
            },
            {
              name: "Twitter",
              url: "https://x.com/",
              icon: "feather",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "9. software & tech",
          links: [
            {
              name: "AlternativeTo",
              url: "https://alternativeto.net/",
              icon: "switch-horizontal",
              icon_color: palette.sky,
            },
            {
              name: "ChatGPT",
              url: "https://chat.openai.com/",
              icon: "message",
              icon_color: palette.overlay2,
            },
            {
              name: "Chromium",
              url: "https://chromium.woolyss.com/",
              icon: "world",
              icon_color: palette.blue,
            },
            {
              name: "Claude",
              url: "https://claude.ai/chats",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "DeepSeek",
              url: "https://chat.deepseek.com/",
              icon: "fish-hook",
              icon_color: palette.blue,
            },
            {
              name: "i2ocr",
              url: "http://www.i2ocr.com/",
              icon: "text-recognition",
              icon_color: palette.blue,
            },
            {
              name: "spoo.me",
              url: "https://spoo.me/",
              icon: "link",
              icon_color: palette.blue,
            },
            {
              name: "Surfshark",
              url: "https://my.surfshark.com/home/dashboard",
              icon: "shield-lock",
              icon_color: palette.green,
            },
            {
              name: "LibreWolf",
              url: "https://librewolf.net/",
              icon: "dog",
              icon_color: palette.sky,
            },
            {
              name: "Mullvad",
              url: "https://mullvad.net/",
              icon: "eye-off",
              icon_color: palette.yellow,
            },
            {
              name: "Zorin OS",
              url: "https://zorin.com/os/",
              icon: "device-desktop",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "10 - 12",
      background_url: "src/img/banners/bg-4.png",
      categories: [
        {
          name: "10. videogames",
          links: [
            {
              name: "Backloggd",
              url: "https://www.backloggd.com/",
              icon: "list",
              icon_color: palette.overlay2,
            },
            {
              name: "Epic Games Store",
              url: "https://www.epicgames.com/store/en-US/",
              icon: "swords",
              icon_color: palette.overlay2,
            },
            {
              name: "GOG",
              url: "https://www.gog.com/",
              icon: "disc",
              icon_color: palette.yellow,
            },
            {
              name: "Humble Bundle",
              url: "https://www.humblebundle.com/",
              icon: "gift",
              icon_color: palette.red,
            },
            {
              name: "itch.io",
              url: "https://itch.io/",
              icon: "building-store",
              icon_color: palette.maroon,
            },
            {
              name: "PlayStation Network",
              url: "https://www.playstation.com/en-us/playstation-network/",
              icon: "device-gamepad-2",
              icon_color: palette.blue,
            },
            {
              name: "Steam",
              url: "https://steamcommunity.com/",
              icon: "steam",
              icon_color: palette.overlay2,
            },
            {
              name: "Vimm's Lair",
              url: "https://vimm.net/",
              icon: "device-gamepad",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "11. video & streaming",
          links: [
            {
              name: "Holodex",
              url: "https://holodex.net/",
              icon: "player-record",
              icon_color: palette.blue,
            },
            {
              name: "Twitch",
              url: "https://www.twitch.tv/",
              icon: "device-computer-camera",
              icon_color: palette.mauve,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com/feed/subscriptions",
              icon: "player-play",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "12. others",
          links: [
            {
              name: "1337x.to",
              url: "https://www.1337x.to/",
              icon: "download",
              icon_color: palette.peach,
            },
            {
              name: "ExHentai.org",
              url: "https://exhentai.org/",
              icon: "library-photo",
              icon_color: palette.maroon,
            },
            {
              name: "hanime.tv",
              url: "https://hanime.tv/",
              icon: "movie",
              icon_color: palette.overlay2,
            },
            {
              name: "Japanese ASMR",
              url: "https://japaneseasmr.com/",
              icon: "ear",
              icon_color: palette.text,
            },
            {
              name: "nhentai",
              url: "https://nhentai.net/",
              icon: "tags",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

console.log("CONFIG object:", CONFIG);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
