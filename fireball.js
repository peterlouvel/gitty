var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: {
        preload: preload
        ,create: create 
        ,update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky' , 'assets/best-frame-png-image-transparent-background-borders-picture-of-daisy.png');
    this.load.image('Ball', 'assets/pokemon-ball-32.png');
    this.load.image('red' , 'assets/red.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');
   
    // this.cameras.main.setViewport(100, 100, 700, 500);

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });
    // physics.world.setBound(0,0,  game.config.width, game.config.height);
    // physics.world.bounds.width=700;
    // physics.world.bounds.height=500;


    var ball = this.physics.add.image(32, 32, 'Ball');

    ball.setVelocity(100, 200);
    ball.setBounce(1, 1);
    
    ball.setCollideWorldBounds(true);
    
    emitter.startFollow(ball);
}

function update(){
    

}