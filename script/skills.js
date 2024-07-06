

//LINEAR PROGRESS BAR

let object = [
    {
        number: 1,
        name: "c",
        image: 'Icon/Skills/C.png',
        value: 80
    },
    {
        number: 2,
        name: "py",
        image: 'Icon/Skills/python.png',
        value: 90
    },
    {
        number: 3,
        name: "java",
        image: 'Icon/Skills/java.png',
        value: 75
    },
    {
        number: 4,
        name: "htm",
        image: 'Icon/Skills/html.png',
        value: 90
    },
    {
        number: 5,
        name: "css",
        image: 'Icon/Skills/Css.png',
        value: 80
    },
    {
        number: 6,
        name: "js",
        image: 'Icon/Skills/js.png',
        value: 75
    }
];

let skillsHTML = "";

object.forEach((obj1) =>{
    skillsHTML += `
        <div class="tech-flex-element" data-aos="zoom-in-right" data-aos-duration="650">
            <div class="row-bar">
                <img class="skills-img-${obj1.number}" src="${obj1.image}" alt="">
                <div class="row-bar-clr-${obj1.name}"></div>
                <div class="tool-tip js-tool-tip"><p>0%</p></div>
            </div>
            
        </div>`
})
document.querySelector('.js-tech-skill').innerHTML = skillsHTML;

var tooltip = document.querySelectorAll('.js-tool-tip');

tooltip.forEach((ob1,i) => {

    var ele = ob1.querySelector('p');
    var count = 0;

    setInterval(() =>{

        if(count === object[i].value){
            clearInterval();
        }
        else{
            count+=1;
            ele.innerHTML = count+'%';
    
        }

    },55)

})


let obj = [
    {
        percent : 90,
        text: "COMMUNICATION",
        dashOffset: 610,
        class_name: "Communication"
    },
    {
        percent : 75,
        text: "CREATIVITY",
        dashOffset: 670,
        class_name: "Creativity"
    },
    {
        percent : 80,
        text: "PROBLEM-SOLVING",
        dashOffset: 640,
        class_name: "Problem-Solving"
    },
    {
        percent : 85,
        text: "TEAMWORK",
        dashOffset: 620,
        class_name: "Teamwork"
    }
    
];



//CIRCULAR PROGREES BAR


skillsHTML = ""
console.log(skillsHTML)
obj.forEach((obj1) => {

    skillsHTML +=`
    <div class="my-skills" data-aos="zoom-in-left" data-aos-duration="650">
        <div class="outer-circle">
            <div class="inner-circle">
                <div class="value-js value">
                    <p></p>
                </div>
            </div>
        </div>

        
        <svg width="170px" height="170px">
            <defs>
                <linearGradient id="gradientColor">
                    <stop offset="0%" stop-color = "#00ffff"></stop>
                    <stop offset="50%" stop-color = "#00ffff"></stop>
                    <stop offset="100%" stop-color = "#00ffff"></stop>
                </linearGradient>
            </defs>
            <circle class="${obj1.class_name}" cx="65" cy="65" r="55" stroke-linecap="round" ></circle>
        </svg> 
        <p>${obj1.text}</p> 
    </div>`
    
});


document.querySelector('.js-skills-grid').innerHTML = skillsHTML;


var element = document.querySelectorAll('.value-js');

element.forEach((ele,i) =>{

    let ptag = ele.querySelector('p');
    var count = 0;

    setInterval(() =>{
    
        if(count === obj[i].percent){
            clearInterval();
        }
        else{
            count+=1;
            ele.innerHTML = count+'%';
    
        }
    },53)
})
