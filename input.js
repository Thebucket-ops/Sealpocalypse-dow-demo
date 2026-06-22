export class inputMaster{
    constructor(){
        
        this.key_up=false;
        this.key_down=false;
        this.key_left=false;
        this.key_right=false;
        this.key_e=false;
        this.key_space=false;
        window.addEventListener('keydown', e=> {
            if(e.key==='ArrowUp'||e.key==='w'||e.key==='W'){this.key_up=true};
            if(e.key==='ArrowDown'||e.key==='s'||e.key==='S'){this.key_down=true};
            if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){this.key_left=true};
            if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){this.key_right=true};
            if(e.key==='e'||e.key==='E'){this.key_e=true};
            if(e.key===' '){this.key_space=true};

        });
        window.addEventListener('keyup', e => {
            if(e.key==='ArrowUp'||e.key==='w'||e.key==='W'){this.key_up=false};
            if(e.key==='ArrowDown'||e.key==='s'||e.key==='S'){this.key_down=false};
            if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){this.key_left=false};
            if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){this.key_right=false};
            if(e.key==='e'||e.key==='E'){this.key_e=false};
            if(e.key===' '){this.key_space=false};

        });

    }
}