import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export async function PopularFilmo() {
  const section = document.createElement('section')
  section.classList.add('popular-section')

  // رپر تیتر و تب‌ها
  const headerWrapper = document.createElement('div')
  headerWrapper.classList.add('popular-header')

  // تیتر
  const heading = document.createElement('h2')
  heading.classList.add('popular-heading')
  heading.textContent = 'محبوب‌ترین‌های فیلیمو'

  // تب والد: فیلم / سریال
  const typeTabs = document.createElement('div')
  typeTabs.classList.add('tabs')
  typeTabs.innerHTML = `
    <button class="tab-button active" data-type="series">سریال</button>
    <button class="tab-button" data-type="films">فیلم</button>
  `

  headerWrapper.appendChild(heading)
  headerWrapper.appendChild(typeTabs)

  const postersContainer = document.createElement('div')
  postersContainer.classList.add('posters-tab')

  const container = document.createElement('div')
  container.classList.add('popular-container')

  section.appendChild(headerWrapper)
  section.appendChild(postersContainer)
  section.appendChild(container)

  let allData = []

  try {
    const res = await fetch('https://kasrabahonar.github.io/jsonserver/db.json')
    const data = await res.json()
    allData = data

    renderPosters('series')

    typeTabs.querySelectorAll('.tab-button').forEach((btn) => {
      btn.addEventListener('click', () => {
        typeTabs
          .querySelectorAll('.tab-button')
          .forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        renderPosters(btn.dataset.type)
      })
    })
  } catch (err) {
    container.innerHTML = `<p class="error">خطا در بارگذاری اطلاعات</p>`
  }

  function renderPosters(type) {
    postersContainer.innerHTML = ''
    container.innerHTML = ''

    const group = allData.find((g) => g.type === type)
    if (!group || !group.items) return

    group.items.forEach((item, index) => {
      const btn = document.createElement('button')
      btn.classList.add('poster-tab-button')
      if (index === 0) btn.classList.add('active')
      btn.innerHTML = `<img src="${item.poster}" alt="${item.title}" />`
      btn.addEventListener('click', () => {
        postersContainer
          .querySelectorAll('.poster-tab-button')
          .forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        renderItem(item)
      })
      postersContainer.appendChild(btn)
    })

    renderItem(group.items[0])
  }

  function renderItem(item) {
    container.innerHTML = ''
    const card = document.createElement('div')
    card.classList.add('popular-card')

    const nextId = `next-${item.id}`
    const prevId = `prev-${item.id}`

    // تشخیص اینکه آیتم از نوع "films" هست یا نه
    const isFilm = allData.find((g) => g.items.includes(item))?.type === 'films'

    card.innerHTML = `
    <div class="card-bg" style="background-image: url(${item.background})">
      <div class="gradient-layer"></div>
      <div class="details">
        <h3>${item.title}</h3>
        <p class="director">کارگردان: ${item.director}</p>
        <article>
          <p class="rate">
            <span>
              <img src="icon-imdb.webp" alt="" />
              ${item.rate}
            </span>
          </p>
          <p class="genre">
            ${item.genre.map((g) => `<span>${g}</span>`).join('')}
          </p>
        </article>
        <p class="summary">${item.summary}</p>

        ${
          isFilm
            ? `
          <button class="subscribe-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path>
              <path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path>
              <circle cx="16" cy="9" r="1"></circle>
              <circle cx="16" cy="15" r="1"></circle>
              <circle cx="16" cy="12" r="1"></circle>
            </svg>
            خرید اشتراک و تماشا
          </button>
          <p class="meta-info">${item.ageRate} - ${item.duration} - محصول ${item.country} - ${item.year} - کیفیت ${item.quality}</p>
        `
            : ''
        }
      </div>

      ${
        item.episodes?.length
          ? `
        <div class="swiper-container" id="swiper-${item.id}">
          <div class="swiper-wrapper">
            ${item.episodes
              .map(
                (ep) => `
              <div class="swiper-slide">
                <img src="${ep.image}" alt="${ep.title}" />
                <p>${ep.title}</p>
                <span>${ep.duration}</span>
                ${
                  ep.free
                    ? '<span class="free-label"><img src="icon-play.svg" alt="" /> رایگان </span>'
                    : '<i class="lock-icon"></i>'
                }
              </div>
            `
              )
              .join('')}
          </div>
          <div class="swiper-nav">
            <button class="swiper-button-prev" id="${prevId}">
              <i class="fas fa-chevron-right"></i>
            </button>
            <button class="swiper-button-next" id="${nextId}">
              <i class="fas fa-chevron-left"></i>
            </button>
          </div>
        </div>`
          : ''
      }
    </div>
  `
    container.appendChild(card)

    if (item.episodes?.length) {
      setTimeout(() => {
        new Swiper(`#swiper-${item.id}`, {
          slidesPerView: 1, // برای حالت موبایل یکی نمایش بده
          spaceBetween: 24,
          freeMode: false,
          watchOverflow: true, // مانع از ایجاد فضای خالی در آخر اسلایدها می‌شود
          navigation: {
            nextEl: `#${nextId}`,
            prevEl: `#${prevId}`,
          },
          breakpoints: {
            // موبایل (کمتر از 640px)
            0: {
              slidesPerView: 1, // در حالت موبایل فقط یک اسلاید
              spaceBetween: 16,
            },
            // تبلت کوچک (حداکثر 768px)
            768: {
              slidesPerView: 2, // در تبلت‌ها دو اسلاید
              spaceBetween: 16,
            },
            // لپ‌تاپ و دسکتاپ
            1024: {
              slidesPerView: 4, // در حالت بزرگتر از 1024px، چهار اسلاید
              spaceBetween: 24,
            },
          },
        })
      }, 0)
    }
  }

  return section
}
