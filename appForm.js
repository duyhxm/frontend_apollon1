const viewportWidth = window.innerWidth;
const mouse = document.querySelector(".mouse");
//mouse
let widthMouse = 3;
let heightMouse = 5;
const sizeOfMouse = () => {
    if(viewportWidth < 425){
        widthMouse = 6;
        heightMouse = 10;
    }
    else if(viewportWidth >= 425 && viewportWidth < 768){
        widthMouse = 12;
        heightMouse = 20;
    }
    else if(viewportWidth >= 768 && viewportWidth < 1024){
        widthMouse = 18;
        heightMouse = 30;
    }
    else if(viewportWidth >= 1024 && viewportWidth < 1440){
        widthMouse = 24;
        heightMouse = 40;
    }
    else if(viewportWidth >= 1440 && viewportWidth < 2559){
        widthMouse = 30;
        heightMouse = 50;
    }
    else if(viewportWidth >= 2560){
        widthMouse = 36;
        heightMouse = 60;
    }
}
sizeOfMouse();
let borderMouse = 10*widthMouse/100;
let sizeOfDot = borderMouse*2;
let marginOfDot= sizeOfDot;
let distanceToMove = heightMouse - borderMouse * 2 - marginOfDot * 3/2 - sizeOfDot;
document.documentElement.style.setProperty('--width-mouse', `${widthMouse}px`);
document.documentElement.style.setProperty('--height-mouse', `${heightMouse}px`);
document.documentElement.style.setProperty('--border-mouse', `${borderMouse}px`);
document.documentElement.style.setProperty('--distance-to-move', `${Math.floor(distanceToMove)}px`);
//---------------------------------------------
//animation when overflow
const textarea = document.querySelector("#letter_content");
function displayMouse(){
    const area = document.querySelector('#letter_content');
    if(area.scrollHeight > area.clientHeight){
        mouse.style.display =  'block';
    }
    else{
        mouse.style.display = 'none';
    }
}
textarea.addEventListener("input", displayMouse);
//---------------------------------------------
//body
const wrapper = document.querySelector(".wrapper");
const logo = document.querySelector("#logo");
const body = document.querySelector("body");
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});
wrapper.getBoundingClientRect();
logo.getBoundingClientRect();
const heightWrapper = wrapper.offsetHeight;
const heightLogo = logo.offsetHeight;
const heightBody = heightWrapper + wrapper.offsetTop;
document.body.style.height = heightBody;
//---------------------------------------------
//for logo
const magneto = document.querySelector(".magneto-button");
const magnetoText  = document.querySelector(".magneto-button--child");
const dbg = document.querySelector("#debugger");
const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 3.2599837*viewportWidth/100;
    const magnetoTextStrength = 6.5199674*viewportWidth/100;
    const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.5;
    const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.5;

    dbg.innerHTML = `cursorX: ${Math.ceil(event.clientX)} <br>
    boxleft: ${Math.ceil(boundBox.left)} <br>
    cursorInsideButton: ${Math.floor(event.clientX - boundBox.left)} <br>
    relativeToTotalWidth: ${((event.clientX - boundBox.left) / magneto.offsetWidth).toFixed(2)} <br>
    shifted: ${((event.clientX - boundBox.left) / magneto.offsetWidth - 0.5).toFixed(2)}`;
    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    });
    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    });
}
const resetMagneto = (event) => {

    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })

    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
}
magneto.addEventListener("mousemove", activateMagneto)
magneto.addEventListener("mouseleave", resetMagneto)
//--------------------------------------------

//area to write letter
const letter = document.querySelector('#letter_content');
const result = document.querySelector('#result');
const statusDot = document.querySelectorAll(".status_dot");

function updateTextareaContent() {
    const dotDate = document.querySelector('#status_dot__date_time');
    const dotLetter = document.querySelector('#status_dot__letter');
    const warningDot = document.querySelector('#status_dot__letter_container');
    const dotEmail = document.querySelector('#status_dot_container__email');
    const dotName = document.querySelector('#status_dot_container__name');
    const dotDateContainer = document.querySelector('#status_dot_container__date_time');
    let text = document.querySelector(".template_text");
    let content = letter.value;
    if(dotDate.classList.contains('invalid')){
        dotDate.classList.remove('invalid');
    }
    dotDateContainer.classList.remove('warn')
    dotEmail.classList.remove('message');
    dotName.classList.remove('message');
    document.querySelector('#status_dot__email').classList.remove('empty');
    for(let i=0; i < statusDot.length-1; i++){
        statusDot[i].classList.remove("status_dot--typing");
    }

    if(content.trim() !== ""){
        text.classList.add("template_text--typing");
        dotLetter.classList.add('typing');
        dotLetter.classList.remove('valid', 'invalid');
        warningDot.classList.remove('warn');
    }
    else{
        text.classList.remove("template_text--typing");
    }
    result.textContent = content;
}

