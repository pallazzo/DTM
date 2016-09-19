

cc.Class({
    extends: cc.Component,

    properties: {
        hexagonGroup: {
            default: null,
            type: cc.Node
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        atlas: {
            default:null,
            type: cc.SpriteAtlas
        },

        gameOverMenu: {
            default:null,
            type: cc.Node
        },

        

    },



    // use this for initialization
    onLoad: function () {
        
        this.GameState = cc.Enum({
            Menu: -1,
            Run : -1,
            Over: -1
        });

        this.gameState = this.GameState.Ready;
        this.hexagonGroup.getComponent('HexagonGroup').game = this;
        this.reset();
    },

    startGame:function(){
        this.gameState = this.GameState.Run;
    },

    reset:function(){
        this.score = 0;
        this.sticky = false;
        this.flipped = false; 
        this.gameOverMenu.active = false;
        this.startGame();
    },

    gainScore: function () {
        this.score += 1;
        // update the words of the scoreDisplay Label
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
        //dcc.audioEngine.playEffect(this.scoreAudio, false);
    },
    stick: function(duration){
        this.toggleStickiness();
        setTimeout(this.toggleStickiness.bind(this), duration);
    },
    flipDirection: function(duration){
        this.toggleFlip();
        setTimeout(this.toggleFlip.bind(this), duration);
    },

    toggleFlip: function(){
        this.flipped = !this.flipped;
    },
    toggleStickiness: function(){
        this.sticky = !this.sticky;
    },      
    
    gameOver:function () {
        this.gameState = this.GameState.Over;
        this.gameOverMenu.active = true;
        this.gameOverMenu.getComponent('GameOver').showScore(this.score);
        this.hexagonGroup.getComponent('HexagonGroup').stop();    
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
