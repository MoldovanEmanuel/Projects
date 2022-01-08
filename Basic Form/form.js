'use strict'

const form = document.getElementById('form'); 
const submit = document.getElementById('submit'); 

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const commentsList = document.querySelector('[data-comments-list]'); 

    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const gender = document.getElementsByName('Gender');
    const message = document.getElementById('message').value; 

    console.log('First Name: ' + firstName);
    
    console.log('Last Name: ' + lastName);

    if (gender[0].checked) {
        console.log('Gender: M') 
    } else {
        console.log('Gender: F') }; 
  
    console.log('Message: ' + message);

    const bannerEl = document.createElement('article'); 
    const checkEl = document.createElement('span'); 
    const messageEl = document.createElement('p'); 
    const closeEl = document.createElement('span'); 

    bannerEl.append(checkEl, messageEl, closeEl); 

    checkEl.setAttribute('src', '<i class="fas fa-check-circle"></i>');
    checkEl.alt = 'checkicon.png'
    checkEl.className = 'check-icon'; 

    messageEl.className = 'confirmation-banner'; 
    messageEl.innerText = 'Thank you for contacting us, ' + firstName + '!'; 

    closeEl.setAttribute('src', '<i class="fas fa-times-x-icon"></i>');
    closeEl.alt = 'closeicon.png'; 
    closeEl.className ='x-icon'; 

    commentsList.append(bannerEl); 

}); 

    

      