letter.addEventListener('blur', ()=> {
    const dot = document.querySelector('#status_dot__letter');
    const warningDot = document.querySelector('#status_dot__letter_container');
    const dotEmail = document.querySelector('#status_dot_container__email');
    const dotName = document.querySelector('#status_dot_container__name');
    const notifiName = document.querySelector('#notification__name');
    const notifiEmail = document.querySelector("#notification__email");
    if(letter.value.trim() === ""){
        dot.classList.remove('typing', 'valid', 'invalid');
        warningDot.classList.remove('warn');
        for(let i=0; i < statusDot.length-1; i++){
            statusDot[i].classList.remove("status_dot--typing");
        }
        dotEmail.classList.remove('message');
        dotName.classList.remove('message');
        notifiEmail.innerHTML= "";
        notifiName.innerHTML="";
    }
    else{
        dot.classList.add('valid');
        dot.classList.remove('typing', 'invalid');
        warningDot.classList.remove('warn');
        for(let i=0; i < statusDot.length-1; i++){
            statusDot[i].classList.add("status_dot--typing");
        }
        if(!document.querySelector('#status_dot__name').classList.contains('valid')){
            notifiName.innerHTML = "Anonymous information";
            dotName.classList.add('message');
        }
        if(!document.querySelector("#status_dot__email").classList.contains('valid')){
            dotEmail.classList.add('message');
            notifiEmail.innerHTML = "Anonymous information. The letter will be sent publicly.";
        }
    }
});
//--------------------------------------------

//upload button
const button = document.querySelector(".upload_button");
const fileInput = button.querySelector("#file")


button.addEventListener("click", () => {
    fileInput.click();
});
const textInUploadButton = document.querySelector(".upload_button_text");

const widthOfText = textInUploadButton.offsetWidth;

// console.log(widthOfText);

document.documentElement.style.setProperty('--width-upload-button', `${widthOfText}px`)

//send-button
const $send_button = document.querySelector('.send-button');
// let processing = false;

// $send_button.addEventListener('click', () => {
//   if (processing) return;
//   let reverting = false;
//   processing = true;
//   const $endListener = document.createElement('div');
//   $endListener.classList.add('send-button-transitionend-listener');
//   $send_button.appendChild($endListener);
//   const layoutTrigger = $send_button.offsetTop;
//   $send_button.classList.add('s--processing');
  
//   $endListener.addEventListener('transitionend', () => {
//     if (reverting) return;
//     reverting = true;
//     $send_button.classList.add('s--reverting');
//   });
  
//   setTimeout(() => {
//     $send_button.removeChild($endListener);
//     $send_button.classList.remove('s--processing', 's--reverting');
//     processing = false;
//   }, 10000);
// });

