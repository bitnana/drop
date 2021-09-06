window.addEventListener('DOMContentLoaded',function(){

    //1. 토글
    const hoverPoints = "M1699.32,0h84c-35.21,5-51,22.88-58.16,30.26-10.84,11.25-9.66,30.33-13.12,39.23-.74,2.35-2.79,6.8-2.77,6.76l0,0h0c-7.23,14.15-19,20.44-35.71,20.44s-28-6.62-35.26-20.77h0l0,0,0-.06a40.76,40.76,0,0,1-3.62-10.92c-1.76-9.39-4.49-26.46-12.7-34.68C1614.64,23,1598.94,5,1563.73,0h135.59Z";
    const originalPoints = "M1699.32,0h84c-35.21,5-51.63,22.35-58.16,30.26-3.9,4.74-7.86,13-10.4,18.84a44.62,44.62,0,0,1-2.78,6.76v0h0a42.91,42.91,0,0,1-76.85,0h0v0a44.62,44.62,0,0,1-2.78-6.76c-2.54-5.86-6.5-14.1-10.4-18.84-6.53-7.91-23-25.31-58.16-30.26h135.59Z";
    const clickWater = "M1700.89.5h84c-50.33,0-75.78,49.6-82,59.11-52.31,80.48,11.09,89.07,32.17,93.06,18.71,3.53,19.1,5,23.46,6.7,46.37,18,64.9,40.74,77.4,50,2.65,2,7.76,7.55,10.19,9.79a138.11,138.11,0,0,1,16.38,19c32.64,46,37.32,68.43,44.25,99.51h0s3.84,15.34,6,28.93a76.85,76.85,0,0,1,.9,8.69c.48,9.44,1.44,32.64.43,49.68-1.64,27.73-3.84,36.5-15.56,65.14l-12.39,26.38a194,194,0,0,1-21.9,34c-22,27-70.3,62.27-103.2,70.14-1.72.41-3.19,1.54-4.86,2.12l-35.31,9.1c-11.92,2.86-34.75,5.54-45.2,5.41-3.6,0-11.73.16-16.88,0C1465.58,631.58,1417.21,469,1425.3,371.94,1439.54,201,1585.13,165.05,1585.12,165L1646,140.91c7.92-4.16,50.24-37.9-22.59-110.15-7.28-7.22-22.94-25.31-58.15-30.26h135.59Z";
    const water = document.querySelector('.water');
    const menu = document.querySelectorAll('.menu_togl a');
    const menuBox = document.querySelector('.menubox');
    const menuList = document.querySelectorAll('.menubox li');


   menu[0].addEventListener('mouseenter', ()=>{
        const timeline = anime.timeline({
            duration : 500,
            easing : "easeOutExpo"
        });
        timeline.add({
            targets : ".water",
            d:[
                {value : hoverPoints}
            ]
        });
    });
    menu[0].addEventListener('mouseleave', ()=>{
        const timeline = anime.timeline({
            duration : 500,
            easing : "easeOutExpo"
        });
        timeline.add({
            targets : ".water",
            d:[
                {value : originalPoints}
            ]
        });
    });

    menu[0].addEventListener('click',()=>{
        menuBox.classList.toggle('none');
        for(let j=0; j<menuList.length; j++){
            menuList[j].classList.toggle('active');
        }
    });
   




    


}); //finish

