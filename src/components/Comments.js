import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export async function Comments() {
  const commentsSection = document.createElement('section')
  commentsSection.classList.add('comments-section')

  // ساخت بخش عنوان + دکمه‌ها کنار هم
  const header = document.createElement('div')
  header.classList.add('comments-header')

  const heading = document.createElement('h2')
  heading.textContent = ' نظر کاربران بعد از تماشای فیلیمو'
  header.appendChild(heading)

  const buttonsWrapper = document.createElement('div')
  buttonsWrapper.classList.add('comments-buttons')

  const prevButton = document.createElement('div')
  prevButton.classList.add('swiper-button-prev', 'custom-swiper-btn')
  prevButton.innerHTML = '<i class="fas fa-chevron-right"></i>'
  buttonsWrapper.appendChild(prevButton)

  const nextButton = document.createElement('div')
  nextButton.classList.add('swiper-button-next', 'custom-swiper-btn')
  nextButton.innerHTML = '<i class="fas fa-chevron-left"></i>'
  buttonsWrapper.appendChild(nextButton)

  header.appendChild(buttonsWrapper)
  commentsSection.appendChild(header)

  const container = document.createElement('div')
  container.classList.add('swiper')
  container.setAttribute('dir', 'rtl')
  commentsSection.appendChild(container)

  const wrapper = document.createElement('div')
  wrapper.classList.add('swiper-wrapper')
  container.appendChild(wrapper)

  try {
    const res = await fetch('https://kasrabahonar.github.io/jsonserver/db.json')
    const data = await res.json()
    const comments = data.comments

    comments.forEach((item) => {
      const slide = document.createElement('div')
      slide.classList.add('swiper-slide')
      slide.innerHTML = `
        <div class="comment-card">
          <div class="comment-card-top">
            <div class="user-info">
              <img src="/filimo/images/1.webp" alt="User Icon" class="user-avatar" />
              <span>${item.name}</span>
            </div>
            <img src="/filimo/images/virgol.webp" alt="Icon" class="virgol-icon" />
          </div>
          <div class="comment-card-bottom">
            <p>${item.comment}</p>
          </div>
        </div>
      `
      wrapper.appendChild(slide)
    })

    const pagination = document.createElement('div')
    pagination.classList.add('swiper-pagination')
    container.appendChild(pagination)

    new Swiper(container, {
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 24,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      breakpoints: {
        0: {
          // موبایل
          slidesPerView: 1,
          spaceBetween: 32,
        },
        576: {
          // تبلت کوچک
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        768: {
          // تبلت بزرگ
          slidesPerView: 1.6,
          spaceBetween: 56,
        },
        1024: {
          // دسکتاپ
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1240: {
          // دسکتاپ
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    })
  } catch (err) {
    commentsSection.innerHTML = '<p style="color:red;">خطا در دریافت نظرات</p>'
    console.error('Fetch error:', err)
  }

  return commentsSection
}
