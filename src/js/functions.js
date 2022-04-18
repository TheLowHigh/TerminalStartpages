import { block_log } from "./terminal.js";
import { COMMANDS } from "./commands.js";

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
  block_log(inputArray);
};