//upload file

    function uploadFile() {
        const fileInput = document.getElementById('file');
        const fileContentDiv = document.getElementById('letter_content');
        const fileName = document.querySelector('.file_name');
        const form = document.querySelector('.letter_information');
        const formData = new FormData();
        formData.append('fileInput', fileInput.files[0]);
        console.log(formData);
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
          });
        if (!fileInput.files.length) {
            alert('Vui lòng chọn một file.');
            return;
        }
    
        const selectedFile = fileInput.files[0];
        const size = Math.ceil(selectedFile.size/1024).toFixed(2);
        const progress = document.querySelector('#progress');
        progress.style.cssText = `visibility: visible`;
        const widthOfProgress = progress.offsetWidth;
        const time = 3;
        console.log(selectedFile);
        console.log('check size: ',size);
        
        const allowedTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain'];
    
        if (!allowedTypes.includes(selectedFile.type)) {
            alert('We only support .doc, .docx, or .pdf and .txt file formats. We are very sorry about this.');
            return;
        }
        else{
            fileName.textContent = selectedFile.name;
            document.querySelector('.file_format_icon').classList.remove('active');
            document.querySelector('#file_format_icon__pdf_file').classList.remove('finished', 'active');
            document.querySelector('#file_format_icon__docx_file').classList.remove('finished', 'active');
            document.querySelector('#file_format_icon__txt_file').classList.remove('finished', 'active');
            document.querySelector('#file_format_icon__unknown_file').classList.remove('hidden');
        }
    
        fileContentDiv.innerHTML = "";
    
        if (selectedFile.type === 'application/msword' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const reader = new FileReader();
            document.querySelector('#file_format_icon__docx_file').classList.add('active');
            document.querySelector('#file_format_icon__unknown_file').classList.add('hidden');
                reader.onload = async function (e) {
                    const arrayBuffer = e.target.result;
                    const startTime = new Date();
                    try {
                        const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
                        const endTime = new Date();
                        const processingTime = (endTime - startTime) / 1000;
                        const t = processingTime > time ? processingTime : time;
                        if (processingTime < time) {
                            progress.style.cssText = `transition-duration: ${time}s`;
                            progress.classList.add('active');
                        }
                        else{
                            progress.style.cssText = `transition-duration: ${processingTime}s`;
                            progress.classList.add('active');
                        }
                        setTimeout(()=>{
                            progress.classList.add('finished');
                            document.querySelector('#file_format_icon__docx_file').classList.add('finished');
                            progress.style.cssText = `transition-duration: 0.5s;transition-timing-function: ease-in-out`;
                            setTimeout(()=>{
                                progress.style.cssText = `visibility: hidden`;
                                progress.classList.remove('active');                
                            },1000);
                        },t*1000);
                        setTimeout(() =>{
                            fileContentDiv.textContent = result.value;
                            displayMouse();
                            document.querySelector('#status_dot__letter').classList.add('valid');
                        }, t*1000+1000);

                    } catch (error) {
                        console.error(error);
                    }
                };
    
            reader.readAsArrayBuffer(selectedFile);
        } else if (selectedFile.type === 'application/pdf') {
            document.querySelector('#file_format_icon__pdf_file').classList.add('active');
            document.querySelector('#file_format_icon__unknown_file').classList.add('hidden');
            const startTime = new Date();
            fetch('http://localhost:3000/pdf-file', {
                method: 'POST',
                body: formData,
              })
                .then(response => response.json())
                .then(data => {
                    const endTime = new Date();
                    const processingTime = (endTime - startTime)/1000;
                    const t = processingTime > time ? processingTime : time;
                    if (processingTime < time) {
                        progress.style.cssText = `transition-duration: ${time}s`;
                        progress.classList.add('active');
                    }
                    else{
                        progress.style.cssText = `transition-duration: ${processingTime}s`;
                        progress.classList.add('active');
                    }
                    setTimeout(()=>{
                        progress.classList.add('finished');
                        document.querySelector('#file_format_icon__pdf_file').classList.add('finished');
                        progress.style.cssText = `transition-duration: 0.5s;transition-timing-function: ease-in-out`;
                        setTimeout(()=>{
                            progress.style.cssText = `visibility: hidden`;
                            progress.classList.remove('active');                
                        },1000);
                    },t*1000);
                    setTimeout(() =>{
                        fileContentDiv.textContent = data.message;
                        console.log(data);
                        displayMouse();
                        document.querySelector('#status_dot__letter').classList.add('valid');
                    }, t*1000+1000);
                })
                .catch(error => {
                  console.error('Error:', error);
                });
        } else {
            const reader = new FileReader();
            const startTime = new Date();
            document.querySelector('#file_format_icon__txt_file').classList.add('active');
            document.querySelector('#file_format_icon__unknown_file').classList.add('hidden');
            reader.onload = function (e) {
                const text = e.target.result;
                const endTime = new Date();
                const processingTime = (endTime-startTime)/1000;
                const t = processingTime > time ? processingTime : time;
                    if (processingTime < time) {
                        progress.style.cssText = `transition-duration: ${time}s`;
                        progress.classList.add('active');
                    }
                    else{
                        progress.style.cssText = `transition-duration: ${processingTime}s`;
                        progress.classList.add('active');
                    }
                    setTimeout(()=>{
                        progress.classList.add('finished');
                        document.querySelector('#file_format_icon__txt_file').classList.add('finished');
                        progress.style.cssText = `transition-duration: 0.5s;transition-timing-function: ease-in-out`;
                        setTimeout(()=>{
                            progress.style.cssText = `visibility: hidden`;
                            progress.classList.remove('active');                
                        },1000);
                    },t*1000);
                    setTimeout(() =>{
                        fileContentDiv.textContent = text;
                        displayMouse();
                        document.querySelector('#status_dot__letter').classList.add('valid');
                    }, t*1000+1000);
            };
            reader.readAsText(selectedFile, 'UTF-8');
        }
    
        let text = document.querySelector(".template_text");
        text.classList.add("template_text--typing");
    } 
    document.getElementById('file').addEventListener('change', uploadFile);
