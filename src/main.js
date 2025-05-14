import { Banner } from './components/banner'
import { BottomNavbar } from './components/BottomNavbar'
import { Cinama } from './components/Cinama'
import { Comments } from './components/Comments'
import { Devices } from './components/Devices'
import { FAQ } from './components/Faq'
import { Footer } from './components/Footer'
import { FreeContents } from './components/FreeContents'
import { Guide } from './components/Guide'
import { createHeader } from './components/Header'
import { PopularFilmo } from './components/PopularFilmo'
import { SectionKids } from './components/Section-Kids'
import './style.css'

async function renderApp() {
  const app = document.querySelector('#app')
  app.innerHTML = `<div id="main-content"></div>`

  app.append(createHeader())
  const bannerSection = await Banner()
  app.append(bannerSection)
  const popularSection = await PopularFilmo()
  app.append(popularSection)
  app.append(Devices())
  app.append(Guide())
  const freeContentsSection = await FreeContents()
  app.append(freeContentsSection)
  app.append(SectionKids())
  app.append(BottomNavbar())
  const cinamaSection = await Cinama()
  app.append(cinamaSection)
  const commentsSection = await Comments()
  app.append(commentsSection)
  app.append(FAQ())
  app.append(Footer())
}

renderApp()
