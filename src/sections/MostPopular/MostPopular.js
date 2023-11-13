/* eslint-disable jsx-a11y/alt-text */
import "./MostPopular.css"
import Card from "../../components/Card/Card"
import TitleSectionHeader from "../../components/TitleSectionHeader/TitleSectionHeader"
import Sectionwrapper from "../../components/Sectionwrapper/Sectionwrapper"


import MostPopularData from "../../Data/MostPopularData";



const MostPopular = () => {

 
const cards= MostPopularData.map((itme)=>{

         return(

            <Card key={itme.id} image={itme.image} title={itme.title} subtitle={itme.subtitle} Download={itme.Download} Rate={itme.Rate} />


         )

  
})

  return (
    <div>
      
      <Sectionwrapper>
       <TitleSectionHeader>Most Popular <span>Right Now</span></TitleSectionHeader> 
         <div className="most-Popular-items"> 
           {cards} 
          </div>
      </Sectionwrapper>
    </div>
  )
}
export default MostPopular