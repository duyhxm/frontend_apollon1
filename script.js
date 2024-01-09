const viewPortWidth = window.innerWidth;
const header = document.querySelector("header");
const dbgr = document.querySelector("#debugger");
const buttonHamburger = document.querySelector("#button__hamburger");
const navTable = document.querySelector('#nav_table');
const templateText = document.querySelector('#template_text');
const intro = document.querySelector("#introduction");
const letterSection = document.querySelector("#letter_section");
const aboutUs = document.querySelector("#about_us");
const publicLetter = document.querySelector('#public_letter');
const links = document.querySelectorAll('.link');
const sticks = document.querySelectorAll('.stick');
const pr1 = document.querySelector('#paragraph_0');
const pr2 = document.querySelector('#paragraph_1');
const pr3 = document.querySelector('#paragraph_2');
const pr4 = document.querySelector('#paragraph_3');
const contentContainer = document.querySelector('.content__container');
const child = contentContainer.children;
const buttonInLetter = document.querySelector('#button_in_letter');
const leftArrow = document.querySelector('#left_arrow_container');
const rightArrow = document.querySelector('#right_arrow_container');
const cardsWrapper = document.querySelector('#cards_wrapper');
const cardsArray = cardsWrapper.children;
const iconsWrapper = document.querySelector('#icons_wrapper');
const socialNetworkLink = iconsWrapper.childNodes;
const cardTextArray = document.querySelectorAll('.card__text');
const buttonExpandArray = document.querySelectorAll('.button_expand')
const specHeader = header.getBoundingClientRect();
const leftHeader = specHeader.left;
const heightHeader = Math.ceil(specHeader.height).toFixed(2);
const main = document.querySelector('main');
const abc = Math.ceil(intro.getBoundingClientRect().height + letterSection.getBoundingClientRect().height + aboutUs.getBoundingClientRect().height).toFixed(2);

document.addEventListener('DOMContentLoaded', function() {
    const letterContainer = document.querySelector(".content__container--template");
    const heightLetterContainer = letterContainer.offsetHeight;
    document.documentElement.style.setProperty('--h-content-container', `${Math.ceil(heightLetterContainer).toFixed(2)}px`);
});

const heightLetterContainer = document.querySelector('.content__container--template').offsetHeight;
const g = parseFloat(Math.ceil(3.472222222*3/100*viewPortWidth + parseFloat(heightLetterContainer)).toFixed(2));

const heightPublicLetter = parseFloat(publicLetter.offsetHeight);
let j = parseFloat(intro.offsetHeight + aboutUs.offsetHeight + g - parseFloat(heightHeader));

document.documentElement.style.setProperty('--coordinates_nav_table', `${leftHeader}px`);
window.addEventListener('scroll', () =>{
let a = parseFloat(Math.ceil(specHeader.top + document.documentElement.scrollTop).toFixed(2));
dbgr.innerHTML = `${a} <br> ${parseFloat(heightHeader)} <br> ${yLetterSection}`;

if(parseFloat(a) >= j && parseFloat(a) <= j + heightPublicLetter)
{
    header.classList.add("change");
    featureTable.classList.add('change');
    navTable.style.cssText = 'background-color: white; box-shadow: 5px 5px 10px #e6e6e6, -5px -5px 10px #ffffff;';
    for(let i = 0; i < links.length; i++){
        links[i].style.cssText = 'color: #87cefa';
        }
    }
else{
    header.classList.remove("change");
    featureTable.classList.remove('change');
    navTable.removeAttribute("style");
    for(let i = 0; i < links.length; i++){
        links[i].removeAttribute("style");
        }
    }
});
const widthTemplateText = templateText.offsetWidth;
document.documentElement.style.setProperty('--w-content-nav-table', `${Math.ceil(widthTemplateText)}px`);

buttonHamburger.addEventListener('click', () => {
    if(buttonHamburger.classList.contains('click')){
        buttonHamburger.classList.remove('click');
        navTable.classList.remove('opened');
    }
    else{
        buttonHamburger.classList.add('click');
        navTable.classList.add('opened');
    }
});

function reloadPage() {
    location.reload(true);
}

document.getElementById('img__logo--header').addEventListener('click', () =>{
    window.location.href = 'index.html';
    
});

window.addEventListener('beforeunload', function (e) {
    reloadPage();
});

