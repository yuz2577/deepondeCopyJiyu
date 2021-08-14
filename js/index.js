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
    productAD = document.querySelectorAll('.productAD'),
    hyaProd = document.querySelector('#hyaProd'),
    topM = document.querySelectorAll('.topM'),
    products = document.querySelectorAll('.products > li'),
    justIMG =document.querySelectorAll('.justIMG'),
    quickNormal = document.querySelectorAll('.quickNormal >li'),
    quickNoramlP = document.querySelectorAll('.quickNormal >li>p'),
    quickHover = document.querySelectorAll('.quickHover > li'),
    quickBehind = document.querySelectorAll('.quickBehind > li'),
    quickBox = document.querySelector('#quickBox'),
    myContent = document.querySelector('#myContent'),
    goFirst = document.querySelector('#goFirst'),
    now = document.querySelector('#now'),
    nowBar = document.querySelector('.nowBar');
///////

let videoNowLel = 0;

goFirst.addEventListener('click',()=>{
    window.scrollTo(0,0)
})
for(let i=0; i<quickNormal.length; i++) {
    quickNormal[i].addEventListener('mouseover',function(event){
        quickNormal.forEach((item)=>{
                quickNormal[i].addEventListener('mouseover',()=>{
                quickHover[i].style.opacity = '1';
                quickHover[i].style.backgroundSize = '120%';
                quickBehind[i].style.opacity = '1';
                quickNoramlP[i].style.opacity = '0'
                console.log('gg')
            })
                quickNormal[i].addEventListener('mouseleave',()=>{
                quickHover[i].style.opacity = '0';
                quickHover[i].style.backgroundSize = '100%';
                quickBehind[i].style.opacity = '0';
                quickNoramlP[i].style.opacity = '1'
            })
            
        })
    })
}






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
    productsMove = scrollTop / 30;
    scaleUP = Math.floor(-(-(Math.floor(scrollTop / 20)-100)*0.1 +75));
    // console.log (scaleUP+'타')
    let nowPer = Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100);;
    nowBar.style.left = `${nowPer}%`
    

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
        topM[0].style.color = 'white';
        topM[1].style.color = 'white';
        topM[2].style.color = 'rgb(26, 26, 26)';
        topM[2].style.background = 'white'
    }
    if (scrollTop >=4350 && scrollTop <= 8000) {
        sns.style.color = 'rgb(26, 26, 26)';
        topM[0].style.color = 'rgb(26, 26, 26)';
        topM[1].style.color = 'rgb(26, 26, 26)';
        topM[2].style.background = 'rgb(26, 26, 26)';
        topM[2].style.color = 'white'
    }
    if (scrollTop >= 5000 && scrollTop <= 6900) {
        productAD[0].style.top = `${productADtop-230}%`
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
    if (scrollTop >=6800 && scrollTop <=8500) {
        hyaProd.style.top = `${hyaProdTop + 460}%`
        console.log(hyaProd.style.top)
    }
    if (scrollTop >= 8000) {
        sns.style.color = 'white';
        topM[0].style.color = 'white';
        topM[1].style.color = 'white';
        topM[2].style.color = 'rgb(26, 26, 26)';
        topM[2].style.background = 'white'   
    }
    if (scrollTop <=8500) {
        logo[4].style.opacity='0'
        logo[4].style.top = `30%`
    }
    if (scrollTop >=8500&& scrollTop <=8800) {
        logo[4].style.opacity='.5'
        logo[4].style.top = `20%`
    }
    if (scrollTop >=8800&& scrollTop <=9200) {
        logo[4].style.opacity='1'
        logo[4].style.top = `10%`
    }
    if (scrollTop >= 9400 && scrollTop <= 9700) {
        products[0].style.top = `10%`;
    }
    if (scrollTop >= 9700 && scrollTop <= 10100) {
        products[0].style.top = `10%`;
        products[1].style.top = `20%`;
    }
    if (scrollTop >= 10100 && scrollTop <= 10300) {
        products[0].style.top = `0%`;
        products[1].style.top = `10%`;
        products[2].style.top = `20%`;
    }
    if (scrollTop >= 10300 && scrollTop <= 10600) {
        products[1].style.top = `0%`;
        products[2].style.top = `10%`;
    }
    if (scrollTop >= 11400 && scrollTop <= 12500) {
        products[2].style.top = `0%`;
        productAD[1].style.top = `${productADtop -416}%`;
        // console.log(productAD[1].style.top)
    }
    if (scrollTop <= 12450) {
        logo[5].style.top = "30%";
        logo[5].style.opacity = "0";
    }
    if (scrollTop >= 12450 && scrollTop <= 12600) {
        logo[5].style.top = "20%";
        logo[5].style.opacity = ".5";
    }
    if (scrollTop >= 12600 && scrollTop <= 12900) {
        logo[5].style.top = "10%";
        logo[5].style.opacity = "1";
    }
    if (scrollTop >= 13200) {
        topM[0].style.color = 'black';
        topM[1].style.color = 'black';
        topM[2].style.color = 'white';
        topM[2].style.background = 'black';
        sns.style.color= 'black'
    }
    if (scrollTop >= 13500 && scrollTop <= 13800) {
        products[3].style.top = `10%`;
    }
    if (scrollTop >= 13800 && scrollTop <= 14100) {
        products[3].style.top = `10%`;
        products[4].style.top = `20%`;
    }
    if (scrollTop >= 14100 && scrollTop <= 14400) {
        products[3].style.top = `0%`;
        products[4].style.top = `10%`;
        products[5].style.top = `20%`;
    }
    if (scrollTop >= 14400 && scrollTop <= 14700) {
        products[4].style.top = `0%`;
        products[5].style.top = `10%`;
    }
    if (scrollTop >= 14700 && scrollTop <= 15000) {
        products[5].style.top = `0%`;
        // productAD[4].style.top = `${productADtop -416}%`;
        // console.log(productAD[1].style.top)
    }
    if (scrollTop >= 14960 && scrollTop <=16350) {
        productAD[2].style.top = `${productADtop - 545}%`
        // console.log(productAD[2].style.top)
    }
    if (scrollTop <= 16400) {
        logo[6].style.top = "30%";
        logo[6].style.opacity = "0";
    }
    if (scrollTop >= 16400 && scrollTop <=16600) {
        logo[6].style.top = "20%";
        logo[6].style.opacity = ".5";
    }
    if (scrollTop >= 16600 && scrollTop <=16900) {
        logo[6].style.top = "10%";
        logo[6].style.opacity = "1";
    }
    if (scrollTop >= 17400 && scrollTop <= 18400) {
        justIMG[0].style.transform = `scale(1.${scaleUP})`
        justIMG[1].style.transform = `scale(1.${scaleUP})`
    }
    if (scrollTop <= 19400) {
        quickBox.style.top = '40vh';
        quickBox.style.opacity = '0'
    }
    if (scrollTop >= 19400 && scrollTop <=19700) {
        quickBox.style.top = '35vh';
        quickBox.style.opacity = '.5'
    }
    if (scrollTop >= 19700 && scrollTop <=20000) {
        quickBox.style.top = '30vh';
        quickBox.style.opacity = '.75'
    }
    if (scrollTop >= 20000 && scrollTop <=20900) {
        quickBox.style.top = '25vh';
        quickBox.style.opacity = '1'
    }
    if (scrollTop <=21400) {
        myContent.style.top = '60vh';
        myContent.style.opacity ='0';
    }
    if (scrollTop >=21400 && scrollTop <=21700) {
        myContent.style.top = '50vh';
        myContent.style.opacity ='.5';
    }
    if (scrollTop >=21700 && scrollTop <=22500) {
        myContent.style.top = '40vh';
        myContent.style.opacity ='1';
    }
})
      
       




