

function AnimatedSlime(game, spritesheet, yIndex, animationNum, x, y, xOffset, speed = 0) {
    this.animationNum = animationNum;
    this.speed = speed;
    this.anim0 = new Animation(spritesheet, 256, 256, 1, .075, 17, true, 0.5);
    this.anim1 = new Animation(spritesheet, 256, 256, 1, .075, 17, true, 0.5);
    this.anim2 = new Animation(spritesheet, 256, 256, 1, .075, 17, true, 0.5);
    this.anim3 = new Animation(spritesheet, 256, 256, 1, .12, 6, true, 0.5);
    this.anim4 = new Animation(spritesheet, 256, 256, 1, .075, 8, true, 0.5);
    this.anim5 = new Animation(spritesheet, 256, 256, 1, .075, 5, true, 0.5);
    this.anim6 = new Animation(spritesheet, 256, 256, 1, .075, 8, true, .5);
    this.directionLeftToRight = true;

    //this.movingAnim = new Animation(spritesheet, 256, 256, 1, 7, true, .5);


    this.Animations = [this.anim0, this.anim1, this.anim2, this.anim3, this.anim4, this.anim5, this.anim6, this.anim7];
    //this.AttackAnimation
    this.xOffset = xOffset += 1;
    this.x = x;
    this.y = y;
    this.yIndex = yIndex;
    this.game = game;
    this.ctx = game.ctx;
}


AnimatedSlime.prototype.update = function () {
    if (this.directionLeftToRight) {
        this.x += this.game.clockTick * this.speed;
    } else {
        this.x -= this.game.clockTick * this.speed;
    }
    if (this.x > 1400) {
        //this.xOffset = 0;
       this.xOffset = 1;
        this.directionLeftToRight = false;
    }if (this.x < -150) {
        this.xOffset = 10;
        this.directionLeftToRight = true;
    }
   // AnimatedSlime.prototype.update.call(this);
}

AnimatedSlime.prototype.draw = function () {

    //console.log(this.animationNum);
    //console.log(this.Animations[this.animationNum]);
    this.Animations[this.animationNum].drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, this.yIndex, this.xOffset);
}
