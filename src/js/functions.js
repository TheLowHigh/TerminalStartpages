import { block_log } from "./terminal.js";
import { COMMANDS } from "./commands.js";

const COLORSCHEMES = ["default", "gruvbox_dark", "gruvbox_light", "nord", "xerocherry_light", "xerocherry_dark", "catppuccin", "solarized_dark", "solarized_light", "vscode", "monokai", "dracula", "onedark"];

export const clearTerm = () => {
  document.getElementById("wrapper").innerHTML = "";
};

export const date = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const Day = days[date.getDay()];
  const Date_ = date.getDate();
  const Month = months[date.getMonth()];
  const Year = date.getFullYear();

  const Hour = ("0" + date.getHours()).substr(-2);
  const Minutes = ("0" + date.getMinutes()).substr(-2);
  const Seconds = ("0" + date.getSeconds()).substr(-2);

  block_log(`${Day}, ${Date_} ${Month} ${Year}, ${Hour}:${Minutes}:${Seconds}`);
};

export const ls = () => {
  for (let com in COMMANDS) {
    block_log(" - " + COMMANDS[com].commandAliases.join(" | "));
  }
};

export const exit = () => {
  window.close();
};

export const echo = (input) => {
  block_log(input);
  const inputArray = input.split(" ");
  inputArray.shift();
  block_log(inputArray.join(" "));
};

export const colorscheme = (input) => {
  block_log(input)  
  const inputArray = input.split(" ");
  if (inputArray.length === 1) {
    for ( let theme of COLORSCHEMES) {
      block_log(theme)
    }
    return
  }
  inputArray.shift();
  if (COLORSCHEMES.includes(inputArray[0])) {
    localStorage.setItem("colorscheme", JSON.stringify(inputArray));
    document.body.classList = [inputArray];
    return
  }
  block_log(`Error: "${inputArray}" is not defined consider implementing it your self, or submit it in a pull request.`)  
}
