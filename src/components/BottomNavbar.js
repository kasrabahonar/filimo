export function BottomNavbar() {
  const BottomNavbar = document.createElement('section')
  BottomNavbar.classList.add('bottom-navbar-devices')

  BottomNavbar.innerHTML = `
    <div class="bottom-nvabar-container">
      <section class="right-sectoin">
        <ul>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#a9a9a9">
              <use xlink:href="#ui-icon-tv">
                <g id="ui-icon-tv" viewBox="0 0 24 24">
                  <g>
                    <path d="M15 20.5H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"></path>
                    <path d="M19.5 3.5H4.5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.5A3 3 0 0 0 19.5 3.5Zm1 13a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1Z"></path>
                  </g>
                </g>
              </use>
            </svg>
            تماشا با تلویزیون
          </li>
          <li>اپلیکیشن ها</li>
          <li>تماس و پشتیبانی</li>
          <li>فروشگاه</li>
          <li class="has-dropdown">
            <span><i class="fa-solid fa-caret-down"></i> سایر لینک‌ها</span>
            <ul class="dropdown-menu">
               <li>قوانین</li>
               <li>به ما بیپوندید</li>
               <li>تبلیغات در فیلیمو</li>
              <li>لوگو</li>
              <li>دانلود فیلم و سریال</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="left-sectoin">
        <ul>
          <li class="has-dropdown">
            <span><i class="fa-solid fa-caret-down"></i> شبکه‌های اجتماعی</span>
            <ul class="dropdown-menu">
              <li><i class="fa-brands fa-instagram fa-lg"></i> اینستاگرام</li>
              <li><i class="fa-brands fa-telegram fa-lg"></i> تلگرام</li>
              <li><i class="fa-brands fa-twitter fa-lg"></i> توییتر</li>
              <li>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#a9a9a9">
                  <use xlink:href="#ui-icon-redvod">
                    <g id="ui-icon-redvod" viewBox="0 0 24 24">
                      <path d="M10.56 2.12 8.63 1.61a3.25 3.25 0 0 0-4 2.31L4.17 5.74A10 10 0 0 1 10.56 2.12Z"></path>
                      <path d="M2.08 13.59l-.47 1.78a3.25 3.25 0 0 0 2.31 4l1.85.49A10 10 0 0 1 2.08 13.59Z"></path>
                      <path d="M20.08 4.65 18 4.1a9.94 9.94 0 0 1 3.81 6.67l.57-2.14A3.25 3.25 0 0 0 20.08 4.65Z"></path>
                      <path d="M13.39 21.86l2 .53a3.25 3.25 0 0 0 4-2.31l.56-2.1A10 10 0 0 1 13.39 21.86Z"></path>
                      <path d="M12 2.9A9.1 9.1 0 1 0 21.1 12 9.09 9.09 0 0 0 12 2.9ZM6.84 7.44a2.6 2.6 0 1 1 2.07 3A2.6 2.6 0 0 1 6.84 7.44Zm3.79 7.86a2.6 2.6 0 1 1-2.06-3A2.6 2.6 0 0 1 10.63 15.3Zm.19-3.45a1.16 1.16 0 1 1 .91 1.35A1.15 1.15 0 0 1 10.82 11.85Zm6.34 4.71a2.6 2.6 0 1 1-2.07-3A2.6 2.6 0 0 1 17.16 16.56Zm1.32-6.88a2.6 2.6 0 1 1-2.06-3A2.6 2.6 0 0 1 18.48 9.68Z"></path>
                    </g>
                  </use>
                </svg>
               آپارات
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  `

  return BottomNavbar
}
