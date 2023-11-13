import "./Buttons.css"

const PrimaryButton = (props) => {
  return (
    
    <div className='pirmary-button '>
       <a href='#/'>{props.children} </a> 
      </div> 
  )
}


const SecondaryButton = (props) => {
    return (
      <div className='secodary-button'>
      <a href='#/'>{props.children} </a> 
     </div>
         )
  }
  


export default PrimaryButton
export {SecondaryButton}