import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export async function FreeContents() {
  const freeContentsSection = document.createElement('section')
  freeContentsSection.classList.add('free-contents-section')

  // عنوان
  const heading = document.createElement('h2')
  heading.textContent = 'محتواهای رایگان'
  heading.style.fontSize = '1.2rem'
  heading.style.fontWeight = 'bold'
  heading.style.marginBottom = '16px'
  heading.style.textAlign = 'right'
  freeContentsSection.appendChild(heading)

  // Container اصلی اسلایدر
  const container = document.createElement('div')
  container.classList.add('swiper')
  container.setAttribute('dir', 'rtl')
  freeContentsSection.appendChild(container)

  const wrapper = document.createElement('div')
  wrapper.classList.add('swiper-wrapper')
  container.appendChild(wrapper)

  try {
    const response = await fetch('https://kasrabahonar.github.io/jsonserver/db.json')
    const data = await response.json()
    const movies = data.movies

    movies.forEach((movie) => {
      const slide = document.createElement('div')
      slide.classList.add('swiper-slide')
      slide.innerHTML = `
        <div class="movie-card">
          <img src="${movie.image}" alt="${movie.title}" />
          <p>${movie.title}</p>
        </div>
      `
      wrapper.appendChild(slide)
    })

    const pagination = document.createElement('div')
    pagination.classList.add('swiper-pagination')
    container.appendChild(pagination)

    const prevButton = document.createElement('div')
    prevButton.classList.add('swiper-button-prev', 'custom-swiper-btn')
    prevButton.innerHTML = '<i class="fas fa-chevron-right"></i>'
    container.appendChild(prevButton)

    const nextButton = document.createElement('div')
    nextButton.classList.add('swiper-button-next', 'custom-swiper-btn')
    nextButton.innerHTML = '<i class="fas fa-chevron-left"></i>'
    container.appendChild(nextButton)

    new Swiper(container, {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 56,
      loop: false,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 32,
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 56,
        },
      },
    })
  } catch (error) {
    freeContentsSection.innerHTML =
      '<p style="color: red;">خطا در دریافت داده‌ها</p>'
    console.error('Fetch error:', error)
  }

  return freeContentsSection
}
