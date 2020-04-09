let MusicPlayer = function(){
    this.audio = new Audio('https://dll.z1.fm/music/d/7a/gspd_-_kto_skazal_mjau_(zf.fm).mp3');
    this.addEvents;     
};
    
MusicPlayer.prototype.addEvents = function(){
        let that = this
    document.querySelector('.play').addEventListener('click', function(){    
        that.audio.play();
        
    });
    document.querySelector('.pause').addEventListener('click', function(){
        that.audio.pause();
    });
    document.querySelector('.stop').addEventListener('click', function(){
        that.audio.pause();
        that.audio.currentTime = 0.0;
    }); 
    
};  
new MusicPlayer().addEvents();