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
        
        this.x+=this.xspeed;
        this.y+=this.vspeed;

    //     if(this.frameTimer>this.frameInterval){
    //         this.frameTimer=0;
    //         if(this.frameX< this.frameY) this.frameX++;  //frame timer
    //         else this.frameX=0;
    //     }else{
    //         this.frameTimer+=deltaTime;
    //     }
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

        this.xspeed=2;
        this.vspeed=2;
        this.basespeed=1;
        this.acceleration=0;

        this.image=document.getElementById('player')

    }
    update(deltaTime){
        super.update(deltaTime);
    }
}

//Todo: move sttributes to subclasses
// e.g. class groundenemy extends Enemy(){}
//assign to it all variables relating speed and frame sel
//to do so use super to have access to modify copied values
//make a timer to spawn all seals at defined intervals
//make them spawn at random locations outside the screenS