const imgFirst = document.querySelectorAll('#first>img')
const pFirst = document.querySelector('#first>p')
const btnFirst = document.querySelector('#first>button')
const video = document.querySelector('#bg>video')
const bg2 = document.querySelector('#bg2')
const video2 = document.querySelector('#bg2>video')
const bg3 = document.querySelector('#bg3')
const video3 = document.querySelector('#bg3>video')
const imgSecond = document.querySelectorAll('#pic3>figure>img')
const pic3 = document.querySelector('#pic3')
const bg4 = document.querySelector('#bg4')
const video4 = document.querySelector('#bg4>video')
const bg4Article = document.querySelector('#bg4>#bg4Article')
const circle = document.querySelector('.circle')
const imgFourth = document.querySelectorAll('#bg4>#fourth>figure>img')


window.addEventListener('scroll', () => {
    let st = window.scrollY
    console.log(st);
    // move videos//
    if(st>=532){
        video.style.opacity = '0'
        video2.style.opacity = '1'

    }else if(st<532){
        video.style.opacity = '1'
        video2.style.opacity = '0'
    }
    if(st>=1200){
        video2.style.opacity = '0'
        video3.style.opacity = '1'
    }else if(st<1200 && st>532){
        video2.style.opacity = '1'
        video3.style.opacity = '0'
    }
    

    if(st>=1988){
        video3.style.opacity = '0'
        video4.style.opacity = '1'
    }else if(st<1988 && st>1200){
        video3.style.opacity = '1'
        video4.style.opacity = '0'
    }
    // move videos//

    // move picture sec2/

   imgFirst.forEach((item)=>{
    if(st>=600 && st<=610){
        item.classList.add(item.getAttribute('data-para'))
    }else if(st>=620){
        let opacityimg = 1 - st/400;
    //  console.log(opacityimg);
    
    if (opacityimg < 0) {
        opacityimg = 0; 
    }
    item.style.opacity = opacityimg;
    setTimeout(() => {
        pFirst.style.opacity = '1'
        btnFirst.style.opacity ='1'  
    }, 1500);
    }
    else if ( st < 610) {
    pFirst.style.opacity = '0'
    btnFirst.style.opacity ='0'
    item.classList.remove(item.getAttribute('data-para'));
    let opacityimg = (st - 10) /100; 
    console.log(opacityimg);
    
    if (opacityimg < 1) {
        opacityimg = 1;
    }

    item.style.opacity = opacityimg;
     
} })
 // move picture sec2/


    // move pic3 sec3////
    if(st>=1300){
     pic3.style.left = -st/0.9 + 'px'
    }
    // move pic3 sec3////  

    // bg4Article opacity////
    if(st>=2000 ){
        bg4Article.style.opacity ='1'
    }else if(st<2000 ){
        bg4Article.style.opacity = '0'
    }
     // bg4Article opacity////

   


});
window.addEventListener('mousemove',(e)=>{
    circle.style.top = e.clientY +'px'
    circle.style.left = e.clientX + 'px'
})
imgFirst.forEach((val)=>{
    val.addEventListener('mouseenter',()=>{
        circle.style.background = 'rgba(255, 255, 255, 0.484)'
        circle.style.transform='translate(-50%, -50%)scale(2)'
        circle.style.transition = '.4s'
    })
    val.addEventListener('mouseleave',()=>{
        circle.style.background = 'black'
       circle.style.transform='translate(-50%, -50%)scale(1)'
        circle.style.transition = '0s'
    })
})
imgSecond.forEach((item)=>{
    item.addEventListener('mouseenter',()=>{
        circle.style.background = 'rgba(255, 255, 255, 0.484)'
        circle.style.transform='translate(-50%, -50%)scale(2)'
        circle.style.transition = '.4s'
    })
    item.addEventListener('mouseleave',()=>{
        circle.style.background = 'black'
        circle.style.transform='translate(-50%, -50%)scale(1)'
        circle.style.transition = '0s'
    })
})
imgFourth.forEach((i)=>{
    i.addEventListener('mouseenter',()=>{
        circle.style.background = 'rgba(255, 255, 255, 0.484)'
        circle.style.transform='translate(-50%, -50%)scale(2)'
        circle.style.transition = '.4s'
    })
    i.addEventListener('mouseleave',()=>{
        circle.style.background = 'black'
        circle.style.transform='translate(-50%, -50%)scale(1)'
        circle.style.transition = '0s'
    })
})
