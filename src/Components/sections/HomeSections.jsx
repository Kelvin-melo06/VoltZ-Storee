import SectionHero from "@/Components/sections/sectionHero/sectionHero";
import SectionProducts from "@/Components/sections/sectionProducts/sectionProducts";
import SectionReviews from "@/Components/sections/sectionReviews/sectionReviews";
import SectionOffers from "@/Components/sections/sectionOffers/sectionOffers";
import SectionNewsletter from "@/Components/sections/sectionNewsletter/sectionNewsletter";
import SectionAbout from "@/Components/sections/sectionAbout/sectionAbout";
import SectionFaq from "@/Components/sections/sectionFaq/sectionFaq";

const HomeSections = () => {
  return (
    <main className='pt-[80px]'>
      
        <SectionHero />
        <SectionProducts />
        <SectionReviews />
        <SectionOffers />
        <SectionNewsletter />
        <SectionAbout />
        <SectionFaq />
      
    </main>
  )
}

export default HomeSections