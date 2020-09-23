document.addEventListener('DOMContentLoaded', () => {
    var cardArray = [{
            name: 'cake',
            src: "images/cake.png"
        },
        {
            name: 'cake',
            src: "images/cake.png"
        },
        {
            name: 'chck',
            src: "images/chck.png"
        },
        {
            name: 'chck',
            src: "images/chck.png"
        },
        {
            name: 'don',
            src: "images/don.jpg"
        },
        {
            name: 'don',
            src: "images/don.jpg"
        },
        {
            name: 'fing',
            src: "images/fing.jpg"
        },
        {
            name: 'fing',
            src: "images/fing.jpg"
        },
        {
            name: 'san',
            src: "images/san.png"
        },

        {
            name: 'san',
            src: "images/san.png"
        },

        {
            name: 'piz',
            src: "images/piz.png"
        },

        {
            name: 'piz',
            src: "images/piz.png"
        },
        {
            name: 'ice',
            src: "images/ice.png"
        },
        {
            name: 'ice',
            src: "images/ice.png"
        },
        {
            name: 'nn',
            src: "images/nn.jpg"
        },
        {
            name: 'nn',
            src: "images/nn.jpg"
        },


    ];

    cardArray.sort(() => 0.5 - Math.random());

    var cardsChosen = [];
    var cardsChosenId = [];


    const d = document.querySelector('.grid');
    var res = document.getElementById('h');
    var s = 0;

    //creating the board
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var j = document.createElement('img');
            j.setAttribute('src', 'images/bu.png');
            j.setAttribute('id', i);
            j.addEventListener('click', flipCard);
            d.appendChild(j);
        }
    }

    createBoard();

    function flipCard() {
        var cid = this.getAttribute('id');
        cardsChosen.push(cardArray[cid].name);
        cardsChosenId.push(cid);

        this.setAttribute('src', cardArray[cid].src);
        if (cardsChosen.length == 2) {
            setTimeout(checkWin, 1000);
        }
    }

    function checkWin() {
        var tiles = document.querySelectorAll('img');
        console.log(tiles);
        var one = cardsChosenId[0];
        var two = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            s++;
            tiles[one].src = 'images/ss.jpg';
            tiles[two].setAttribute('src', 'images/ss.jpg');
            cardsChosen = [];
            cardsChosenId = [];
            res.innerHTML = "Score: " + s;

            if (s === cardArray.length / 2) {

                res.innerHTML = "Hurray You WON!";
            }

        } else {


            tiles[one].setAttribute('src', 'images/bu.png');
            tiles[two].setAttribute('src', 'images/bu.png');
            cardsChosen = [];
            cardsChosenId = [];
        }
    }

})