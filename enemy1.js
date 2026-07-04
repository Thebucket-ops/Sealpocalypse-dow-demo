import { Player } from "./player.js";

class Enemy{
    constructor(game){
       
        
        //Change the id up HERE when i get the model
    
        this.frameX=0;
        this.frameY=0;
        this.fps=60;
        this.frameInterval=1000/this.fps;
        this.frameTimer=0;
    }
    update(deltaTime){
        

        if(this.frameTimer>this.frameInterval){
            this.frameTimer=0;
            //  if(this.frameX< this.frameY) this.frameX++;  //frame timer
            this.x+=this.xspeed;
            this.y+=this.vspeed;
            
        
        }else{
            this.frameTimer+=deltaTime;
        }
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    }
}

//remember to import them
export class baseSeal extends Enemy{
    constructor(game){
        super();
        this.game=game;
        this.width=40;
        this.height=30;

        this.x=0;
        this.y=0;


        this.basespeed=2;


        
     

        this.acceleration=0;

        this.image=document.getElementById('player')

    }
    update(deltaTime){

        super.update(deltaTime);
        
        if (this.x<this.game.player.x){
            this.xspeed= this.basespeed;
        }else if(this.x == this.game.player.x){
            this.xspeed=0;
        }else{
            this.xspeed= -this.basespeed;
        }
        
        if (this.y<this.game.player.y){
            this.vspeed= this.basespeed;
        }else if(this.y == this.game.player.y){
            this.vspeed=0;
        }else{
            this.vspeed= -this.basespeed;
        }

        
    }
}

//Todo: move sttributes to subclasses
// e.g. class groundenemy extends Enemy(){}
//assign to it all variables relating speed and frame sel
//to do so use super to have access to modify copied values
//make a timer to spawn all seals at defined intervals
//make them spawn at random locations outside the screenS