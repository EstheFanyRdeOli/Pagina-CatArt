
let scrollAmount=0;

function scrollProducts(direction) {
  const productList = document.getElementById('lista-produtos');
  const productWidth = productList.children[0].offsetWidth + 20;
  scrollAmount += direction * productWidth;
  productList.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}


const secoes = document.querySelectorAll('.secao');

let scrollAmount=0;

function scrollProducts(direction) {
  const productList = document.getElementById('lista-produtos');
  const productWidth = productList.children[0].offsetWidth + 20;
  scrollAmount += direction * productWidth;
  productList.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}


const secoes = document.querySelectorAll('.secao');

const body = document.body;

secoes.forEach(secao => {
  secao.addEventListener('mouseover', ()=> {
    const newBackground = secao.getAttribute('data-background');
    body.classList.add('transition');
    body.style.setProperty('--background', 'url(${newBackground})');
    body.style.backgroundImage = newBackground;
  });
  secao.addEventListener('mouseout',() =>{
    body.style.backgroundImage = "url(https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2023-06/foto-de-gato1.jpg.webp?itok=rijwOfGy)";
  });
})



const body = document.body;

secoes.forEach(secao => {
  secao.addEventListener('mouseover', ()=> {
    const newBackground = secao.getAttribute('data-background');
    body.classList.add('transition');
    body.style.setProperty('--background', 'url(${newBackground})');
    body.style.backgroundImage = newBackground;
  });
  secao.addEventListener('mouseout',() =>{
    body.style.backgroundImage = "url(https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2023-06/foto-de-gato1.jpg.webp?itok=rijwOfGy)";
  });
})


