let videoArrow = document.querySelector('#VideoArrow'),
    videoPrev = videoArrow.childNodes[1];
    videoNext= videoArrow.childNodes[3];
    // console.log(videoPrev, videoNext);
    video = document.querySelectorAll('video'),
    videoNow = document.querySelector('#videoSlideNow'),
    scrollWrap = document.querySelector('#scrollWrap'),
    mainContent = document.querySelectorAll('.mainContent'),
    rotateLogo = document.querySelector('.rotateLogo'),
    model = document.querySelector('#model'),
    logo = document.querySelectorAll('.logo'),
    sns = document.querySelector('.sns'),
    productAD = document.querySelector('.productAD'),
    hyaProd = document.querySelector('#hyaProd')
///////

let videoNowLel = 0;





videoArrow.addEventListener('click',prevClick);

function prevClick(){
    videoNowLel++;
    video[1].style.opacity = '1'
    video[1].play();
    video[0].currentTime=0;
    mainContent[1].style.opacity = '1'
    mainContent[0].style.opacity = '0'
    videoSlideNow.style.width = '100%'
    if(videoNowLel >=2) {
        videoNowLel=0;
        video[1].style.opacity = '0'
        video[1].currentTime=0;
        video[0].play();
        mainContent[1].style.opacity = '0'
        mainContent[0].style.opacity = '1'
        videoSlideNow.style.width = '50%'
    }
}



window.addEventListener('scroll',()=>{
    scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);

    move = scrollTop / 20;
    rotate = scrollTop / 10;
    modelIMG = scrollTop / 200 + 100;
    opacity = (scrollTop / 500) *0.8;
    logo2top =- (scrollTop / 400);
    productADtop = scrollTop / 30; 
    hyaProdTop = - (scrollTop / 20) ;
    console.log(productADtop+'타')
    

    rotateLogo.style.transform = `rotate(${rotate}deg)`;
    hyaProdTop -= 30;
    if(scrollTop <= 300) {
        scrollWrap.style.left = '110%'
    }
    if(scrollTop >= 300) {
        scrollWrap.style.left = `${90 -move}%`;
        // console.log(scrollWrap.style.left);
    }
    if(scrollTop >=1000 && scrollTop <=2700) {
        model.style.backgroundSize = `${modelIMG}%`
    }
    if(scrollTop <=2100) {
        logo[2].style.opacity = '0';
        logo[2].style.top = '30%'
    }
    if (scrollTop >= 2100 && scrollTop <=2250) {
        logo[2].style.opacity = '.5'
        logo[2].style.top = `20%`
        console.log( logo[2].style.opacity)
    }
    if (scrollTop >= 2250 && scrollTop <=2700) {
        logo[2].style.opacity='1'
        logo[2].style.top = `10%`
    }
    if (scrollTop <= 4350) {
        sns.style.color = 'white';
    }
    if (scrollTop >=4350 && scrollTop <= 8000) {
        sns.style.color = 'rgb(26, 26, 26)';
    }
    if (scrollTop >= 5000 && scrollTop <= 6900) {
        productAD.style.top = `${productADtop-230}%`
        console.log(productADtop)
    }
    if (scrollTop <=6300) {
        logo[3].style.opacity = '0';
        logo[3].style.top = '30%'
    }
    if (scrollTop >= 6300 && scrollTop <=7000) {
        logo[3].style.opacity='.5'
        logo[3].style.top = `20%`
    }
    if (scrollTop >= 7000 && scrollTop <= 7650) {
        logo[3].style.opacity='1'
        logo[3].style.top = `10%`
    }
    if (scrollTop >= 8000) {
        sns.style.color = 'white';
    }
    if (scrollTop >=9000 && scrollTop <=10050) {
        hyaProd.style.top = `${hyaProdTop + 540}%`
    }

})
      
       




