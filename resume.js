// **************for scroll effect on sections**************

var nav = document.querySelectorAll('.navbar a');
for(var i=0;i<nav.length;i++){
    nav[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetIdname = this.textContent.trim().toLowerCase();
        var targetId = document.getElementById(targetIdname);
        // console.log(targetId);
        var interval = setInterval(function(){
            var coordinates = targetId.getBoundingClientRect();
            console.log(coordinates);
            if(coordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
        

    });
}

// *******for controlling scroll-bar***********

var skillBars = document.querySelectorAll('.skill_progress > div');
var skillContainer = document.querySelector('#skill-container');
// counter to trigger animation
var animation = false;

// initializing skill bars
function initialize(){
    for(let bar of skillBars){
        bar.style.width = 0+"%";
    }
}
initialize();


// scroller function
var animation = false;
function scroller(){
    
        
        var coordinate = skillContainer.getBoundingClientRect();
        if(!animation && coordinate.top<window.innerHeight){
            filler();
            animation =true;
        }
        
        
           
    

    
   
}
window.addEventListener('scroll',scroller);

// filler function

function filler(){
    for(let bar of skillBars){
        let targetWidth = bar.getAttribute('data-val');
        let currentWidth = 0;
        let interval = setInterval(function(){
               if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
               }
               currentWidth++;
               bar.style.width = currentWidth+"%";
        },5);
        

    }
    
}