let pilka = document.querySelector('.pilka');
let kwadrat = document.querySelector('.kwadrat');
let output = document.querySelector('.output');
let x = 0;
let y = 0;
let dziura = document.querySelector('.dziurka');
let startTime = Date.now();


function przegrana() {
    let timepassed = (new Date(Date.now()-startTime)).toLocaleString().split(" ")[1].split(":");
    alert("przegrales  czas: "+ timepassed[1]+":"+timepassed[2]);
    
    ballTop = 290;
    ballLeft = 290;
    startTime = Date.now(); 
    dziura.style.left = Math.random()*580 +"px";
    dziura.style.top = Math.random()*580 +"px";
}

window.addEventListener("deviceorientation", (e) => {
    x = e.beta;  // -180, 180
    y = e.gamma;  // -90, 90
}); 

let ballTop = 290;
let ballLeft = 290; 

setInterval(function(){
    if( ballTop + x/4 >= 0){
        ballTop += x/4;
    }else{
        ballTop = 0;
        przegrana();

    } 
    // blokada dla gornej krawedzi

    if( ballTop + x/4 <= 580 ){
        ballTop += x/4;
    }else{
        ballTop = 580;
        przegrana();
    }
     // blokada dla dolnej krawedzi 

    pilka.style.top = ballTop + "px"; //przypisanie zmienionej wartosci


    if(ballLeft + y/4 <= 580 ){
        ballLeft+= y/4;
    } else{
        ballLeft = 580;
        przegrana();
    } // blokada prawej krawedzi

    
    if(ballLeft + y/4 >=0 ){
        ballLeft+= y/4;
    } else{
        ballLeft = 0;
        przegrana();
    } // blokada lewej krawedzi

    pilka.style.left = ballLeft + "px";

    let a = ballLeft + 10 - Number(getComputedStyle(document.querySelector(".dziurka"))["left"].split("px")[0]) - 15;
    let b = ballTop + 10 - Number(getComputedStyle(document.querySelector(".dziurka"))["top"].split("px")[0]) - 15;
    let distance = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    if (distance < 10){
        let timepassed = (new Date(Date.now()-startTime)).toLocaleString().split(" ")[1].split(":");
        alert("wygrales  czas: "+ timepassed[1]+":"+timepassed[2]);
        ballTop = 290;
        ballLeft = 290; 
        startTime = Date.now();
        dziura.style.left = Math.random()*580 +"px";
        dziura.style.top = Math.random()*580 +"px";

    }


},20)

dziura.style.left = Math.random()*580 +"px";
dziura.style.top = Math.random()*580 +"px";








