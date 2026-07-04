console.log("sup mah fellas");

import { Player } from './player.js'
import { inputMaster } from './input.js'
import { baseSeal } from './enemy1.js'

window.addEventListener('load',function(){

    const canvas= document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width=1366;
    canvas.height=768;


    class Game {
        constructor(width,height){
            this.width=width;
            this.height=height;
            this.player=new Player(this);
            
            this.input= new inputMaster();

            this.enemies= [];
            this.enemyTimer=0;
            this.enemyInterval=2000;

            this.enemyCap=10;
        }
        update(deltaTime){// run animation frames and make calculations
            this.player.update(this.input.key_up, this.input.key_down, 
            this.input.key_left, this.input.key_right, this.input.key_e,
            this.input.key_space);
            

            //Enemy handler
            if(this.enemyTimer>this.enemyInterval && this.enemyCap>this.enemies.length){ 
                this.addEnemy();
                this.enemyTimer=0;
            }else{
                this.enemyTimer+=deltaTime; //MAKE SO THAT EVERY 5 SECONDS THE CAP INCREASES
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
            })

        }

        draw(context){//draw everything in game
            this.player.draw(context);
            this.enemies.forEach(enemy=> {enemy.draw(context)});
        }

        addEnemy(){//Make it so based on how much time has passed, the enemies become stronger
            this.enemies.push(new baseSeal(this));
            console.log(this.enemies);
        }

    }

    const game = new Game(canvas.width, canvas.height);

    console.log(game);

    let lastTime=0;
    

    function animate(timeStamp){
        const deltaTime= timeStamp-lastTime;
        
        lastTime=timeStamp;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});