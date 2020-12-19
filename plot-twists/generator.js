
function playSound(elem){
    
    var clickedElem = $(elem);
    
    var allSounds = clickedElem.find("audio");
    var sound = allSounds[ Math.floor(Math.random() * allSounds.length)  ]

    sound.volume = 1;
    sound.currentTime = 0;
    sound.play();
    
    clickedElem.addClass("playing");

    

}


function stopSound(elem){
    
    event.stopPropagation()
    var clickedElem = $(elem);
    clickedElem.trigger("stoped");

    var sound = clickedElem.parent().find("audio")[0];
    
    sound.pause();
    sound.currentTime = 0;
    $(sound).parent().removeClass("playing");


}


function hideStopButton(elem){
    $(elem).closest(".sound-item").removeClass("playing");

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

    var soundItem = $("<div class='sound-item' onclick='playSound(this)' style='background-image:url(" + bk_src + ")' data-file-name='" + item.file + "'>" + 
                            "<div class='stop-sound' onclick='stopSound(this)'></div>" +
                            "<audio onended='hideStopButton(this)'><source src='" + sound_src + "' type='audio/mpeg'></audio>"+
                    "</div>").appendTo("body");


})

// create sound items from sounds/effects
effects.forEach(function(item, index){ 

    var sound_src = "sounds/effects/" + item.file;
    var bk_src = "sounds/effects/" + item.file.replace(".mp3",".jpg");

    var soundItem = $("<div class='sound-item' onclick='playSound(this)' style='background-image:url(" + bk_src + ")'>" + 
                            "<div class='stop-sound' onclick='stopSound(this)'></div>" +
                            "<audio onended='hideStopButton(this)'><source src='" + sound_src + "' type='audio/mpeg'></audio>"+
                    "</div>").appendTo("body");


})

// create sound items from sounds/ambient
ambient.forEach(function(item, index){ 

    var sound_src = "sounds/ambient/" + item.file;
    var bk_src = "sounds/ambient/" + item.file.replace(".mp3",".jpg");

    var soundItem = $("<div class='sound-item' onclick='playSound(this)' style='background-image:url(" + bk_src + ")'>" + 
                            "<div class='stop-sound' onclick='stopSound(this)'></div>" +
                            "<audio onended='hideStopButton(this)'><source src='" + sound_src + "' type='audio/mpeg'></audio>"+
                    "</div>").appendTo("body");


})




