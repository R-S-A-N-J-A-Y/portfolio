let cicleContainer = document.querySelectorAll(".circle"),circularBar = document.querySelectorAll('.content');

circularBar.forEach((circle, index) => {
    let count = 0;
    setInterval(() => {
        let ptag = circle.querySelector('p');
        if (count === 90 && index === 0) {
            clearInterval();
        } 
        else if(count === 85 && index === 1){
            clearInterval();
        }
        else {
            count += 1;
            ptag.innerHTML = count + "%";
            cicleContainer[index].style.background = `conic-gradient(aqua ${count * 3.6}deg,hsl(0, 1%, 28%) 3deg)`
        }
    }, 50);
});