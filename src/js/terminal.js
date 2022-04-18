config = {
  shellPrompt: "$ ",
};

document.getElementById("input_title").innerText = config.shellPrompt;
document.getElementById("input_source").addEventListener("keyup", handleKeyUp);

var current_block;

function new_block() {
  current_block = document.createElement("div");
  current_block.classList.add("log");
  document.getElementById("wrapper").appendChild(current_block);
}

function block_log(message, shell = false) {
  current_block.innerHTML = `<p class=${shell && "shell"}>` + message + "</p>";
  new_block();
}

function handleKeyUp() {
  if (event.keyCode === 13) submit_command();
  if (event.keyCode === 38) last_command();
}

function submit_command() {
  var command = document.getElementById("input_source").value;
  document.getElementById("input_source").value = "";

  new_block();

  if (typeof window[command.split(" ")[0]] === "function") {
    block_log(config.shellPrompt + command, (shell = true));
    window[command.split(" ")[0]](command);
  } else if (command != "") {
    block_log("command not found : " + command);
  }
}

function last_command() {
  const shellCommands = document.getElementsByClassName("shell");
  document.getElementById("input_source").value =
    shellCommands[shellCommands.length - 1].innerText.substr(2);
}

