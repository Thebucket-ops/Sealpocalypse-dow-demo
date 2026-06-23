export class Enemy{
    constructor(game){
        this.game=game;
        this.width=40;
        this.height=30;
        this.x=0;
        this.y=0;
        this.image=document.getElementById('player')
        //Change the id up HERE when i get the model
        this.speed=0;
        this.vspeed=0;
        this.basespeed=1;
        this.acceleration=0;

        this.fps=60;
        this.frameInterval=1000/this.fps;
        this.frameTimer=0;
    }
    update(){
        this.x+=this.basespeed
        this.y+=this.basespeed
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    }
}

//Todo: move sttributes to subclasses
// e.g. class groundenemy extends Enemy(){}
//assign to it all variables relating speed and frame sel
//to do so use super to have access to modify copied values
//make a timer to spawn all seals at defined intervals
//make them spawn at random locations outside the screenS