//--------------------------------------------------------

let processing = false;
const sendButton = document.querySelector(".send-button");

//email authentication
function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function handleValidationResponse(responseText) {
   
    console.log("Response from API:", responseText);
    const data = JSON.parse(responseText);
    console.log(data);
    console.log(data.email);
    console.log(data.is_valid_format.value);
}
sendButton.addEventListener('click', () => {
    const emailValue = document.getElementById('email').value;
    const dateValue = document.getElementById('date_time').value;
    const nameValue = document.getElementById('name').value;
    const contentValue = document.getElementById('letter_content').value;
    const checkContent = validateContent(); //true or false
    const checkName = validateName(); //true or false
    const checkEmail = validateEmail(); //true or false
    const checkDate = validateDate();
    const userData = {
        name: nameValue,
        email: emailValue,
        date: dateValue,
        text: contentValue
    };
    if(!checkContent){
        document.querySelector('#status_dot__letter').classList.add('invalid');
        document.querySelector('#status_dot__letter_container').classList.add('warn');
    }
    if(!checkDate){
        document.querySelector('#status_dot_container__date_time').classList.add('warn');
        document.querySelector('#notification__date_time').innerHTML = 'Not be empty';
    }
    if(checkName && checkEmail && checkDate && checkContent){
        if(emailValue === ''){
            fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
             })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        }else{
            fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=abff934b1401422483bbe486f07aca2f&email=${emailValue}`)
            .then(response => response.json())
            .then(data =>{
                if(data.is_valid_format && data.deliverability === "DELIVERABLE"){
                    fetch('http://localhost:3000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => console.error('Error:', error));
                }else{
                    sendButton.classList.add('failure');
                    document.querySelector('#status_dot_container__email').classList.add('warn');
                    document.querySelector('#status_dot__email').classList.add('invalid');
                    document.querySelector('#notification__email').innerHTML = 'non-existent email';
                }
            })
            .catch(error => console.error('Error:', error));

            }
    }
    else{
        sendButton.classList.add('failure');
        setTimeout( () => {
            sendButton.classList.remove('failure');
        }, 700);
    }
});
//--------------------------------------------------------

function validateName() {
    const name = document.getElementById("name");
    const dotName = document.querySelector('#status_dot_container__name');
    const dot = document.querySelector('#status_dot__name');
    const notifi = document.querySelector("#notification__name");
    const nameValue = name.value;
    const pattern = /^[a-zA-Z0-9 ]*$/;
    if (nameValue.length > 255 || !pattern.test(nameValue)) {
        dot.classList.add('invalid');
        dot.classList.remove('valid');
        dotName.classList.add('warn');
        notifi.innerHTML = 'The value can only contain latin characters, no special characters, and can contain spaces.';
        return false;
    }
    else if(nameValue.length <= 255 && pattern.test(nameValue)){
        dot.classList.add('valid');
        dot.classList.remove('invalid');
        dotName.classList.remove('warn', 'message');
        notifi.innerHTML = '';
        return true;
    }
}
function validateEmail(){
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = document.querySelector('#email');
    const dotEmail = document.querySelector('#status_dot_container__email');
    const dot = document.querySelector('#status_dot__email');
    const emailValue = email.value.trim();
    const notifi = document.querySelector('#notification__email');
    if (emailValue.length === 0) {
        dot.classList.remove('valid', 'invalid');
        dot.classList.add('empty');
        dotEmail.classList.remove('warn');
        dotEmail.classList.remove('message');
        notifi.innerHTML = '';
        return true;
    }
    if (emailRegex.test(emailValue)) {
        dot.classList.remove('invalid', 'empty');
        dot.classList.add('valid');
        dotEmail.classList.remove('warn');
        dotEmail.classList.remove('message');
        notifi.innerHTML = '';
        return true;
    } else {
        dot.classList.remove('valid', 'empty');
        dot.classList.add('invalid');
        dotEmail.classList.add('warn');
        notifi.innerHTML = 'Invalid email';
        return false;
    }
}
document.querySelector('#name').addEventListener('input', validateName);
document.querySelector('#email').addEventListener('input', validateEmail);
document.querySelector('#name').addEventListener('blur', ()=>{
    const l = document.querySelector('#name').value.trim();
    const dot = document.querySelector('#status_dot__name');
    if(l.length === 0){
        dot.classList.remove('invalid', 'valid');
    }
});
document.querySelector('#email').addEventListener('blur', ()=>{
    const email = document.querySelector("#email").value.trim();
    if(email.length === 0){
        document.querySelector("#email").classList.remove('not-empty');
    }
    else{
        document.querySelector("#email").classList.add('not-empty');
    }
});








// sendButton.addEventListener('click', function () {
//   if (processing) return;
//   let reverting = false;
//   processing = true;

//   const endListener = document.createElement('div');
//   endListener.classList.add('send-button-transitionend-listener');
//   sendButton.appendChild(endListener);

//   const layoutTrigger = sendButton.offsetTop;
//   sendButton.classList.add('s--processing');

//   function transitionEndHandler() {
//     if (reverting) return;
//     reverting = true;
//     sendButton.classList.add('s--reverting');
//   }

//   endListener.addEventListener('transitionend', transitionEndHandler);

//   setTimeout(function () {
//     sendButton.removeChild(endListener);
//     sendButton.classList.remove('s--processing', 's--reverting');
//     processing = false;
//     endListener.removeEventListener('transitionend', transitionEndHandler);
//   }, 10000);
// });

const dateInput = document.getElementById('date_time');

function validateDate() {
    const status_dot = document.querySelector("#status_dot__date_time");
    const dotDate = document.querySelector('#status_dot_container__date_time');
    const notifi = document.querySelector("#notification__date_time");
    const userDate = new Date(dateInput.value);
    const currentDate = new Date();
    if (userDate > currentDate) {
        status_dot.classList.add('valid');
        status_dot.classList.remove('invalid');
        dotDate.classList.remove('warn');
        notifi.innerHTML = '';
        return true;
    } else {
        status_dot.classList.add('invalid');
        status_dot.classList.remove('valid');
        dotDate.classList.add('warn');
        notifi.innerHTML = 'Invalid date. No messages to the past.';
    }
    if(dateInput.value === ''){
        dateInput.classList.add('empty');
        dateInput.classList.remove('not_empty');
        dotDate.classList.remove('warn');
        notifi.innerHTML = '';
    }
    else{
        dateInput.classList.add('not_empty');
        dateInput.classList.remove('empty');
    }
    return false;
}
dateInput.addEventListener('input', validateDate);
document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#date_time", {
      enableTime: true,
      time_24hr: false,
      dateFormat: "m/d/Y H:i",
      onChange: function () {
        document.querySelector('#date_time').classList.add("changing");
      },
      onClose: function () {
        document.querySelector('#date_time').classList.remove("changing");
        const dateLength = document.querySelector('#date_time').value.length;
        if(dateLength != 0){
            document.querySelector('#date_time').classList.add('not_empty');
            document.querySelector('#date_time').classList.remove('empty');
        }
      }
    });
});

document.querySelector('#date_time').addEventListener('blur', resetStateOfDate);
function resetStateOfDate(){
    const dateTime = document.querySelector('#date_time');
    const dotOfDate = document.querySelector('#status_dot__date_time');
    if(dateTime.value === ''){
        dateTime.classList.remove('empty');
        dotOfDate.classList.remove('invalid');
    }
}
// sendButton.addEventListener('click', () => {
//     const userData = {
//         username: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         // Thêm các trường dữ liệu khác nếu cần
//       };
//     console.log('It works'); 
//       // Gửi dữ liệu đến backend
//       fetch('http://localhost:3000/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data); // Xử lý phản hồi từ backend (nếu có)
//         })
//         .catch(error => console.error('Error:', error));
// });

function validateContent(){
    const content = document.querySelector('#letter_content').value.trim();
    if(content.length === 0){
        console.log('empty');
        return false;
    }
    else{
        console.log('not empty');
        return true;
    }
}

window.addEventListener('beforeunload', function (event) {
    if(document.querySelector('#letter_content').value.trim() != ''){
        console.log('hello');
        const confirmationMessage = 'Are you sure?';
        event.returnValue = confirmationMessage;
        return confirmationMessage;
    }
});
window.addEventListener('unload', function (event) {
    const confirmationMessage = 'Bạn có chắc chắn muốn rời khỏi trang?';
  
    if (document.querySelector('#letter_content').value.trim() !== '') {
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    }
});
