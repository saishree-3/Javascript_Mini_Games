var result = document.querySelector('#res');
var y = document.getElementById("ys");
var c = document.getElementById("cs");
var d = document.getElementById("draw");
var cCt = 0;
var yCt = 0;

function chck(i) {
    var hum = i;
    var a = Math.floor(Math.random() * 3);
    var arr = ['r', 'p', 's'];
    arr.forEach(ele => document.getElementById(ele).style.boxShadow = "none");

    document.getElementById(arr[a]).style.boxShadow = "0px 10px 50px red";
    document.getElementById(hum).style.boxShadow = "0px 10px 50px blue";
    console.log(arr[a]);
    console.log(hum);
    if (hum == arr[a]) {
        y.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "visible";
        document.getElementById(hum).style.boxShadow = "0px 10px 50px yellow";
    } else if ((hum == 'r' && arr[a] == 'p') || (hum == 'p' && arr[a] == 's') || (hum == 's' && arr[a] == 'r')) {
        y.style.visibility = "visible";
        c.style.visibility = "visible";
        d.style.visibility = "hidden";
        cCt++;
        c.innerHTML = "Computer Score: " + cCt;
        if (cCt == 5) {
            result.innerHTML = "Computer Won!"
            setTimeout(location.reload.bind(location), 10000);
        }


    } else if ((hum == 'r' && arr[a] == 's') || (hum == 'p' && arr[a] == 'r') || (hum == 's' && arr[a] == 'p')) {
        y.style.visibility = "visible";
        c.style.visibility = "visible";
        d.style.visibility = "hidden";
        yCt++;
        y.innerHTML = "Your Score: " + yCt;
        if (yCt == 5) {
            result.innerHTML = "Hooray! You Won!"
            setTimeout(location.reload.bind(location), 10000);
        }

    }


}