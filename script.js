var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    character.classList.add("animate")
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).
            getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getP,
            ropertyValue("Left"));
        if (blockleft < 20 && blockleft > 0 && characterTop >= 130){
            block.style.animation = "none";
            block.style.display = "none";
            alert("thua cc rồi");
        }
    },10);