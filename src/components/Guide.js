export function Guide() {
  const guideSection = document.createElement('section')
  guideSection.classList.add('guide-section')

  const deviceInfos = [
    {
      icon: 'TV.webp',
      title: 'تلویزیون',
      subtitle:
        ' Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung',
    },
    {
      icon: 'androidTV.webp',
      title: ' اندروید تی‌وی',
      subtitle:
        ' NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom',
    },
  ]

  guideSection.innerHTML = `
    <div class="guide-container">
      <section>
        <h3 class="guide-title"> چطور با تلویزیون، فیلیمو تماشا کنم؟</h3>
        <p class="guide-subtitle">
           ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.
        </p>
        <div class="guide-feature-list"></div>
      </section>

      <figure>
        <img src="TVBG.webp" alt="" class="guide-image" />
      </figure>
    </div>
  `

  const featuresContainer = guideSection.querySelector('.guide-feature-list')

  deviceInfos.forEach((device, index) => {
    const item = document.createElement('div')
    item.classList.add('guide-feature-item')
    item.innerHTML = `
      <div class="guide-feature-content">
        <img src="${device.icon}" alt="${device.title}" class="guide-feature-icon" />
        <div>
          <h4 class="guide-feature-title">${device.title}</h4>
          <small class="guide-feature-subtitle">${device.subtitle}</small>
        </div>
      </div>
    `
    featuresContainer.appendChild(item)
  })

  const button = document.createElement('button')
  button.classList.add('guide-button')
  button.innerHTML = `
    ویدیوهای آموزشی تماشا با تلویزیون
    <i class="fas fa-chevron-left"></i>
  `
  featuresContainer.appendChild(button)

  return guideSection
}
