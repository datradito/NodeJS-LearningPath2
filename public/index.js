//Sections
const postres = document.getElementById('tm-gallery-page-noodle');
const entradas = document.getElementById('tm-gallery-page-noodle');
const principales = document.getElementById('tm-gallery-page-noodle');
//Buttons
const postresCategory = document.getElementById('postresCategory');
const entradasCategory = document.getElementById('entradasCategory');
const principalCategory = document.getElementById('principalCategory');

//On button click show section
postresCategory.onClick(changeCategory(postres));
entradasCategory.onClick(changeCategory(entradas));
principalCategory.onClick(changeCategory(principales));

function changeCategory(category) {
    let categorySection = getElementById(category);
    categorySection.style.classList.remove('.hidden');
    categorySection.style.backgroundColor = 'blue';
    console.log('hola')
}