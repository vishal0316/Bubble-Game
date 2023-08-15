
    var timer = 2;
    var score = 0;
    var hitrn = 0;

    function increaseScore(){
        score += 5;
        document.querySelector("#scoreval").textContent = score;
    }


    function NewHit(){
         hitrn = Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent = hitrn;
    }

    function makeBubble() {
        var clutter = "";

        for (var i = 1; i <= 168; i++) {
            var rn = Math.floor(Math.random() * 10)
            clutter += `<div class="bubble">${rn}</div>`;
        }

        document.querySelector(".pbtm").innerHTML = clutter;
    }

    function runTimer() {
        var timerint = setInterval(function() {
            if (timer > 0) {
                timer--;
                document.querySelector("#timerval").textContent = timer;
            } else {
                clearInterval(timerint);
                document.querySelector(".pbtm").innerHTML = `<h1> Game Over </h1>`;
            }
        }, 1000);
    }

    document.querySelector(".pbtm")
    .addEventListener("click", function (detail) {
        var clickednum = Number(detail.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            NewHit();
        }
    });

    runTimer();
    makeBubble();
    NewHit();
    increaseScore();
    
