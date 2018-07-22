window.onload = function(){
 
    // game configuration object
    var gameConfig = {
        type: Phaser.CANVAS,
        width: 640,
        height: 480,
        backgroundColor: "#000044",
 
        physics: {
            default: "matter"
        },
        scene: [playGame]
    };
    var game = new Phaser.Game(gameConfig);
}

    var playGame = new Phaser.Class({
 
    Extends: Phaser.Scene,
    initialize:
 
    // constructor
    function playGame(){
 
        // calling the scene, assigning it "PlayGame" key
        Phaser.Scene.call(this, {key: "PlayGame"});
    },
 
    // function to be executed when the scene is loading
    preload: function(){
        this.load.image("crate", "assets/crate.png");
    },
 
    // function to be executed once the scene has been created
    create: function(){
        this.matter.world.setBounds(0, -200, game.config.width, game.config.height + 200);
        this.input.on("pointerdown", function(pointer){
            var bodiesUnderPointer = Phaser.Physics.Matter.Matter.Query.point(this.matter.world.localWorld.bodies, pointer);
            if(bodiesUnderPointer.length == 0){
                this.matter.add.sprite(pointer.x, pointer.y, "crate");
            }
            // this is where I wanted to remove the crate. Unfortunately I did not find a quick way to delete the Sprite
            // bound to a Matter body, so I am setting it to invisible, then remove the body.
            else{
                bodiesUnderPointer[0].gameObject.visible = false;
                this.matter.world.remove(bodiesUnderPointer[0])
            }
        }, this);
    }
});