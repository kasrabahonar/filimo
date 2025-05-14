export function Footer() {
  const footerSection = document.createElement('section')
  footerSection.classList.add('footer-section')
  footerSection.innerHTML = `
    <div class="footer-content">
      <img src="logo_text.webp" alt="" class="footer-logo" />
      <ul class="footer-features">
        <li><i class="fas fa-check-circle check-icon"></i> هزاران فیلم و سریال خارجی (دوبله و زیرنویس) </li>
        <li><i class="fas fa-check-circle check-icon"></i> هزاران انیمیشن و کارتون برای کودکان </li>
        <li><i class="fas fa-check-circle check-icon"></i> پشتیبانی 24 ساعته برای راهنمایی شما </li>
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
    </div>
  `
  return footerSection
}
