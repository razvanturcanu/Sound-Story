
function playSound(elem){
    
    var clickedElem = $(elem);
    
    var allSounds = clickedElem.find("audio");
    var sound = allSounds[ Math.floor(Math.random() * allSounds.length)  ]

    sound.volume = 1;
    sound.currentTime = 0;
    sound.play();
    $(sound).addClass("playing");

}


function stopSound(){
    event.stopPropagation()
    var clickedElem = $(this);
    clickedElem.parent().find(".playing").trigger("stoped");
}



plot_twists.forEach(function(item, index){ 
    $("#plot-twist select").append("<option value=" + index + ">" + item.text + "</option>")
})


function randomize(elem){

    clickedElem = $(elem);
    var select = clickedElem.find("select");
    var options = select.find("option").length;
    var prompter = clickedElem.find(".prompter"); 

    var randomIndex = Math.floor(Math.random() * options)
    select.val(randomIndex);

    prompter.html(select.find("option:selected").text())

}



// create sound items from sounds/animals
sounds.forEach(function(item, index){ 

    var sound_src = "sounds/animals/" + item.file;
    var bk_src = "sounds/animals/" + item.file.replace(".mp3",".jpg");

    var soundItem = $("<div class='sound-item' onclick='playSound(this)' style='background-image:url(" + bk_src + ")'>" + 
                            "<div class='stop-sound' onclick='stopSound()'></div>" +
                            "<audio><source src='" + sound_src + "' type='audio/mpeg'></audio>"+
                    "</div>").appendTo("body");

    soundItem.find("audio").bind('ended stoped', function(){
        
        var sound = this;
        sound.pause();
        sound.currentTime = 0;
        $(sound).parent().find(".playing").removeClass("playing");
    
    })

})

// create sound items from sounds/effects
effects.forEach(function(item, index){ 

    var sound_src = "sounds/effects/" + item.file;
    var bk_src = "sounds/effects/" + item.file.replace(".mp3",".jpg");

    var soundItem = $("<div class='sound-item' onclick='playSound(this)' style='background-image:url(" + bk_src + ")'>" + 
                            "<div class='stop-sound' onclick='stopSound()'></div>" +
                            "<audio><source src='" + sound_src + "' type='audio/mpeg'></audio>"+
                    "</div>").appendTo("body");

    soundItem.find("audio").bind('ended stoped', function(){
        
        var sound = this;
        sound.pause();
        sound.currentTime = 0;
        $(sound).parent().find(".playing").removeClass("playing");
    
    })

})




