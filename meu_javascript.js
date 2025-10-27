// Inicio da interação slideShow
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');


    let index = 0;//Slide inicial
    const totalSlides = images.length;//Número total de slides


    // Atualiza  o slide
    function showSlide(idx) {
        slides.style.transform = `translateX(${-idx * 100}%)`;
    }


    // Botão "anterior"
    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : totalSlides - 1;
        showSlide(index);
    });


    // Botão "proximo"
    next.addEventListener('click', () => {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        showSlide(index);
    });


    // Ajusta o slide ao redirecionar a janela
    window.addEventListener('resize', () => showSlide(index));


    // Transição automática (opcional)
    setInterval(() => {
        index = (index < totalSlides -1) ? index + 1 : 0;
        showSlide(index);
    }, 4000);// Troca a cada 3 segundos
});








// Fim da interação slideShow


//Inicio da interação do menu
document.addEventListener('DOMContentLoaded',() =>{
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');


    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open')//Alterna a classe "open"
    });
});
//Fim da interação do menu

