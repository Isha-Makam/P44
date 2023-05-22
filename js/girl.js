class Girl {
    constructor(x,y,w,h){
        this.position = 0
        this.isJumping = false;

        this.body = Bodies.rectangle(x,y,w,h);

        World.add(world,this.body)
    }

    display(){
        var  pos = this.body.position 

        image(girlImg,pos.x,pos.y,1,1)
        
        
        imageMode(CENTER)
        
    }

    controls(){
        if (keyIsDown(LEFT_ARROW)) {
            this.body.position.x -= this.position;

        } 
        if (keyIsDown(RIGHT_ARROW)) {
            this.body.position.x += this.position;
        
        }
        if(keyIsDown(32)&& !this.isJumping){
            this.body.position.y -= this.position;
            this.isJumping = true;
        }

    }


    jump(){
         setTimeout(() => {
            this.isJumping = false;
        }, 500);
    }
}
