export function SectionKids() {
  const sectionKids = document.createElement('section')
  sectionKids.classList.add('kids-section')
  sectionKids.innerHTML = `
    <div class="kids-section-container">
      <div class="kids-bg"></div>
      <img src="bg-kids.webp" alt="" />
      <div class="kids-content">
        <h3 class="kids-title">دنیایی متنوع از فیلم و کارتون‌های کودکانه</h3>
        <p class="kids-subtitle">
          ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
        </p>
        <div class="kids-buttons">
          <button class="kids-button">فیلیمو کودک بساز</button>
          <button class="kids-button">تماشای فیلیمو کودک</button>
        </div>
      </div>
    </div>
  `
  return sectionKids
}
