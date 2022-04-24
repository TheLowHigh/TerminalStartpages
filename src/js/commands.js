import { clearTerm, date, ls, exit, echo, colorscheme } from "./functions.js";

export const COMMANDS = {
  Google: {
    commandAliases: ["google"],
    url: "https://www.google.com/",
    path: "search",
    queryName: "q",
  },
  DuckDuckGo: {
    commandAliases: ["duckduckgo", "ddg"],
    url: "https://duckduckgo.com/",
    queryName: "q",
  },
  YouTube: {
    commandAliases: ["youtube", "yt"],
    url: "https://youtube.com/",
    path: "search",
    queryName: "search_query",
  },
  GitHub: {
    commandAliases: ["github", "gh"],
    url: "https://github.com/",
    queryName: "q",
  },
  Twitch: {
    commandAliases: ["twitch"],
    url: "https://www.twitch.tv/",
    path: "search",
    queryName: "term",
  },
  IMDb: {
    commandAliases: ["imdb"],
    url: "https://www.imdb.com/",
    path: "find",
    queryName: "q",
  },
  Spotify: {
    commandAliases: ["spotify"],
    url: "https://open.spotify.com/",
    path: "search",
    spaceCharacter: "%20",
  },
  Deezer: {
    commandAliases: ["deezer"],
    url: "https://www.deezer.com/",
    path: "search",
    spaceCharacter: "%20",
  },
  Reddit: {
    commandAliases: ["reddit"],
    url: "https://www.reddit.com/",
    path: "r",
  },
  Wikipedia: {
    commandAliases: ["wikipedia", "wkp"],
    url: "https://wikipedia.org/",
    path: "wiki",
    spaceCharacter: "_",
  },
  Clear: {
    commandAliases: ["clear", "cls"],
    action: clearTerm,
  },
  Date: {
    commandAliases: ["date", "time"],
    action: date,
  },
  ListCommands: {
    commandAliases: ["ls", "dir"],
    action: ls,
  },
  ClosePage: {
    commandAliases: ["exit"],
    action: exit,
  },
  Echo: {
    commandAliases: ["echo"],
    action: echo,
  },
  Theme: {
    commandAliases: ["theme", "colorscheme"],
    action: colorscheme,
  }
};
