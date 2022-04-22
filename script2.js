/* SKILL ANIMATION */
var skilltab = document.getElementsByClassName('skill-tablet2');
var skillContainer = document.getElementById('skills-container');
var check = false;
window.addEventListener('scroll', checkscroll);

function emptyThetab() {
    
for(let tab of skilltab) {
    tab.style.width = 0 + '%';
}
}

emptyThetab();



function increasewidth () {
    for(let tab of skilltab) {
        let finalbreadth = tab.getAttribute("skill-percentage");
        let currentbreadth = 0;
        let interval = setInterval(function() {
            if(currentbreadth >= finalbreadth) {
                clearInterval(interval);
                return;
            }
            currentbreadth++;
            tab.style.width = currentbreadth + '%';
        }, 14);
    }
}


function checkscroll() {
    let height = skillContainer.getBoundingClientRect();
    if(!check && height.top<=window.innerHeight) {
        //fill the bars//;
        increasewidth();
        check = true;
        console.log("filling the bars");
    } else if(height.top>window.innerHeight) {
        check = false;
        emptyThetab();

    }

}
