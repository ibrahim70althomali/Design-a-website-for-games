import "./Hero.css"
import PrimaryButton from "../../components/Buttons/Buttons"
const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
      <h5 className='hero-subtitle'> Welcom To Games</h5>
      <h4 className='hero-title'><em> Browse </em> Our Popular Games Here</h4>
      
       <PrimaryButton> Browse Now </PrimaryButton>
      </div>
    </div>
  )
}

export default Hero
