


plot_twists.forEach(function(item, index){ 
    $("#plot-twist select").append("<option value=" + index + ">" + item.text + "</option>")
})


$(document).on("click", ".generator", function(){
    var select = $(this).find("select");
    var options = select.find("option").length;
    var prompter = $(this).find(".prompter"); 

    var randomIndex = Math.floor(Math.random() * options)
    select.val(randomIndex);

    prompter.html(select.find("option:selected").text())
})



sounds.forEach(function(item, index){ 

    var sound_src = "sounds/" + item.file;
    var bk_src = "sounds/" + item.file.replace(".mp3",".jpg");

    var soundItem = $("<div class='sound-item' style='background-image:url(" + bk_src + ")'>" + 
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


effects.forEach(function(item, index){ 

    var sound_src = "sounds/effects/" + item.file;
    var bk_src = "sounds/effects/" + item.file.replace(".mp3",".jpg");

    var soundItem = $("<div class='sound-item' style='background-image:url(" + bk_src + ")'>" + 
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




