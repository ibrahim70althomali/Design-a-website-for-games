import "./TitleSectionHeader.css"

const TitleSectionHeader = (props) => {
  return (
        <div className="section-header">
          <h4>{props.children}</h4>
        </div>
  )
}

export default TitleSectionHeader
