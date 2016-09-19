cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },
    
    buttonControlCallback: function(){
        cc.director.loadScene('game');
    },
    pauseButtonControlCallback: function(){
        cc.log("Pause");
        if(!cc.director.isPaused()){
            cc.director.pause();

        }else{
            cc.director.resume(); 
        }
        
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
