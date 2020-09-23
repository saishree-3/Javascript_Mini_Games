var pt = document.getElementById("pturn");
var ct = 0;
var chckArr = [];
var iArr = [];

function game(i) {
    ct++;
    var t = i;
    chckArr.push(t.id);
    if (ct % 2 != 0) {
        pt.innerHTML = "Player-2's turn";
        t.innerHTML = "<img src='images/o.png'>";
        iArr.push(t.id + 'o');
        checkWin();
    } else {
        pt.innerHTML = "Player-1's turn";
        t.innerHTML = "<img src='images/x.png'>";
        iArr.push(t.id + 'x');
        checkWin();
    }
}

function checkWin() {
    if (chckArr.length == 9) {
        pt.innerHTML = "Draw!";
        setTimeout(location.reload.bind(location), 5000);
    } else {
        var a = [
            [11, 12, 13],
            [21, 22, 23],
            [31, 32, 33],
            [11, 22, 33],
            [13, 22, 31],
            [11, 21, 31],
            [12, 22, 32],
            [13, 23, 33]
        ];

        for (let i = 0; i < a.length; i++) {
            var win = 0;
            var o = 0;
            var x = 0;
            for (let k = 0; k < 3; k++) {
                for (let j = 0; j < chckArr.length; j++) {
                    if (a[i][k] == chckArr[j]) {
                        win++;
                        if (iArr[j].endsWith('o')) {
                            o++;
                        } else {
                            x++;
                        }

                    }

                    if ((win == 3) && (o == 3)) {
                        pt.innerHTML = "Player-1 Wins!";
                        setTimeout(location.reload.bind(location), 5000);
                    } else if ((win == 3) && (x == 3)) {
                        pt.innerHTML = "Player-2 Wins!";
                        setTimeout(location.reload.bind(location), 5000);
                    }


                }
            }
        }
    }
}