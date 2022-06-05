// const openModalButtons = document.querySelectorAll('[data-modal-targets]')
// const closeModalButtons = document.querySelectorAll('[data-close-buttons]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//     button.addEventListener('click',() => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click',() => {
//         const modal = button.closest('.modalCard')
//         closeModal(modalCard)
//     })
// })

// function openModal(modalCard){
//     if (modalCard == null) return
//     modalCard.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modalCard){
//     if (modalCard == null) return
//     modalCard.classList.remove('active')
//     overlay.classList.remove('active')
// }


// let content = document.querySelector('.content');

// var request = new XMLHttpRequest();
// request.onload = function(){
//     let data = JSON.parse(this.response);
    
//     if (request.status >= 200 && request.status < 400) {
  
//       data.forEach(function(reference) {
// }

//Create and configure HTML elements to house the data
//Card container
// let card = document.createElement('div');
// card.setAttribute('class', 'card');

// Title heading 
// let heading = document.createElement('h3');
// heading.textContent = reference.title;

// // Description paragraph 
// let paragraph = document.createElement ('p');
// reference.description = reference.description.substring (0, 300);
// paragraph.textContent = '${reference.description}...';

// content.appendChild (card);
// card.appendChild(heading);
// card appendChild(paragraph);


