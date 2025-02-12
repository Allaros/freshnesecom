// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

window.addEventListener("load", function(e){
    const grid = document.querySelector('.page-title__grid');
    const list = document.querySelector('.page-title__list');
    grid.classList.remove('grid-active');
    list.classList.add('list-active');
    grid.addEventListener('click', function(e){
        if(document.querySelector('.goods')){
            document.querySelector('.goods').classList.remove("goods_list");
            document.querySelector('.goods').classList.add("goods_grid");
            grid.classList.add('grid-active');
            list.classList.remove('list-active');
        }
    })
    list.addEventListener('click', function(e){
        if(document.querySelector('.goods')){
            document.querySelector('.goods').classList.add("goods_list");
            document.querySelector('.goods').classList.remove("goods_grid");
            list.classList.add('list-active');
            grid.classList.remove('grid-active');
        }
    })

})
