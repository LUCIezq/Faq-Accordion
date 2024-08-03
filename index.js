const card = document.querySelectorAll(".card-question");
const card_main = document.querySelector('.card-main');



  card.forEach(element=>{

    const title = element.querySelector('.question-title');
    const icon_more = element.querySelector('.icon-more');
    const parrafo = element.querySelector('.question-description');
    const icon_minus = element.querySelector('.icon-minus');
  
    title.addEventListener('click',(e)=>{
      parrafo.classList.toggle('active')
    })
    icon_more.addEventListener('click',(e)=>{
      parrafo.classList.toggle('active');
    })
  })

