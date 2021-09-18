window.addEventListener('DOMContentLoaded',function(){

    //1. 토글
    const menuPath = [
      'M1481.43,0s27.8,2.89,48.36,20.31c8.33,7.06,13.35,18,19,28.64,8.25,15.56,17.78,30.32,41,30.76,22.81.44,32.48-11.76,39.29-24.77,4.82-9.22,8.22-18.85,13.83-24.68C1654.46,18.19,1667.47,6.58,1701,0Z',
      'M1481.43,0s29.1,1.46,48.36,20.31c12.2,11.94,14.35,43.68,19,54.76,7.47,17.91,17.78,30.32,41,30.76,22.81.44,36.45-11,40.42-28.16,2.43-10.48,2.06-32.36,12.7-47.41C1652.52,16.58,1667.47,6.58,1701,0Z',
      'M1481.43,0s26.1,5.13,48.36,20.31c51.76,35.3,65.5,131.23,53.5,131.28-316.64,1.38-440.93,526.83,6.42,526.83,431,0,280.45-534.21,13.74-526.3-10.76.32,13.18-101.78,39.38-121.86C1656.14,20.07,1667.27,9.72,1701,0Z'  
    ];

    const tglColor = ['#8DD5E5', 'white'];
    const menuBox = document.querySelector('.menubox');
    const tglBtn = document.querySelector('.tgl_btn');
    const tglClose = document.querySelector('.tgl_close');
    const tglOpen = document.querySelector('.tgl_open');
    let path, num;
    const elBody = document.querySelector('body');
    const menuBoxUl = document.querySelector('.menubox ul');
    const menuLi = document.querySelectorAll('.menubox li');
    

    tglBtn.addEventListener('mouseover', ()=>{
        if(num == 2){
            path = menuPath[2];
        }else{
            path = menuPath[1];
        }        
        svgMorphing(path); 
    });
    tglBtn.addEventListener('mouseleave', ()=>{        
        if(num == 2){
            path = menuPath[2];
        }else{
            path = menuPath[0];
        }
        svgMorphing(path);    
    });           

    tglOpen.addEventListener('click', ()=>{     
        num = 2;
        path = menuPath[2];
        svgMorphing(path);
        menuBox.style = 'animation: big 0.3s 0.15s forwards linear'
        setTimeout(() => {
            elBody.style = "background: white; overflow: hidden";            
            menuBoxUl.style = 'display: bolck';
            tglOpen.style = "opacity: 0; z-index: -1";
            tglClose.style = "opacity: 1; z-index: 1";            
        }, 300);   
        for(let i=0; i<menuLi.length; i++){
            menuLi[i].classList.add('active');
        }

    });
    tglClose.addEventListener('click', ()=>{     
        menuBox.style = 'animation: small 0.3s forwards linear'              
        setTimeout(() => {
            path = menuPath[0];
            svgMorphing(path);    
            num = 0;
        },250);      
        elBody.style = "background: #b3d8e8; overflow: visible";     
        menuBoxUl.style = 'display: none';
        tglOpen.style = "opacity: 1; z-index: 1";
        tglClose.style = "opacity: 0; z-index: -1";
    });
    
    function svgMorphing(path){  //svg이미지 변형
        let timeline = anime({
            duration:100,
            targets : '#tgl_path',
            d:[{
                value: path
            }],
            easing: 'easeInQuad',
        });
    }

    gsap.registerPlugin(ScrollTrigger);
    
    var sky = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=600",
            toggleClass: "active",
            ease: "power3",   //https://greensock.com/docs/v2/Easing
            markers:true
        }
      });

    sky.to(".night", {
        rotation: 0,xPercent:10 ,yPercent: -100, duration:1
    });


    sky.to(".sun", {
        rotation: 0,xPercent:-30 ,yPercent: -140, duration:1
        });
        

    //////★★★★★★★★★★★빛나 배경색바꾸기
    let a,b,c,y;
    const skyBg = document.querySelector('.sky');
    window.addEventListener('scroll', function(){
        y = this.scrollY;
        a = 74 + 66/640*y;
        b = 74 + 127/640*y;
        c = 74 + 146/640*y;
        skyBg.style.background = `rgb(${a},${b},${c})`;

    });

    // gsap.to(".c",{
    //     scrollTrigger:{
    //         trigger:".c",
    //         start:"top top",
    //         end:"bottom bottom",
    //         markers:true,
    //         toggleActions: "restart pause reverse pause",
    //     },
    //     x:400,
    //     rotation:360,
    //     duration:360
    // });


    // toggleActions : play none none none
    // pause resume reverse restart reset complete none
                    

    //   https://codepen.io/isladjan/pen/abdyPBw
    // https://webty.tistory.com/117



    


}); //finish



// https://greensock.com/forums/topic/12409-svg-shape-morphing/
// https://lpla.tistory.com/106
// https://greensock.com/docs/v3/GSAP/gsap.to()