let arrText;

window.addEventListener('DOMContentLoaded', ()=>{
    const dbgrLanguage = document.querySelector('.debugger_languages');
    const id = dbgrLanguage.id;
    if(id === 'en'){
        arrText = ["Dear you, ", "When was the last time you wrote a letter? In today's fast-paced world, technology has made things quicker, including how we communicate. While it's more convenient, it also means we think and feel less. We may even forget to ask ourselves important questions about who we are and our purpose in life.", "Writing is a powerful way to slow down and see things more clearly. Try writing something for your future self or expressing feelings for someone special that you wouldn't normally share. In our busy lives, taking a moment to write becomes a way to pause, reflect, and reconnect with ourselves and others.", "Best regards,"];
    }
    else if( id === 'cn'){
        arrText = ["亲爱的你, ", "你上一次写信是什么时候？在今天这个快节奏的世界中，技术使事情变得更快，包括我们的交流方式。虽然更加方便，但也意味着我们思考和感觉更少。我们甚至可能会忘记向自己提出关于我们是谁以及我们在生活中的目的的重要问题.", "写作是一种减速和更清晰看事物的强大方式。尝试为你的未来自己写点东西，或者表达对某个特别的人你通常不会分享的感情。在我们繁忙的生活中，写作成为一种停顿、反思和重新连接自己和他人的方式.", "此致敬礼,"];
    }
    else if(id === 'vi'){
        arrText = ["Gửi bạn, ", "Lần gần nhất bạn viết một lá thư hoặc viết cho ai đó là khi nào? Công nghệ đã giúp rút ngắn thời gian để thực hiện nhiều công việc, trong đó bao gồm cả việc giao tiếp. Một cách vô hình trung, hầu hết chúng ta lại suy nghĩ và cảm nhận ít hơn. Thậm chí có thể ta không biết ta là ai và mục đích cho cuộc đời này là gì.", "Việc viết là một cách hữu hiệu để chúng ta chiêm nghiệm lại mọi thứ một cách rõ ràng và ý nghĩa. Hãy thử viết vài điều cho bản thân bạn trong tương lai, hoặc viết cho ai đó những điều mà bạn thường sẽ không nói ra. Dành một khoảng thời gian nhỏ cho việc viết cũng là một cách để nhìn lại và kết nối với chính bản thân ta và người khác.", "Trân trọng,"];
    }
});

let yLetterSection;
window.addEventListener('DOMContentLoaded', () => {
    yLetterSection = letterSection.getBoundingClientRect().y;
    console.log(yLetterSection);
});

let isTextEffectActivated = false;

window.addEventListener('scroll', () => {
    let a = Math.ceil(specHeader.top + document.documentElement.scrollTop).toFixed(2);
    if (a + heightHeader >= Math.ceil(yLetterSection).toFixed(2) && !isTextEffectActivated) {
        isTextEffectActivated = true;
        for (let i = 0; i < child.length; i++) {
            textTypingEffect(child[i], arrText[i]);
        }
    }

    function textTypingEffect(element, text, i = 0) {
        element.textContent += text[i];
        if (i === text.length - 1) {
            return;
        }
        setTimeout(() => textTypingEffect(element, text, i + 1), 30);
    }
});



buttonInLetter.addEventListener('click', () => {
    buttonInLetter.classList.add('clicked');
    setTimeout(() => {
        buttonInLetter.classList.remove('clicked');
    }, 300);
});

socialNetworkLink.forEach(function (icon) {
    icon.addEventListener('click', function () {
        let iconId = icon.id;
        openSocialPage(iconId);
    });
});
function openSocialPage(iconId) {
    let socialUrl;
    switch (iconId) {
        case 'facebook':
            socialUrl = 'https://www.facebook.com/duyhxm0';
            break;
        case 'twitter':
            socialUrl = 'https://www.twitter.com';
            break;
        case 'github':
            socialUrl = 'https://github.com/duyhxm';
            break;
        case 'youtube':
            socialUrl = 'https://www.youtube.com/@duyhxm';
            break;
    }
    window.open(socialUrl, '_blank');
}


