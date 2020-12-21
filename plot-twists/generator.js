
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


 SoundList.prototype.createSounds = function (relativePath, appendTo) {
    
    var jsonObj = this;
    var soundsArray = this.array;

    soundsArray.forEach( function(item, index){ 

        var sound_src = "sounds/" + relativePath + "/" + item.file;
        var bk_src = "sounds/" + relativePath + "/" + item.file.replace(".mp3",".jpg");
    
        var sizeClass = item.size != undefined ?  item.size :
                        jsonObj.size != undefined ?  jsonObj.size : "sm";

        var soundItem = $("<div class='sound-item " + sizeClass + "' onclick='playSound(this)' style='background-image:url(" + bk_src + ")' data-file-name='" + item.file + "'>" + 
                                "<div class='stop-sound' onclick='stopSound(this)'></div>" +
                                "<audio onended='hideStopButton(this)'><source src='" + sound_src + "' type='audio/mpeg'></audio>"+
                        "</div>").appendTo(appendTo);


    })

}




animals.createSounds("animals", $("#animals"));
effects.createSounds("effects", $("#effects"));
music_clips.createSounds("music-clips", $("#music-clips"));
ambient.createSounds("ambient", $("#ambient"));
colinde.createSounds("colinde", $("#colinde"));



// effects.forEach( function(item, index){ createSoundItem(item, index, "effects", $("#effects")) })
// music_clips.forEach( function(item, index){ createSoundItem(item, index, "music-clips", $("#music-clips")) })
// ambient.forEach( function(item, index){ createSoundItem(item, index, "ambient", $("#ambient")) })
// colinde.forEach( function(item, index){ createSoundItem(item, index, "colinde", $("#colinde")) })


// function createSoundItem(item, index, url, appendToElment){

//     var sound_src = "sounds/" + url + "/" + item.file;
//     var bk_src = "sounds/" + url + "/" + item.file.replace(".mp3",".jpg");

//     var sizeClass = item.size != undefined ?  item.size : "sm";
//     debugger
//     var soundItem = $("<div class='sound-item " + sizeClass + "' onclick='playSound(this)' style='background-image:url(" + bk_src + ")' data-file-name='" + item.file + "'>" + 
//                             "<div class='stop-sound' onclick='stopSound(this)'></div>" +
//                             "<audio onended='hideStopButton(this)'><source src='" + sound_src + "' type='audio/mpeg'></audio>"+
//                     "</div>").appendTo(appendToElment);

// }






