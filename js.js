


$(document).on("click", ".sound-item", function(){
    var clickedElem = $(this);
    
    var allSounds = clickedElem.find("audio");
    var sound = allSounds[ Math.floor(Math.random() * allSounds.length)  ]

    sound.volume = 1;
    sound.currentTime = 0;
    sound.play();
    $(sound).addClass("playing");
})

function stopSound(){
    event.stopPropagation()
    var clickedElem = $(this);
    clickedElem.parent().find(".playing").trigger("stoped");
}
