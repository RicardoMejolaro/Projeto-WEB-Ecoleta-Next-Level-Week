const buttonSearch = document.querySelector('#page-search-results header a.botao');
const modal = document.querySelector('#modal')
const close = document.querySelector('#modal .header a')

buttonSearch.addEventListener('click', () => {
  modal.classList.remove('hide')
})

close.addEventListener('click', () => {
  modal.classList.add('hide')
})