import  "./GamingLibrary.css"
import Sectionwrapper from "../../components/Sectionwrapper/Sectionwrapper"
import TitleSectionHeader from "../../components/TitleSectionHeader/TitleSectionHeader"
import GamingLibraryData from "../../Data/GamingLibraryData"
import GamingLibraryCard from "../../components/GamingLibraryCard/GamingLibraryCard"






const GamingLibrary = () => {

    const cards= GamingLibraryData.map((itme)=>{
        return(
           <GamingLibraryCard key={itme.id} image={itme.image} title={itme.title} subtitle={itme.subtitle} date={itme.date}  HoursPlayed={itme.HoursPlayed} Currently={itme.Currently}/>
        )
})
 
 
    return (

     
        <Sectionwrapper>
          <TitleSectionHeader>Your Gaming<span> Library </span></TitleSectionHeader>
          <div className="gaming-cards"> 
           {cards}
          </div> 
        </Sectionwrapper>


  )
}

export default GamingLibrary
