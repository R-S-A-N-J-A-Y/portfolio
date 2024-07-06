function gotoLink(buttonClicked){
    if(buttonClicked === 'html'){
        window.location.href = ""
    }
    else if(buttonClicked === 'home'){
        window.location.href = `#${buttonClicked}`;
    }
    else if(buttonClicked === 'Home'){
        window.location.href = `#${buttonClicked}`;
    }
    else if(buttonClicked === 'resume'){
        window.location.href = `#${buttonClicked}`;
    }
    else if(buttonClicked === 'skillid'){
        window.location.href = `#${buttonClicked}`;
    }
    else if(buttonClicked === 'specs'){
        window.location.href = `#${buttonClicked}`;
    }
    else if(buttonClicked === 'contact'){
        window.location.href = `#${buttonClicked}`;
    }

    else if(buttonClicked.id === 'insta'){
        window.location.href='https://www.linkedin.com/in/sanjay-r-offcial';
    }

    else if(buttonClicked.id === 'LL'){
        window.location.href='https://www.linkedin.com/in/sanjay-r-offcial';
    }

    else if(buttonClicked.id === 'git'){
        window.location.href='https://github.com/R-S-A-N-J-A-Y';
    }

    else if(buttonClicked == 'more-info'){
        window.location.href = '/aboutMe.html';
    }

    else if(buttonClicked == 'original-info'){
        window.location.href = '/main.html';
    }

    else{
        window.location.href = 'mailto:sanjay.developer.official@gmail.com' ;
    }
}
    