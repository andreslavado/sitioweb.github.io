// variables para barra de menu

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');

// variable para menu 700px
let abrir = document.getElementById('open')
let botone = document.getElementsByClassName('btn-header')
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <=300){
        nav.classList.remove('nav2');
        nav.classList =('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';

    }else{
        nav.classList.remove('nav1');
        nav.classList =('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if (cerrado){
        menu.style.width ='70vw';
        cerrado = false;
    }else{
        menu.style.width ='0%';
        menu.style.overflow = 'hidden'
        cerrado = true;
    }
}

// faltal actualizar se pierde menu

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
}); 
//

//funcion desaparecer menu al click en otro elemento
window.addEventListener('click', function(e){
    console.log(e.target);
    if(cerrado == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow='hidden';
            cerrado = true;
        }
    }
})

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});

window.addEventListener('resize', function(){
    if(screen.width>=700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});