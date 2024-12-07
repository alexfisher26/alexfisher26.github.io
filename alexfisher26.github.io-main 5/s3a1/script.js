function toggle() {
    var text = document.getElementById("introtext");
    text.style.opacity = '1.0';
    //document.getElementById("introtext").innerHTML = "The Murder Mansion, on a stormy night, has become the stage for a mystery. Maggie Foster, a young heiress, has found a bloodstained handkerchief and an ominous note suggesting betrayal. Each of the characters has a potential motive, and through clues and accusations, the real culprit may come to light.";
    var button = document.getElementById("start");
    var nextbutton = document.getElementById("nextbutton");
    button.style.opacity = '0';
    nextbutton.classList.add("fadein");
    nextbutton.style.display = 'block';
}

let index = 1;
show(index);

// Next/previous controls
function plus(n) {
    show(index += n);
}

// Thumbnail image controls
function currentChar(n) {
  show(index = n);
}

function show(n) {
    let i;
    let chars = document.getElementsByClassName("character");
    var arrow = document.getElementById("arrow");
    arrow.style.display = 'flex';

    if (n > chars.length) {
        var box = document.getElementsByClassName("box");
        box[0].style.display = 'none';
        var replay = document.getElementById("replay");
        replay.style.display = 'block';
    }

    if (n > chars.length) {
        index = chars.length;
    }

    if (n < 1) {
        index = chars.length;
    }

    for (i = 0; i < chars.length; i++) {
        chars[i].style.display = "none";
    }

    chars[index-1].style.display = "flex";

    if (index >= 6) {
        var heading = document.getElementById("cast");
        heading.style.display = 'none';
        var story = document.getElementById("story");
        story.style.display = 'flex';
    }

    if (index == 42) {
        arrow.style.display = 'none';
    }

    if (index == 43 || index == 44 || index == 45) {
        index = 45;
    }
}

function showChars() {
    var introtext = document.getElementById("introtext");
    var text = document.getElementById("hidden");
    var button = document.getElementById("start");
    var nextbutton = document.getElementById("nextbutton");
    button.style.display = 'none';
    nextbutton.style.display = 'none';
    introtext.style.display = 'none';
    text.style.display = 'flex';
}

function chooseElena() {
    index = 43;
    show(43);
}

function chooseLiam() {
    index = 44;
    show(44);
}

function chooseArthur() {
    index = 45;
    show(45);
}