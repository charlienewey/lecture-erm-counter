function read() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("counter_box").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "count.php?q=-1", true);
    xmlhttp.send();
}

function update() {
    window.setInterval("read()", 1000);
}

function add() {
    var xmlhttp;
    var num;

    num = parseInt(document.getElementById("counter_box").innerHTML);

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("counter_box").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "count.php?q=" + num, true);
    xmlhttp.send();
}

