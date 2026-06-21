export class Player {
    constructor(game){
        this.game=game;
        this.width=30;
        this.height=60;
        this.x=this.game.width/2-this.width;
        this.y=this.game.height/2-this.height;
        this.image =document.getElementById('player')
    }
    update(){
        this.x++;
    }
    draw(context){
        context.fillStyle = 'cyan'
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    }
};