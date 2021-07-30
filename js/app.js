//Imagenes
let images = ['img/anuncio1.jpg','img/anuncio2.jpg','img/anuncio3.jpg','img/anuncio4.jpg'];
//Elemento para cargar el slider
const slider = document.querySelector('#slider-js');
//Elemento general del slider
const sliderContainer = document.querySelector('#slider-container');

//Ancho del contenedor en funcion de las imagenes
slider.style.width = images.length * 100 + '%';

//Elemento para cargar la navegacion
const sliderNav = document.querySelector('#slider-navigation');

//Variable para saber si el slider esta activo
let active = true;

//Eventos para saber si el raton esta sobre el slide
sliderContainer.addEventListener('mouseover', () =>{
    if(active) active=false;
});

//Eventos para saber si el raton no esta sobre el slide
sliderContainer.addEventListener('mouseout', () =>{
    if(!active) active=true;
});

//Eventos al pulsar en la navegacion
sliderNav.addEventListener('click', (e) => slideImage(e.target.id.slice(-1)));


//Dibujar slider y navegacion
for (img in images) {
    //cargar imagenes
    slider.innerHTML += `<img src="${images[img]}" class="slider__img" style="width: ${100/images.length}%">`;

    //Cargar navegacion
    sliderNav.innerHTML += `<span class="${img == 0 ? 'slider-nav slider-nav--active': 'slider-nav'}" id="slider-nav-${img}"></span>`;
}

//Variable contador de imagenes
let cont = 0;

//Intervalos de tiempo para el contador
const startinterval = () => setInterval( counter , 2000);

//Iniciar el contador
startinterval();

//Funcion que cambia de imagen
function counter(){
    if(active){
        cont++;
        if(cont>=images.length){
            cont = 0;
        }
        setInterval(slideImage(cont), 2000);
        setInterval(setActive(cont), 2000);
    }
}
function slideImage(id){
    if(!active && !isNaN(id)){
        cont= id;
        setActive(id);
    }
    slider.style.left = `-${id}00%`;
}
const navIcons = document.querySelectorAll('.slider-nav');


function setActive(id){
   /*  for (let icon  in navIcons) {
        
        
        if(icon<navIcons.length){
            if(navIcons[icon].id === `slider-nav-${id}`){
                document.getElementById(navIcons[icon].id).classList.add("slider-nav--active");
            }else{
                document.getElementById(navIcons[icon].id).classList.remove("slider-nav--active");
            }

        }
    } */
    
    
    
    Object.values(navIcons).map(idValue => idValue.attributes.id.nodeValue.slice(-1) == id ? 
                            idValue.classList.add("slider-nav--active") : 
                            idValue.classList.remove("slider-nav--active")
    )
}