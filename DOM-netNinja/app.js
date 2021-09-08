// const book1 = document.getElementsByClassName('name');
// const book2 = document.querySelectorAll('.delete');
// console.log(book1);
// console.log(book2);

// Array.from(book1).forEach((book) => {
//     book.textContent += ' test'
// });

// book2.forEach((boob)=>{
//     boob.innerText += ' test'
// });

// const banner = document.querySelector('#page-banner');
// // console.log(form);
// // console.log('type: ' + form.hasAttribute('id'));
// // console.log('type: ' + form.hasChildNodes());

// const clonedbanner = banner.cloneNode(false);
// console.log(clonedbanner);

// const addBook = document.querySelector('#book-list li:nth-child(2) .name');
// addBook.append(clonedbanner);


// const bookList = document.querySelector("#book-list");

const button = document.querySelectorAll("#book-list .delete");

// Array.from(button).forEach((btn)=>{

//     btn.addEventListener('click',(e)=>{

//         const del = e.target.parentElement;
//         del.remove();
//     })
// })


// delete btn
const ul = document.querySelector('#book-list ul');

ul.addEventListener('click', (e)=>{

    if(e.target.className=='delete'){
        const del = e.target.parentElement;
        del.remove();
    }
})


// add book
const addForms = document.forms[1];

addForms.addEventListener('submit', (e)=>{
    e.preventDefault();
    const value = document.querySelector('#add-book input').value;
    
    //create element
    const li = document.createElement('li');
    const spanName = document.createElement('span');
    const spandel = document.createElement('span');

    //add content
    li.style.backgroundColor = 'linen';
    spanName.innerText = value; //spanName.textContent = value;
    spanName.className = "name"; //spanName.classList.add('name')
    spandel.innerText = '削除'; 
    spandel.className = "delete";

    //append document
    li.appendChild(spanName);
    li.appendChild(spandel);
    ul.appendChild(li) ;

});

/* attributes
getAttribute
setAttribute
hasAttribute
removeAttribute */

//hide button
const hide = document.querySelector('#hide');

hide.addEventListener('click', (e)=>{
    const hidden = ul;
    hidden.style.display = 'none';
});

//show button
const show = document.querySelector('#show');

show.addEventListener('click', (e)=>{
    const shower = ul;
    shower.style.display = 'initial';
});

//radio button
const hideRadio = document.querySelector('#radio');
hideRadio.addEventListener('change', (e)=>{
    if(hideRadio.checked){
        ul.style.display = 'none';
    }else {
        ul.style.display = 'flex';
    }
})

//search bar
const filter = document.forms[0];

filter.addEventListener('input', (e)=>{
    const searchBar = e.target.value.toLowerCase();
    const book = document.querySelectorAll("#book-list li");
    const books = Array.from(book);
    books.forEach((bb)=>{
        const eachLi = bb;
        const eachTitle = eachLi.firstElementChild.innerText;
        // console.log(eachTitle);
        // console.log(eachLi);

        if (eachTitle.toLowerCase().indexOf(searchBar) != -1){
            eachLi.style.display = 'block';
        }else{
            eachLi.style.display = 'none';
        }
    });

});

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
        console.log('active')
      }else{
        panel.classList.remove('active');
      }
    });
  }
});