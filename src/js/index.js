import '../scss/style.scss'
import Swiper from 'swiper/bundle'
// import 'swiper/swiper-bundle.css' - перенесен в style.scss

console.log('Works!')

let repairBrandsVisible = false
const showAllRepairBrands = document.querySelector('.repair-brands__show-all')
showAllRepairBrands.addEventListener('click', function (event) {
  event.preventDefault()

  repairBrandsVisible = !repairBrandsVisible
  //скрытые элементы
  let repairBrandsHidden = document.querySelectorAll(
    '.repair-brands__item--hidden'
  )
  repairBrandsHidden.forEach(
    (item) => (item.style.display = repairBrandsVisible ? 'block' : 'none')
  )

  //смена кнопки
  let buttonImg = document.querySelector('.repair-brands__show-all__img')
  buttonImg.setAttribute(
    'href',
    repairBrandsVisible ? 'src/img/up.svg' : 'src/img/down.svg'
  )

  let buttonText = document.querySelector('.repair-brands__show-all__t')
  buttonText.textContent = repairBrandsVisible ? 'Скрыть всё' : 'Показать всё'
})

let repairTypeVisible = false
const showAllRepairType = document.querySelector('.repair-type__show-all')
showAllRepairType.addEventListener('click', function (event) {
  event.preventDefault()

  repairTypeVisible = !repairTypeVisible

  let repairTypeHidden = document.querySelectorAll('.repair-type__item--hidden')
  repairTypeHidden.forEach(
    (item) => (item.style.display = repairTypeVisible ? 'block' : 'none')
  )

  let buttonImg = document.querySelector('.repair-type__show-all__img')
  buttonImg.setAttribute(
    'href',
    repairTypeVisible ? 'src/img/up.svg' : 'src/img/down.svg'
  )

  let buttonText = document.querySelector('.repair-type__show-all__t')
  buttonText.textContent = repairTypeVisible ? 'Скрыть всё' : 'Показать всё'
})

const swiper = new Swiper('.swiper', {
  // Пагинация (точки)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Навигация (стрелки)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Скроллбар отключен
  // scrollbar: {
  //   el: '.swiper-scrollbar'
  // },

  // Фиксированное количество слайдов для работы пагинации
  slidesPerView: 2,
  spaceBetween: 16,

  // Центрирование слайдов
  centeredSlides: false,

  // Добавляем контроль переполнения
  watchOverflow: true,

  // Responsive настройки
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 16
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  }
})
