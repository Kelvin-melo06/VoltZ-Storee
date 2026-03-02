
import SectionHero from './sectionHero/sectionHero'
import SectionProducts from './sectionProducts/sectionProducts'
import SectionReviews from './sectionReviews/sectionReviews'
import SectionOffers from './sectionOffers/sectionOffers'
import SectionNewsletter from './sectionNewsletter/sectionNewsletter'
import SectionAbout from './sectionAbout/sectionAbout'
import SectionFaq from './sectionFaq/sectionFaq'

const HomeSections = () => {
  return (
    <div>
      <SectionHero />
      <SectionProducts />
      <SectionReviews />
      <SectionOffers />
      <SectionNewsletter />
      <SectionAbout />
      <SectionFaq />
    </div>
  )
}

export default HomeSections