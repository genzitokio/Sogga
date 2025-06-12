import '../scss/style.scss'
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'




console.log('Works!')

let repairBrandsVisible = false
const showAllRepairBrands = document.querySelector('.repair-brands__show-all')
showAllRepairBrands.addEventListener('click', function (event) {
  event.preventDefault()

  //смена статуса отображения
  repairBrandsVisible = !repairBrandsVisible
  //скрытые элементы
  let repairBrandsHidden = document.querySelectorAll('.repair-brands__item--hidden')
  repairBrandsHidden.forEach(item => item.style.display = repairBrandsVisible ? 'block' : 'none')
  
  //смена кнопки
  let buttonImg = document.querySelector('.repair-brands__show-all__img')
  buttonImg.setAttribute('href', repairBrandsVisible ? 'src/img/up.svg' : 'src/img/down.svg')

  let buttonText = document.querySelector('.repair-brands__show-all__t')
  buttonText.textContent = repairBrandsVisible ? 'Скрыть всё' : 'Показать всё'

})



let repairTypeVisible = false
const showAllRepairType = document.querySelector('.repair-type__show-all')
showAllRepairType.addEventListener('click', function (event) {
  event.preventDefault()

  repairTypeVisible = !repairTypeVisible

  let repairTypeHidden = document.querySelectorAll('.repair-type__item--hidden')
  repairTypeHidden.forEach(item => item.style.display = repairTypeVisible ? 'block' : 'none')
  
  let buttonImg = document.querySelector('.repair-type__show-all__img')
  buttonImg.setAttribute('href', repairTypeVisible ? 'src/img/up.svg' : 'src/img/down.svg')

  let buttonText = document.querySelector('.repair-type__show-all__t')
  buttonText.textContent = repairTypeVisible ? 'Скрыть всё' : 'Показать всё'

})