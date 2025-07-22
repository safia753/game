var model1 = document.getElementById("model1");
var speed = 5;
var flag = false;
var flag2 = false;
function model(takeOrder) {
    if (takeOrder === "forward") {
        speed += 5;
        model1.style.left = speed + "px"
        if (!flag) {
            flag2 = false;
            model1.src = 'https://fightersgeneration.com/characters/ashrun.gif';
        }
        flag = true;
    } else if (takeOrder === "backward") {
        flag = false;
        speed += -5;
        model1.style.left = speed + "px";
        if (!flag2) {
            model1.src = 'https://fightersgeneration.com/characters/ash-walk.gif';
        }
        flag2 = true;
    }
}

function earthQuake(event) {
    console.log(event.key);
    if (event.key === "ArrowRight") {
        model("forward");
    } else if (event.key === "ArrowLeft") {
        model("backward");
    }
}

window.addEventListener("keydown", earthQuake);