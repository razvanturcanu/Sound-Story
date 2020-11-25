


$(document).on("click", ".sound-item", function(){
    var clickedElem = $(this);
    
    var allSounds = clickedElem.find("audio");
    var sound = allSounds[ Math.floor(Math.random() * allSounds.length)  ]
    
    // add stop option if there isn't one already
    if(clickedElem.find(".stop-sound").length == 0 ){
        $("<div class='stop-sound'></div>").appendTo(clickedElem)
    }
    else{
        clickedElem.find(".playing")[0].pause()
        clickedElem.find(".playing")[0].currentTime = 0
    }

    sound.volume = 0.1;
    sound.currentTime = 0;
    sound.play();
    $(sound).addClass("playing");
})

$(document).on("click", ".stop-sound", function(event){
    event.stopPropagation()
    var clickedElem = $(this);
    clickedElem.parent().find(".playing").trigger("stoped");
    
})


$(".sound-item audio").bind('ended stoped', function(){
    
    var sound = this;
    sound.pause();
    sound.currentTime = 0;
    $(sound).parent().find(".stop-sound").remove();
    $(sound).parent().find(".playing").removeClass("playing");

})