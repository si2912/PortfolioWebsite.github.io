document.addEventListener('DOMContentLoaded', () => {

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /*SCROLL HOME*/
    sr.reveal('.banner__introduce p',{}); 
    sr.reveal('.banner__introduce .btn',{delay: 200}); 
    sr.reveal('.banner__introduce .icon-socials',{delay: 400}); 
    sr.reveal('.banner__img',{ interval: 200}); 

    /*SCROLL ABOUT*/
    sr.reveal('.about__content img',{}); 
    sr.reveal('.about__content .content h3',{delay: 200}); 
    sr.reveal('.about__content .content p',{delay: 400}); 

    /*SCROLL SKILLS*/
    sr.reveal('.skills__content .left h3',{}); 
    sr.reveal('.skills__content .left p',{}); 
    sr.reveal('.skills__content .left .skills-box',{interval: 200}); 
    sr.reveal('.skills__content .right',{delay: 600});

    /*SCROLL WORK*/
    sr.reveal('.work__content',{interval: 200});

    /*SCROLL CONTACT*/
    sr.reveal('.contact__form',{interval: 200}); 


    // sticky menu 
    var header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if(pageYOffset >= header.clientHeight){
                header.classList.add('sticky');
            }else{
                header.classList.remove('sticky');
            }
        })
    


        
    
}, false);