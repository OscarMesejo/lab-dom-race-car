class Game {
    // code to be added
    constructor(){
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
        )
        this.startScreen = document.getElementById("game-intro");
        this.width = '500px';
        this.height = '600px';
        this.obtacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;      
        this.gameEndScreen = document.getElementById("game-end");
        this.player = null;
        
    }
    start(){
        this.gameScreen.style.width = this.width;
        this.gameScreen.style.height = this.height;

        //Hide the starter screen
        this.startScreen.style.display = "none";

        //display the game screen
        this.gameScreen.style.display = "block";

        
        // start the game loop
        this.gameLoop();
    }
    gameLoop(){
        if(this.gameIsOver){
            return
        }
        this.update();

        //this function is calling itself in a loop
        window.requestAnimationFrame(()=> this.gameLoop())
    }
    update(){
        this.player.move();
    }
}
