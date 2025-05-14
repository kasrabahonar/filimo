export function FAQ() {
  const faqSection = document.createElement('section')
  faqSection.classList.add('faq-section')

  faqSection.innerHTML = `
    <div class="faq-container">
      <div class="faq-title">سوالات متداول</div>
      <div class="faq-subtitle">سوال شایع دیگر کاربران شاید برای شما پیش آمده باشد</div>
      <div class="faq-list">
        ${[
          {
            question: 'آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟',
            answer:
              'بله، شما می‌توانید همه فیلم و سریال‌های فیلیمو را داخل خود اپلیکیشن دانلود و در سفر، هواپیما یا قطار تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق اپلیکیشن فیلیمو می‌توانید اقدام کنید. برای جزئیات بیشتر، به <b>دانلود از طریق سایت</b> و <b>دانلود از طریق اپلیکیشن</b> مراجعه کنید.',
          },
          {
            question: 'آیا فیلیمو برای خارج از ایران در دسترس است؟',
            answer:
              ' خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست.',
          },
          {
            question:
              'آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟',
            answer:
              ' تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید..',
          },
          {
            question:
              'از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟',
            answer:
              ' برای نصب نرم‌افزار اندرویدی فیلیمو می‌توانید ازطریق کافه بازار یا مایکت اقدام به دانلود کنید. یا می‌توانید روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار اندروید) برای دانلود نرم‌افزار iOS فیلیمو نیز کافیست روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار iOS) ',
          },
        ]
          .map(
            (item) => `
              <div class="faq-item">
                <button class="faq-question">
                  <p>
                    ${item.question}
                  </p>
                  <span class="icon">
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </button>
                <div class="faq-answer" style="max-height: 0; padding: 0 1rem;">
                  <p>${item.answer}</p>
                </div>
              </div>
              `
          )
          .join('')}
      </div>
    </div>
  `

  setTimeout(() => {
    const faqItems = faqSection.querySelectorAll('.faq-item')

    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-question')
      const icon = item.querySelector('.icon i')
      const answer = item.querySelector('.faq-answer')

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open')

        faqItems.forEach((el) => {
          el.classList.remove('open')
          el.querySelector('.faq-answer').style.maxHeight = null
          el.querySelector('.faq-answer').style.padding = '0 1rem'
          el.querySelector('.icon i').classList.remove('rotated')
        })

        if (!isOpen) {
          item.classList.add('open')
          answer.style.maxHeight = answer.scrollHeight + 'px'
          answer.style.padding = '1rem'
          icon.classList.add('rotated')
        }
      })
    })
  }, 0)

  return faqSection
}
