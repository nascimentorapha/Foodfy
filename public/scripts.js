
const info = document.querySelectorAll('.recipe-info-text')
const visibility = document.querySelectorAll('.visibility')

const cards = document.querySelectorAll('.card')
const cards_admin = document.querySelectorAll('.card_admin_inside')

//******** Esconder/Mostrar info das receitas ********//

for(let i = 0; i < visibility.length; i++) {
  visibility[i].addEventListener('click', function(){
    if(info[i].classList.contains('hide')){
      info[i].classList.remove('hide')
      visibility[i].innerHTML = "ESCONDER"
    }
    else {
      info[i].classList.add('hide')
      visibility[i].innerHTML = "MOSTRAR"
    }
  })
}


//******** Click pra seguir pra página da receita ********//

for (let [i, card] of cards.entries()){
    card.addEventListener("click", function(){
        window.location.href=`/recipe/${i}`
    })
}

for (let [i, card_admin] of cards_admin.entries()){
  card.addEventListener("click", function(){
      window.location.href=`/admin/recipe/${i}`
  })
}