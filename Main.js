var AM = new AssetManager();



AM.queueDownload("./img/slime_sprite.png");
AM.queueDownload("./img/background2.jpg");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();


    

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background2.jpg")));
    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 0, 0, 0, 0, 0));
    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 1, 1, 200, 0, 0));
    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 2, 2, 400, 0, 0));
    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 3, 3, 600, 0, 2));
    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 4, 4, 800, 0, 8));
    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 5, 5, 1000, 0, 2));
    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 5, 5, 1000, 0, 2));

    gameEngine.addEntity(new AnimatedSlime(gameEngine, AM.getAsset("./img/slime_sprite.png"), 1, 6, 0, 200, 9, 250));






    
    console.log("All Done!");
});
