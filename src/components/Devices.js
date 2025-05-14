export function Devices() {
  const deviceSection = document.createElement('section')
  deviceSection.classList.add('main-devices')

  const deviceInfos = [
    {
      icon: 'laptop.png',
      title: 'کامپیوتر و لپ‌تاپ',
      subtitle: 'windows PC - MacOS - Chrome OS',
    },
    {
      icon: 'mobile.webp',
      title: 'موبایل و تبلت',
      subtitle:
        'Android Phone & Tablets - iPhone and iPad - Amazon Fire Tablets',
    },
    {
      icon: 'game.webp',
      title: 'کنسول‌های بازی (Browser)',
      subtitle: 'Xbox Series S - Xbox Series X - PS5 - PS4',
    },
  ]

  deviceSection.innerHTML = `
    <div class="devices-container">
      <figure>
        <img src="deviceYaghi.webp" alt="" />
      </figure>
      <section>
        <h3>تماشای فیلیمو با همه دستگاه‌ها</h3>
        <p class="sub-title">
          می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
        </p>
        <div class="device-features"></div>
      </section>
    </div>
  `

  const featuresContainer = deviceSection.querySelector('.device-features')

  deviceInfos.forEach((device, index) => {
    const item = document.createElement('div')
    item.classList.add('device-item')
    if (index === 1) item.classList.add('second-img')

    item.innerHTML = `
      <div class="device-features-item">
        <img src="${device.icon}" alt="${device.title}" />
        <div>
          <h4>${device.title}</h4>
          <small>${device.subtitle}</small>
        </div>
      </div>
    `
    featuresContainer.appendChild(item)
  })

  const button = document.createElement('button')
  button.classList.add('btn-primary')
  button.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path>
      <path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path>
      <circle cx="16" cy="9" r="1"></circle>
      <circle cx="16" cy="15" r="1"></circle>
      <circle cx="16" cy="12" r="1"></circle>
    </svg>
    خرید اشتراک و تماشا
  `
  featuresContainer.appendChild(button)

  return deviceSection
}
