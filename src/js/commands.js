function google(cmd) {
    if (cmd != "google") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://www.google.com/search?q=" + str);
    } else {
        window.open("https://www.google.com");
    }
}

function youtube(cmd) {
    if (cmd != "youtube") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://www.youtube.com/results?search_query=" + str);
    } else {
        window.open("https://www.youtube.com/");
    }
}

function gmail(cmd) {
    if (cmd != "gmail") {
        window.open("https://mail.google.com/mail/u/" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://mail.google.com");
    }
}


function gdocs(cmd) {
    if (cmd != "gdocs") {
        window.open("https://docs.google.com/document/u/0" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/");
    }
}

function gsheets(cmd) {
    if (cmd != "gsheets") {
        window.open("https://docs.google.com/spreadsheets/u/0" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/spreadsheets/");
    }
}

function gslides(cmd) {
    if (cmd != "gslides") {
        window.open("https://docs.google.com/presentation/u/0" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/presentation/");
    }
}

function gforms(cmd) {
    if (cmd != "gforms") {
        window.open("https://docs.google.com/forms/u/0" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/forms/");
    }
}

googledrive=gdrive
function gdrive(cmd) {
    if (cmd != "gdrive") {
        window.open("https://drive.google.com/drive/u/0" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://drive.google.com/");
    }
}

function wikipedia(cmd) {
    if (cmd != "wikipedia") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://wikipedia.org/w/index.php?search=" + str);
    } else {
        window.open("https://wikipedia.org");
    }
}

function discord(cmd) {
    if (cmd != "discord") {
        window.open("discord://" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("discord://");
    }
}

function stackoverflow(cmd) {
    if (cmd != "stackoverflow") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://stackoverflow.com/search?q=" + str);
    } else {
        window.open("https://stackoverflow.com/");
    }
}

function github(cmd) {
    if (cmd != "github") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://github.com/search?q=" + str);
    } else {
        window.open("https://github.com/");
    }
}

gt=googletranslate
function googletranslate(cmd) {
    if (cmd != "googletranslate") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://translate.google.com/?sl=auto&tl=en&text=" + str + "&op=translate");
    } else {
        window.open("https://translate.google.com/");
    }
}

gmaps=googlemaps
function googlemaps(cmd) {
    if (cmd != "googlemaps") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://www.google.by/maps/search/" + str);
    } else {
        window.open("https://www.google.by/maps/");
    }
}

function twitch(cmd) {
    if (cmd != "twitch") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://www.twitch.tv/search?term=" + str);
    } else {
        window.open("https://twitch.tv/");
    }
}

function imdb(cmd) {
    if (cmd != "imdb") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://www.imdb.com/find?q=" + str);
    } else {
        window.open("https://imdb.com/");
    }
}

function spotify(cmd) {
    if (cmd != "spotify") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "%20" + parameters[i];
        }
        window.open("https://open.spotify.com/search/" + str);
    } else {
        window.open("https://open.spotify.com/");
    }
}

function deezer(cmd) {
    if (cmd != "deezer") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "%20" + parameters[i];
        }
        window.open("https://www.deezer.com/search/" + str);
    } else {
        window.open("https://www.deezer.com/");
    }
}

function amazon(cmd) {
    if (cmd != "amazon") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "%20" + parameters[i];
        }
        window.open("https://amazon.com/s?k=" + str);
    } else {
        window.open("https://amazon.com");
    }
}

function code(cmd) {
    if (cmd != "code") {
        window.open("vscode://" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("vscode://");
    }
}

function reddit(cmd) {
    if (cmd != "reddit") {
        window.open("https://www.reddit.com/r/" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://www.reddit.com/");
    }
}

cls=clear
function clear(cmd) {
    document.getElementById('wrapper').innerHTML = "";
}

function echo(cmd) {
    block_log(cmd.split(" ").slice(1).join(" "))
}
