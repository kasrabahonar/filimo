export async function Banner() {
  const bannerSection = document.createElement('section')
  bannerSection.classList.add('banner-section')

  const container = document.createElement('div')
  container.classList.add('banner-container')
  bannerSection.appendChild(container)

  const backgroundLayer = document.createElement('div')
  backgroundLayer.classList.add('banner-background')
  container.appendChild(backgroundLayer)

  const gradientLayer = document.createElement('div')
  gradientLayer.classList.add('banner-gradient')
  container.appendChild(gradientLayer)

  const content = document.createElement('div')
  content.classList.add('banner-content')
  content.innerHTML = `
    <p class="subtitle">با فیلیمو بی‌وقفه فیلم ببین</p>
    <h1 class="title">کنترل همیشه دست توست!</h1>
    <ul class="cinama-features">
      <li><i class="fas fa-check-circle check-icon"></i> ۱۰۰ هزار اپیزود فیلم و سریال برای تماشا</li>
      <li><i class="fas fa-check-circle check-icon"></i> می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی </li>
      <li><i class="fas fa-check-circle check-icon"></i> می‌تونی یک عضو مخصوص تماشای کودک بسازی </li>
    </ul>
      <div class="btn-container">
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
      </div>
    <p class="offer-note">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#959ba2">
        <use xlink:href="#ui-icon-giftcard">
          <g id="ui-icon-giftcard" viewBox="0 0 24 24">
            <path d="M18.73 5.5h-.91a3 3 0 0 0-5.34-2.61l0 0-.46.8-.46-.8 0 0A3 3 0 0 0 6.18 5.5H4.73a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8.5A3 3 0 0 0 18.73 5.5ZM16 4.5a1 1 0 1 1-1-1A1 1 0 0 1 16 4.5Zm-8 0a1 1 0 1 1 1 1A1 1 0 0 1 8 4.5Zm-3.27 3H9.85L8.37 10.1a1 1 0 0 0 .37 1.36 1 1 0 0 0 1.37-.37L12 7.76l1.89 3.33a1 1 0 0 0 1.37.37 1 1 0 0 0 .37-1.36L14.15 7.5h4.58a1 1 0 0 1 1 1V14h-16V8.5A1 1 0 0 1 4.73 7.5Zm14 12h-14a1 1 0 0 1-1-1V17h16v1.5A1 1 0 0 1 18.73 19.5Z"></path>
          </g>
        </use>
      </svg>
      تخفیف ویژه برای کاربران جدید
    </p>
  `
  container.appendChild(content)

  let banners = []
  let currentIndex = 0

  fetch('https://kasrabahonar.github.io/jsonserver/db.json')
    .then((res) => res.banner.json())
    .then((data) => {
      banners = data
      if (banners.length > 0) {
        setBackgroundImage(banners[currentIndex].image)
        setInterval(() => {
          currentIndex = (currentIndex + 1) % banners.length
          fadeToNext(banners[currentIndex].image)
        }, 5000)
      }
    })

  function setBackgroundImage(image) {
    backgroundLayer.style.backgroundImage = `url('${image}')`
    backgroundLayer.classList.add('fade-in')
  }

  function fadeToNext(image) {
    backgroundLayer.classList.remove('fade-in')
    backgroundLayer.classList.add('fade-out')
    setTimeout(() => {
      backgroundLayer.style.backgroundImage = `url('${image}')`
      backgroundLayer.classList.remove('fade-out')
      backgroundLayer.classList.add('fade-in')
    }, 1000)
  }

  return bannerSection
}
