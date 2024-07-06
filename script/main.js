
function disabletofalse(id){
    const butt = document.getElementById(id);
    butt.disabled = false;
    butt.classList.remove('btn-1');
}

function disabletotrue(id){
    const butt = document.getElementById(id);
    butt.disabled = true;
    butt.classList.add('btn-1');
}

function changeClass(id){

    const button1 = document.querySelector(".js-btn");

    if(button1.id === "index-close" ){

        button1.setAttribute('id','index-open');

        /* adding class for each divs (Rev-Arrow) */ 
        var button2 = document.querySelector(".row")
        button2.classList.add("row-1");
        button2.classList.remove("row");
        var button2 = document.querySelectorAll(".bar")

        button2.forEach(element => {
            element.classList.add("bar-1");
            element.classList.remove("bar");      
        });
        
        
        //buttons
        var button2 = document.querySelector(".insta-icon");
        button2.classList.add("insta-icon-1");
        button2.classList.remove("insta-icon");
    
        var button2 = document.querySelector(".LL-icon");
        button2.classList.add("LL-icon-1");
        button2.classList.remove("LL-icon");
        
        var button2 = document.querySelector(".git-icon");
        button2.classList.add("git-icon-1");
        button2.classList.remove("git-icon");

        for(var i=0;i<id.length;i++){
            disabletofalse(id[i]);
        }

    }

    else{

        button1.setAttribute('id','index-close');

        /* adding class for each divs (Arrow) */ 
        var button2 = document.querySelector(".row-1")
        button2.classList.add("row");
        button2.classList.remove("row-1");
        var button2 = document.querySelectorAll(".bar-1")

        button2.forEach(element => {
            element.classList.add("bar");
            element.classList.remove("bar-1");      
        });

       
        //button
        var button2 = document.querySelector(".insta-icon-1");
        button2.classList.add("insta-icon");
        button2.classList.remove("insta-icon-1");
    
        var button2 = document.querySelector(".LL-icon-1");
        button2.classList.add("LL-icon");
        
        var button2 = document.querySelector(".git-icon-1");
        button2.classList.add("git-icon");

        for(var i=0;i<id.length;i++){
            disabletotrue(id[i]);
        }
    }
    
}

//My Resume

function onhover(isHover, name) {
    const imageUrl = isHover ? `/Icon/resume/resumeDark/${name}.png` : `/Icon/resume/${name}.png`;
    document.getElementById(name).src = imageUrl;
}

