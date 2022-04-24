import { COMMANDS } from "./commands.js";

const config = {
  shellPrompt: "$ ",
};

const restoreTheme = () => {
  let colorscheme = JSON.parse(localStorage.getItem("colorscheme"));
  if (!colorscheme) { colorscheme = ["default"]}
  document.body.classList = colorscheme;
}

document.getElementById("input_title").innerText = config.shellPrompt;
document.getElementById("input_source").addEventListener("keyup", handleKeyUp);
window.addEventListener("load", restoreTheme);

var current_block;

function new_block() {
  current_block = document.createElement("div");
  current_block.classList.add("log");
  document.getElementById("wrapper").appendChild(current_block);
}

export const block_log = (message) => {
  current_block.innerHTML = `<p>` + message + "</p>";
  new_block();
};

function handleKeyUp() {
  if (event.keyCode === 13) submit_command();
  //if (event.keyCode === 38) last_command();
}

function submit_command() {
  const input = document.getElementById("input_source").value;
  const inputArray = input.split(" ");
  const command = inputArray.shift();

  document.getElementById("input_source").value = "";

  new_block();

  for (let com in COMMANDS) {
    for (let alias of COMMANDS[com].commandAliases) {
      if (command.split(" ")[0].toLowerCase() === alias.toLowerCase()) {
        if (COMMANDS[com].action) {
          COMMANDS[com].action(input);
          return;
        }

        if (inputArray.length === 0) {
          window.open(COMMANDS[com].url);
          return;
        }
        const URL = generateURL(
          COMMANDS[com].url,
          COMMANDS[com].path || "",
          COMMANDS[com].queryName,
          COMMANDS[com].spaceCharacter || "+",
          inputArray
        );
        block_log(config.shellPrompt + input);
        window.open(URL);
        return;
      }
    }
  }
  block_log("command not found : " + command);
}

const generateURL = (url, path, qName, space, cmd) => {
  return `${url}${path}${qName ? "?" + qName + "=" : "/"}${cmd.join(space)}`;
};
