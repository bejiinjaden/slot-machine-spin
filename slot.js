const numoficons = 9,
      speed = 100,
      icon_height = 79;



const roll = (reel , offset = 0) => {
    const delta = (offset + 2) * numoficons + Math.round(Math.random() * numoficons);
    const style = getComputedStyle(reel);
    const backgroundPosition = parseFloat(style["background-position-y"]);

    reel.style.transition = `background-position-y ${8 +delta*speed}ms`; 
    reel.style.backgroundPositionY = `${backgroundPosition + delta * icon_height}px`;
}


function rollall(){
    const reellist = document.querySelectorAll(' .slots > .reel');
    [... reellist].map((reel,i) => {
            console.log(reel,i);
            roll(reel , i);
    })
}

rollall();
