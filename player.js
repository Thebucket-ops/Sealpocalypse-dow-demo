export class Player {
    constructor(game){
        this.game=game;
        this.width=30;
        this.height=60;
        this.x=this.game.width/2-this.width;
        this.y=this.game.height/2-this.height;
        this.image =document.getElementById('player');
        this.speed=0;
        this.vspeed=0;
        this.maxSpeed=5;
    }
    update(key_up, key_down, key_left, key_right,
        key_e, key_space
    ){
        // movement
        this.x+= this.speed;
        this.y+= this.vspeed;

        this.speed=(this.maxSpeed*key_right)-(this.maxSpeed*key_left);
        
        this.vspeed=(this.maxSpeed*key_down)-(this.maxSpeed*key_up);
        
        //Boundaries
        if (this.x<0) this.x=0;
        if (this.x>this.game.width-this.width) this.x=this.game.width-this.width;
        if (this.y<0) this.y=0;
        if (this.y>this.game.height-this.height)this.y=this.game.height-this.height;
    }
    draw(context){
        
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    }
};