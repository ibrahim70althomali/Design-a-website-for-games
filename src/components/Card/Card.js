import "./Card.css"
import { FaStar,FaDownload } from "react-icons/fa6";


const Card = (props) => {
  return (
    <div className="most-Popular-item">
    <div className="card">
      <img className="most-Popular-item-image" src={props.image} />

      <div className="most-Popular-item-content">
        <h4 className="most-Popular-item-title">

          {props.title} <br />
          <span>{props.subtitle}</span>
        </h4>
        <ul>
          <li><span style={{"color":"yellow"}}> <FaStar/> </span><span>{props.Rate}</span></li>
          <li><span style={{"color":"var(--color-primary)"}}> <FaDownload /> </span><span>{props.Download}</span></li>

        </ul>
      </div>
    </div>
  </div>
  )
}

export default Card
