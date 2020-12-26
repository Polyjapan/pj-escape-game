/** Functions for the notebook **/
function toggle_notebook() {
    var x = document.getElementById("notebook");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        // Display first tab if none is displayed
        var leftPanels = document.querySelectorAll("#notebook .left .panel");
        var displayed = false;
        for (i=0;i<leftPanels.length;i++) {
            if (leftPanels[i].style.display === "block") {
                displayed = true;
            }
        }
        if (!displayed) {
            showPanel(0);
        }
    } else {
        console.log(x.style.display);
        x.style.display = "none";
    }
}

function showPanel(index) {
    var buttons = document.querySelectorAll("#notebook .right .bookmark button");
    var leftPanels = document.querySelectorAll("#notebook .left .panel");
    var rightPanels = document.querySelectorAll("#notebook .right .panel");
    leftPanels.forEach(function(node) {
        node.style.display = "none";
        node.style.backgroundColor = "";
    });
    rightPanels.forEach(function(node) {
        node.style.display = "none";
        node.style.backgroundColor = "";
    });
    buttons.forEach(function(node) {
        node.style.borderBottom = "1px solid";
        node.style.backgroundColor = "";
    });

    leftPanels[index].style.display = "block";
    rightPanels[index].style.display = "block";
    buttons[index].style.borderBottom = "none";
    // Change background color
    leftPanels[index].style.backgroundColor = "#eaeaea";
    rightPanels[index].style.backgroundColor = "#eaeaea";
    buttons[index].style.backgroundColor = "#eaeaea";
}