function cardsCarousel(){
    let cardsStack = [];
    let cardsQueue = [];
    let maximumClick = 3;
    let countLeft = 3;
    let countRight = 0;
    let currentIndex = 0;
    let statusArr = [{id: "#card_1", index: 0}, {id: "#card_2", index: 1}, {id: "#card_3", index: 2}, {id: "#card_4", index: 3}];
    cardsQueue.push(cardsArray[0].id);
    cardsQueue.push(cardsArray[1].id);
    cardsQueue.push(cardsArray[2].id);
    checkCount(countLeft, countRight);
    rightArrow.addEventListener('click', () => {
        if(cardsQueue.length != 0 && countRight != maximumClick){
            countRight++;
            countLeft--;
            var firstIndexOfQueue = cardsQueue[0];
            cardsQueue.shift();
            cardsStack.unshift(firstIndexOfQueue);
            currentIndex = countRight;
            for(let i = 0; i < statusArr.length; i++){
                statusArr[i].index -= 1;
                transformEffect(statusArr[i].id, statusArr[i].index);
            }
            checkCount(countLeft, countRight);
            rightArrow.classList.add('clicked');
            setTimeout(() => {
            rightArrow.classList.remove('clicked');
            }, 200);
        }
    });
    leftArrow.addEventListener('click', () => {
        if(cardsStack.length != 0 && countLeft != maximumClick){
            countLeft++;
            countRight--;
            var firstIndexOfStack = cardsStack[0];
            cardsStack.shift();
            cardsQueue.push(firstIndexOfStack);
            currentIndex = countLeft;
            for(let i = 0; i < statusArr.length; i++){
                statusArr[i].index += 1;
                transformEffect(statusArr[i].id, statusArr[i].index); 
            }
            checkCount(countLeft, countRight);
            leftArrow.classList.add('clicked');
            setTimeout(() => {
            leftArrow.classList.remove('clicked');
            }, 200);
        }
    });
}
function checkClicked(e){
    if(e.classList.contains('clicked')){
        e.classList.remove('clicked');
    }
    else{
        e.classList.add('clicked');
    }    
}
function checkCount(left, right){
    if(left == 3){
        leftArrow.style.cssText = 'cursor: default';
    }
    else{
        leftArrow.style.cssText = 'cursor: pointer';
    }
    if(right == 3){
        rightArrow.style.cssText = 'cursor: default';
    }
    else{
        rightArrow.style.cssText = 'cursor: pointer';
    }
}

function transformEffect(id , index){
    let string;
    switch(index){
        case -3:
            string = 'z-index: 1; width: 85.17706182%; height: 81.4995925%; left: 0; transform: translate3d(-7.452992909%, 0, 0) rotate(-9deg); box-shadow:  5px 5px 10px #ffffff, -5px -5px 10px #cccccc';
            break;
        case -2: 
            string = 'z-index: 2; width: 85.17706182%; height: 87.46297732%; left: 0; transform: translate3d(-5.323566364%, 0, 0) rotate(-7deg); box-shadow:  5px 5px 10px #ffffff, -5px -5px 10px #cccccc';
            break;
        case -1:
            string = 'width: 85.17706182%; height: 93.42636214%; z-index: 3; left: 0; transform: translate3d(-3.194139818%, 0, 0) rotate(-5deg); box-shadow:  5px 5px 10px #ffffff, -5px -5px 10px #cccccc';
            break;
        case 0:
            string = 'width: var(--w-card); height: 100%; z-index: 4; left: 0; transform: translate3d(0, 0, 0) rotate(0)';
            break;
        case 1: 
            string = 'width: 85.17706182%; height: 93.42636214%; z-index: 3; left: 4.258907505%; transform: rotate(5deg);';
            break;
        case 2:
            string = 'z-index: 2; width: 85.17706182%; height: 87.46297732%; left: 6.388361258%; transform: rotate(7deg);';
            break;
        case 3:
            string = 'z-index: 1; width: 85.17706182%; height: 81.4995925%; left: 8.51781501%; transform: rotate(9deg);';
            break;
    }
    let element = document.querySelector(`${id}`);
    element.style.cssText = string;
}

window.addEventListener('DOMContentLoaded', () => {
    cardsCarousel();
    moveSlide();
});

function isTextOverflow(element){
    const isOverflowing = element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
    
    return isOverflowing;
}
  
for(let i = 0; i < cardTextArray.length; i++){
    let idOfCardText = cardTextArray[i].id;
    let lastCharater = idOfCardText[idOfCardText.length - 1];
    if (isTextOverflow(cardTextArray[i])){
        buttonExpandArray[i].style.cssText = 'visibility: visible';
    }
}

