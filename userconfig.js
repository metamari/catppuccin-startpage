// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  localIcons: true,
  temperature: {
    location: "Sucre, Bolivia",
    scale: "C"
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon
  },
  timeZone: "America/La_Paz",
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "a - c",
      background_url: "src/img/banners/bg-1.png",
      categories: [
        {
          name: "anime",
          links: [
            {
              name: "AMQ",
              url: "https://animemusicquiz.com/",
              icon: "music-question",
              icon_color: palette.red
            },
            {
              name: "AniChart",
              url: "https://anichart.net/",
              icon: "calendar-event",
              icon_color: palette.blue
            },
            {
              name: "AniDB",
              url: "https://anidb.net/",
              icon: "database",
              icon_color: palette.yellow
            },
            {
              name: "AnimeBytes",
              url: "https://animebytes.tv/",
              icon: "progress",
              icon_color: palette.red
            },
            {
              name: "AniList",
              url: "https://anilist.co/home",
              icon: "list",
              icon_color: palette.blue
            },
            {
              name: "Crunchyroll",
              url: "http://www.crunchyroll.com/",
              icon: "movie",
              icon_color: palette.peach
            },
            {
              name: "MyAnimeList",
              url: "https://myanimelist.net/",
              icon: "book",
              icon_color: palette.blue
            },
            {
              name: "Nyaa",
              url: "https://nyaa.si/",
              icon: "download",
              icon_color: palette.sky
            }
          ]
        },
        {
          name: "art/pictures",
          links: [
            {
              name: "Danbooru",
              url: "http://danbooru.donmai.us/",
              icon: "photo-square-rounded",
              icon_color: palette.peach
            },
            {
              name: "Gelbooru",
              url: "https://gelbooru.com/",
              icon: "photo",
              icon_color: palette.blue
            },
            {
              name: "Imgur",
              url: "https://imgur.com/",
              icon: "camera-selfie",
              icon_color: palette.green
            },
            {
              name: "Pixiv",
              url: "https://www.pixiv.net/",
              icon: "brush",
              icon_color: palette.blue
            },
            {
              name: "pixivFANBOX",
              url: "https://www.fanbox.cc/",
              icon: "box",
              icon_color: palette.yellow
            },
            {
              name: "Sakugabooru",
              url: "https://sakugabooru.com/",
              icon: "bounce-right",
              icon_color: palette.red
            },
            {
              name: "Yande.re",
              url: "https://yande.re/post",
              icon: "photo-pentagon",
              icon_color: palette.pink
            },
            {
              name: "Zerochan",
              url: "https://www.zerochan.net/",
              icon: "photo-hexagon",
              icon_color: palette.peach
            }
          ]
        },
        {
          name: "college/dev",
          links: [
            {
              name: "E-Campus",
              url: "https://ecampus.usfx.bo/my/",
              icon: "school",
              icon_color: palette.blue
            },
            {
              name: "GitHub",
              url: "https://github.com/",
              icon: "code",
              icon_color: palette.overlay2
            },
            {
              name: "GitLab",
              url: "https://gitlab.com/",
              icon: "terminal",
              icon_color: palette.peach
            },
            {
              name: "Kaggle",
              url: "https://www.kaggle.com/",
              icon: "chart-line",
              icon_color: palette.sky
            },
            {
              name: "Spring Initializr",
              url: "https://start.spring.io/",
              icon: "code-plus",
              icon_color: palette.green
            },
            {
              name: "Suniver",
              url: "https://si2.usfx.bo/suniver/web/",
              icon: "clipboard-list",
              icon_color: palette.peach
            }
          ]
        }
      ]
    },
    {
      name: "d - s",
      background_url: "src/img/banners/bg-2.png",
      categories: [
        {
          name: "dictionaries",
          links: [
            {
              name: "Cambridge Dictionary",
              url: "https://dictionary.cambridge.org/",
              icon: "book-2",
              icon_color: palette.peach
            },
            {
              name: "Cube Pronunciation Dictionary",
              url: "https://www.cubedictionary.org/",
              icon: "speakerphone",
              icon_color: palette.blue
            },
            {
              name: "Diccionario de americanismos",
              url: "https://www.asale.org/damer/",
              icon: "globe",
              icon_color: palette.maroon
            },
            {
              name: "Diccionario panhispánico de dudas",
              url: "https://www.rae.es/dpd/",
              icon: "help-circle",
              icon_color: palette.text
            },
            {
              name: "Dictionary.com",
              url: "https://www.dictionary.com/",
              icon: "text-recognition",
              icon_color: palette.blue
            },
            {
              name: "Diccionario de la lengua española",
              url: "https://dle.rae.es/?w=diccionario",
              icon: "book",
              icon_color: palette.yellow
            },
            {
              name: "Merriam-Webster Dictionary",
              url: "https://www.merriam-webster.com/",
              icon: "vocabulary",
              icon_color: palette.text
            },
            {
              name: "Wordnik",
              url: "https://www.wordnik.com/",
              icon: "align-left",
              icon_color: palette.peach
            }
          ]
        },
        {
          name: "music",
          links: [
            {
              name: "AnimeThemes",
              url: "https://animethemes.moe/",
              icon: "microphone-2",
              icon_color: palette.overlay2
            },
            {
              name: "AniPlaylist",
              url: "https://aniplaylist.com/",
              icon: "playlist",
              icon_color: palette.green
            },
            {
              name: "JPopsuki",
              url: "https://jpopsuki.eu/index.php",
              icon: "music-down",
              icon_color: palette.sky
            },
            {
              name: "Last.fm",
              url: "https://www.last.fm/",
              icon: "radio",
              icon_color: palette.red
            },
            {
              name: "Spotify",
              url: "https://open.spotify.com/",
              icon: "headphones",
              icon_color: palette.green
            }
          ]
        },
        {
          name: "social media",
          links: [
            {
              name: "Bluesky",
              url: "https://bsky.app/",
              icon: "butterfly",
              icon_color: palette.blue
            },
            {
              name: "Twitter",
              url: "https://x.com/",
              icon: "feather",
              icon_color: palette.sky
            }
          ]
        }
      ]
    },
    {
      name: "s - z",
      background_url: "src/img/banners/bg-3.png",
      categories: [
        {
          name: "translators",
          links: [
            {
              name: "DeepL Translate",
              url: "https://www.deepl.com/translator",
              icon: "language-hiragana",
              icon_color: palette.overlay2
            },
            {
              name: "Google Translate",
              url: "https://translate.google.com/",
              icon: "language-katakana",
              icon_color: palette.blue
            },
            {
              name: "Lingva Translate",
              url: "https://lingva.ml/",
              icon: "language",
              icon_color: palette.green
            }
          ]
        },
        {
          name: "videogames",
          links: [
            {
              name: "Backloggd",
              url: "https://www.backloggd.com/",
              icon: "list",
              icon_color: palette.overlay2
            },
            {
              name: "GOG",
              url: "https://www.gog.com/",
              icon: "disc",
              icon_color: palette.yellow
            },
            {
              name: "Humble Bundle",
              url: "https://www.humblebundle.com/",
              icon: "gift",
              icon_color: palette.red
            },
            {
              name: "itch.io",
              url: "https://itch.io/",
              icon: "file",
              icon_color: palette.maroon
            },
            {
              name: "PlayStation Network",
              url: "https://www.playstation.com/en-us/playstation-network/",
              icon: "device-gamepad-2",
              icon_color: palette.blue
            },
            {
              name: "Steam",
              url: "https://steamcommunity.com/",
              icon: "steam",
              icon_color: palette.overlay2
            },
            {
              name: "Vimm's Lair",
              url: "https://vimm.net/",
              icon: "device-gamepad",
              icon_color: palette.red
            }
          ]
        },
        {
          name: "video/streaming",
          links: [
            {
              name: "Twitch",
              url: "https://www.twitch.tv/",
              icon: "device-computer-camera",
              icon_color: palette.mauve
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com/feed/subscriptions",
              icon: "player-play",
              icon_color: palette.red
            }
          ]
        }
      ]
    },
    {
      name: "Mi sc.",
      background_url: "src/img/banners/bg-4.png",
      categories: [
        {
          name: "Others",
          links: [
            {
              name: "1337x.to",
              url: "https://www.1337x.to/",
              icon: "download",
              icon_color: palette.red
            },
            {
              name: "ChatGPT",
              url: "https://chat.openai.com/",
              icon: "message",
              icon_color: palette.overlay2
            },
            {
              name: "Chromium",
              url: "https://chromium.woolyss.com/",
              icon: "world",
              icon_color: palette.blue
            },
            {
              name: "Claude",
              url: "https://claude.ai/chats",
              icon: "brain",
              icon_color: palette.green
            },
            {
              name: "ExHentai.org",
              url: "https://exhentai.org/",
              icon: "library-photo",
              icon_color: palette.red
            },
            {
              name: "Gravatar",
              url: "https://en.gravatar.com/",
              icon: "user-circle",
              icon_color: palette.blue
            },
            {
              name: "hanime.tv",
              url: "https://hanime.tv/",
              icon: "movie",
              icon_color: palette.overlay2
            },
            {
              name: "i2ocr",
              url: "http://www.i2ocr.com/free-online-japanese-ocr",
              icon: "text-recognition",
              icon_color: palette.blue
            },
            {
              name: "Japanese ASMR",
              url: "https://japaneseasmr.com/",
              icon: "ear",
              icon_color: palette.text
            },
            {
              name: "nhentai",
              url: "https://nhentai.net/",
              icon: "tags",
              icon_color: palette.red
            },
            {
              name: "pCloud",
              url: "https://www.pcloud.com/",
              icon: "cloud",
              icon_color: palette.green
            },
            {
              name: "Raindrop",
              url: "https://app.raindrop.io/",
              icon: "droplet",
              icon_color: palette.blue
            },
            {
              name: "Wikipedia",
              url: "https://en.wikipedia.org/wiki/Main_Page",
              icon: "book",
              icon_color: palette.text
            },
            {
              name: "Zorin OS",
              url: "https://zorin.com/os/",
              icon: "device-desktop",
              icon_color: palette.blue
            }
          ]
        },
      ]
    }
  ]
};

const CONFIG = new Config(default_config, palette);

console.log("CONFIG object:", CONFIG);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
