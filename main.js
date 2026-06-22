console.log("sup mah fellas");
import { Player } from './player.js'
import { inputMaster } from './input.js'
window.addEventListener('load',function(){
    const canvas= document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width= 500;
    canvas.height=500;

    class Game {
        constructor(width,height){
            this.width=width;
            this.height=height;
            this.player=new Player(this);
            this.input= new inputMaster();
        }
        update(){// run animation frames and make calculations
        this.player.update(this.input.key_up, this.input.key_down, 
            this.input.key_left, this.input.key_right, this.input.key_e,
            this.input.key_space);
        }
        draw(context){//draw everything in game
            this.player.draw(context);
        }
    }
    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});