import "./GamingLibraryCard.css"
import {SecondaryButton} from "../../components/Buttons/Buttons"
const GamingLibraryCard = (props) => {
  return (
      
    <div className="gaming-card">
    <ul>
     <li><img src={props.image} alt="" /></li>
     <li><h4>{props.title}</h4><span>{props.subtitle}</span></li>
      <li><h4>Date Added</h4><span>{props.date}</span></li>
      <li><h4>Hours Played</h4><span>{props.HoursPlayed}</span></li>
      <li><h4>Currently</h4><span>{props.Currently}</span></li>
        
        
         <SecondaryButton>Downloaded</SecondaryButton>
    
    
    </ul>
    </div>
       
  )
}

export default GamingLibraryCard
