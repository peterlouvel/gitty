var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky' , 'assets/space.jpg');
    this.load.image('Ball', 'assets/ball.png');
    this.load.image('red' , 'assets/red.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var ball = this.physics.add.image(17, 17, 'Ball');

    ball.setVelocity(100, 200);
    ball.setBounce(1, 1);
    ball.setCollideWorldBounds(true);

    emitter.startFollow(ball);
}