const letterCarousel = document.querySelector('#letter_carousel');
function moveSlide(){
    let cardsStack = [];
    let cardsQueue = [];
    let maximumClick = 3;
    let countLeft = 3;
    let countRight = 0;
    let currentIndex = 0;
    let statusArr = [{id: "#card_1", index: 0}, {id: "#card_2", index: 1}, {id: "#card_3", index: 2}, {id: "#card_4", index: 3}];
    cardsQueue.push(cardsArray[0].id);
    cardsQueue.push(cardsArray[1].id);
    cardsQueue.push(cardsArray[2].id);
    checkCount(countLeft, countRight);
    let touchStartX = 0;
    let touchEndX = 0;

    letterCarousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    letterCarousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > 50) {
            if(cardsStack.length != 0 && countLeft != maximumClick){
                countLeft++;
                countRight--;
                var firstIndexOfStack = cardsStack[0];
                cardsStack.shift();
                cardsQueue.push(firstIndexOfStack);
                currentIndex = countLeft;
                for(let i = 0; i < statusArr.length; i++){
                    statusArr[i].index += 1;
                    transformEffect(statusArr[i].id, statusArr[i].index); 
                }
                checkCount(countLeft, countRight);
                leftArrow.classList.add('clicked');
                setTimeout(() => {
                leftArrow.classList.remove('clicked');
                }, 200);
            }
            
        } else if (swipeDistance < -50) {
            if(cardsQueue.length != 0 && countRight != maximumClick){
                countRight++;
                countLeft--;
                var firstIndexOfQueue = cardsQueue[0];
                cardsQueue.shift();
                cardsStack.unshift(firstIndexOfQueue);
                currentIndex = countRight;
                for(let i = 0; i < statusArr.length; i++){
                    statusArr[i].index -= 1;
                    transformEffect(statusArr[i].id, statusArr[i].index);
                }
                checkCount(countLeft, countRight);
                rightArrow.classList.add('clicked');
                setTimeout(() => {
                rightArrow.classList.remove('clicked');
                }, 200);
            }
        }
    }
}

const setting = document.querySelector('#icon__setting');
const featureTable = document.querySelector('#feature_table');
setting.addEventListener('click', openFeatureTable);

function openFeatureTable(){
    if(featureTable.classList.contains('active') && setting.classList.contains('active')){
        featureTable.classList.remove('active');
        setting.classList.remove('active');
    }
    else{
        featureTable.classList.add('active');
        setting.classList.add('active');
    }
}
// window.addEventListener('DOMContentLoaded', ()=>{
//     const mainLanguage = document.getElementById('language__label');
//     const languages = document.querySelectorAll('.languages_list__items');
//     const item1 = languages[0];
//     const item2 = languages[1];
//     item1.addEventListener('click', changeLanguage(item1));
//     item2.addEventListener('click', changeLanguage(item2));

//     function changeLanguage(e){
//         if(e.id === 'chinese'){
//             console.log(`language is chinese`);
//             window.location.href = 'cn/index.html';
//         }
//         else if(e.id === 'vietnamese'){
//             window.location.href = 'vi/index.html';
//             console.log(`language is vietnamese`);
//         }
//         else if(e.id === 'english'){
//             window.location.href = '/index.html'
//             console.log(`language is english`);
//         }
//     }
// });
window.addEventListener('DOMContentLoaded', () => {
    const mainLanguage = document.getElementById('language__label');
    const languages = document.querySelectorAll('.languages_list__items');
    const item1 = languages[0];
    const item2 = languages[1];
    item1.addEventListener('click', () => changeLanguage(item1));
    item2.addEventListener('click', () => changeLanguage(item2));

    function changeLanguage(e) {
        if (e.id === 'chinese') {
            console.log(`language is chinese`);
            window.location.href = 'http://127.0.0.1:5500/cn/index.html';
        } else if (e.id === 'vietnamese') {
            window.location.href = 'http://127.0.0.1:5500/vi/index.html';
            console.log(`language is vietnamese`);
        } else if (e.id === 'english') {
            window.location.href = 'http://127.0.0.1:5500/index.html';
            console.log(`language is english`);
        }
    }
});





  


