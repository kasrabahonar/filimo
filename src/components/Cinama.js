export async function Cinama() {
  const cinamSection = document.createElement('section')
  cinamSection.classList.add('cinama-section')

  // محتوای عنوان و توضیحات اولیه
  const container = document.createElement('div')
  container.classList.add('cinama-container')
  container.innerHTML = `
    <h3 class="cinama-title">سینما آنلاین فیلمیو</h3>
    <ul class="cinama-features">
      <li><i class="fas fa-check-circle check-icon"></i> فیلم‌های روز سینمای ایران را از خانه تماشا می‌کنید. </li>
      <li><i class="fas fa-check-circle check-icon"></i> با بلیت اکران آنلاین، ۸ ساعت فرصت تماشا دارید. </li>
      <li><i class="fas fa-check-circle check-icon"></i> با خرید یک بلیت، با همه خانواده فیلم می‌بینید. </li>
    </ul>
  `

  // ظرف کارت‌ها
  const cardsWrapper = document.createElement('div')
  cardsWrapper.classList.add('cinama-cards-wrapper')
  container.appendChild(cardsWrapper)

  try {
    const res = await fetch('https://kasrabahonar.github.io/jsonserver/db.json')
    const movies = await res.movies.json()

    movies.forEach((movie) => {
      const card = document.createElement('div')
      card.classList.add('cinama-card')

      // ساخت ژانرها به صورت span جدا
      const genreElements = movie.genre
        .map((g) => `<span class="genre-toggle">${g}</span>`)
        .join('')

      card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}" />
    <div>
      <article>
        <h4>${movie.title}</h4>
        <p>
          <img src="ticket.webp" alt="" class="ticket-icon" />
          اکران آنلاین
        </p>
      </article>
      <p class="author">کارگردان: ${movie.author}</p>
      <div class="genre-container">${genreElements}</div>
      <button>خرید بلیت</button>
    </div>
  `
      cardsWrapper.appendChild(card)
    })
  } catch (error) {
    cardsWrapper.innerHTML =
      '<p style="color: red;">خطا در بارگذاری فیلم‌ها</p>'
    console.error('cinama fetch error:', error)
  }

  cinamSection.appendChild(container)
  return cinamSection
}
