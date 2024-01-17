"use strict";
const canvas=document.getElementById("canvas");
canvas.width=1700; 
canvas.height=820;
const ctx=canvas.getContext("2d");

let stars=[] //array-we will fill this later on
const numberOfStars=1000;
let color1="";

class Star{
    constructor(x,y,color,speed,size){
        this.x=x; //x is both paramter and property.
        this.y=y; //"this.y" is variable
        this.color=color;
        this.size=size;
        this.speed=speed;

    }
}

//Generating random numbers including and points
function randomNumbers(start,end){
    return (start+ Math.floor(Math.random()*(end-start+1)));

}

//InitStars will generate all the star properties and store them in array.
function InitStars(){
    for(let i=0;i<numberOfStars;i++){
        let x=randomNumbers(0,canvas.width);
        let y=randomNumbers(0,canvas.height);
        let color=randomNumbers(100,255); //Number
        let size=randomNumbers(1,10);
        let speed=randomNumbers(1,10)*0.5;
        //Converting number to string
        color1=`rgb(${color-100},${color-50},${color})`;
        stars[i]=new Star(x,y,color1,speed,size);

    }
}
InitStars(); //100 stars are created and stored inside the array"star""
console.log(stars);

//Drawing stars
function drawStars() {
    for(let i=0;i<numberOfStars;i++){
        ctx.fillStyle=stars[i].color;
        ctx.beginPath();
        ctx.arc(stars[i].x,stars[i].y,stars[i].size,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
}
}

//Moving the stars
function moveStars(){
    for(let i=0;i<numberOfStars;i++) {
        stars[i].y+=stars[i].speed;

        if(stars[i].y>=canvas.height) stars[i].y=-stars[i].speed;
    }
}

function GameUpdate() {
    // EMDI-Erase.Move the Objects, Draw Objects, Infinite Loop
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //Moving the stars
    moveStars();

    //Drawing the stars
    drawStars();

    //Infinite loop
    requestAnimationFrame(function(){
        setTimeout(GameUpdate,5);
    });



}
GameUpdate();