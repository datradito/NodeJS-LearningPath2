//Sections
const postres = document.getElementById('tm-gallery-page-postres');
const entradas = document.getElementById('tm-gallery-page-entradas');
const principales = document.getElementById('tm-gallery-page-principales');
//Buttons
const postresCategory = document.getElementById('postresCategory');
const entradasCategory = document.getElementById('entradasCategory');
const principalCategory = document.getElementById('principalCategory');

//On button click show section
entradasCategory.addEventListener('click', () => {
    entradasCategory.classList.add('active');
    postresCategory.classList.remove('active');
    principalCategory.classList.remove('active');

    entradas.classList.remove('hidden');
    principales.classList.add('hidden');
    postres.classList.add('hidden');
});
principalCategory.addEventListener('click', () => {
    entradasCategory.classList.remove('active');
    postresCategory.classList.remove('active');
    principalCategory.classList.add('active');

    principales.classList.remove('hidden');
    entradas.classList.add('hidden');
    postres.classList.add('hidden');
});
postresCategory.addEventListener('click', () => {
    entradasCategory.classList.remove('active');
    postresCategory.classList.add('active');
    principalCategory.classList.remove('active');

    postres.classList.remove('hidden');
    principales.classList.add('hidden');
    entradas.classList.add('hidden');
});