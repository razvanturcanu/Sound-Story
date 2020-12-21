
function SoundList(jsonObject) {_.extend(this, jsonObject);}

var animals = new SoundList({
    
    // "size" : "ms",
    "array" : [
        {  "file": "dog.mp3", "size":"md" },
        {  "file": "small-dog.mp3", "size":"md" },


        {  "file": "donkey.mp3" },
        {  "file": "frog.mp3" },
        {  "file": "monkey.mp3" },

        {  "file": "elephant.mp3", "size":"lg" },

        {  "file": "owl.mp3" },
        {  "file": "rooster.mp3" },
        {  "file": "crow.mp3" },

        {  "file": "duck.mp3"},
        {  "file": "falcon.mp3" },
        {  "file": "hippo.mp3" },

        {  "file": "horse.mp3" },
        {  "file": "lion.mp3" },
        {  "file": "cat.mp3" },
        

        {  "file": "wolf.mp3", "size":"md"},
        {  "file": "wolf-2.mp3", "size":"md" },

        {  "file": "rattlesnake.mp3" },
        {  "file": "zebra.mp3" },
        {  "file": "cow.mp3" },

        {  "file": "aligator.mp3" },
        {  "file": "bats.mp3" },
        {  "file": "bee.mp3" },
    ]

})

var effects = new SoundList({
    "size" : "md",
    "array" :[
        {  "file": "door-bell.mp3"},
        {  "file": "censored.mp3" },
        {  "file": "enthusiasm.mp3" },
        {  "file": "excellent.mp3" },
        {  "file": "inception.mp3" },
        {  "file": "joke-drum.mp3" },
        {  "file": "school-bell.mp3" },
        {  "file": "youll-regret-that.mp3" },

        {  "file": "bonk.mp3" },
        {  "file": "crash-1.mp3" },
        {  "file": "crash-2.mp3" },
        {  "file": "crowd-shock.mp3" },
        {  "file": "horn.mp3" },
        {  "file": "jetsons-doorbell.mp3" },
        {  "file": "police.mp3" },
        {  "file": "tip-toe.mp3" },

        {  "file": "zipscramble.mp3" },
        {  "file": "hypnotic.mp3" },
        {  "file": "machine-out-of-control.mp3" },
        {  "file": "magic.mp3" },
        {  "file": "mario-coin.mp3" },
        {  "file": "teleport.mp3" },
    ]
})

var music_clips = new SoundList({
    "size": "md",
    "array" : [
        {  "file": "arena-organ.mp3" },
        {  "file": "bad-boys.mp3"},
        {  "file": "detective.mp3","size":"lg"},
        {  "file": "ring-ma-bell.mp3" },
        {  "file": "sandstorm.mp3" },
        {  "file": "trumpet-call.mp3" },
    ]
})


var ambient = new SoundList({
    "size" : "lg",
    "array":[ 
        {  "file": "forest.mp3"},
        {  "file": "river.mp3"},
        {  "file": "forest-ambiance.mp3"},
        {  "file": "thunder.mp3"},
    ]   
})

var colinde = new SoundList({
    "size": "lg",
    "array": [
  
        {  "file": "astazi-sa-nascut-hristos.mp3"},
        {  "file": "domn-domn.mp3" },

        {  "file": "elefantul-cici.mp3", "size":"md"},
        {  "file": "in-padurea-cu-alune.mp3", "size":"md" },

        {  "file": "mos-craciun-cu-plete-dalbe.mp3"},
        {  "file": "saniuta-fuge.mp3" },
        {  "file": "steaua-sus-rasare.mp3"},
    ]
})



