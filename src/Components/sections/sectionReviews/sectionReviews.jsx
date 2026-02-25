import './sectionReviews.css'
import Card from '../../Card/card'

const SectionReviews = () => {
  return (
    <section 
    className="reviews-section fade up" 
    id="reviews">
         
        <h2 
        className="section-title fade-up">
             O que Dizem nossos clientes:
        </h2>
        <div 
        className="reviews-grid">
            <Card
            className = 'reviews-card fade-up'
            />
                <p>"Adorei o suporte premium, muito prático e resistente."</p>
                <span>- Ana, Gamer</span>
            <Card />            
        </div>
    </section>
  )
}

export default SectionReviews